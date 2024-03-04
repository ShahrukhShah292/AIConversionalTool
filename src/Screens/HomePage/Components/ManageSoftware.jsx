import React from 'react'

function ManageSoftware() {
    return (
        <>
            <div className='Manage_software_wrapper'>

                <div className="col-9 col-xxl-4 col-md-5 text-center">
                    <img className='img-fluid' src={require('../../../Assets/images/manageSoft.png')} alt="" />
                </div>
                <div className="col-12 col-md-5 d-flex flex-wrap text-md-start text-center justify-content-center justify-content-md-start">
                    <p className='highlighted-head mt-md-0 mt-4'>Best Ai Business Manage Software</p>
                    <h1 className='col-12 aibased-heading my-4'>Most The Software</h1>
                    <p className='discription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatem repudiandae a minima repellendus et quasi, explicabo quidem sunt perspiciatis rem nisi odit architecto illo error vero quod qui repellat?</p>
                    <div className='manage_software_list col-12'>
                        <ul>
                            <li><span><img src={require('../../../Assets/images/listBool2.png')} alt="" /></span>Your Business Analytics</li>

                            <li><span><img src={require('../../../Assets/images/listBool2.png')} alt="" /></span>Manage Your Daily Tasks</li>

                            <li><span><img src={require('../../../Assets/images/listBool2.png')} alt="" /></span>Manage Your Daily Project</li>

                            <li><span><img src={require('../../../Assets/images/listBool2.png')} alt="" /></span>Rich Your Visitor Profiles</li>

                            <li><span><img src={require('../../../Assets/images/listBool2.png')} alt="" /></span>Your Business Analytics</li>

                            <li><span><img src={require('../../../Assets/images/listBool2.png')} alt="" /></span>Smart Notifications</li>

                            <li><span><img src={require('../../../Assets/images/listBool2.png')} alt="" /></span>Chat Automation</li>

                            <li><span><img src={require('../../../Assets/images/listBool2.png')} alt="" /></span>AI Employee</li>

                        </ul>
                    </div>
                </div>


            </div>
            
        </>
    )
}

export default ManageSoftware