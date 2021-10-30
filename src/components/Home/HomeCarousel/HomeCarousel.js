import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeCarousel = () => {
    return (
        <div>
            <Carousel className='carousel'>
            <Carousel.Item className='carousel-item' interval={1500}>
                <img
                className="d-block w-100"
                src="https://image.freepik.com/free-photo/tourist-from-mountain-top-sun-rays-man-wear-big-backpack-against-sun-light_1150-9129.jpg"
                alt=""
                />
                <Carousel.Caption>
                <h3>Explore The Beauty</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item' interval={1500}>
                <img
                className="d-block w-100"
                src="https://image.freepik.com/free-photo/tourist-couple-outside-with-backpacks_23-2148619888.jpg"
                alt=""
                />
                <Carousel.Caption>
                <h3>Best Couple Package</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item' interval={1500}>
                <img
                className="d-block w-100"
                src="https://image.freepik.com/free-photo/bag-beach-accessories-kept-sand_1252-475.jpg"
                alt=""
                />
                <Carousel.Caption>
                <h3>Heal Your Soul</h3>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeCarousel;