import { faCcAmazonPay, faCcApplePay, faCcMastercard, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarked, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const useEmail = useRef(null);
    const masterCard = <FontAwesomeIcon icon={faCcMastercard}></FontAwesomeIcon>
    const amazonPay = <FontAwesomeIcon icon={faCcAmazonPay}></FontAwesomeIcon>
    const applePay = <FontAwesomeIcon icon={faCcApplePay}></FontAwesomeIcon>
    const visa = <FontAwesomeIcon icon={faCcVisa}></FontAwesomeIcon>
    const phone = <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
    const mail = <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
    const nav = <FontAwesomeIcon icon={faMapMarked}></FontAwesomeIcon>

    const handleClick = () =>{
        const value = useEmail.current.value;
        alert(`${value}, Thank you for subscribe us`);
        useEmail.current.value = null;
    }

    return (
        <div className='footer-bg'>
            <div className='footer p-3 text-white d-flex flex-column  flex-lg-row justify-content-center justify-content-lg-evenly align-items-lg-start'>
            <div>
                <h3>Holiday Guide</h3>
                <p>We keep our words. Our customers are our gem. <br /> One good review can enrich our motivation. keep with us.</p>
                <div className="input-group mb-3">
                    <input ref={useEmail} type="text" className="form-control" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button onClick={handleClick} className="btn btn-dark" type="button" id="button-addon2">Subscribe</button>
                </div>
                <hr />
                <div className='fs-2 d-flex justify-content-evenly'>
                    <span className='bg-white p-1 rounded-circle px-2 text-success'>{masterCard}</span>
                    <span className='bg-white p-1 rounded-circle px-2 text-info'>{visa}</span> 
                    <span className='bg-white p-1 rounded-circle px-2 text-primary'>{amazonPay}</span>
                    <span className='bg-white p-1 rounded-circle px-2 text-dark'>{applePay}</span>
                </div>
            </div>
            <div>
                <h3 className='text-decoration-underline'>Navigation</h3>
                <div className='d-flex flex-column'>
                <Link className='link text-decoration-none text-white' to='/home'>Home</Link>
                <br />
                <Link className='link text-decoration-none text-white' to='/blogs'>Blogs</Link>
                <br />
                <Link className='link text-decoration-none text-white' to='/about'>About us</Link>
                <br />
                <Link className='link text-decoration-none text-white' to='/contact'>Contact</Link>
                </div>
            </div>
            <div>
                <h3>Need Help?</h3>
                <br />
                <div className='border-start ps-1'>
                    <h5>{phone} +88844785522</h5>
                    <p>{mail} holidayguide@gmail.com</p>
                    <p>{nav} banani model town, dhaka</p>
                </div>
            </div>     
        </div>
        <hr />
        <h4 className='text-muted text-center pb-3'>&copy; SAP (2021-2030)</h4>
        </div>
    );
};

export default Footer;