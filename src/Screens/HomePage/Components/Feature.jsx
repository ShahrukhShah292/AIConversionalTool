import React from 'react';

function Feature() {
    return (
        <>
            <div className='Feature-wrapper'>
                <div className='col-12'>
                    <p className='highlighted-head text-center m-0 pt-5'>Best Ai Business Manage Software</p>
                    <div className='col-12'>
                        <h1 className='text-center aibased-heading py-4'>Amazing Feature</h1>
                    </div>
                    <div className='col-12 d-flex justify-content-center  my-auto'>
                        <p className='col-12 col-xxl-8 col-xl-9 col-lg-10 col-md-11 col-md-10 description text-center  m-0'>Welcome to [Your Company Name], where we offer a suite of innovative AI-based services designed to transform the way businesses operate. Our cutting-edge technology is tailored to meet the unique needs of companies, regardless of their size, providing a digital entity or AI employee that efficiently reduces the need for online assistance. Explore the services that can be crafted and customized for your specific requirements:</p>
                    </div>
                </div>
                <div className='col-12 my-5 features_list_container '>
                    <div className='col-12 col-md-7'>
                        <div className='col-12 '>

                            <div className='col-12 col-sm-5 '>
                                <div className='me-3'><img src={require('../../../Assets/images/element1.png')} alt="" /></div>
                                <div className='features_list_contain'>
                                    <p className='features_list_head'>Digital Entity Creation</p>
                                    <p className='features_list_descr my-2'>Craft your own digital entity or AI employee tailored to your company's needs. Personalize the digital entity to take on specific tasks, reducing the reliance on traditional online assistance and call centers.</p>
                                </div>
                            </div>
                            <div className='col-12 col-sm-5 '>
                                <div className='me-3'><img src={require('../../../Assets/images/element2.png')} alt="" /></div>
                                <div className='features_list_contain'>
                                    <p className='features_list_head'>Efficient Customer Support</p>
                                    <p className='features_list_descr my-2'>Enhance customer interactions by providing quick and concise assistance. Improve customer service efficiency, ensuring a seamless experience for your clients.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 '>

                            <div className='col-12 col-sm-5 '>
                                <div className='me-3'><img src={require('../../../Assets/images/element3.png')} alt="" /></div>
                                <div className='features_list_contain'>
                                    <p className='features_list_head'>Customization for Every Company</p>
                                    <p className='features_list_descr my-2'>Tailor our AI-based software for the unique requirements of your business. Enjoy a personalized and effective digital experience that aligns with your company's goals.</p>
                                </div>
                            </div>
                            <div className='col-12 col-sm-5 '>
                                <div className='me-3'><img src={require('../../../Assets/images/element4.png')} alt="" /></div>
                                <div className='features_list_contain'>
                                    <p className='features_list_head'>Employee Customization</p>
                                    <p className='features_list_descr my-2'>Customize the software to serve as an additional employee, alleviating workloads and increasing overall efficiency. Delegate specific tasks to the AI employee, allowing your team to focus on more strategic responsibilities.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-12 col-md-5'>
                        <iframe
                            src="https://lottie.host/embed/64fa387b-d01a-404d-a2fd-84a0770f3d26/pndLeuWAvj.json"
                            title="Lottie Animation"
                            width="100%"
                            height="400px"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Feature