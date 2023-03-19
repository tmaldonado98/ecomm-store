import React from "react";
import { Typography } from '@material-ui/core';
import {BrowserRouter} from 'react-router-dom';
import Nav from "../Nav";
import FooterSection from '../Footer';
import './About.css';

export default function about(){
    return (
    <div style={{backgroundColor: '#252525'}}>
        <Nav />
        <h1 style={{textAlign:'center'}}>About Us</h1>
        <div id="vw-container">
            <div className="about-text-container">
                <h3>Vea Wolf</h3>
                <p>words words words words words words words words words words words words </p>
                <p>words words words words words words words words words words words words </p>
            </div>
            <div className="about-image-container">
                <img src={require("../assets/About1.jpg")} alt="Vea Wolf"/>
            </div>

        </div>
        <hr/>
        <div id="tm-container">
            <div className="about-text-container">
                <h3>T.M. Vea</h3>
                <p>words words words words words words words words words words words words </p>
                <p>words words words words words words words words words words words words </p>
            </div>
            <div className="about-image-container">
                <img src={require("../assets/About2.JPG")} alt="T.M. Vea"/>
            </div>

        </div>
        <FooterSection/>
    </div>
    )
}