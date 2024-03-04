import { Progress } from 'antd'
import React from 'react'

function ProgressBar() {
    return (
        <>
            <div className='col-12 col-xxl-3 col-lg-5 p-0 ps-md-2  paiChart-wrapper'>
                <div className='p-2 col-12  '>
                    <h1 className='text-center my-3'>Audience satisfaction</h1>
                    <div className='d-flex justify-content-center my-4 col-12'>
                        <Progress strokeWidth="10" strokeColor="#D9D9D9" trailColor="transparent" strokeLinecap="round" type="dashboard" percent={75.2} gapDegree={0} size={200} />
                    </div>
                    <p className='text-center col-12 col-md-10 pb-2 mx-auto'>0% Based on like / /disilikes 100%</p>

                    <div className=' col-12 col-md-10 mx-auto  Webinar-container'>

                        <h5>Webinars</h5>
                        <h6>Learn how you can earn more then 20% each month!</h6>
                        <p>Join our webinar and learn how to increase more
                            then 20% your monthly income.</p>

                        <button className='btn btn-dark bg-transparent '>Learn More</button>

                    </div>

                </div>
            </div >

        </>
    )
}

export default ProgressBar