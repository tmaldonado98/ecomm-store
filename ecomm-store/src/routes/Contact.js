import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import './Contact.css';
import { FaInstagram, FaEnvelope} from "react-icons/fa";
import FooterSection from '../Footer';
import { MDBBtn } from "mdb-react-ui-kit";
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { motion } from 'framer-motion';


export default function Contact(){

  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');

  const [sendingEmail, setSendingEmail] = useState(false);
  const [sentStatus, setSentStatus] = useState(true); 

  const [nameInvalid, setNameInvalid] = useState(true);
  const [userInvalid, setUserInvalid] = useState(true);
  const [messageInvalid, setMessageInvalid] = useState(true);

  function sendMail() {
    if (name.length === 0 ) {
      setNameInvalid(false);
      return false
    }
    else if(user.length === 0){
      setUserInvalid(false);
      return false;
    }
    else if(message.length === 0) {
      setMessageInvalid(false);
      return false;
    } 
    else {
      setSentStatus(true);      
      const messageData = {name: name, user: user, message: message};
       
      axios.post('https://us-central1-vea-collections-b5045.cloudfunctions.net/app/contact', messageData)
      .then(response => {
        setSendingEmail(false);
        setSentStatus(false);
        setName('')
        setUser('')
        setMessage('')

        setNameInvalid(true);
        setUserInvalid(true);
        setMessageInvalid(true);

        setTimeout(() => {
          setSentStatus(true);
        }, 10000)
        console.log('Response:', response);

      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  
}

function handleNameChange(e) {
  setName(e.target.value);
}

useEffect(() => {
  if (name.length > 0){
    setNameInvalid(true);
  }
}, [name])


function handleUserChange(e) {
  setUser(e.target.value);
}

useEffect(() => {
  if (user.length > 0){
    setUserInvalid(true);
  }

}, [user]);


function handleMessageChange(e) {
  setMessage(e.target.value);
}

useEffect(() => {
  if (message.length > 0){
    setMessageInvalid(true);
  }
}, [message]);  

    return (
    <motion.div style={{backgroundColor: '#252525'}} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transitionDuration: 0.25}}>
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

          <div id="sent-status" hidden={sentStatus}>
                  <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                  <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                  <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                  </svg>
                  <p style={{textAlign:'center', marginTop:'12px'}}>Message sent!</p>
                  <p>A copy of your message will be sent to the address you have provided. <br/> Thank you, and we\ll be in touch shortly.</p>
                </div>
        </div>
        
        <div id="commissions-container">
          <h2 className="contact-h">Want to ask about commissions?</h2>
          <fieldset>
            <legend>Fill out this form!</legend>
            <p>If you would like to send us an image, please send us an email directly with the image file attached. Thank you.</p>
        
            <label htmlFor='name'>What is your name?</label>
            <input name="name" type='text' required value={name} onChange={handleNameChange}></input>
            <p hidden={nameInvalid} className='invalid'>You must enter your name.</p>

            <label htmlFor='email'>What is your email?</label>
            <input name="email" type='text' required value={user} onChange={handleUserChange}></input>
            <p hidden={userInvalid} className='invalid'>You must enter your email address.</p>
        
            <label htmlFor='details'>Give us some more details</label>
            <textarea required value={message} placeholder="Suggestion of things to include:&#10;• Your estimated budget&#10;• Which size do you want?&#10;• Any other questions you may have, please write them here"  onChange={handleMessageChange}></textarea>
            <p hidden={messageInvalid} className='invalid'>You must enter a message.</p>
        
            <p>* All input fields are required</p><br/>
            {sendingEmail === false ? 
              (<><MDBBtn onClick={sendMail}>Submit Message</MDBBtn>

                </>
              )
              :
              <CircularProgress />
            }
            
          </fieldset>
        </div>
        
      </section>
      <FooterSection/>
    </motion.div>
    )
}