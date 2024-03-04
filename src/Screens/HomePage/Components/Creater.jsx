import React from 'react'

function Creater() {
    return (
        <>
            <div className='Creater_Wrapper'>
                <div className="col-12 text-center">
                    <p className='light_highlighted_head'>Best Ai Business Manage Software</p>
                    <h1 className='col-12 my-1 aibased-heading'>The best creators <span>trust us</span></h1>
                </div>
                <div className='col-12 brands_section'>
                    <div className='col-12 col-xxl-2 col-lg-3   col-md-5 text-center'>
                        <img className='img-fluid' src={require('../../../Assets/images/brand1.png')} alt="" />
                    </div>
                    <div className='col-12 col-xxl-2 col-lg-3 col-md-5 text-center'>
                        <img className='img-fluid' src={require('../../../Assets/images/brand2.png')} alt="" />
                    </div>
                    <div className='col-12 col-xxl-2 col-lg-3 col-md-5 text-center'>
                        <img className='img-fluid' src={require('../../../Assets/images/brand3.png')} alt="" />
                    </div>
                    <div className='col-12 col-xxl-2 col-lg-3 col-md-5 text-center'>
                        <img className='img-fluid' src={require('../../../Assets/images/brand4.png')} alt="" />
                    </div>
                    <div className='col-12 col-xxl-2 col-lg-3 col-md-5 text-center'>
                        <img className='img-fluid' src={require('../../../Assets/images/brand4.png')} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Creater