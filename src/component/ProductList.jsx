import React from 'react';
import ProductItem from './ProductItem'; // You can create ProductItem component

function ProductList({ products, addToCart }) {
  return (
    <ul>
      {products.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </ul>
  );
}

export default ProductList;