import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Register= () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
   
      const  result = await response.json();
      console.log(result)
      // setToken(result.token);
      // console.log(result.token);
     
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <Container className="register-container">
      <h2 className="text-center">Register</h2>
      <Form className="register-form">
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Username" />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="register-button"
            onClick={handleSubmit}>
          Submit
        </Button>
        {error && <p>{error}</p>}
      </Form>
      <p className="text-center">
        Have an account? <Link to="/login">Login</Link>
      </p>
    </Container>
  );
};

export default Register;