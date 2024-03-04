import { Button, Input } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Login/authentication.css';

function Signup() {
  return (
    <>
      <div className='Signup-bg'>
        <div className='blur-bg'>
          <div className='login-card'>
            <div className='login-upper my-4'>
            <img className='img-fluid' src={require("../../Assets/images/user-icon.png")} alt="" />
            </div>
            <div className='login-upper'>
              <h1>SIGN UP</h1>
            </div>
            <div className='login-upper'>
              <h4>Create Your Account</h4>
            </div>
            <div>
              <Input size="large" placeholder="User Name" prefix={<img src={require("../../Assets/images/user_icon.png")} alt="" className='input-icon' />} />
              <Input size="large" placeholder="Email Id" prefix={<img src={require("../../Assets/images/mail-icon.png")} alt="" className='input-icon' />} />
              <Input size="large" placeholder="Password" prefix={<img src={require("../../Assets/images/lock-icon.png")} alt="" className='input-icon' />} />
              <Input size="large" placeholder="Confirm Password" prefix={<img src={require("../../Assets/images/lock-icon.png")} alt="" className='input-icon' />} />
            </div>
            <div>
              <Button type="primary" className='login-btn my-3'>
                Sign Up
              </Button>
            </div>
            <div className='sign-up-with my-3 col-12' style={{justifyContent:"space-between"}}>
              <img className='img-fluid col-3' src={require("../../Assets/images/Line 16.png")} alt="" />
              <h4 className='col-6'>OR SIGN UP WITH</h4>
              <img className='img-fluid col-3' src={require("../../Assets/images/Line 16.png")} alt="" />
            </div>
            <div className='sign-up-with'>
              <img className='img-fluid mx-2'  src={require("../../Assets/images/Group 144.png")} alt="" style={{width: '100%' , maxWidth :'50px' }}/>
              <img className='img-fluid mx-2'  src={require("../../Assets/images/Group 152.png")} alt="" style={{width: '100%' , maxWidth :'50px' }} />
            </div>
            <div className='login-lower my-3'>
              <h4>Already have an account ? <Link to="/signin" style={{ color: '#37ACFD',textDecoration:"none" }}>Log in</Link></h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
