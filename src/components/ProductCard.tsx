import React from 'react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="card product-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <img 
        src={product.image} 
        alt={product.title} 
        className="card-img-top w-full h-48 object-contain p-4"
      />
      <div className="card-body p-4">
        <h3 className="card-title text-lg font-bold text-custom-dark-blue mb-2">
          {product.title}
        </h3>
        <p className="card-text text-sm text-gray-600 mb-4 line-clamp-3">
          {product.description}
        </p>
        <div className="product-price flex justify-between items-center">
          <p className="card-text font-bold">
            Price: ${product.price.toFixed(2)}
          </p>
          <button 
            className="btn-primary bg-custom-purple text-white py-1 px-3 rounded hover:bg-custom-dark-blue"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;