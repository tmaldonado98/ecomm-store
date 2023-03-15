import React from "react";
import { Link} from 'react-router-dom';
import {  Button, Typography } from '@material-ui/core';

export default function Success() {


    return (
        <div style={{backgroundColor: '#252525'}}>
            <nav>
                <Typography variant='h1'>Vea Collections</Typography>
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
            
            </nav>
            <h1>Your order has been successfully received!</h1>
            <h3>You will receive confirmation and an electronic receipt to the email address you provided, and your order will be shipped soon.</h3>
            
            <p>Put socials</p>

            <Link to='/products'>
                <Button variant="outlined">Continue Browsing</Button>
            </Link> 

        </div>
    )
}