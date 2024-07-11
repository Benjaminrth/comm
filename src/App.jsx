import React, { useState, useEffect } from 'react';
import PinEntry from './components/PinEntry';
import HomeScreen from './components/HomeScreen';
import ChatInterface from './components/ChatInterface';


const App = () => {
  const [currentScreen, setCurrentScreen] = useState('pin');
  const [userName, setUserName] = useState('Benjamin');

  // Reset to PIN screen whenever the app is opened or refreshed
  useEffect(() => {
    setCurrentScreen('pin');
  }, []);

  const handlePinSubmit = (pin) => {
    if (pin === '1942') {
      setCurrentScreen('home');
    }
  };

  const handleChatOpen = () => {
    setCurrentScreen('chat');
  };

  const handleBackToHome = () => {
    setCurrentScreen('home');
  };

  return (
    <div className="w-full h-screen">
      {currentScreen === 'pin' && <PinEntry onPinSubmit={handlePinSubmit} />}
      {currentScreen === 'home' && <HomeScreen userName={userName} onChatOpen={handleChatOpen} />}
      {currentScreen === 'chat' && <ChatInterface onBack={handleBackToHome} />}
    </div>
  );
};

export default App;
