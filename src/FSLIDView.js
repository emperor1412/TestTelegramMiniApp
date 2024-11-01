import React from 'react';
import './FSLIDView.css';
import './App.css';

const FSLIDView = ({ user, setActiveTab }) => {
  const handleGameClick = () => {
    console.log('Game clicked');
    // Add game click handler
  };

  const handleTicketClick = () => {
    console.log('Ticket clicked');
    setActiveTab('ticket2');
  };

  const handleRaffleClick = () => {
    console.log('Raffle clicked');
    // Add raffle click handler
  };

  const handleLeaderboardClick = () => {
    console.log('Leaderboard clicked');
    // Add leaderboard click handler
  };

  const handleCheckInClick = () => {
    console.log('Check In clicked');
    // Add check in click handler
  };

  return (
    <div className='tab-content'>
      <div className="content-wrapper fsl-content">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-500 rounded-full mr-4"></div>
            <div className="text-lg font-bold">
              GM {user ? user.firstName : 'Guest'}!
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <i className="fas fa-bolt text-yellow-400"></i>
              <span className="ml-1">3</span>
            </div>
            <div className="flex items-center mr-4">
              <i className="fas fa-ticket-alt text-red-400"></i>
              <span className="ml-1">3</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-coins text-yellow-400"></i>
              <span className="ml-1">267</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-0">
          <button 
            onClick={handleGameClick}
            className="relative">
            <img 
              alt="Game image" 
              className="w-full h-full object-cover rounded-lg" 
              src="https://storage.googleapis.com/a1aa/image/IxgsrqZ5BBIaOZKgXhRRUMEOWQb4yx7UQClU4iorMzCh386E.jpg" 
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white px-4 py-2">
              COMING SOON
            </div>
          </button>
          <button 
            onClick={handleTicketClick}
            className="relative">
            <img 
              alt="Ticket image" 
              className="w-full h-full object-cover rounded-lg" 
              src="https://storage.googleapis.com/a1aa/image/BwDKKUTKybIIExBch9vImu8ukqO8TaagA5aOOo9IU7bh386E.jpg" 
            />
          </button>
        </div>

        <button onClick={handleRaffleClick} className="relative w-full">
          <div className="border-purple-500">
            <img 
              alt="Raffle Mint image" 
              className="w-full h-full object-cover rounded-lg" 
              src="https://storage.googleapis.com/a1aa/image/mqgvoQlhfOUILqC2lTBeXzFhDQT5bx2oWECDp0nf1XtE8mXnA.jpg" 
            />
            <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-br-lg" style={{ top: '160px' }}>
              JOIN 10,000
            </div>
          </div>
        </button>

        <div className="grid grid-cols-2 gap-4 mb-0">
          <button 
            onClick={handleLeaderboardClick}
            className="relative">
            <div className="relative w-full h-full">
              <img 
                alt="Leaderboard image" 
                className="w-full h-full object-cover rounded-lg" 
                src="https://storage.googleapis.com/a1aa/image/UWRENqi8lYYLI9cvjte74xZdduqg6OCkWBIYD13PnMiAv51JA.jpg" 
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white px-4 py-2">
                COMING SOON
              </div>
            </div>
          </button>
          <button 
            onClick={handleCheckInClick}
            className="relative">
            <img 
              alt="Check In image" 
              className="w-full h-full object-cover rounded-lg" 
              src="https://storage.googleapis.com/a1aa/image/SltkOyWMwU7TFRfWJ5hheI4NJJoubIXe4qetPFXMYH8fvbe6E.jpg" 
            />
            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-bl-lg">
              76
            </div>
            <div className="absolute bottom-0 right-0 bg-gray-800 bg-opacity-75 text-white px-2 py-1 rounded-tl-lg">
              06:24:47
            </div>
          </button>
        </div>

        {/* <div style={{ 
          position: 'relative', 
          top: '20px', 
          left: '20px', 
          background: 'blue', 
          padding: '20px' 
        }}>
          Parent
          <div style={{ 
            position: 'relative', 
            top: '20px', 
            left: '20px', 
            background: 'red', 
            padding: '10px' 
          }}>
            Child
          </div>
        </div>

        <div style={{ 
          position: 'relative', 
          top: '20px', 
          left: '20px', 
          background: 'blue', 
          padding: '20px' 
        }}>
          Parent
          <div style={{ 
            position: 'absolute', 
            top: '20px', 
            left: '20px', 
            background: 'red', 
            padding: '10px' 
          }}>
            Child
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FSLIDView;
