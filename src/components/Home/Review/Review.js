import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Review = () => {
    /* <p className='text-warning'>{star}{star}{star}{star}{star}</p> */

    const star = <FontAwesomeIcon icon={faStar}/>
    return (
        <div className='d-flex align-items-center flex-column flex-lg-row justify-content-between pb-5'>
            <div>
                <img className='img-fluid' src="https://image.freepik.com/free-vector/client-review-web-screen-successful-5-star-business-opinion_1150-37481.jpg" alt="" />
            </div>
            <Carousel className='carousel w-75'>
            <Carousel.Item className='carousel-item' interval={1500}>
                <img
                className="d-block w-100"
                src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg"
                alt=""
                />
                <Carousel.Caption>
                <div className='bg-secondary rounded-pill'>
                <h3>Xavid</h3>
                <p className='text-warning'>{star}{star}{star}{star}{star}</p>
                <p>Great pacages with good pricing.</p>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item' interval={1500}>
                <img
                className="d-block w-100"
                src="https://image.freepik.com/free-photo/portrait-cheerful-excited-tablet-user-wearing-eyeglasses_1262-18272.jpg"
                alt=""
                />
                <Carousel.Caption>
                <div className="bg-secondary rounded-pill">
                <h3>Andrew Ron</h3>
                <p className='text-warning'>{star}{star}{star}{star}{star}</p>
                <p>Best deals. Good behaviour. Wish all the best</p>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item' interval={1500}>
                <img
                className="d-block w-100"
                src="https://image.freepik.com/free-photo/mand-holding-cup_1258-340.jpg"
                alt=""
                />
                <Carousel.Caption>
                <div className="bg-secondary rounded-pill">
                <h3>Stephen</h3>
                <p className='text-warning'>{star}{star}{star}{star}{star}</p>
                <p>Best guidance i have ever had</p>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            
        </div>      
    );
};

export default Review;

