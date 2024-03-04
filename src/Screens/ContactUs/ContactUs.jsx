import React from 'react'
import BannerComponent from '../../Utility/BannerComponent'
import JoinOurNetwork from './joinournetwork'

function ContactUs() {
    return (
        <>
            <BannerComponent
                imageUrl={require('../../Assets/images/ContactUsBG.png')}
                heading={'Contact Us'}
            />
            <JoinOurNetwork/>


        </>
    )
}

export default ContactUs