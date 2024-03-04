import React, { useState } from 'react';

function ModalCreate() {
    const [messages, setMessages] = useState([
        { text: "Hello! How can I assist you today?", isUser: false }
    ]);
    const [inputValue, setInputValue] = useState('');

    const sendMessage = () => {
        if (inputValue.trim() !== '') {
            const userMessage = { text: inputValue, isUser: true };
            setMessages(prevMessages => [...prevMessages, userMessage]);
            setInputValue('');
    
            // Simulate bot response after a delay
            setTimeout(() => {
                const botResponse = { text: "You said: " + inputValue, isUser: false };
                setMessages(prevMessages => [...prevMessages, botResponse]);
            }, 500);
        }
    };

    return (
        <div className='modal-chat-back'>
            <div style={{ padding: '25px' }}>
                {messages.map((message, index) => (
                    <div key={index} className={message.isUser ? 'sender-msg' : 'reciver-msg'}>
                        <div className='msg-border'>
                            <h3>{message.text}</h3>
                        </div>
                        <div>
                            <img style={{ filter: 'grayscale(1)' }} src={message.isUser ? require("../../Assets/images/chat-bot-icon-2.png") : require("../../Assets/images/chat-bot-icon-1.png")} alt='' />
                        </div>
                    </div>
                ))}
            </div>
            <div className='add-model'>
                <div className="input-container">
                    <input
                        type="text"
                        className="chat-input"
                        placeholder="Type your message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                sendMessage();
                            }
                        }}
                    />
                    <button style={{ fontSize: '16px' }} className="dashboard-btn" onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default ModalCreate;
