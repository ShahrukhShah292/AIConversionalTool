import { Avatar, Switch } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import UserImage from '../../Assets/images/chat-bot-icon-2.png';

const usersData = [
    {
        id: 1,
        name: 'User 1',
        email: 'user1@example.com',
        mobile: '123-456-7890',
        DND: false,
        profileImage: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        chats: [
            { text: 'Hello!', sender: 'bot' },
            { text: 'Hi there!', sender: 'user' },

        ],

    },
    {
        id: 2,
        name: 'User 2',
        email: 'user2@example.com',
        mobile: '987-654-3210',
        DND: true,
        profileImage: 'https://plus.unsplash.com/premium_photo-1689629870780-5d0e655383e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        chats: [
            { text: 'Greetings!', sender: 'bot' },

        ],
    },

];



const UserList = ({ users, onSelectUser }) => {
    const [filteredUsers, setFilteredUsers] = useState(users);

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(query) ||
            user.mobile.includes(query)
        );
        setFilteredUsers(filtered);
    };

    useEffect(() => {
        setFilteredUsers(users);
    }, [users]);

    return (
        <>
            <div className="chatbot-header">
                <div className="chatbot-buttons">
                    <button className="chatbot-button" >Unread</button>
                    <button className="chatbot-button" >Recents</button>
                    <button className="chatbot-button" >All</button>
                </div>
            </div>
            <div className="chatbot-search">
                <input
                    type="text"
                    placeholder="Search here..."
                    className="chatbot-search-input"
                    onChange={handleSearch}
                />
            </div>
            <div className="chatbot-messages">
                {filteredUsers.map((user) => (
                    <div key={user.id} className="chatbot-message" onClick={() => onSelectUser(user.id)}>
                        <div className="chatbot-avatar">
                            <Avatar src={user.profileImage} alt={`${user.profileImage}'s avatar`} style={{ width: '35px', height: '35px', marginRight: '0px' }} />
                        </div>
                        <div className="chatbot-message-content">
                            <div className="chatbot-message-header">
                                <div className="chatbot-message-sender">{user.name}</div>
                                <div className="chatbot-message-timestamp">{(user.mobile)}</div>
                            </div>
                            <div className="chatbot-message-text">{user.chats.slice().reverse().find(message => message.sender === 'bot').text.substring(0, 25)}...</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

const ChatInterface = ({ selectedUser, onSendMessage }) => {
    const [input, setInput] = useState('');
    const messagesRef = useRef(null);

    const handleSendMessage = () => {
        if (input.trim() === '') return;
        onSendMessage(input);
        setInput('');
    };
    const clearInput = () => {
        setInput('');
    };


    useEffect(() => {
        // Scroll down to the latest message when new messages are added
        if (messagesRef.current && selectedUser && selectedUser.chats) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    }, [selectedUser]);

    return (
        <>
            {selectedUser ? (
                <>
                    {/* Header */}
                    <div className='col-12 chat_title_menu d-flex justify-content-between align-items-center'>
                        <h2>{selectedUser.name}</h2>
                        <div className='chat_title_menu_action'>

                            <button className='m-0 btn btn-transparent text-white border-0'>
                                <span><i class="fa-regular fa-folder-open"></i></span>Archive
                            </button>
                            <button className='m-0 btn btn-transparent text-white border-0'>
                                <span><i class="fa-solid fa-envelope"></i></span>Mark as Unread
                            </button>
                            <button className='m-0 btn btn-transparent text-white border-0'>
                                <span><i class="fa-solid fa-trash-can"></i></span>Delete
                            </button>
                        </div>
                    </div>

                    {/* Message screen */}
                    <div className="col-xxl-8 col-lg-7 col-md-6 col-12">
                        <div className="chat-message-screen">
                            <div ref={messagesRef}  className="chat-messages">
                                {
                                    selectedUser.chats.map((message, index) => (
                                        <div
                                            key={index}
                                            className={`chat-message ${message.sender}`}
                                        >
                                            <div className="message-content">
                                                <img style={{ filter: '' }}
                                                    src={message.sender === 'user' ? UserImage : selectedUser.profileImage}
                                                    alt={selectedUser.profileImage}
                                                    className="avatar"
                                                />
                                                <div className="message-text">{message.text}</div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        {/* Message input */}

                        <div className='Message_wrapper'>
                            <div className='d-flex justify-content-between mb-3'>
                                <div className='d-flex align-items-center justify-content-center message_type'>
                                    <button className=' btn btn-transparent text-white border-0'>SMS</button>
                                    <button className='btn btn-transparent text-white border-0'>Email</button>
                                </div>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <button className='m-0 btn btn-transparent text-white border-0'>

                                        <i class="fa-regular fa-face-smile"></i>
                                    </button>
                                    <button className='m-0 btn btn-transparent text-white border-0'>

                                        <i class="fa-solid fa-paperclip"></i>
                                    </button>
                                    
                                    <button className='m-0 btn btn-transparent text-white border-0'>

                                        <i class="fa-solid fa-minimize"></i>
                                    </button>
                                </div>
                            </div>
                            <div className='message_input mb-3'>
                                <textarea
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder='Type a message'
                                    name="postContent"
                                    rows={4}
                                    cols={40}
                                />
                            </div>
                            <div className='d-flex justify-content-between message_actions'>
                                <div className='d-flex align-items-center justify-content-center'>

                                    
                                </div>
                                <div>
                                    <button onClick={clearInput} className='m-0 btn btn-transparent text-white border-0'>
                                        Clear
                                    </button>
                                    <button onClick={handleSendMessage} className='m-0 btn btn-transparent text-white border-0 send_button'>
                                        <span><i class="fa-regular fa-paper-plane"></i></span> Send
                                    </button>

                                </div>
                            </div>

                        </div>

                    </div>

                    {/* User information section */}

                    <div className='chat_setting_wrapper col-xxl-4 col-lg-5 col-md-6 col-12'>
                        <div className=''>
                            <div className='chat_profile'>
                                <Avatar size={125} src={selectedUser.profileImage} />
                            </div>
                            <div>
                                <h1 className='text-center mx-5'>{selectedUser.name}</h1>
                            </div>
                            <div>
                                <ul className='User_info_form'>
                                    <li className='mb-3'>
                                        <span><i class="fa-solid fa-phone"></i></span>
                                        <div>
                                            <input type="text" value={selectedUser.mobile} />
                                        </div>
                                    </li>
                                    <li className='mb-3'>
                                        <span><i class="fa-regular fa-envelope"></i></span>
                                        <div>
                                            <input type="text" value={selectedUser.email} />
                                        </div>
                                    </li>
                                    <li className='mb-3'>
                                        <span><i class="fa-solid fa-tag"></i></span>
                                        <div>
                                            <input type="text" defaultValue={'Add Tags'} />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='DNDWrapper mt-4'>
                                <p>DND (Opt out of marketing Campaigns)</p>
                                <Switch value={selectedUser.DND} />
                                <p className='mt-3'>Active Campaigns / Workflows</p>
                                <button className='btn text-white'><span className=''><i class="fa-solid fa-plus"></i></span> Add</button>
                            </div>

                            <div className='setting_actions'>
                                <button className='btn text-white mt-5'>Create Opportunity</button>
                                <button className='btn text-white mt-2'>Schedule</button>
                            </div>

                        </div>
                    </div>
                </>
            ) : (
                <>

                    {/* by default section */}
                    <div className='col-12 m-auto text-center landing_chat'>
                        <h1 className='m-0'>Chat With Users</h1>
                    </div>
                </>
            )
            }
        </>

    );
};

function Chat() {
    const [users, setUsers] = useState(usersData);

    const [selectedUserId, setSelectedUserId] = useState(null);
    const handleUserSelection = (userId) => {
        setSelectedUserId(userId);
        console.log(`My User ID: ${userId}`);
    };

    const handleSendMessage = (text) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === selectedUserId
                    ? { ...user, chats: [...user.chats, { text, sender: 'user' }] }
                    : user
            )
        );

        // Simulate a bot response after a short delay
        setTimeout(() => {
            setUsers((prevUsers) =>
                prevUsers.map((user) =>
                    user.id === selectedUserId
                        ? {
                            ...user,
                            chats: [
                                ...user.chats,
                                { text: `Bot: I received "${text}"`, sender: 'bot' },
                            ],
                        }
                        : user
                )
            );
        }, 500);
    };

    return (
        <>
            <div className='d-flex flex-wrap justify-content-between col-12'>
                <div className="chatbot-container col-xxl-3 col-lg-4 col-12">

                    {/* User list */}

                    <UserList users={users} onSelectUser={handleUserSelection} />

                </div>
                <div className='message_screen_wrapper col-xxl-9 col-lg-8 col-12'>


                    {/* chat screen */}

                    <ChatInterface
                        selectedUser={users.find((user) => user.id === selectedUserId)}
                        onSendMessage={handleSendMessage}
                    />

                </div>
            </div>
        </>
    )
}

export default Chat
