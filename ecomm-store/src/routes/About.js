import React from "react";
import { Typography } from '@material-ui/core';
import {BrowserRouter} from 'react-router-dom';
import Nav from "../Nav";
import FooterSection from '../Footer';
import './About.css';
import { motion } from 'framer-motion';

export default function about(){
    return (
    <motion.div style={{backgroundColor: '#252525'}} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transitionDuration: 0.25}}>
        <Nav />
        <h1 style={{textAlign:'center', color: '#FFCBED'}}>About</h1>
        <div id="vw-container">
            <div className="about-text-container">
                <h3>Vea Wolf</h3>
                <p>Costa Rican artist based in southern California specializing in realism.</p>
                <p>Mediums of choice include charcoal, acrylic, and colored pencil in a monochromatic color scheme.</p>
                <p>Currently mastering portraiture, studying figure-drawing, and working on large still-life charcoal drawings.</p>
                <p>Lets the artworks speak for themselves.</p>
               
            </div>
            <div className="about-image-container">
                <img src={require("../assets/About1.jpg")} alt="Vea Wolf"/>
            </div>

        </div>
        {/* <hr/> */}
        <FooterSection/>
    </motion.div>
    )
}

        // <div id="tm-container">
        //     <div className="about-text-container">
        //         <h3>T.M. Vea</h3>
        //         {/* <p>Costa-Rican artist based in southern California specializing in realism.</p> */}
        //         <p>Costa Rican arist interested in expressionism and the versatility of color.</p>
        //         {/* <p>Currently mastering portraiture, studying figure-drawing, and working on large still-life charcoal drawings.</p> */}
        //         <p>Seeks to express emotions through the canvas to communicate the personal story of exploration and growth.</p>
        //         <p>Enjoys experimental use of color, and the improvisation of the artistic process.</p>
        //     </div>
        //     <div className="about-image-container">
        //         <img src={require("../assets/About2.JPG")} alt="T.M. Vea"/>
        //     </div>

        // </div>
