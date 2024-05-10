import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const ContactForm = () => {
  const [newItem, setNewItem] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
   
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(newItem).forEach(([key, value]) => {
      formData.append(key, value);
    });
    try {
      await axios.post("http://localhost:5000/create", formData);
      console.log("Added");
    } catch (error) {
      console.log("error" + error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" value={newItem.email} onChange={handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" value={newItem.password} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
