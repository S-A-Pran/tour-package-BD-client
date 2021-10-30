import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" className='navbar' variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                <div className='p-1 bg-white rounded-circle border border-info'>
                <img
                    src="https://image.flaticon.com/icons/png/512/1223/1223457.png"
                    width="40"
                    height="40"
                    className="d-inline-block p-1 align-top"
                    alt="React Bootstrap logo"
                />
                </div>
            </Navbar.Brand>
            <Link to='/' className='text-decoration-none fw-bold'> <span className='fs-5 text-white title'>Holiday Guide</span> </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto fs-5">
                <Nav.Link className='text-white link' as={Link} to='/home'>Home</Nav.Link>
                <Nav.Link className='text-white link' as={Link} to='/blogs'>Blogs</Nav.Link>
                <Nav.Link className='text-white link' as={Link} to='/about'>About us</Nav.Link>
                <Nav.Link className='text-white link' as={Link} to='/contact'>Contact</Nav.Link>
                <Nav.Link className='text-white link' as={Link} to='/login'>Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;