import { Avatar, Button } from 'antd';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ChatBotScreen() {
    const [companyName, setCompanyName] = useState('');
    const [avatarSrc, setAvatarSrc] = useState('');

    const handleChange = (event) => {
        setCompanyName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // TODO: Save the company name to the server
        console.log('Company name:', companyName);
        console.log('Avatar source:', avatarSrc);

        // Redirect to the next screen or handle further logic
    };

    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setAvatarSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate    ();

    const sendMessage = () => {
        console.log("Message sent:", inputValue);
        navigate('/dashboard/chatbot/chat/');
    };
    return (
        <>
            <div className="chat-bot-screen">
                <div className='add-company-avatar m-0' >
                    <Avatar shape='square' size={64} style={{ border: '1px solid #828282', width: '100px', height: '60px' }} src={avatarSrc} />
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                    />
                    <Button className='upload-button' onClick={handleClick}>Upload Image</Button>
                </div>
                <div className='add-model-1'>
                    <div className="d-flex">
                        <input
                            type="text"
                            className="chat-input-screen"
                            placeholder="Enter Your Company Name"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    sendMessage();
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
            <div style={{textAlign:'center', paddingTop: '20px'}}>
                <button style={{ fontSize: '16px' }} className="dashboard-btn" onClick={sendMessage} >Save</button>
            </div>
        </>
    );
}

export default ChatBotScreen;
