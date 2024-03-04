import React from 'react'
import LineChart from './Charts/LineChart'
import PopularEpisodes from './Charts/ListOfPodcast'


function ChartInfo() {
    return (
        <>
            <div className='col-12 col-xxl-9 col-lg-7 pe-md-5'>
                <div className="number-card col-11 col-lg-3 col-md-5 my-4 p-0">
                    <div className=" bg-transparent">
                        <h2 className="">Audience</h2>
                        <h5 className="my-2">3,874</h5>
                        <div className='col-12 d-flex justify-content-start align-items-center'>
                            <img className='d-block img-fluid' src={require('../../Assets/images/element13.png')} alt="" />
                            <p className="px-2">+44.54%<span className='text-white'>  For Last 7 days</span></p>
                        </div>
                    </div>
                </div>
                <div className='my-5 ' style={{ height: "300px" }}>

                <LineChart />
                </div>
                <div>
                <PopularEpisodes />
                </div>

                
                

            </div>
        </>

    )
}


export default ChartInfo