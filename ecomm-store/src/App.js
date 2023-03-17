import './App.css';
import Nav from './Nav';
import Header from './app-page/Header';
import FooterSection from './Footer';
import React from 'react';


function App() {
  return (
    <>
    {/* div style={{backgroundColor: '#252525'}} */}
        <Nav />
      {/* <header id="containerHeader"> */}
        <div id='header'><Header /></div >
      {/* </header> */}
      {/* <section id='mainAbout'> */}
        {/* <MainAbout /> */}
      {/* </section> */}
        <FooterSection />
    </>
  );
}

export default App;