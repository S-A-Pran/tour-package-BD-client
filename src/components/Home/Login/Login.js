import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hook/useAuth';
import './Login.css';

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect = location?.state?.from || "/home";
    const { setUser, googleSignIn, setIsLoading } = useAuth();
    const google = <FontAwesomeIcon icon={faGoogle}/>
    const signin = <FontAwesomeIcon icon={faSignInAlt}/> 
    const userIcon = <FontAwesomeIcon icon={faUserCircle}/> 

    console.log(redirect);
    const googleLogin = () =>{
        googleSignIn()
        .then((result) => {
            const user = result.user;
            setUser(user);
            console.log(result.user);
            history.push(redirect);
        }).catch((error) => {
            alert(error.message)
        })
        .finally(setIsLoading(false))
    }


    return (
        <div className='container d-flex flex-column flex-lg-row justify-content-between align-items-center p-2'>
            <div className='order-2 order-lg-1'>
                <img className='img-fluid' src="https://image.freepik.com/free-vector/account-concept-illustration_114360-399.jpg" alt="" />
            </div>
            <div className='login text-center p-5 text-white rounded-pill order-1 order-lg-2'>
                <span className='fs-1 fw-bolder'>{userIcon}</span>
                <h4 className='fw-bold fs-2'>Please Login</h4>
                <p>Hello. Login yourself to explore us.</p>
                <br />
                <button onClick={googleLogin} className='btn btn-warning'><span className='text-danger'>{google}</span> Log in with Google {signin}</button>
            </div>
        </div>
    );
};

export default Login;