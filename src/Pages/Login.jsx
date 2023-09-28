import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        'https://fakestoreapi.com/auth/login',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password
           }
    )
        }
      );
      const result = await response.json();
      console.log(result)
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <Container className="login-container">
      <h2 className="text-center">Login</h2>
      <Form className="login-form">
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Username" />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="login-button"
            onClick={handleClick}>
          Login
        </Button>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
      </Form>
      <p className="text-center">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </Container>
  );
};

export default Login;


