import React, { useState } from 'react';
import { swipeBehavior, miniApp } from '@telegram-apps/sdk';
import WebApp from '@twa-dev/sdk'

const HomeView = ({ user, onOpenGameView, onOpenThreeJsView }) => {
    const [isPurpleHeader, setIsPurpleHeader] = useState(false);

    const swipeSupported = swipeBehavior.isSupported();
    let swipeMounted = swipeBehavior.isMounted();
    let isVerticalEnabled = swipeBehavior.isVerticalEnabled();
    console.log(`swipeSupported: ${swipeSupported}\n swipeMounted: ${swipeMounted}`);

    const disableVerticalSwipe = () => {
        swipeBehavior.mount();
        swipeMounted = swipeBehavior.isMounted();

        isVerticalEnabled = swipeBehavior.isVerticalEnabled();
        console.log(`isVerticalEnabled: ${isVerticalEnabled}`);

        swipeBehavior.disableVertical();
        console.log(`Disable vertical swipe`);

        isVerticalEnabled = swipeBehavior.isVerticalEnabled();
        console.log(`isVerticalEnabled: ${isVerticalEnabled}`);
    };

    const toggleHeaderColor = () => {
        // if (miniApp.setHeaderColor.isSupported()) {
            if (isPurpleHeader) {
                miniApp.setHeaderColor('bg_color'); // Set to default color
            } else {
                miniApp.setHeaderColor('#8e44ad'); // Set to purple
            }
            setIsPurpleHeader(!isPurpleHeader);
        // } else {
        //     console.log('Setting header color is not supported');
        // }
    };

    return (
        <div className="home-view">
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
                        <li><strong>Email:</strong> {user.email}</li>
                    </ul>
                ) : (
                    <p>No user information available.</p>
                )}
            </div>

            <div className="swipe-info">
                <p>Swipe Supported: {swipeSupported ? 'Yes' : 'No'}</p>
                <p>Swipe Mounted: {swipeMounted ? 'Yes' : 'No'}</p>
                <p>Vertical Swipe Enabled: {isVerticalEnabled ? 'Yes' : 'No'}</p>
            </div>

            <button onClick={disableVerticalSwipe} className="disable-swipe-button">
                Disable Vertical Swipe
            </button>

            <button onClick={toggleHeaderColor} className="toggle-header-color-button">
                {isPurpleHeader ? 'Set Default Header Color' : 'Set Purple Header Color'}
            </button>

            <button onClick={onOpenGameView} className="open-game-button">
                Open Unity WebGL View
            </button>
            <button onClick={onOpenThreeJsView} className="open-game-button">
                Open Three.js View
            </button>
            {/* Add more content for the home view */}
        </div>
    );
};

export default HomeView;
