// App.js
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import MenuDetail from './components/MenuDetail';
import Navbar from './components/Navbar';
import './App.css';
import { SkeletonTheme } from "react-loading-skeleton";
import CateDetail from './components/CateDetail';
import Categories from './components/Categories';
import ProductList from './ProductList';
import Cart from './Cart';
import Gallery from './components/pages/Gallery'


function App() {
  
  const [cart, setCart] = useState([]);
  
  const addToCart = product => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = id => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };


  return (
    <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
    <Router>
    <Navbar cart={cart} removeFromCart={removeFromCart} 
                updateQuantity={updateQuantity} />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:itemId" element={<MenuDetail addToCart={addToCart} />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/catedetail/:itemId" element={<CateDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
       
    </Router>
    </SkeletonTheme>
  );
}

export default App;
