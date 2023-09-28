import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Home = ({token}) => {
  return (
    <Container className="home-container">
      <h2 className="text-center">Welcome to Our Store</h2>
      {!token && <p className="text-center">Please log in to continue.</p>}
      {token && <p className="text-center">Take a look at our products!.</p>}
      <div className="text-center">
      {!token && <Link to="/login" className="home-login-button"><Button variant="primary">Login</Button></Link>}
      {token && <Link to="/products" className="home-login-button"><Button variant="primary">Products</Button></Link>}
      </div>
    </Container>
  );
};

export default Home;