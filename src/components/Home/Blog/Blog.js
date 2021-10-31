import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import './Blog.css';

const Blog = ({blog}) => {
    const eye = <FontAwesomeIcon icon={faEye}/>

    const {title, img, detail, link, by} = blog;
    return (
        <div className='col'>
            <div className="card h-100">
            <img height='300px' src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6><span className='text-muted'>by:</span><span className='text-primary'> {by}</span></h6>
                    <p className="card-text">{detail}</p>
                </div>
                <div className='d-flex justify-content-end p-2'>
                    <a target='_blank' rel="noopener noreferrer" className='text-primary link text-decoration-none' href={link}>{eye} see more...</a>
                </div>
            </div>
        </div>
    );
};

export default Blog;