import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom"
import AllProducts from './pages/AllProducts';
import BackToTop from './pages/BackToTop';
import Cart from './pages/Cart';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
