import React from 'react';
import { Container } from 'react-bootstrap';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import Video from '../Video/Video';

import './Home.css';

const Home = () => {
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <Container>
            <Video></Video>
            </Container>
        </div>
    );
};

export default Home;