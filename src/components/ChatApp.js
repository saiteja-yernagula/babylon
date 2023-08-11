import React, { useState } from 'react';
import './ChatApp.css';

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') {
      return;
    }

    const newMessages = [...messages, { text: newMessage, sender: 'user' }];
    setMessages(newMessages);
    setNewMessage('');

    // Simulate a response from the support agent after a delay
    setTimeout(() => {
      const responseMessage = { text: "I'm a support agent. How can I assist you?", sender: 'agent' };
      setMessages([...newMessages, responseMessage]);
    }, 1000);
  };

  return (
    <div className="ChatApp">
      <div className="message-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>

      <form  >
          <fieldset style={{height:'30vh'}}>
            <legend>Examination notes:</legend>
          </fieldset>
         </form>
    
    </div>
  );
}

export default ChatApp;
