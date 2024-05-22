import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import emptycart from '../Images/emptycart.png';
import { useNavigate } from 'react-router-dom';

const CartPage = ({ cart, setCart, onRemoveFromCart, onIncreaseQuantity, onDecreaseQuantity }) => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  });

  const handleCheckOut = () => {
    setCart([]);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="cart-page p-4 relative"> 
      <h1 className="text-2xl font-bold mb-4">My Cart</h1>
      {cart.length === 0 ? (
        <div className="flex justify-center items-center h-full">
          <div className="relative">
            <img src={emptycart} alt='cart is empty' className='w-full h-full' />
            <button onClick={() => navigate('/')} className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue-500 font-semibold text-white rounded-2xl hover:bg-blue-600">
              Explore Products
            </button>
          </div>
        </div>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item flex items-center mb-4 border-b pb-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-contain mr-4" />
              <div className="item-details flex-1">
                <h2 className="text-lg font-bold text-left">{item.name}</h2>
                <div className="quantity-controls flex items-center mt-2">
                  <button
                    onClick={() => onDecreaseQuantity(item)}
                    className="px-1.5 py-0.3 bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => onIncreaseQuantity(item)}
                    className="px-1 py-0.3 bg-gray-300 rounded"
                  >
                    +
                  </button>
                  <p className="ml-4 text-gray-600">{formatter.format(item.price)}</p>
                </div>
              </div>
              <div className="item-total flex items-center justify-between text-right w-48">
                <p className="text-lg font-bold mr-2 flex-shrink-0">
                  {formatter.format(item.price * item.quantity)}
                </p>
                <MdDelete role="button" size={25} onClick={() => onRemoveFromCart(item)} />
              </div>
            </div>
          ))}
          <div className="subtotal mt-4 text-lg font-bold">
            Subtotal ({cart.length} items) : {formatter.format(calculateSubtotal())}
          </div>
          <button onClick={handleCheckOut} className="mt-4 px-4 py-2 bg-yellow-300 font-semibold text-white rounded-2xl hover:bg-yellow-500">
            Proceed to Checkout
          </button>
        </div>
      )}
      {showPopup && (
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 p-4 flex items-center font-semibold border-solid border-2 border-green-500 bg-green-100 text-green-700 rounded-xl w-80 shadow-lg">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
            Items checked out
        </div>
      )}
    </div>
  );
};

export default CartPage;
