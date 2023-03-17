import './Header.css';
import { Button, Typography } from '@material-ui/core';
import {Link } from 'react-router-dom';
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import { FaInstagram, FaEnvelope} from "react-icons/fa";


export default function Header(){
    return (
     <>
     <div id='header-box'>

        <h2 style={{textAlign:'left'}}>Everyday <br/> to persist</h2>
      
        <h2 style={{textAlign:'right'}}>In legacy, to remain.</h2>
        <Link to='/products'>
            <Button>Browse Artwork</Button>
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
       

    <section>
<MDBCarousel showIndicators fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
    </section>
    </> 
    )
}