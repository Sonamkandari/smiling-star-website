import React, { useState } from 'react';
import './AIAssistant.css';

const predefinedOptions = [
  "About Us",
  "Services",
  "Latest Work",
  "Communities",
  "Contact",
  "Join Us",
  "Ask a general question"
];

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello! I am Smiling Star AI Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [showOptions, setShowOptions] = useState(true);

  const sendMessage = async (msg) => {
    if (!msg) return;

    setMessages(prev => [...prev, { sender: 'user', text: msg }]);
    setInput('');

    try {
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg })
      });

      const data = await res.json();
      setMessages(prev => [...prev, { sender: 'ai', text: data.answer }]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: 'ai', text: '⚠️ AI service error. Check your connection.' }]);
      console.error(err);
    }
  };

  return (
    <div className="ai-assistant-container">
      <div className="ai-assistant-header">Smiling Star AI Assistant</div>
      <div className="ai-assistant-body">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.sender === 'user' ? 'ai-message user' : 'ai-message ai'}>
            {msg.text}
          </div>
        ))}
      </div>

      {showOptions && (
        <div className="ai-assistant-options">
          {predefinedOptions.map((opt, idx) => (
            <button key={idx} onClick={() => { sendMessage(opt); setShowOptions(false); }}>
              {opt}
            </button>
          ))}
        </div>
      )}

      {!showOptions && (
        <div className="ai-assistant-input-container">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type your question..."
            onKeyDown={e => { if(e.key === 'Enter') sendMessage(input); }}
          />
          <button onClick={() => sendMessage(input)}>Send</button>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;