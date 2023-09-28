import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
  }

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // *addToCart moved to Products.jsx
  // const addToCart = (product) => {
  //   // Check if the product is already in the cart
  //   const existingItemIndex = cart.findIndex((item) => item.id === product.id);

  //   if (existingItemIndex !== -1) {
  //     // If the product is in the cart, update its quantity
  //     const updatedCart = [...cart];
  //     updatedCart[existingItemIndex].quantity += 1;
  //     setCart(updatedCart);
  //   } else {
  //     // If the product is not in the cart, add it with quantity 1
  //     const cartItem = {
  //       ...product,
  //       quantity: 1,
  //     };
  //     setCart([...cart, cartItem]);
  //   }
  // };

// Function to remove an item from the cart by ID
  function removeItemFromCart(id) {
    // Find the item in the cart
    const itemToDelete = cart.find(item => item.id === id);

    if (itemToDelete) {
      if (itemToDelete.quantity > 1) {
        // If the item quantity is greater than 1, decrement the quantity
        itemToDelete.quantity -= 1;
        setCart([...cart]); // Update the cart with the modified item
      } else {
        // If the item quantity is 1, remove the item from the cart
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
      }
    }
  }

  return (
    <CartContext.Provider value={{ cart, setCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;