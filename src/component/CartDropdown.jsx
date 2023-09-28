// const CartDropDown = ({ cart, setCart }) => {
//     // Define the deleteItem function
//     function deleteItem(id) {
//       // Find the item in the cart
//       const itemToDelete = cart.find(item => item.id === id);
  
//       if (itemToDelete) {
//         if (itemToDelete.quantity > 1) {
//           // If the item quantity is greater than 1, decrement the quantity
//           itemToDelete.quantity -= 1;
//           setCart([...cart]); // Update the cart with the modified item
//         } else {
//           // If the item quantity is 1, remove the item from the cart
//           const updatedCart = cart.filter(item => item.id !== id);
//           setCart(updatedCart);
//         }
//       }
//     }
  
//     return (
//       <div className="cart-dropdown">
//         <h2>The Cart:</h2>
//         <ul>
//           {cart.map(item => (
//             <li key={item.id}>
//               {item.title} ${item.price}
//               <span onClick={() => deleteItem(item.id)}>❌</span>
//               <span>{item.quantity}</span>
//             </li>
//           ))}
//         </ul>
//         <p>Total = {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
//       </div>
//     );
//   };
  
//   export default CartDropDown;


// CartDropDown.jsx
import React from 'react';
import { useCart } from './CartContext'; // Import the useCart hook

const CartDropDown = () => {
  const { cart, removeItemFromCart } = useCart(); // Use the useCart hook to access cart and removeItemFromCart

  const handleRemoveItem = (itemId, event) => {
    event.stopPropagation(); // Prevent the event from bubbling up
    removeItemFromCart(itemId);
  };

  return (
    <div className="cart-dropdown">
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} ${item.price} ({item.quantity}x)
            <span className="remove-item" onClick={(event) => handleRemoveItem(item.id, event)}>
              ❌
            </span>
          </li>
        ))}
      </ul>
      <p>Total = ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
    </div>
  );
};

export default CartDropDown;