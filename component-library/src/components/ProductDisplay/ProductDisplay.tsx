import React from "react";
import { ProductDisplayProps } from "./types";

const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm w-full max-w-sm">
      <img
        src={product.imageUrl || "https://via.placeholder.com/150"}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />

      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-800 font-medium">${product.price.toFixed(2)}</p>

      {showDescription && (
        <p className="text-sm text-gray-600 mt-1">
          {product.description}
        </p>
      )}

      {showStockStatus && (
        <p
          className={`text-sm mt-2 ${
            product.inStock ? "text-green-600" : "text-red-600"
          }`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
      )}

      {/* Children slot */}
      {children && <div className="mt-3">{children}</div>}

      {/* Add to cart button */}
      {onAddToCart && product.inStock && (
        <button
          onClick={() => onAddToCart(product.id)}
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductDisplay;