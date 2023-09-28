import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Pages/Home';
import Products from './Pages/Products'
import NavBar from './component/NavBar'
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import CartProvider from './component/CartContext';
import './App.css'


function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  return (
    <CartProvider>
      <div>
          <NavBar token={token} setToken={setToken}/>
          <Routes>
            <Route path="/" element={<Home token={token} />} />
            <Route path="/products" element={<Products token={token}/>} />
            <Route path="/login" element={<Login token={token} setToken={setToken}/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
      </div>
    </CartProvider>
  )
}

export default App
