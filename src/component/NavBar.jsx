

// const NavBar = ({cart, setCart}) => {
//     function deleteItem(id) {
//     // Find the item in the cart
//     const itemToDelete = cart.find(item => item.id === id);

//     if (itemToDelete) {
//       if (itemToDelete.quantity > 1) {
//         // If the item quantity is greater than 1, decrement the quantity
//         itemToDelete.quantity -= 1;
//         setCart([...cart]); // Update the cart with the modified item
//       } else {
//         // If the item quantity is 1, remove the item from the cart
//         const updatedCart = cart.filter(item => item.id !== id);
//         setCart(updatedCart);
//         }
//     }
// }

// return (
//     <div className="navbar">
//       <h2>The Cart:</h2>
//       <ul>
//         {cart.map(item => (
//           <li key={item.id}>
//             {item.title} ${item.price}
//             <span onClick={() => deleteItem(item.id)}>❌</span>
//             <span>{item.quantity}</span>
//           </li>
//         ))}
//       </ul>
//       <p>Total = {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
//     </div>
//   );
// };

// export default NavBar;

// import React, { useState } from 'react';
// import CartDropdown from './CartDropdown'; // Import the CartDropdown component

// const NavBar = ({ cart, removeFromCart }) => {
//   const [showCart, setShowCart] = useState(false); // State to manage the cart dropdown visibility

//   return (
//     <div className="navbar">
//       <h1>Your Online Store</h1>
//       {/* Add a button to toggle the cart dropdown */}
//       <button onClick={() => setShowCart(!showCart)}>Cart ({cart.length})</button>

//       {/* Render the cart dropdown conditionally */}
//       {showCart && <CartDropdown cart={cart} removeFromCart={removeFromCart} />}
//     </div>
//   );
// };

// export default NavBar;

// import React, { useState } from 'react';
// import CartDropdown from './CartDropdown'; // Import the CartDropdown component
// import { Link } from 'react-router-dom'; // Import Link for routing

// const NavBar = ({ cart, removeFromCart }) => {
//   const [showCart, setShowCart] = useState(false); // State to manage the cart dropdown visibility

//   return (
//     <div className="navbar">
//       <div className="navbar-left">
//         <h1>Your Online Store</h1>
//         <nav>
//           <ul>
//             <li><Link to="/">Products</Link></li>
//             <li><Link to="/login">Login</Link></li>
//             <li><Link to="/register">Register</Link></li>
//             <li><Link to="/profile">Profile</Link></li>
//           </ul>
//         </nav>
//       </div>
//       <div className="navbar-right">
//         {/* Add a button to toggle the cart dropdown */}
//         <button onClick={() => setShowCart(!showCart)}>Cart ({cart.length})</button>
//         {/* Render the cart dropdown conditionally */}
        // {showCart && <CartDropdown cart={cart} removeFromCart={removeFromCart} />}
//       </div>
//     </div>
//   );
// };

// export default NavBar;

import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartDropdown from './CartDropdown'; // Import the CartDropdown component
import { useCart } from "../component/CartContext";
import cartImage from '../images/shopping-cart.png';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavBar = ({token, setToken}) => {
  const navigate = useNavigate();
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false);
  const { cart, removeItemFromCart } = useCart();

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
 
  const toggleCartDropdown = () => {
    setCartDropdownOpen(!cartDropdownOpen); // Toggle the dropdown visibility
  };

  function logout(){
    setToken(null);
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Navbar.Brand href="/" style={{ marginLeft: '20px', fontSize:'25px' }}>Fake Store LOL</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {token && <Nav.Link href="/products" style={{ marginLeft: '50px'}}>Products</Nav.Link>}
          {token && <Nav.Link href="/profile">Profile</Nav.Link>}
          {!token && <Nav.Link href="/login" >Login</Nav.Link>}
          {!token && <Nav.Link href="/register" style={{ marginRight: '20px'}}>Register</Nav.Link>}       
        </Nav>
          {token && <Nav className='navbar-logout-button'><Button onClick={logout}>Logout</Button></Nav>}
          <NavDropdown title={       
              <span>
                <img src={cartImage} alt="Cart" style={{ marginRight: '10px', maxWidth:'20px'}} />
                {totalQuantity}
              </span>    
          } 
          id="basic-nav-dropdown"
          show={cartDropdownOpen} onClick={toggleCartDropdown} 
          style={{ marginRight: '0px', marginLeft: 'auto', paddingRight: '2em'}}>
          <CartDropdown cart={cart} removeFromCart={removeItemFromCart} />
        </NavDropdown>
        
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;