import React from "react";
import Nav from "../Nav";
import './Contact.css';
// import { Button, Typography } from '@material-ui/core';
// import {Link } from 'react-router-dom';
import { FaInstagram, FaEnvelope} from "react-icons/fa";
import FooterSection from '../Footer';
import { MDBBtn } from "mdb-react-ui-kit";

export default function Contact(){
    return (
    <div style={{backgroundColor: '#252525'}}>
      <Nav />

      <section id="contact-page">  
        <div id="contact-container">
        <h2 className="contact-h">Have Questions? <br/> Contact Us</h2>
          <ul className='h-box-ul'>
              <li>
                <p>Find us on Instagram</p>
                <a href='https://instagram.com/vea.collections?igshid=YmMyMTA2M2Y=' target='_blank' rel='noopener, noreferrer'>
                <FaInstagram id='ig'/>
                
                </a>
              </li>
              <li>
                <p>Write us an email</p>
                <a href='mailto:mylovforrest@gmail.com' target='_blank' rel='noopener, noreferrer'>
                <FaEnvelope id='email'/>  
                
                </a>
              </li>
          </ul>

          <section id='about-vid-container'>
            <video id='about-video' muted autoPlay loop>
              <source src={require("../assets/ContactVid1.mp4")}  type="video/mp4" ></source>
            </video>
          </section>

        </div>
        
        <div id="commissions-container">
          <h2 className="contact-h">Want to ask about commissions?</h2>
          <fieldset>
            <legend>Fill out this form!</legend>
        
            <label for='name'>What is your name?</label>
            <input name="name" type='text'></input>
        
            <label for='email'>What is your email?</label>
            <input name="email" type='text'></input>
        
            <label for='details'>Give us some more details</label>
            <textarea placeholder="Suggestion of things to include:&#10;• Your estimated budget&#10;• Which size do you want?&#10;• Any other questions you may have, please write them here"></textarea>
        
        
            <MDBBtn >Submit Message</MDBBtn>
          </fieldset>
        </div>
        
      </section>
      <FooterSection/>
    </div>
    )
}