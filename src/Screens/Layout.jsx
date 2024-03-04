// UserLayoutScreen.jsx

import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../Utility/Navigation';
import ContactUs from './ContactUs/ContactUs';
import CookiePolicy from './CookiePolicy/CookiePolicy';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import Services from './Services/Services';
import TermsConditions from './Terms&Conditions/TermsConditions';
import WhyChooseUs from './Why Us/Whyus';
import Aboutus from './aboutus/aboutus';
import Ifooter from './ifooter/ifooter';
import Home from './HomePage/Home';

function UserLayoutScreen() {
    return (
        <div className='main-wrapper'>
            <Layout>
                <div><Navigation /></div>
                <Content>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/About" element={<Aboutus />} />
                        <Route path="/Services" element={<Services />} />
                        <Route path="/Why Choose Us" element={<WhyChooseUs />} />
                        <Route path="/Contact" element={<ContactUs />} />
                        <Route path="/Terms&Conditions" element={<TermsConditions />} />
                        <Route path="/CookiePolicy" element={<CookiePolicy />} />
                        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                    </Routes>
                </Content>
                <div ><Ifooter /></div>
            </Layout>
        </div>
    );
}

export default UserLayoutScreen;
