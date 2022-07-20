import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom"
import BackToTop from './pages/BackToTop';
import Banner from './pages/Banner';
import Home from './pages/Home';

function App() {

  return (
    <div>
      <Banner />
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <BackToTop />
    </div>
  );
}

export default App;
