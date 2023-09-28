import React from 'react';
import Button from 'react-bootstrap/Button';

function ProductItem({ product, addToCart }) {
  return (
    <div className="product-item">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} />
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating.rate}⭐</p>
      <Button onClick={() => addToCart(product)}>Add to Cart</Button>
    </div>
  );
}

export default ProductItem;