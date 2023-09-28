import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { loginUser } from '../API';



const Login = ({token, setToken}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick(event) {
    event.preventDefault();
      const token = await loginUser(username, password); // Use the loginUser function
      setToken(token);
      localStorage.setItem('token', token);
      navigate('/products'); 
  }
  console.log('Token After Login:' + token);
  if (token) {
    navigate('/products');
  } 

  return (
    <Container className="login-container">
      <h2 className="text-center">Login</h2>
      <Form className="login-form">
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>

        <Button 
          variant="primary" 
          type="submit" 
          className="login-button"
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


