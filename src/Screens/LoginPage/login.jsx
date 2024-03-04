import { Button, Input } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../Styles/Login/authentication.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => { 
    // Navigate to the desired page when the button is clicked
    navigate('/dashboard/'); // Replace '/dashboard' with the path you want to navigate to
  };

  return (
    <><div className='login-bg'>
      <div className='blur-bg'>
        <div className='login-card'>
          <div className='login-upper mb-4'>
            <img className='img-fluid' src={require("../../Assets/images/user-icon.png")} alt="" />
          </div>
          <div className='login-upper'>
            <h1 >LOGIN</h1>
          </div>
          <div>
            <Input size="large" placeholder="Email Id" prefix={<img src={require("../../Assets/images/mail-icon.png")} alt="" className='input-icon' />} />
            <Input size="large" placeholder="Password" prefix={<img src={require("../../Assets/images/lock-icon.png")} alt="" className='input-icon' />} />
          </div>
          <div className='forgot-password'>
            <Link to="/signin">Forgot Password?</Link>
          </div>
          <div>
            <Button type="primary" className="login-btn my-4" onClick={handleLogin}>
              LOGIN
            </Button>
          </div>
          <div className='login-lower'>
            <h4>Dont have an account ? <Link to="/signup">Sign Up</Link></h4>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
