import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Calculator from './components/calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import Header from './components/Header';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/Quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
