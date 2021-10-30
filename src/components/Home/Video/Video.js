import React from 'react';

const Video = () => {
    return (
        <div>
            <h3 className='header py-5 fw-bold'>Watch & Decide</h3>
            <div className='row text-white'>
                <div className="embed-responsive embed-responsive-21by9 col-12 col-lg-4">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/sdAJkJmgbJg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p className='fs-5 fw-bold px-2 text-center navbar w-50 rounded'>Sajek Valy</p>
                </div>

                <div className="embed-responsive embed-responsive-21by9 col-12 col-lg-4">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/JeyPLwsq0K8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p className='fs-5 fw-bold px-2 text-center navbar w-50 rounded'>Bandarban</p>
                </div>

                <div className="embed-responsive embed-responsive-21by9 col-12 col-lg-4">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/yCMhvSU2e6o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p className='fs-5 fw-bold px-2 text-center navbar w-50 rounded'>Sylhet</p>
                </div>

                <div className="embed-responsive embed-responsive-21by9 col-12 col-lg-4">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/yxU_N394YsA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p className='fs-5 fw-bold px-2 text-center navbar w-50 rounded'>Keokradong</p>
                </div>

                <div className="embed-responsive embed-responsive-21by9 col-12 col-lg-4">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/HWRQk7ubBnY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p className='fs-5 fw-bold px-2 text-center navbar w-50 rounded'>Debotakhum</p>
                </div>

                <div className="embed-responsive embed-responsive-21by9 col-12 col-lg-4">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/yTzS4rZIaq4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p className='fs-5 fw-bold px-2 text-center navbar w-50 rounded'>Saint Martin</p>
                </div>
                
            </div>
        </div>
    );
};

export default Video;