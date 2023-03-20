import React from "react";
import { Link} from 'react-router-dom';
import {  Button, Typography } from '@material-ui/core';
import './Success.css';
import Footer from '../Footer';
import { motion } from 'framer-motion';

export default function Success() {


    return (
        <motion.div style={{backgroundColor: '#252525'}} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transitionDuration: 0.25}}>
            <nav>
                <Typography variant='h1' id='nav-h1'>Vea Collections</Typography>
                    <div id='navBtns'>
                        <Link to='/'>
                            <Button variant="outlined">home</Button>
                        </Link>
                        <Link to='/products'>
                            <Button variant="outlined">products</Button>
                        </Link>                              
                        <Link to='/about'>
                        <Button variant="outlined">about</Button>
                        </Link>
                        <Link to='/contact'>
                        <Button variant="outlined">contact</Button>
                        </Link> 
                    </div>
            
            </nav>
            <main id="success-main">
                <h1>Your order has been successfully received!</h1>
                <h3>You will receive confirmation and an electronic receipt to the email address you provided, and your order will be shipped soon.</h3>

                
                <Link to='/products'>
                    <Button>Continue Browsing</Button>
                </Link> 
                <br/><br/>
                <p>We thank you for your purchase, and we look forward to have you back again.</p>
            </main>

            <Footer />
        </motion.div>
    )
}