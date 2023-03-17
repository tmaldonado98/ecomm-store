import React from "react";
import Nav from "../Nav";
import './Contact.css';
// import { Button, Typography } from '@material-ui/core';
// import {Link } from 'react-router-dom';
import { FaInstagram, FaEnvelope} from "react-icons/fa";
import FooterSection from '../Footer';


export default function Contact(){
    return (
    <div style={{backgroundColor: '#252525', height: '100vh'}}>
        <Nav />
        <h1>Contact, Commissions, or Get Help</h1>

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
        <FooterSection/>
    </div>
    )
}