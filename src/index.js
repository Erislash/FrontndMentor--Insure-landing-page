import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Features from './components/Features';
import LearnMore from './components/LearnMore';
import Footer from './components/Footer';

import './index.css';


export default function App() {
  const [menuActive, setMenu] = useState(true);
  return (
    <div>
      <Navbar currentMenu={menuActive} setMenu={setMenu}/>
      {menuActive && <Menu />}
      <Hero />
      <Features />
      <LearnMore />
      <Footer />
    </div>
  )
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
