import './Nav.css';
import React from 'react';
import { createContext, ReactDOM } from 'react';
import { Link, Route, Routes} from 'react-router-dom';
import {  Button, Typography } from '@material-ui/core';
import Products from './routes/Products';
import About from './routes/About';
import Contact from './routes/Contact';
import { useState, useContext } from 'react';
import CartContext from './App';


// import { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';



// export const CartContext = React.createContext();

export default function Nav(){
    const increase = useContext(CartContext);
    // const [cartAmt, setCartAmt] = useState(0);

    // function increaseCart (){
    //     // setCartAmt(cartAmt + 1)
    //     setCartAmt(prevAmt => prevAmt + 1)
    //     console.log('test')
    // }
    const [topRightModal, setTopRightModal] = useState(false);

    const toggleShow = () => setTopRightModal(!topRightModal);
    
    
    return(
        <nav>
        {/* <CartContext.Provider value={{cartAmt, setCartAmt}}> */}
            <Typography variant='h1'>David Maldonado Art</Typography>
                  <div>
                      <ul id='nav-items'>
                          <Link to='/'>
                              <Button>home</Button>
                          </Link>
                          <Link to='/products'>
                              <Button>products</Button>
                          </Link>                              
                          <Link to='/about'>
                            <Button>about</Button>
                          </Link>
                          <Link to='/contact'>
                            <Button>contact</Button>
                          </Link>                      
                      
                        <li>
            <MDBBtn color='link' onClick={toggleShow}>Cart 0</MDBBtn>

<MDBModal
  animationDirection='right'
  show={topRightModal}
  tabIndex='-1'
  setShow={setTopRightModal}
>
  <MDBModalDialog position='top-right' side>
    <MDBModalContent>
      <MDBModalHeader className='bg-info text-white'>
        <MDBModalTitle>Your cart</MDBModalTitle>
        <MDBBtn
          color='none'
          className='btn-close btn-close-white'
          onClick={toggleShow}
        ></MDBBtn>
      </MDBModalHeader>
      <MDBModalBody>
        <div className='row'>
          <div className='col-3 text-center'>
            <i className='fas fa-shopping-cart fa-4x text-info'></i>
          </div>

          <div className='col-9'>
            <p>Show all items in the cart as a column of cards.</p>
          </div>
        </div>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color='link' >Proceed to checkout</MDBBtn>
        <MDBBtn onClick={toggleShow}>
          Close
        </MDBBtn>
      </MDBModalFooter>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>
                            {/* <Button>Cart 0</Button> */}
                        </li>
                      </ul>
                  </div>
          {/* increase={increaseCart}  */}
          {/* <Routes>
              <Route path='/Products/*' element={<Products />}/>
              <Route path='/About' element={<About />}/>
              <Route path='/Contact' element={<Contact />}/>
          </Routes>                                 */}
        {/* </CartContext.Provider> */}
    </nav>
    )
}

