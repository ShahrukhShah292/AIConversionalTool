import React from 'react'

function GetInTouch() {
    return (
        <>
            <div className='GetInTouch_Wrapper'>
                <div className='col-12'>

                    <div className='col-12'>
                        <h1 className='text-center aibased-heading py-4'>Get In Touch With Us</h1>
                    </div>
                    <div className='col-12'>
                        <div className='contact_form mx-auto'>

                            <div class="col-11 col-md-5">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
                            </div>
                            <div class="col-11 col-md-5">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Mobile" />
                            </div>
                            <div class="col-11 col-md-5">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                            </div>
                            <div class="col-11 col-md-5">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Subject" />
                            </div>
                            <div class="col-11 col-md-10">
                                <textarea type="email" class="form-control" id="exampleFormControlInput1" rows="6" placeholder="Write Your Message" />
                            </div>

                        </div>
                        <div className='col-12 d-flex justify-content-center'>
                            <button className='btn '>Send</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default GetInTouch