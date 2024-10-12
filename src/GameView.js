import React, { useEffect, useRef } from 'react';

function GameView() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadUnityGame = () => {
      const script = document.createElement('script');
      script.src = process.env.PUBLIC_URL + '/WebGL/Build/WebGL.loader.js';
      script.async = true;
      
      script.onload = () => {
        const buildUrl = process.env.PUBLIC_URL + "/WebGL/Build";
        const config = {
          dataUrl: buildUrl + "/WebGL.data",
          frameworkUrl: buildUrl + "/WebGL.framework.js",
          codeUrl: buildUrl + "/WebGL.wasm",
          streamingAssetsUrl: "StreamingAssets",
          companyName: "DefaultCompany",
          productName: "TestUnity6WebGL",
          productVersion: "1.0.2",
        };

        const canvas = canvasRef.current;
        const loadingBar = document.querySelector("#unity-loading-bar");
        const progressBarFull = document.querySelector("#unity-progress-bar-full");

        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
          const meta = document.createElement('meta');
          meta.name = 'viewport';
          meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
          document.getElementsByTagName('head')[0].appendChild(meta);

          canvas.style.width = "100%";
          canvas.style.height = "100%";
          canvas.style.position = "fixed";

          document.body.style.textAlign = "left";
        }

        loadingBar.style.display = "block";

        window.createUnityInstance(canvas, config, (progress) => {
          progressBarFull.style.width = 100 * progress + "%";
        }).then((unityInstance) => {
          loadingBar.style.display = "none";
        }).catch((message) => {
          alert(message);
        });
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };

    loadUnityGame();
  }, []);

  return (
    <div id="unity-container" style={{ width: '100%', height: '100%', position: 'fixed' }}>
      <canvas ref={canvasRef} id="unity-canvas" style={{ width: '100%', height: '100%' }}></canvas>
      <div id="unity-loading-bar">
        <div id="unity-logo"></div>
        <div id="unity-progress-bar-empty">
          <div id="unity-progress-bar-full"></div>
        </div>
      </div>
      <div id="unity-warning"></div>
    </div>
  );
}

export default GameView;
