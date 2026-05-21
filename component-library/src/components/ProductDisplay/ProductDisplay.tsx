import React from 'react';
import { ProductDisplayProps } from '../types';

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children
}) => {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '1rem',
        borderRadius: '8px'
      }}
    >
      {product?.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          width={150}
        />
      )}

      <h2>{product.name}</h2>

      <p>${Number(product.price).toFixed(2)}</p>

      {showDescription && product.description && (
        <p>{product.description}</p>
      )}

      {showStockStatus && (
        <p>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      )}

      {onAddToCart && (
        <button onClick={() => onAddToCart(product.id)}>
          Add to Cart
        </button>
      )}

      {children}
    </div>
  );
};