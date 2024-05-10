import React, { useState, useContext } from 'react'
import { UserContext } from "./UserContext";
import { Container, Form, Button, Alert } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const LogIn = () => {
const { setUserInfo } = useContext(UserContext);
const nav = useNavigate()
const [userLog, setUserLog] = useState({
email: "",
password: ""
})
const handleChange = (e) => {
setUserLog({ ...userLog, [e.target.name]: e.target.value })
}
const [error, setError] = useState("")
const [alert, setAlert] = useState("")
const handleSubmit = async (e) => {
e.preventDefault();
if (!userLog.email) {
setError('Email should not be empty');
setAlert("danger")
return;
}
if (userLog.password.length < 8) {
setError('Password should have at least 8 characters!');
setAlert("danger")
return;
}
await axios.post('http://localhost:5000/login/', userLog, {
withCredentials: true  
})
.then((res) => {
console.log(res.data);
setUserInfo(res.data);
nav('/')
})
.catch(err => {
console.log("User not login", err);
setAlert('danger');
if (err.res && err.res.status === 404 && err.res.data === 'User not found') {
setError('Incorrect email. Please check your email and try again.');
} else {
setError('Login failed. Please check your credentials and try again.');
}
});
};
return (
<Container className="my-5">
{/* Therritja e funksionit */}
{/* Cdo input duhet te kete atributin name, value dhe eventin onChange */}
<Form className="mt-5 w-75 mx-auto" onSubmit={handleSubmit}>
<Form.Group className="mb-3">
<Form.Label>Email</Form.Label>
<Form.Control
type="email"
onChange={handleChange}
name="email"
value={userLog.email}
placeholder="Enter email"
/>
</Form.Group>
<Form.Group className="mb-3">
<Form.Label>Password</Form.Label>
<Form.Control
type="password"
name="password"
onChange={handleChange}
value={userLog.password}
placeholder="Enter password"
/>
</Form.Group>
<Button variant="primary" type="submit">
Login
</Button>
</Form>
<p className='w-75 mt-3 mx-auto'>
Dont have an account ? <a href="/register">Register</a>
</p>
{/* Shfaqja e gabimeve */}
<Alert variant={alert} className='w-75 mt-3 mx-auto'>
{error}
</Alert>
</Container>
)
}
export default LogIn