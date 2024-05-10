import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  // Navigimi ne nje komponente tjeter
  const navigate = useNavigate();
  // Cdo input ka nje state ku do te ruhen informacionet
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  // State per shfaqen e gabimit
  const [error, setError] = useState("");
  const [alert, setAlert] = useState("");
  // Marrja e informacioneve nga input-et
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  // Funksioni qe do te perdoret per te kaluar te dhenat ne DB (user i ri)
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Disa validime nga frontend
    if (!newUser.username) {
      setError("Username should not be empty");
      setAlert("danger");
      return;
    }
    if (!newUser.email) {
      setError("Email should not be empty");
      setAlert("danger");
      return;
    }
    if (newUser.password.length < 8) {
      setError("Password should have at least 8 characters!");
      setAlert("danger");
      return;
    }
    // Therritja e apit
    await axios
      .post("http://localhost:5000/register/", newUser)
      .then((res) => {
        // Shfaq te dhenat - testim
        console.log(res.data);
        // Kalon tek komponenti login, nese regjistrimi ndodh me suksese
        navigate("/login");
      })
      // Nese nuk ndodh regjistrimi
      .catch((err) => {
        console.log("User not added " + err);
        setAlert("danger");
        setError("User not created");
      });
  };
  return (
    <Container className="my-5 w-75 mx-auto">
      {/* Therritja e funksionit */}
      {/* Cdo input duhet te kete atributin name, value dhe eventin onChange */}
      <Form className="mb-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="username"
            value={newUser.username}
            placeholder="Enter username"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="email"
            value={newUser.email}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleChange}
            value={newUser.password}
            placeholder="Enter password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <p>
          Have an account ? <a href="/login/">Login</a>
        </p>
        {/* Shfaqja e gabimeve */}
        <Alert variant={alert}>{error}</Alert>
      </Form>
    </Container>
  );
};
export default Register;
