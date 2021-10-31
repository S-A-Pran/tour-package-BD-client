import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
        <div className='row py-3'>
            <div className='col-12 col-lg-6'>
            <img className='img-fluid' src="https://image.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg" alt="" />
            </div>
            <div className='col-12 col-lg-6 my-auto'>
                <div>
                    <div className='mx-auto navbar rounded-circle w-25 p-2'>
                    <img className='rounded-circle img-fluid' width='200px' src="https://icon-library.com/images/contact-image-icon/contact-image-icon-2.jpg" alt="" />
                    </div>

                    <p className='py-2'>We appreviate your interest to inquiry about us. It seems like you are aware enough. An awared citizen. Tour always heals our mind. Its like thirst. But managing a tour needs many works to do. To ease that we are offering our packages. We will arrange everything with proper security.</p>
                    <div className='d-flex justify-content-end'>
                    <small className='fw-bold'>- CEO <br /> Bachelor in <br /> Tourism & Hospitality Dept <br /> Colombia Unuversity </small>
                    </div>
                </div>
            </div>
        </div>
        </Container>
    );
};

export default About;