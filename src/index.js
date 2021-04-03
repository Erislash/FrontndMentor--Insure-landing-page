import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Features from './components/Features';
import LearnMore from './components/LearnMore';
import Footer from './components/Footer';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Menu />
    <Hero />
    <Features />
    <LearnMore />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
