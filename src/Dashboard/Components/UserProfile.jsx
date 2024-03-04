import IconButton from '@mui/material/IconButton';
import { Avatar, Badge } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import AvtarImage from '../../Assets/images/client-image.png';

const users = { name: 'John Doe', email: 'john.doe@example.com', location: 'New York', avatar: AvtarImage };

function UserMap() {
  return (
    <>
      <div className='text-white col-12 d-flex align-items-center  '>
        <IconButton size="large" aria-label="show 17 new notifications" 
        color="inherit" className='me-3 me-lg-0'>
          <a as={Link} href="/dashboard">
            <Badge count={5}>
              <Avatar src={require("../../Assets/images/Bell-icon.png")} alt=""  />
            </Badge>
          </a>
        </IconButton>
        <div className='User_wrapper d-none d-lg-block'>
          <h2>{users.name}</h2>
          <h2>{users.email}</h2>
        </div>
        <Avatar src={users.avatar} size={64} style={{width:'100%'}}/>
      </div>
    </>
  );
}

function ProfileComponent() {

  return (
    <div className="profile-container">
      <UserMap />
    </div>
  );
}

export default ProfileComponent;
