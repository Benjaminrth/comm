import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Send } from 'lucide-react';

const ChatInterface = ({ onBack }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = () => {
    if (inputMessage.trim()) {
      const isBot = inputMessage.toLowerCase().startsWith('bot:');
      const text = isBot ? inputMessage.slice(4).trim() : inputMessage.trim();
      const newMessage = {
        text: text,
        sender: isBot ? 'bot' : 'user',

      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-custom-bg text-white">
      <div className="flex items-center justify-center p-4 bg-custom-gray relative">
        <ChevronDown className="w-6 h-6 absolute left-4 cursor-pointer" onClick={onBack} />
        <h1 className="text-xl font-semibold">Everyday banking</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 ${
              message.sender === 'user' 
                ? 'bg-gray-600 rounded-t-lg rounded-l-lg rounded-br-sm' 
                : 'bg-custom-gray rounded-t-lg rounded-r-lg rounded-bl-sm'
            }`}>
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs text-gray-400 mt-1 ${
                message.sender === 'user' ? 'text-right' : 'text-left'
              }`}></p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-custom-gray">
        <div className="flex bg-gray-700 rounded-full">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            className="flex-1 bg-transparent text-white px-4 py-3 focus:outline-none"
            placeholder="Send a message"
          />
          <button 
            onClick={sendMessage}
            className="text-gray-400 rounded-full p-2 m-1"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;