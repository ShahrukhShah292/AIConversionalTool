import React from 'react'

function JoinOurNetwork() {
    return (
        <>
            <div className='join-network_Wrapper'>
                <div className='col-12 col-md-12 col-lg-7 col-xxl-6'>

                    <div className='col-12 send-btn-join-network'>
                        <p style={{color:'#37ACFD'}} className='text-center text-lg-start'>Best Ai Business Manage Software</p>
                        <h1 className='text-center text-lg-start aibased-heading py-4'>Join Our Network</h1>
                        <p className='text-center text-lg-start'>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor.</p>
                    </div>
                    <div className='col-12 py-3'>
                        <div className='join-network-contact_form justify-content-center justify-content-lg-start'>

                            <div class="col-11 col-md-10">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
                            </div>
                            <div class="col-11 col-md-10">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Mobile" />
                            </div>
                            <div class="col-11 col-md-10">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                            </div>
                            <div class="col-11 col-md-10">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Subject" />
                            </div>
                            <div class="col-11 col-md-10">
                                <textarea type="email" class="form-control" id="exampleFormControlInput1" rows="6" placeholder="Write Your Message" />
                            </div>

                        </div>
                        <div className='col-12 d-flex justify-content-center justify-content-lg-start send-btn-join-network'>
                            <button className='btn '>Send</button>
                        </div>

                    </div>
                </div>
                <div className='d-none d-lg-block col-5 join-form-img'>
                    <img className='img-fluid join-form-img' src={require('../../Assets/images/join-our-network.png')} alt='' />
                </div>
            </div>
        </>
    )
}

export default JoinOurNetwork