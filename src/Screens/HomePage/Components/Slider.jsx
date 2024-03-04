
import React from 'react';
import { Link } from 'react-router-dom';

function Slider() {
    return (
        <div className='Slider-wrapper' >
            <div className='d-flex flex-wrap justify-content-evenly align-items-center my-auto'>
                <div className='col-12 col-md-7 text-md-start text-center'>
                    <div>
                        <h1 className='slider-heading'>
                            Ai Strategy & <br /> Mastery in Harmony
                        </h1>
                        <p className='slider-sub-heading col-12 col-xxl-7 col-ls-7 col-md-10'>Unleash the Future: Transforming Buisness Operations with Our Revolutionary AI Technology</p>
                        <div className='col-12  my-sm-4'>
                            <Link to="/" className='text-decoration-none  fs-6'>Learn More <i class="fa-solid fa-chevron-right fs-6"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='my-auto col-9 col-md-5'>
                    <div className='Slide-img'>
                        <img className='img-fluid' alt='' src={require('../../../Assets/images/DashImage.png')} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Slider