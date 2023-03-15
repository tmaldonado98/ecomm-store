import React from "react";
import { Typography } from '@material-ui/core';
import {BrowserRouter} from 'react-router-dom';
import Nav from "../Nav";

export default function about(){
    return (
    <div style={{backgroundColor: '#252525'}}>
        <Nav />
        <h1>About Me</h1>
    </div>
    )
}