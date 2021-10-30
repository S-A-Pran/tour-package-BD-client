import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Login.css';

const Login = () => {
    const google = <FontAwesomeIcon icon={faGoogle}/>
    const signin = <FontAwesomeIcon icon={faSignInAlt}/> 
    return (
        <div className='container d-flex justify-content-between align-items-center'>
            <div>
                <img src="https://image.freepik.com/free-vector/account-concept-illustration_114360-399.jpg" alt="" />
            </div>
            <div className='login p-5 text-white rounded-pill'>
                <span className='fs-1'>{signin}</span>
                <h4 className='fw-bold fs-2'>Please Login</h4>
                <br />
                <p>Hello. Login yourself to explore us.</p>
                <button  className='btn btn-warning'><span className='text-danger'>{google}</span> Log in with Google</button>
            </div>
        </div>
    );
};

export default Login;