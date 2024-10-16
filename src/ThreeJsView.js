import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import Stats from 'three/examples/jsm/libs/stats.module';

let pmremGenerator;
let roomEnvironment;

function ThreeJsView({ onBack }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let mixer;
    const clock = new THREE.Clock();
    const container = containerRef.current;

    const stats = new Stats();
    stats.dom.style.position = 'absolute';
    stats.dom.style.top = '0px';
    stats.dom.style.right = '0px';
    stats.dom.style.left = 'auto';
    container.appendChild(stats.dom);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xbfe3dd);
    
    pmremGenerator = new THREE.PMREMGenerator(renderer);
    roomEnvironment = new RoomEnvironment(renderer);

    scene.environment = pmremGenerator.fromScene(roomEnvironment, 0.04).texture;
    // scene.environment = pmremGenerator.fromScene(new RoomEnvironment(renderer), 0.04).texture;

    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.set(5, 2, 8);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.5, 0);
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    loader.load(
      'https://threejs.org/examples/models/gltf/LittlestTokyo.glb',
      function (gltf) {
        const model = gltf.scene;
        model.position.set(1, 1, 0);
        model.scale.set(0.01, 0.01, 0.01);
        scene.add(model);

        mixer = new THREE.AnimationMixer(model);
        mixer.clipAction(gltf.animations[0]).play();

        animate();
      },
      undefined,
      function (e) {
        console.error(e);
      }
    );

    let isMounted = true;

    function animate() {
      if (!isMounted) return;

      requestAnimationFrame(animate);

      const delta = clock.getDelta();

      if (mixer) mixer.update(delta);

      controls.update();

      stats.update();

      renderer.render(scene, camera);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize);

    return () => {
      isMounted = false;
      window.removeEventListener('resize', onWindowResize);
      container.removeChild(renderer.domElement);
      container.removeChild(stats.dom);

      // Dispose of Three.js resources
      disposeThreeJsResources(scene, renderer);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
      <button
        onClick={onBack}
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          padding: '10px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Back to Menu
      </button>
    </div>
  );
}

export default ThreeJsView;

function disposeThreeJsResources(scene, renderer) {
  // Dispose of all objects in the scene
  scene.traverse((object) => {
    if (object.geometry) {
      object.geometry.dispose();
    }
    if (object.material) {
      if (Array.isArray(object.material)) {
        object.material.forEach((material) => disposeMaterial(material));
      } else {
        disposeMaterial(object.material);
      }
    }
  });

  roomEnvironment.dispose();
  pmremGenerator.dispose();
  
  // Dispose of the renderer
  renderer.dispose();

  // Clear the scene
  while (scene.children.length > 0) {
    scene.remove(scene.children[0]);
  }

  // Clear any cached resources
  THREE.Cache.clear();

  if (global.gc) {
    console.log('Running garbage collection');
    global.gc();
  } else {
    console.log('Garbage collection is not exposed');
  }
}

function disposeMaterial(material) {
  material.dispose();
  for (const key in material) {
    const value = material[key];
    if (value && typeof value === 'object' && 'minFilter' in value) {
      value.dispose();
    }
  }
}
