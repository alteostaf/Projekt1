import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'
const NavigationBar = () => {
    return (
     <div className="test">
        <Navbar expand="lg" className="bg-transparent">
            <Container>
                <Navbar.Brand href="#home">Travel Simplyfied</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        
                       <Nav.Link href="/">HOW IT WORKS</Nav.Link>
                       <Nav.Link href="/">START PLANNING</Nav.Link>
                       <Nav.Link href="/">BLOG</Nav.Link>
                       <Nav.Link href="/">REVIEWS</Nav.Link>
                       <Nav.Link href="/">CONTACT</Nav.Link>
                        
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/create">Create</Nav.Link>
                        <Nav.Link href="/ContactForm">Contact</Nav.Link>
                        <Nav.Link href="/ReadAll">Read All</Nav.Link>
                        


                        <NavDropdown title="Register" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Log In</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Sing Up</NavDropdown.Item>
                            <NavDropdown.Divider />
                            
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </div>  
    )
}

export default NavigationBar