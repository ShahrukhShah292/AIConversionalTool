import React from 'react'
import BannerComponent from '../../Utility/BannerComponent'
import WhyUs from '../Services/Components/WhyUs'

function WhyChooseUs() {
    return (
        <>
            <BannerComponent
                imageUrl={require('../../Assets/images/WhyUs1.png')}
                heading={'Why Choose Us'}
            />
            <WhyUs/>
        </>
    )
}

export default WhyChooseUs