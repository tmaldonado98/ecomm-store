import './Nav.css';
import { ReactDOM } from 'react';
import { Link, Route, Routes} from 'react-router-dom';
import {  Typography } from '@material-ui/core';
import Products from './pages/Products';
// import About from './pages/About';

export default function Nav(){
    return(
            <section id='container-nav'>
                <Typography variant='h1'>David Maldonado Art</Typography>
                <div>
                    <ul id='nav-items'>
                        <Link to='/products'>
                            <Typography variant='li'>products</Typography>
                        </Link>                              
                        <Typography variant='li'>about</Typography>
                        <Typography variant='li'>contact</Typography>  
                    </ul>
                    <button>
                        <Typography variant='span'>cart </Typography><Typography variant='span'>0</Typography>
                    </button>
                </div>
        <Routes>
            <Route path='/Products' element={<Products />}/>
            <Route path='/About' element={<Link to='/about' />}/>
            <Route path='/Contact' element={<Link to='/contact' />}/>
        </Routes>
            </section>
    )
}

