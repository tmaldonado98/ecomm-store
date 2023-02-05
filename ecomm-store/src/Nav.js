import './Nav.css';
import { ReactDOM } from 'react';
import { Link, Route, Routes} from 'react-router-dom';
import {  Typography } from '@material-ui/core';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import { useState } from 'react';



export default function Nav(){
    const [cartAmt, setCartAmt] = useState(0);

    const increaseCart = function (){
        // setCartAmt(prevAmt => prevAmt + 1)
        setCartAmt(cartAmt + 1)
    }

    return(
        <nav>
            <Typography variant='h1'>David Maldonado Art</Typography>
                  <div>
                      <ul id='nav-items'>
                          <Link to='/'>
                              <li>home</li>
                          </Link>
                          <Link to='/products'>
                              <li>products</li>
                          </Link>                              
                          <Link to='/about'>
                            <li>about</li>
                          </Link>
                          <Link to='/contact'>
                            <li>contact</li>
                          </Link>                      
                      
                        <li>
                            <Typography variant='button'>
                                <span>{'cart ' + cartAmt}</span>
                            </Typography>
                        </li>
                      </ul>
                  </div>
          <Routes>
              <Route path='/Products' element={<Products  increase={increaseCart}/>}/>
              <Route path='/About' element={<About />}/>
              <Route path='/Contact' element={<Contact />}/>
          </Routes>                                
    </nav>
    )
}

