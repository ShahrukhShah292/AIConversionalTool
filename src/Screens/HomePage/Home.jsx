import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import AiBased from './Components/AiBased';
import Creater from './Components/Creater';
import Customer from './Components/Customer';
import Feature from './Components/Feature';
import GetInTouch from './Components/GetInTouch';
import ManageSoftware from './Components/ManageSoftware';
import NewsLetter from './Components/NewsLetter';
import Pricing from './Components/Pricing';
import Slider from './Components/Slider';

function Home() {
  return (
    <>
      <div>
        <Slider />
        <AiBased />
        <Feature />
        <ManageSoftware />
        <Pricing />
        <Customer/>
        <NewsLetter />
        <Creater />
        <GetInTouch />
      </div>
    </>
  )
}

export default Home