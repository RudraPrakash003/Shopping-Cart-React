import React from 'react'

const ProductItem = ({ product, onAddToCart }) => {
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  });

  return (
    <div className="cart-item border rounded-lg p-4 shadow-sm flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-40 h-40 object-contain mb-4 rounded-t-lg"></img>
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600 mt-1">{formatter.format(product.price)}</p>   
      <button onClick={() => onAddToCart(product)}  className="mt-2 px-4 py-2 bg-yellow-300 font-semibold text-white rounded-2xl hover:bg-yellow-500">
        Add to Cart
      </button> 
    </div>
  )
}

export default ProductItem;