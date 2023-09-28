import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <Container className="home-container">
      <h2 className="text-center">Welcome to Our Store</h2>
      <p className="text-center">Please log in to continue.</p>
      <div className="text-center">
        <Link to="/login" className="home-login-button">
          <Button variant="primary">Login</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Home;