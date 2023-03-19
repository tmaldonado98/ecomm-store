import './Header.css';
import { Button, Typography } from '@material-ui/core';
import {Link } from 'react-router-dom';
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import { FaInstagram, FaEnvelope} from "react-icons/fa";
import { Nav } from '../Nav';

export default function Header(){
    return (
    <div id='header'>
      <div id='header-box'>

          {/* <h2 style={{textAlign:'left'}}>Everyday <br/> to persist</h2> */}
        <h2>Artworks seeking <br/> new homes!</h2>
          {/* <h2 style={{textAlign:'right'}}>In legacy, to remain.</h2> */}
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
          <source src={require("./LandingPagevid.mp4")}  type="video/mp4" ></source>
        </video>
      </section>
    </div> 
    )
}