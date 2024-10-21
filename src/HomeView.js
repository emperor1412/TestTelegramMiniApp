import './App.css';
import './HomeView.css';
import React, { useState, useEffect } from 'react';
import { swipeBehavior, miniApp, mainButton, themeParams, openTelegramLink, shareURL } from '@telegram-apps/sdk';
// import WebApp from '@twa-dev/sdk'

// Declare these variables outside of the component, but within the module
let isPurpleHeader = false;
let isMainButtonEnabled = false;
let count = 1;
let isVerticalEnabled = false;
let swipeSupported = false;
let swipeMounted = false;

const HomeView = ({ user, onOpenGameView, onOpenThreeJsView }) => {
    // Use state hooks, initializing with the module-level variables
    const [purpleHeader, setPurpleHeader] = useState(isPurpleHeader);
    const [mainButtonEnabled, setMainButtonEnabled] = useState(isMainButtonEnabled);
    const [currentCount, setCurrentCount] = useState(count);
    const [verticalEnabled, setVerticalEnabled] = useState(isVerticalEnabled);
    const [swipeIsSupported, setSwipeIsSupported] = useState(swipeSupported);
    const [swipeIsMounted, setSwipeIsMounted] = useState(swipeMounted);

    // Update module-level variables when state changes
    useEffect(() => {
        isPurpleHeader = purpleHeader;
        isMainButtonEnabled = mainButtonEnabled;
        count = currentCount;
        isVerticalEnabled = verticalEnabled;
        swipeSupported = swipeIsSupported;
        swipeMounted = swipeIsMounted;
    }, [purpleHeader, mainButtonEnabled, currentCount, verticalEnabled, swipeIsSupported, swipeIsMounted]);

    const onClick_MainButton = () => {
        console.log('Main button clicked');
        setCurrentCount(prev => prev + 1);
    };

    useEffect(() => {
        mainButton.onClick(onClick_MainButton);
        
        // Initialize state if needed
        setSwipeIsSupported(swipeBehavior.isSupported());
        setSwipeIsMounted(swipeBehavior.isMounted());
        setVerticalEnabled(swipeBehavior.isVerticalEnabled());

        return () => {
            mainButton.offClick(onClick_MainButton);
        };
    }, []);

    const disableVerticalSwipe = () => {
        // swipeBehavior.mount();
        console.log(`Swipe isMounted: ${swipeBehavior.isMounted()}`);
        swipeBehavior.mount();        
        setSwipeIsMounted(swipeBehavior.isMounted());
        console.log(`After calling mount(), Swipe isMounted: ${swipeBehavior.isMounted()}`);

        // setVerticalEnabled(swipeBehavior.isVerticalEnabled());
        console.log(`isVerticalEnabled: ${isVerticalEnabled}`);

        swipeBehavior.disableVertical();
        setVerticalEnabled(swipeBehavior.isVerticalEnabled());
        console.log(`After calling disableVertical(), isVerticalEnabled: ${isVerticalEnabled}`);
    };

    const toggleMainButton = () => {
        enableMainButton(!isMainButtonEnabled);
        setMainButtonEnabled(!isMainButtonEnabled);
    };

    const enableMainButton = (enabled) => {
        if (enabled) {
            themeParams.mount();
            mainButton.mount();
            mainButton.setParams({
                backgroundColor: '#000000',
                hasShineEffect: true,
                isEnabled: true,
                isLoaderVisible: false,
                isVisible: true,
                text: 'Click Me!',
                textColor: '#668899'
            });
        } else {

            if (mainButton.isMounted) {
                mainButton.setParams({
                    isLoaderVisible: false,
                    isEnabled: false,
                    isVisible: false
                });
            }
            mainButton.unmount();
            themeParams.unmount();
        }
    };


    const toggleHeaderColor = () => {
        // if (miniApp.setHeaderColor.isSupported()) {
            if (isPurpleHeader) {
                miniApp.setHeaderColor('bg_color'); // Set to default color
            } else {
                miniApp.setHeaderColor('#8e44ad'); // Set to purple
            }
            setPurpleHeader(!isPurpleHeader);
        // } else {
        //     console.log('Setting header color is not supported');
        // }
    };

    const openMiniGame1 = () => {
        // Replace 'botusername' and 'appname' with the actual bot username and app name
        openTelegramLink('https://t.me/TestFSL_bot/fslminigame1');
    };

    const shareMiniGame1 = () => {
        // Replace 'botusername' and 'appname' with the actual bot username and app name
        shareURL('https://t.me/TestFSL_bot/fslminigame1');
    }


    return (
        <div className="home-view">
            <div className="content-wrapper">
                <h2>Welcome, {user ? user.first_name : 'Guest'}!</h2>
                <div className="stats">
                    <span className="lightning">⚡3</span>
                    <span className="ticket">🎟️3</span>
                    <span className="coins">🪙267</span>
                </div>

                <div className="user-info">
                    <h3>User Information</h3>
                    {user ? (
                        <ul>
                            <li><strong>User ID:</strong> {user.id}</li>
                            <li><strong>First Name:</strong> {user.first_name}</li>
                            <li><strong>Last Name:</strong> {user.last_name}</li>
                            <li><strong>Username:</strong> {user.username}</li>
                        </ul>
                    ) : (
                        <p>No user information available.</p>
                    )}
                </div>

                <div className="swipe-info">
                    <p>Swipe Supported: {swipeIsSupported ? 'Yes' : 'No'}</p>
                    <p>Swipe Mounted: {swipeIsMounted ? 'Yes' : 'No'}</p>
                    <p>Vertical Swipe Enabled: {verticalEnabled ? 'Yes' : 'No'}</p>
                </div>

                <button onClick={disableVerticalSwipe} className="disable-swipe-button">
                    Disable Vertical Swipe
                </button>

                <div className="main-button-info">
                    <h3>Main Button Information</h3>
                    <p>Count: {currentCount}</p>
                    <p>Main Button Enabled: {mainButtonEnabled ? 'Yes' : 'No'}</p>
                </div>

                <button onClick={toggleMainButton} className="toggle-main-button">
                    {mainButtonEnabled ? 'Disable Main Button' : 'Enable Main Button'}
                </button>

                <button onClick={onClick_MainButton} className="main-button">
                    Test Main Button
                </button>

                <button onClick={toggleHeaderColor} className="toggle-header-color-button">
                    {purpleHeader ? 'Set Default Header Color' : 'Set Purple Header Color'}
                </button>

                <button onClick={onOpenGameView} className="open-game-button">
                    Open Unity WebGL View
                </button>
                <button onClick={onOpenThreeJsView} className="open-game-button">
                    Open Three.js View
                </button>
                <button onClick={openMiniGame1} className="open-game-button">
                    Open Mini Game 1
                </button>
                <button onClick={shareMiniGame1} className="open-game-button">
                    Share Mini Game 1
                </button>

            </div>
        </div>
    );
};

export default HomeView;
