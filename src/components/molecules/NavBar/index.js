import React from 'react'
import * as b from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <b.Navbar bg="dark" expand="lg">
            <b.Navbar.Brand style={{ color: 'white' }} href="#home"><b>BACKEND</b> JOBS</b.Navbar.Brand>
            <b.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <b.Navbar.Collapse id="basic-navbar-nav">
                <b.Nav className="mr-auto">
                <b.Nav.Link style={{ color: 'white' }} as={Link} to="/">Home</b.Nav.Link>
                <b.Nav.Link style={{ color: 'white' }} as={Link} to="/submit">Submit</b.Nav.Link>
                <b.Nav.Link style={{ color: 'white' }} as={Link} to="/about">About</b.Nav.Link>
                </b.Nav>
            </b.Navbar.Collapse>
        </b.Navbar>
    )
}

export default NavBar