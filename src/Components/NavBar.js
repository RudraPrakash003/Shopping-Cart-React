import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const NavBar = ({ itemCount }) => {
    const navigate = useNavigate();
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="flex-1 text-center text-white">
            <span className="text-2xl font-semibold">WonderMart</span>
        </div>
        <div className="flex space-x-3 items-left">
            <div className='relative'>
                <IoHomeOutline role="button"  onClick={() => navigate('/')} className="text-white text-3xl" />
            </div>
            <div className="relative ">
                <FaShoppingCart role="button" onClick={() => navigate('/cart')} className="text-white text-3xl" />
                    {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 text-xs">
                        {itemCount}
                    </span>
                )}
            </div>
        </div>
    </nav>
  )
}

export default NavBar;