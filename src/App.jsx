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


  return (
    <CartProvider>
      <div>
          <NavBar  />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
      </div>
    </CartProvider>
  )
}

export default App
