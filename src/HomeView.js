import './App.css';
import './HomeView.css';
import React, { useState, useEffect } from 'react';
import { swipeBehavior, miniApp, mainButton, themeParams, openTelegramLink, shareURL, openLink, secondaryButton } from '@telegram-apps/sdk';
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

    const onClick_SecondaryButton = () => {
        console.log('Secondary button clicked');
        setCurrentCount(prev => prev - 1);
    };

    useEffect(() => {
        mainButton.onClick(onClick_MainButton);
        // secondaryButton.onClick(onClick_SecondaryButton);
        
        // Initialize state if needed
        setSwipeIsSupported(swipeBehavior.isSupported());
        setSwipeIsMounted(swipeBehavior.isMounted());
        setVerticalEnabled(swipeBehavior.isVerticalEnabled());

        return () => {
            mainButton.offClick(onClick_MainButton);
            secondaryButton.offClick(onClick_SecondaryButton);
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
                text: 'FSL Sign In',
                textColor: '#668899'
            });

            // secondaryButton.mount();
            // secondaryButton.setParams({
            //     backgroundColor: '#112233',
            //     hasShineEffect: true,
            //     isEnabled: true,
            //     isLoaderVisible: false,
            //     isVisible: true,
            //     text: 'Subtraction',
            //     textColor: '#668899'
            // });

        } else {

            if (mainButton.isMounted) {
                mainButton.setParams({
                    isLoaderVisible: false,
                    isEnabled: false,
                    isVisible: false
                });
            }
            mainButton.unmount();

            // if (secondaryButton.isMounted) {
            //     secondaryButton.setParams({
            //         isLoaderVisible: false,
            //         isEnabled: false,
            //         isVisible: false
            //     });
            // }
            // secondaryButton.unmount();

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

    const shareMiniGame = link => {
        // Replace 'botusername' and 'appname' with the actual bot username and app name
        shareURL(link);
    }

    const openCustomLink = () => {
        // Replace 'botusername' and 'appname' with the actual bot username and app name
        openLink ('https://google.com', {
            tryBrowser: 'chrome',
            tryInstantView: true,
          });
    }    

    const openGameLink = link => {
        openTelegramLink(link);
    }

    return (
        // <div className="home-view">
            <div className="content-wrapper">
                <h2>Welcome, {user ? user.firstName : 'Guest'}!</h2>
                <div className="stats">
                    <span className="lightning">⚡ 3</span>
                    <span className="ticket">🎟️ 3</span>
                    <span className="coins">🪙 267</span>
                </div>

                <div className="user-info">
                    <h3>User Information</h3>
                    {user ? (
                        <ul>
                            <li><strong>User ID:</strong> {user.id}</li>
                            <li><strong>First Name:</strong> {user.firstName}</li>
                            <li><strong>Last Name:</strong> {user.lastName}</li>
                            <li><strong>Username:</strong> {user.username}</li>
                            <li><strong>isPremium:</strong> {user.isPremium ? 'Yes' : 'No'}</li>
                        </ul>
                    ) : (
                        <p>No user information available.</p>
                    )}
                </div>

                <div className="swipe-info">
                    <h3>Swipe Information</h3>
                    <p>Swipe Supported: {swipeIsSupported ? 'Yes' : 'No'}</p>
                    <p>Swipe Mounted: {swipeIsMounted ? 'Yes' : 'No'}</p>
                    <p>Vertical Swipe Enabled: {verticalEnabled ? 'Yes' : 'No'}</p>
                    <button onClick={disableVerticalSwipe} className="disable-swipe-button">
                        Disable Vertical Swipe
                    </button>
                </div>

                <div className="main-button-info">
                    <h3>Main Button Information</h3>
                    <p>Count: {currentCount}</p>
                    <p>Main Button Enabled: {mainButtonEnabled ? 'Yes' : 'No'}</p>
                    <button onClick={toggleMainButton} className="toggle-main-button">
                        {mainButtonEnabled ? 'Disable Main Button' : 'Enable Main Button'}
                    </button>
                    {/* <button onClick={onClick_MainButton} className="main-button">
                        Test Main Button
                    </button> */}
                </div>

                <div className="game-controls-section">
                    <h3>Game Controls</h3>
                    <button onClick={toggleHeaderColor} className="toggle-header-color-button">
                        {purpleHeader ? 'Set Default Header Color' : 'Set Purple Header Color'}
                    </button>

                    <button onClick={openCustomLink} className="open-game-button">
                        Open Link
                    </button>

                    <button onClick={() => openGameLink("https://t.me/TestFSL_bot/bullrush")} className="open-game-button">
                        Play Bull Rush
                    </button>
                    <button onClick={() => shareMiniGame('https://t.me/TestFSL_bot/bullrush')} className="open-game-button">
                        Share Bull Rush
                    </button>

                    <button onClick={() => openGameLink("https://t.me/TestFSL_bot/flappycube")} className="open-game-button">
                        Play Flappy Cube
                    </button>

                    <button onClick={() => openGameLink("https://t.me/TestFSL_bot/candycrush")} className="open-game-button">
                        Play Candy Crush
                    </button>

                    <button onClick={() => openGameLink("https://t.me/TestFSL_bot/screwpuzzle")} className="open-game-button">
                        Play Screw Puzzle
                    </button>

                    <button onClick={() => openGameLink("https://t.me/TestFSL_bot/tilematch")} className="open-game-button">
                        Play Tile Match
                    </button>

                    <button onClick={() => openGameLink("https://t.me/TestFSL_bot/idlefarmempire")} className="open-game-button">
                        Play Idle Farm Empire
                    </button>

                    <button onClick={() => openGameLink("https://t.me/TestFSL_bot/snakegame")} className="open-game-button">
                        Play Snake Game
                    </button>

                    <button onClick={() => openGameLink("https://t.me/TestFSL_bot/idlewaterparktycoon")} className="open-game-button">
                        Play Idle Water Park Tycoon
                    </button>

                    <button onClick={() => openGameLink("https://t.me/TestFSL_bot/idlemechanicmanager")} className="open-game-button">
                        Play Idle Mechanic Manager
                    </button>

                    <button onClick={() => openGameLink("https://t.me/TestFSL_bot/megasoccer2d")} className="open-game-button">
                        Play Mega Soccer 2D
                    </button>
                </div>
            </div>
        // </div>
    );
};

export default HomeView;
