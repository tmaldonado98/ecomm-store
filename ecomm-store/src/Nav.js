import './Nav.css';
import React from 'react';
import { createContext, ReactDOM } from 'react';
import { Link, Route, Routes} from 'react-router-dom';
import {  Button, Typography } from '@material-ui/core';
import Products, { getItemData } from './routes/Products';
import About from './routes/About';
import Contact from './routes/Contact';
import { useState, useContext } from 'react';
import {CartContext} from './CartContext';
import CartProvider from './CartContext';
import { dbList } from './routes/Products';

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




export default function Nav(){

    const [topRightModal, setTopRightModal] = useState(false);

    const toggleShow = () => setTopRightModal(!topRightModal);
    
    const cart = useContext(CartContext);

    // const cartCount = cart.items.length //cart.items.reduce((sum, item) => sum + item.quantity, 0)
      const cartCount = () => {
        let count = 0;
        cart.items.map(currentItem => {
            count += currentItem.quantity;
          }
        )
        return Number(count);
    }
    // const cartTotal = cart.getTotalPrice();

    // const {cartItems, setCartItems} = useState([]);
    ////start prodContext
    
  //   const ProdContext = createContext(
      
      
  //     {
  //     items: [cartItems],
  //     addItem: (key) => {
  //       setCartItems([
  //         ...cartItems,
  //           {
  //             key: key,
  //           }
  //       ]);
  //       console.log(cartItems);
  //       console.log(key);
  //     },

  //     removeItem: (key) => {
  //       setCartItems(
  //           cartItems => cartItems.filter(item => {
  //             return item.key != key
  //           } 
  //             ///Puts into array all items that do not have the key defined in the parameter.
  //         )
  //       )
  //     },

  //     totalQuantity: () => {
  //       return cartItems.length;
  //     },

  //     clearAll: () => {
  //       setCartItems([]);
  //     },

  //     getTotalPrice: () => {
  //       let totalPrice = 0;

  //       DBList.map(item => {
  //           const data = getItemData(item.key)
  //           totalPrice += (data.price * DBList.length);
  //       })
  //       return totalPrice;
  //     },

  // })
  ///end prodContext  

    return(
      <nav>
            <Typography variant='h1'>Vea Wolf Art Collection</Typography>
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
            <MDBBtn 
            // cartItems
            color='link' 
            onClick={toggleShow}>Cart {cartCount()}</MDBBtn>

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
          {/* <div className='col-3 text-center'>
            <i className='fas fa-shopping-cart fa-4x text-info'></i>
          </div> */}
          {cart.items.length > 0 ? 
          <div className='col-9'>
            {/* <p>
              Items in your cart:
            </p> */}
            <div>
              {cart.items.map(currentItem => (
                <p className='itemInCart'>{currentItem.item.name} - ${currentItem.item.price}<br/><sub>Quantity: {currentItem.quantity}</sub></p>
                ))}
              
            </div>
            <strong>
              <p>
                <u>Total Price</u> (before taxes):
              </p>
              <p>${cart.getTotalPrice()} USD</p>
            </strong>
          </div>
          :
            <div>
              <h4>There are no items in your cart!</h4>
              <p>Add new items to your cart</p>
              <Button>Products</Button>
            </div>
          }
        

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
                        </li>
                      </ul>
                  </div>
          
    </nav>
        // </CartProvider>
    )
}
