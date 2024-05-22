import React from 'react';
import ProductItem from './ProductItem';

const ProductGrid = ({ products, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
      {products && products.map(product => (
        <div key={product.id} className="w-full max-w-xs mx-auto">
          <ProductItem product={product} onAddToCart={onAddToCart} />
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
