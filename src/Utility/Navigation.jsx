/* eslint-disable no-undef */
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/esm/NavLink';
import { Link, useLocation } from 'react-router-dom';




function Navigation() {
    const [isSticky, setSticky] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;

            // Adjust the offset value based on your design
            if (offset > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Scroll to the top when the route changes
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <div className={`Header-Navigation ${isSticky ? 'sticky' : ''}`}>
            <Navbar expand="lg">
                <Container fluid className="p-0">
                    <Navbar.Brand as={Link} to="/">
                        <img src={require(isSticky ? "../Assets/images/Logo.png" : "../Assets/images/Logo Light.png")} alt="" className='logo img-fluid' />
                    </Navbar.Brand>

                    <div className="d-block d-lg-none ms-auto me-2 signButtons">
                        <Button as={Link} to="/signin" variant="light" className="mx-1">Sign In</Button>
                        <Button as={Link} to="/signup" variant="outline-light" className="">Sign Up</Button>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto custom-nav-items">
                            <NavLink as={Link} to="/" activeClassName="active">Home</NavLink>
                            <NavLink as={Link} to="/About" activeClassName="active">About Us</NavLink>
                            <NavLink as={Link} to="/Services" activeClassName="active">Services</NavLink>
                            <NavLink as={Link} to="/Why Choose Us" activeClassName="active">Why Choose Us</NavLink>
                            <NavLink as={Link} to="/Contact" activeClassName="active">Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="d-none d-lg-block ms-5 signButtons">
                        <Button as={Link} to="/signin" variant="light" className=" mx-3">Sign In</Button>
                        <Button as={Link} to="/signup" variant="outline-light" className="">Sign Up</Button>
                    </div>
                </Container>
            </Navbar>
        </div>



    );
}

export default Navigation;
