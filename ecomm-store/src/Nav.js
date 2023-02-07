import './Nav.css';
import React from 'react';
import { createContext, ReactDOM } from 'react';
import { Link, Route, Routes} from 'react-router-dom';
import {  Typography } from '@material-ui/core';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import { useState, useContext } from 'react';
import CartContext from './App';

// export const CartContext = React.createContext();

export default function Nav(){
    const increase = useContext(CartContext);
    // const [cartAmt, setCartAmt] = useState(0);

    // function increaseCart (){
    //     // setCartAmt(cartAmt + 1)
    //     setCartAmt(prevAmt => prevAmt + 1)
    //     console.log('test')
    // }

    
    
    return(
        <nav>
        {/* <CartContext.Provider value={{cartAmt, setCartAmt}}> */}
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
                                <span>{'cart '}</span>
                            </Typography>
                        </li>
                      </ul>
                  </div>
          <Routes>
          {/* increase={increaseCart}  */}
              <Route path='/Products/*' element={<Products />}/>
              <Route path='/About' element={<About />}/>
              <Route path='/Contact' element={<Contact />}/>
          </Routes>                                
        {/* </CartContext.Provider> */}
    </nav>
    )
}

