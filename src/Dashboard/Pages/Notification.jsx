import React, { useState } from 'react';
import avatarImage1 from '../../Assets/images/spearker_1-300x300.jpg';
import avatarImage2 from '../../Assets/images/client-image.png';
import { Button, Modal } from 'antd';


function Notifications() {
  
  const [unread, setUnread] = useState([
    {
      id: 1,
      sender: "Mark Pol",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      timestamp: "44",
      avatar: avatarImage1,
      seen: true,
    },
    {
      id: 2,
      sender: "John Doe",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      timestamp: "50",
      avatar: avatarImage2,
      seen: false,
    },
  ]);

  const [read, setRead] = useState([
    {
      id: 3,
      sender: "John Doe",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      timestamp: "50",
      avatar: avatarImage2,
      seen: true,
    },
    {
      id: 4,
      sender: "John",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      timestamp: "50",
      avatar: avatarImage2,
      seen: false,
    },
  ]);

  const [selectedNotification, setSelectedNotification] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
    setShowModal(true);
    
    const isAlreadyRead = read.find(item => item.id === notification.id);
    
    if (!isAlreadyRead) {
      setUnread(unread.filter((item) => item.id !== notification.id));
      setRead([...read, notification]);
    }
  };
  
  const handleDeleteRecent = (id, isUnread, event) => {
    event.stopPropagation();
    if (isUnread) {
      setUnread(unread.filter((item) => item.id !== id));
    } else {
      setRead(read.filter((item) => item.id !== id));
    }
    setShowModal(false); 
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="notifications-container">
      {unread.length > 0 && (
        <div>
          <div className="notifications-header">
            <h4>Unread</h4>
          </div>
          {unread.map((notification) => (
            <div className="notification" key={notification.id} onClick={() => handleNotificationClick(notification)}>
              <img src={notification.avatar} alt="Avatar" className="notification-avatar" />
              <div className="notification-content">
                <div className="notification-sender">{notification.sender}</div>
                <div className="notification-message">{notification.message.substring(0, 50)} ....</div>
              </div>
              <div className="notification-timestamp">{notification.timestamp} minutes ago</div>
              <button className="notification-delete-button" onClick={(event) => handleDeleteRecent(notification.id, true, event)}>
                <img src={require("../../Assets/images/Delete.png")} alt="" />
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedNotification && (
        <Modal
          title={selectedNotification.sender}
          visible={showModal}
          className='Notification-modal'
          onCancel={handleModalClose}
          footer={[
            <Button key="close" onClick={handleModalClose}>
              Close
            </Button>
          ]}
        >
          <div className="notification-popup-message">{selectedNotification.message}</div>
        </Modal>
      )}

      {read.length > 0 && (
        <div className="read-notifications">
          <div className="notifications-header">
            <h4>Read</h4>
          </div>
          {read.map((notification) => (
            <div className="notification" key={notification.id} onClick={() => handleNotificationClick(notification)}>
              <img src={notification.avatar} alt="Avatar" className="notification-avatar" />
              <div className="notification-content">
                <div className="notification-sender">{notification.sender}</div>
                <div className="notification-message">{notification.message.substring(0, 50 )} ....</div>
              </div>
              <div className="notification-timestamp">{notification.timestamp} minutes ago</div>
              <button className="notification-delete-button" onClick={(event) => handleDeleteRecent(notification.id, false, event)}>
                <img src={require("../../Assets/images/Delete.png")} alt="" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notifications;