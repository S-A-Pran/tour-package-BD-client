import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useBlogs from '../../../Hook/useBlogs';
import Blog from '../Blog/Blog';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import Plans from '../Plans/Plans';
import Review from '../Review/Review';
import Video from '../Video/Video';

import './Home.css';

const Home = () => {
    const blog = useBlogs();
    const updateBlog = blog.splice(0,3);

    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <Container>
            <h3 className='header py-5'>Tour Plans</h3>
            <Plans></Plans>
            <div className='d-flex justify-content-between py-5'>
            <h3 className='header'>Blogs</h3>
            <Link to='/blogs'><button className='btn btn-danger'>See More</button></Link>
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-4 pb-5'>
            {
                updateBlog.map(b => <Blog key={b.title} blog={b}></Blog>)
            }
            </div>
            <Video></Video>
            <h3 className='header py-5'>Proud Reviews</h3>
            <Review></Review>
            </Container>
        </div>
    );
};

export default Home;