import './App.css';
import './Header.css';
import Nav from './Nav';
import FooterSection from './Footer';
import React from 'react';
import {Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import { FaInstagram, FaEnvelope} from "react-icons/fa";
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div id='header' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transitionDuration: 0.25}}>
      <Nav />
      <div id='app-container'>
        <div id='header-box'>
          <h2>Artworks seeking <br/> new homes!</h2>
          <Link to='/products'>
              <Button>Browse Artworks</Button>
          </Link> 
          <Link to='/contact'>
              <Button>Commissions/Contact</Button>
          </Link> 
          <ul className='h-box-ul'>
              <li>
                <a href='https://instagram.com/vea.collections?igshid=YmMyMTA2M2Y=' target='_blank' rel='noopener, noreferrer'>
                  <FaInstagram id='ig'/>
                </a>
              </li>
              <li>
                <a href='mailto:mylovforrest@gmail.com' target='_blank' rel='noopener, noreferrer'>
                  <FaEnvelope id='email'/>  
                </a>
              </li>
          </ul>
        </div>
        
        <section id='vid-container'>
          <video id='lp-video' muted autoPlay loop>
            <source src={require("./assets/LandingPagevid.mp4")}  type="video/mp4" ></source>
          </video>
        </section>
      </div>
      <FooterSection />
    </motion.div>
  );
}

export default App;