import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import "./Header.css";

const Header = () => {
    const logout = <FontAwesomeIcon icon={faSignOutAlt}/>
    const {user, logOut} = useAuth();
    const { displayName, photoURL} = user;
    const name = displayName?.split(' '); 
    console.log(photoURL);
    let style = 'ms-auto fs-5 d-flex align-items-center';
    if(user.email){
        style = 'ms-auto fs-6 d-flex align-items-center'
    }


    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" className='navbar' variant="dark">
            <Container>
            <Navbar.Brand>
                <Link to='/'>
                <div className='p-1 bg-white rounded-circle border border-info'>
                <img
                    src="https://image.flaticon.com/icons/png/512/1223/1223457.png"
                    width="40"
                    height="40"
                    className="d-inline-block p-1 align-top"
                    alt="React Bootstrap logo"
                />
                </div>
                </Link>
            </Navbar.Brand>
            <Link to='/' className='text-decoration-none fw-bold'> <span className='fs-5 text-white title'>Holiday Guide</span> </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className={style}>
                <Nav.Link className='text-white link' as={Link} to='/home'>Home</Nav.Link>
                <Nav.Link className='text-white link' as={Link} to='/blogs'>Blogs</Nav.Link>
                <Nav.Link className='text-white link' as={Link} to='/about'>About_Us</Nav.Link>
                <Nav.Link className='text-white link' as={Link} to='/contact'>Contact</Nav.Link>
                {
                    user?.email && <Nav.Link className="text-white link" as={Link} to='/manageallorders'>Manage_All_Orders</Nav.Link>
                }
                {
                    user?.email && <Nav.Link className="text-white link" as={Link} to='/addnewplan'>Add_New_Plan</Nav.Link>
                }
                {
                    user?.email && <Nav.Link className="text-white link" as={Link} to='/myorders'>My_Orders</Nav.Link>
                }
                {
                    !user?.email ? <Nav.Link className='text-white link' as={Link} to='/login'>Login</Nav.Link> : <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex mx-2 align-items-center bg-success rounded-pill p-1'>
                        <img height='40px' width="40px" className="rounded-circle" src={photoURL} alt={name[0]} />
                        <span className='fs-6 px-2 text-white'> {name[0]}</span>
                        </div>
                        <Link to="/"><button onClick={logOut} className='btn btn-dark rounded-pill'>Logout {logout}</button></Link>
                    </div>
                }
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;