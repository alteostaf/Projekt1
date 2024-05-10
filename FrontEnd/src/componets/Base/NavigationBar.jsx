import React from 'react'
import {Container, Nav, Navbar,} from 'react-bootstrap';
import { UserContext } from '../Auth/UserContext';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useContext } from 'react';


const NavigationBar = () => {
   
    const nav = useNavigate()
// Do te perdoret per te mbajtur dhe ndryshuar info per user e loguar
const { userInfo, setUserInfo } = useContext(UserContext);
// Merr info nga backend per user-in e loguar
useEffect(() => {
if (!userInfo.email) {
axios.get('http://localhost:5000/user/', {
withCredentials: true,
})
.then(res => {
setUserInfo(res.data);
})
.catch(err => {
console.error('Error fetching user data:', err);
});
}
},
// useEffect do te therritet sa here qe behet nje ndryshim tek UserContext
[userInfo, setUserInfo]);
// Funksioni log out, fshin informacionet na UserContext
const handelLogout = () => {
// { withCredentials: true } kalon cookies me ane te kerkese (perdoret per token qe eshte

axios.post('http://localhost:5000/logout', null, { withCredentials: true })
.then(res => {
// Fshin te dhenat nga UserContext
setUserInfo({});
// Kalon te komponenti i login
nav('/login');
})
// Nese nuk ndodh logout
.catch(error => {
console.error('Error logging out:', error);
});
}

    return (
     <div className='test'>
        <Navbar expand="lg" className="bg-transparent" style={{backgroundColor:'transparent'}}>
            <Container>
                <Navbar.Brand href="/">Travel Simplyfied</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        
                       <Nav.Link href="/">HOW IT WORKS</Nav.Link>
                       <Nav.Link href="/">START PLANNING</Nav.Link>
                       <Nav.Link href="/">BLOG</Nav.Link>
                       <Nav.Link href="/">REVIEWS</Nav.Link>
                       <Nav.Link href="/Contact">CONTACT</Nav.Link>

            {/* Nese user-i eshte i logur do te shfaqen create dhe logout */}
            {userInfo.email ? <>
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/create">Update</Nav.Link>

              <Nav.Link onClick={handelLogout}>Logout ({userInfo.email})</Nav.Link>
            </> : <>
              {/* Perndryshe do te shfaqen register dhe login */}
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </>}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
       
      </div>  
    )
}

export default NavigationBar