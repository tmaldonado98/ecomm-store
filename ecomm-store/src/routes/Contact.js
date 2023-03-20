import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import './Contact.css';
// import { Button, Typography } from '@material-ui/core';
// import {Link } from 'react-router-dom';
import { FaInstagram, FaEnvelope} from "react-icons/fa";
import FooterSection from '../Footer';
import { MDBBtn } from "mdb-react-ui-kit";
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';


export default function Contact(){

  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');

  const [sendingEmail, setSendingEmail] = useState(false);
  const [sentStatus, setSentStatus] = useState(true); 

  function sendMail() {

    if (name.length === 0 || user.length === 0 || message.length === 0) {
      alert('All input fields must be filled out');
      return false
    } else {
      setSentStatus(true);      
      const messageData = {name: name, user: user, message: message};

      axios.post('http://localhost:3001/contact', messageData)
      .then(response => {
        setSendingEmail(false);
        setSentStatus(false);
        setName('')
        setUser('')
        setMessage('')

        setTimeout(() => {
          setSentStatus(true);
        }, 5000)
        console.log('Response:', response);
        ///SUCCESSFULL EVENT
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  
}


// function handleSubmit() {
//     const nameInput = document.getElementsByName('name');
//     const emailInput = document.getElementsByName('email');
//     const messageInput = document.getElementsByTagName('textarea');

//     if (name.length === 0 || user.length === 0 || message.length === 0) {
//       alert('All input fields must be filled out');
//       return false
//     } else {
//       const messageData = {name: name, user: user, message: message}

//       axios.post('/contact', messageData)
//       .then(response => {
//         console.log('Email sent successfully:', response);
//         alert('Your message has been sent!');
//       })
//       .catch(error => {
//         console.error('Error sending email:', error);
//         alert('There was an error sending your message. Please try again later.');
//       });
//     }
// }

useEffect(() => {
  console.log(name);
  console.log(user);
  console.log(message);
  
}, [message])

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
            <input name="name" type='text' required value={name} onChange={e => setName(e.target.value)}></input>
            
            <label for='email'>What is your email?</label>
            <input name="email" type='text' required value={user} onChange={e => setUser(e.target.value)}></input>
        
            <label for='details'>Give us some more details</label>
            <textarea required value={message} placeholder="Suggestion of things to include:&#10;• Your estimated budget&#10;• Which size do you want?&#10;• Any other questions you may have, please write them here"  onChange={e => setMessage(e.target.value)}></textarea>
        
            <p>* All input fields are required</p>
            {sendingEmail === false ? 
              (<><MDBBtn onClick={sendMail}>Submit Message</MDBBtn>
                <div hidden={sentStatus}>
                  <br/><br/>
                  <p>Message sent!</p>
                  <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                  <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                  <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                  </svg>
                </div>
                </>
              )
              :
              <CircularProgress />
            }
            
          </fieldset>
        </div>
        
      </section>
      <FooterSection/>
    </div>
    )
}