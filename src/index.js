import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Hero from './components/Hero';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Menu />
    <Hero />
  </React.StrictMode>,
  document.getElementById('root')
);
