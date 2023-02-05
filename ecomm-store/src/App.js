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


function App() {
  return (
    <div >
      <Nav />
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
