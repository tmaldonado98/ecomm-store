import './App.css';
import {Route, Link} from 'react-router-dom';
import Nav from './Nav';
import Header from './Header';
import MainAbout from './MainAbout';
import FooterSection from './Footer';
import { Routes } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import React, {useState, useContext} from 'react';

export const CartContext = React.createContext();

function App() {


  const [cartAmt, setCartAmt] = useState(0);

  function increaseCart (){
      // setCartAmt(cartAmt + 1)
      // setCartAmt(prevAmt => prevAmt + 1)
      console.log('test')
  }

  

  return (
    <div >
      <CartContext.Provider value={{cartAmt, setCartAmt}}>
        <Nav />
      </CartContext.Provider>
      <header id="containerHeader">
        <Header />
      </header>
      <section id='mainAbout'>
        <MainAbout />
      </section>
      <footer>
        <FooterSection />
      </footer>
    </div>
  );
}

export default App;
