import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe, faMapMarked, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    const facebook = <FontAwesomeIcon icon={faFacebook}/>
    const phone = <FontAwesomeIcon icon={faPhone}/>
    const mobile = <FontAwesomeIcon icon={faMobile}/>
    const tweeter = <FontAwesomeIcon icon={faTwitter}/>
    const envelop = <FontAwesomeIcon icon={faEnvelope}/>
    const web = <FontAwesomeIcon icon={faGlobe}/>
    const map = <FontAwesomeIcon icon={faMapMarked}/>

    return (
        <div>
            <div className='map'>
            <img src="https://whereismap.net/wp-content/uploads/2019/12/Where-is-Dhaka-Located-What-Country-is-Dhaka-in-Dhaka-Map-800x445.jpg" alt="" />
            </div>
            <Container className='pb-4'>
            <h3 className='header py-lg-5'>Contact Us</h3>
            <div className='row'>
                <div className='col-12 col-lg-3'>We are serving from more than 15 years. We gained our fame by our services. Packages at reasonable cost is our goal. Keep with us. Grab your favourite pack.</div>
                <div className='col-12 col-lg-3'>
                    <h5>Address</h5>
                    <p>{map} 214/12, Banani model Town, Fateh Tower, Floor-4, street-8, Dhaka, Bangladesh</p>
                </div>
                <div className='col-12 col-lg-3'>
                    <h5>Contact Info</h5>
                    <p>{phone} 81132132</p>
                    <p>{mobile} +88464684226</p>
                    <p>{envelop} holidayguide@gmail.com</p>
                    <p></p>
                </div>
                <div className='col-12 col-lg-3'>
                    <h5>Websites</h5>
                    <p>{web} www.holidayGuide.com</p>
                    <p>{facebook} facebook.com/holidayguide</p>
                    <p>{tweeter} holidayguide</p>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default Contact;