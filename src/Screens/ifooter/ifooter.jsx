import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Login/authentication.css';



function Ifooter() {
  
    return (
        <>
            <div className='footer'>
                <div className='f-uper'>
                    <div className='f-card'>
                        <div className='f-card-heading'>
                            <h3>About US</h3>
                            <img src={require("../../Assets/images/Line 8.png")} alt='' />
                        </div>
                        <div>
                            <h1>AI Tech</h1>
                            <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt labore</p>
                        </div>
                        <div style={{ paddingTop: '25px' }}>
                            <button onClick={handleClick} className='f-social-icon'>
                                <img src={require("../../Assets/images/X-icon.png")} alt="" />
                            </button>
                            <button onClick={handleClick} className='f-social-icon'>
                                <img src={require("../../Assets/images/fb-icon.png")} alt="" />
                            </button>
                            <button onClick={handleClick} className='f-social-icon'>
                                <img src={require("../../Assets/images/in-icon.png")} alt="" />
                            </button>
                            <button onClick={handleClick} className='f-social-icon'>
                                <img src={require("../../Assets/images/insta-icon.png")} alt="" />
                            </button>
                            <button onClick={handleClick} className='f-social-icon'>
                                <img src={require("../../Assets/images/yt-icon.png")} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className='f-card'>
                        <div className='f-card-heading'>
                            <h3>Company Links</h3>
                            <img src={require("../../Assets/images/Line 8.png")} alt='' />
                        </div>
                        <div className='f-company-link'>
                            <ul>
                                <div>
                                    <li><Link>Home</Link></li>
                                    <li><Link>Features</Link></li>
                                    <li><Link>Video</Link></li>
                                    <li><Link>Pricing</Link></li>
                                </div>
                                <div>
                                    <li><Link>Feedback</Link></li>
                                    <li><Link>Contacts</Link></li>
                                    <li><Link>Pages</Link></li>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className='f-card'>
                        <div className='f-card-heading'>
                            <h3>Contact Info</h3>
                            <img src={require("../../Assets/images/Line 8.png")} alt='' />
                        </div>
                        <div>
                            <div className='f-contact-info'>
                                <p className='f-contact-info-p'>Address :</p>
                                <p>123 Abcd State, Street Name, State 98745, Abcd State</p>
                            </div>
                            <div className='f-contact-info'>
                                <p className='f-contact-info-p'>Phone :</p>
                                <p>+123456789000</p>
                            </div>
                            {/* <div className='f-contact-info'> 
                                <p className='f-contact-info-p'>E-mail :</p>
                                <p>aitech123@gmail.com</p>
                            </div> */}
                            <div className='f-contact-info'>
                                <p className='f-contact-info-p' style={{ whiteSpace: 'nowrap' }}>E-mail :</p>
                                <p >aitech123@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='f-white-line'></div>
                <div className='f-lower'>
                    <h6>© 2023 - 2024 Ai Tech. All Right Reserved</h6>
                    <h6 style={{ marginRight: '35px' }}><Link as={Link} to="/Terms&Conditions" className='f-terms'>Terms & Conditions</Link> | <Link as={Link} to="/PrivacyPolicy" className='f-terms'>Privacy Policy</Link></h6>
                </div>
            </div>
        </>
    )
}

function handleClick() {
    // Handle button click event
    console.log('Button clicked!');
}
export default Ifooter
