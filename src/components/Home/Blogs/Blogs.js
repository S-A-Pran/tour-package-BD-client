import React from 'react';
import { Spinner } from 'react-bootstrap';
import useBlogs from '../../../Hook/useBlogs';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const blogs = useBlogs();
    if(!blogs){
        return <Spinner animation="grow" variant="danger" />
    }
    return (
        <div className='container'>
            <h3 className='header py-5'>Read & Explore</h3>
            <div className='row row-cols-1 row-cols-md-3 g-4 pb-5'>
                    {
                        blogs.map(blog => <Blog key={blog.title} blog={blog}></Blog>)
                    }
            </div>
        </div>
    );
};

export default Blogs;