import { Button } from 'antd';
import React from 'react';
import BannerComponent from '../../Utility/BannerComponent';


function aboutus() {
  return (
    <>
      <div>
        <div></div>
        <BannerComponent
                    imageUrl={require('../../Assets/images/about-us-bg-section-1.png')}
                    heading={'About Us'}
                />
        <div className='about-us-s2'>
          <div className='about-us-s2-container'>
            <div className='about-us-s2-container-left '>
              <img src={require('../../Assets/images/about-us-s2-left.png')} alt='' />
            </div>
            <div className='about-us-s2-container-right  '>
              <div>
                <h5 style={{ color: '#37ACFD' }}>Best Ai Business Manage Software</h5>
                <h1>About Us</h1>
                <p>Welcome to AI Conversational, where we pioneer AI-based software solutions designed to revolutionize the way businesses operate. Our cutting-edge technology empowers companies of all sizes to have their own digital entity or AI employee, streamlining processes and enhancing operational efficiency.</p>
                <Button ghost className='about-us-s2-container-right-btn'>Learn More</Button>
              </div>
            </div>
          </div>
        </div>
        <div className='about-us-s3'>
          <div>
            <p className='about-us-s3-dark_highlighted_head'>Best Ai Business Manage Software</p>
          </div>
          <div className='about-us-s3-heading'>
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt labore dolore magna<br /> aliquyam erat sed diam voluptua.</p>
          </div>
          <div className='about-us-s3-lower'>
            <dl style={{ margin: '15px' }}>
              <dt>1 - Tailored Solutions : Our AI software is crafted for every company, ensuring a personalized and effective digital experience.</dt>
              <dt>2 - Customization : We understand that each business is unique. Our software is highly customizable, allowing it to serve as a digital employee, taking on specific tasks and responsibilities to alleviate the workload on your team.</dt>
              <dt>3 - Industry-Based Solutions :</dt>
              <dd>(a) Recruitment Assistance : Upload CVs and job descriptions effortlessly. Our software matches them with a recruiter-friendly UI, potentially integrating with widely used CRMs and applications in the recruitment space.</dd>
              <dd>(b) Candidate Vetting : Conduct user-facing questioning and vetting of candidates through an intuitive dashboard.</dd>
              <dt>4 - Feature-Based Solutions :</dt>
              <dd>(a) Customer Service Bot : Conduct user-facing questioning and vetting of candidates through an intuitive dashboard.</dd>
              <dt>5 - Application-Based Solutions :</dt>
              <dd>(a) Contextual Learning : Integrate our software into your team's workflow for general chatbot interactions and contextual learning. Explore basic features for free, similar to the cap integrations offered by platforms like Slack, before opting for the Pro version.</dd>
              <dt>6 - Solution-Based Management :</dt>
              <dd>(a) Increased Productivity : Our AI-based solution facilitates multiple application management, leading to improved productivity across various business functions.</dd>
              <dt>Why Choose [Your Company Name] AI Solutions?</dt>
              <dd>1 - Innovation : We are committed to staying at the forefront of AI technology, bringing you innovative solutions that adapt to your business needs.</dd>
              <dd>2 - Customization : Our software is not one-size-fits-all. We understand the uniqueness of each business and provide customizable solutions for optimal results.</dd>
              <dd>3 - Efficiency : By leveraging our AI solutions, businesses can significantly enhance their operational efficiency, reduce workload, and deliver quicker, more concise customer service.</dd>
              <dt>Join us on the journey to reshape the future of business operations with intelligent, customizable, and efficient AI solutions at [Your Company Name]. Your success is our priority.</dt>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

export default aboutus
