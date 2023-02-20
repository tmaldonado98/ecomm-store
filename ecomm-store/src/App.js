import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Nav from './Nav';
import Header from './app-page/Header';
import MainAbout from './app-page/MainAbout';
import FooterSection from './app-page/Footer';
import { Typography } from '@material-ui/core';
import React, {useState, useContext} from 'react';


function App() {
  return (
    <>
        <Nav />
      {/* <header id="containerHeader"> */}
        <div id='header'><Header /></div >
      {/* </header> */}
      {/* <section id='mainAbout'> */}
        <MainAbout />
      {/* </section> */}
      <footer>
        <FooterSection />
      </footer>
    </>
  );
}

export default App;