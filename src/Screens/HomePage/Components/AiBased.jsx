
import React from 'react';
import { Link } from 'react-router-dom';


function AiBased() {
    return (
        <>
            <div className='aibased_wrapper'>
                <div className='d-flex flex-wrap justify-content-evenly align-items-center m-0 my-auto'>
                    <div className='my-auto col-9 col-xxl-4 col-lg-5 col-md-6 d-flex justify-content-center py-5'>
                        <div className=''>
                            <img className='img-fluid' alt='' src={require('../../../Assets/images/K 1.png')} />
                        </div>
                    </div>
                    <div className='col-12 col-md-6 d-flex justify-content-center'>
                        <div className='col-12 col-xxl-7 col-lg-9 col-md-10'>
                            <p className='highlighted-head text-md-start text-center m-0 py-0'>
                                Best Ai Business Manage Software
                            </p>
                            <h1 className='aibased-heading my-3'>AI based software</h1>
                            <div className='AIList'>
                                <ul>
                                    <li><span><img src={require('../../../Assets/images/ListBool.png')} alt="" /></span> This AI based software will help companies regardless of their size to have their own (DIGITAL ENTITY) or AI employee, who will reduce the need of online assistance (on chat or even call centers).</li>
                                    <li><span><img src={require('../../../Assets/images/ListBool.png')} alt="" /></span> Will help customers quickly and concisely with efficiency.</li>
                                    <li><span><img src={require('../../../Assets/images/ListBool.png')} alt="" /></span> Can be crafted for every company.</li>
                                    <li><span><img src={require('../../../Assets/images/ListBool.png')} alt="" /></span> The software could also be customized to serve as employees, taking work off their shoulders.</li>
                                </ul>
                            </div>
                            <div className=' dark_button my-5 d-flex justify-content-md-start justify-content-center '>
                                <Link to="/" className='text-decoration-none  fs-6'>Learn More
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
           
        </>
    )
}

export default AiBased