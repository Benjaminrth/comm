import React, { useState, useRef, useEffect } from 'react';

const PinEntry = ({ onPinSubmit }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handlePinChange = (e) => {
    const value = e.target.value;
    if (value.length <= 4 && /^\d*$/.test(value)) {
      setPin(value);
      setError('');
      if (value.length === 4) {
        if (value === '1942') {
          onPinSubmit(value);
        } else {
          setError('Wrong PIN');
          setPin('');
        }
      }
    }
  };

  const handleDotClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <div className="w-full max-w-xs">
        <div className="mb-8">
          <div className="w-16 h-16 bg-custom-yellow rounded-lg transform rotate-45 mx-auto">
            <div className="w-full h-full bg-yellow-300 rounded-tr-lg"></div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-6 text-center">Enter your PIN</h2>
        
        <div className="flex justify-center space-x-4 mb-8" onClick={handleDotClick}>
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`w-6 h-6 rounded-full ${
                pin.length > index ? 'bg-white' : 'border-2 border-white'
              }`}
            ></div>
          ))}
        </div>
        
        <input
          ref={inputRef}
          type="tel"
          pattern="[0-9]*"
          inputMode="numeric"
          value={pin}
          onChange={handlePinChange}
          className="opacity-0 absolute w-full h-full"
          style={{ top: '0', left: '0' }}
        />
        
        <div className="text-center mt-8">
          <p className="mb-2 text-gray-400">Forgotten PIN?</p>
          <button className="text-blue-400">Log on with NetBank password</button>
        </div>
      </div>
    </div>
  );
};

export default PinEntry;
