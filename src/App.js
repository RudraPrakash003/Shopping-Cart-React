import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar'
import { useState } from 'react';
import ProductsData from './data/ProductsData';
import ProductGrid from './Components/ProductGrid';
import CartPage from './Components/CartPage';
import TitleUpdater from './Components/TitleUpdater';

const App = () => {
  const [ cart, setCart ] = useState([]);

  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if(existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id ? {...item, quantity: item.quantity+1} : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1}])
    }
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  const handleIncreaseQuantity = (product) => {
    setCart(cart.map(item => 
      item.id === product.id ? {...item, quantity: item.quantity+1} : item
    ));
  };

  const handleDecreaseQuantity = (product) => {
    if (product.quantity > 1){
      setCart(cart.map(item => 
        item.id === product.id ? {...item, quantity: item.quantity-1} : item
      ));
    }
    else {
      setCart(cart.filter(item => item.id !== product.id));
    }
  };

  return (
    <Router>
      <div className="App">
        <NavBar itemCount={cart.length}/>
        <TitleUpdater pageTitle="Home - WonderMart" />
        <Routes>
          <Route path='/' element={<ProductGrid products={ProductsData} onAddToCart={handleAddToCart} />} />
          <Route path='/cart' element={<CartPage cart={cart} setCart={setCart} onRemoveFromCart={handleRemoveFromCart} onIncreaseQuantity={handleIncreaseQuantity} onDecreaseQuantity={handleDecreaseQuantity} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
