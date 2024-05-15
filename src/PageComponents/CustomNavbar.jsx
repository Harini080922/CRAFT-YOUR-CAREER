import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './css/PageComponents.css';
import Logo from './cyc_logo.jpg'; // Import your logo image

export default class CustomNavbar extends Component {
    render() {
        var containLink = "/details";
        return (
            <>
                <Navbar expand="lg" className="navbar">
                    <Navbar.Brand as={Link} to="/home" className="text-light">
                        <img src={Logo} alt="Logo" className="logo-image" /> {/* Use your logo here */}
                        Resume Maker
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link className="pr-4 my-1 navlink" to="/home">Home</Link>
                            <Link className="pr-4 my-1 navlink" to={"/resume" + containLink}>Resume</Link>
                            <Link className="pr-4 my-1 navlink" to="/about">About</Link>
                            <Link className="pr-4 my-1 navlink" to="/contact">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}
