import './Nav.css';
import React, { useEffect } from 'react';
import { Link} from 'react-router-dom';
import {  Button, Typography } from '@material-ui/core';
import { useState, useContext } from 'react';
import {CartContext} from './CartContext';
import { CartSelect } from './Select';
import Axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
// import { FaCcAmazonPay, FaCcAmex, FaCcApplePay, FaCcDinersClub, FaCcDiscover, FaCcJcb, FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcVisa, FaGooglePay } from "react-icons/fa";

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
import { display } from '@mui/system';

export function ProdInCart(props) {
  const cart = useContext(CartContext);
  const [toggleEdit, setToggleEdit] = useState(false);  //true so that button is hidden by default

  // const [showCartSelect, setShowCartSelect] = useState(true);


  
  function showOrHideEdit() {
    setToggleEdit(!toggleEdit);
  }

  function sendKey(){
    const findItem = cart.items.find(cur => cur.item.product.prodkey === props.prod.product.prodkey)
    const itemKey = findItem.item.product.prodkey;
    console.log(findItem, itemKey)
    cart.editQuant(itemKey);
    // setShowCartSelect(!showCartSelect)
    setToggleEdit(!toggleEdit);

  }

  function remove(){
    // let itemKey = props.prod.product.prodkey
    const findItem = cart.items.find(cur => cur.item.product.prodkey === props.prod.product.prodkey)
    const itemKey = findItem.item.product.prodkey;
    console.log(findItem, itemKey)
    cart.removeItem(itemKey)
    cart.handleCardSelect()
    // cart.set
  }

  return (
    <>
                <div className='itemInCart'>
                  {<img src={props.prod.product.src} style={{width:'auto',height:'85px',borderRadius:'15px'}}/>}
                  <p>
                    {props.prod.product.name} - ${props.prod.product.price}
                    <br/> {console.log(props.quantity)}
                    <sub>Quantity: {props.quantity}</sub>  
                  </p>              

                {props.prod.product.invType === 'Print to order' ?
                  !toggleEdit ?
                    <MDBBtn color='dark' onClick={showOrHideEdit}>Edit</MDBBtn> 
                    :
                    <MDBBtn onClick={showOrHideEdit}>Cancel</MDBBtn>
                  :
                  null
                }

                {props.prod.product.invType === 'Print to order' && toggleEdit &&
                  <>
                    <CartSelect hidden={!toggleEdit} currentQuant={props.quantity}/>
                    <MDBBtn color='info' onClick={sendKey}>Confirm</MDBBtn>
                  </>
                }

                <MDBBtn color='danger' onClick={remove}>Remove</MDBBtn>
                               
                </div>
    </>
  )
}


///////

export default function Nav(){
    const [topRightModal, setTopRightModal] = useState(false);

    const toggleShow = () => setTopRightModal(!topRightModal);
    
    const [centralModal, setCentralModal] = useState(false);

    const toggleShowCentral = () => setCentralModal(!centralModal);

    const [toggleEdit, setToggleEdit] = useState(false);  //true so that button is hidden by default

  const [proceed, setProceed] = useState(false);

    function showOrHideEdit() {
      setToggleEdit(!toggleEdit);
    }

    const cart = useContext(CartContext);
    // console.log(cart.items)

    // const cartCount = cart.items.length //cart.items.reduce((sum, item) => sum + item.quantity, 0)
      const cartCount = () => {
        let count = 0;
        cart.items.map(currentItem => {
            count += currentItem.quantity;
          }
        )
        if (count === 0) {
          return ''
        } else  {
          return Number(count);
        }
    }
    

  function getTotalPrice(){
    let totalPrice = 0;
    cart.items.map(currentItem => {
      // console.log(currentItem.item.one.price)
        const data = currentItem.item.product.price;
        const currentQuant = currentItem.quantity;
        // console.log(data);
        totalPrice += data * currentQuant;
    })
    // console.log(Number(totalPrice))
    return Number(totalPrice).toFixed(2);
}

////ADD SHIPPING FUNCTIONALITY ==> ASK FOR SHIPPING ADDRESS. CALCULATE SHIPPING COST + TAXES WITH STRIPE
function proceedCheckout(){
    Axios.post('http://localhost:3001/checkout-session', cart.items)
    .then(setProceed(true))
    .then(response => {
      
      window.location = response.data.url;
    })
    .catch(e => {
      console.error(e.error)
    })

}


    return(
      <nav style={{fontFamily: 'Georgia'}}>
            <Typography style={{fontFamily: 'Georgia', fontSize: '90px', color: 'lightpink'}} variant='h1'>Vea Collections</Typography>
                  <div id='navBtns'>
                      {/* <ul id='nav-items'> */}
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
                          
                          <Button onClick={toggleShowCentral}>Return/Refund Policy</Button>                            
                          <Button 
                          // cartItems
                          color='link' 
                          onClick={toggleShow}>Cart {cartCount()}</Button>

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

            <div>
              {cart.items.map(currentItem => (
                  <ProdInCart prod = {currentItem.item} quantity={currentItem.quantity} 
                  />  

                  ))}              
              
            </div>
            <strong>
              <p>
                <u>Total Cost:</u> 
                <p>
                  ${getTotalPrice()}
                </p>
              </p>
              {/* <p>Shipping - $4.99</p>
              <p>Estimated Tax - $1.22</p>
              <p>
                <u>Total Price - $ amt USD</u>
              </p> */}
            </strong>
          <p style={{fontSize:'14px', padding:' 0 2rem', textAlign: 'center'}}>Secure payments</p>
          {/* <img id="stripe-banner" src="https://cdn.brandfolder.io/KGT2DTA4/at/g65qkq94m43qc3c9fqnhh3m/Powered_by_Stripe_-_black.svg"
          /> */}
          <a href='https://stripe.com/' target='_blank' rel='noopener, noreferrers'>
            <img id="stripe-banner" src="https://cdn.brandfolder.io/KGT2DTA4/at/v5bcwzcgcmgbp3676v3rg79q/Powered_by_Stripe_-_white.svg"/>
          </a>

          <div id='icons'>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" alt='Visa'
                  width="48" height="48"
                  viewBox="0 0 48 48">
                    <title>Visa</title>
                  <path fill="#1565C0" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"></path><path fill="#FFF" d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"></path><path fill="#FFC107" d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" alt='Mastercard'
                  width="48" height="48"
                  viewBox="0 0 48 48">
                    <title>Mastercard</title>
                  <path fill="#3F51B5" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"></path><path fill="#FFC107" d="M30 14A10 10 0 1 0 30 34A10 10 0 1 0 30 14Z"></path><path fill="#FF3D00" d="M22.014,30c-0.464-0.617-0.863-1.284-1.176-2h5.325c0.278-0.636,0.496-1.304,0.637-2h-6.598C20.07,25.354,20,24.686,20,24h7c0-0.686-0.07-1.354-0.201-2h-6.598c0.142-0.696,0.359-1.364,0.637-2h5.325c-0.313-0.716-0.711-1.383-1.176-2h-2.973c0.437-0.58,0.93-1.122,1.481-1.595C21.747,14.909,19.481,14,17,14c-5.523,0-10,4.477-10,10s4.477,10,10,10c3.269,0,6.162-1.575,7.986-4H22.014z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" alt='Discover'
                  width="48" height="48"
                  viewBox="0 0 48 48">
                    <title>Discover</title>
                  <path fill="#E1E7EA" d="M45,35c0,2.2-1.8,4-4,4H7c-2.2,0-4-1.8-4-4V13c0-2.2,1.8-4,4-4h34c2.2,0,4,1.8,4,4V35z"></path><path fill="#FF6D00" d="M45,35c0,2.2-1.8,4-4,4H16c0,0,23.6-3.8,29-15V35z M22,24c0,1.7,1.3,3,3,3s3-1.3,3-3c0-1.7-1.3-3-3-3S22,22.3,22,24z"></path><path d="M11.2,21h1.1v6h-1.1V21z M17.2,24c0,1.7,1.3,3,3,3c0.5,0,0.9-0.1,1.4-0.3v-1.3c-0.4,0.4-0.8,0.6-1.4,0.6c-1.1,0-1.9-0.8-1.9-2c0-1.1,0.8-2,1.9-2c0.5,0,0.9,0.2,1.4,0.6v-1.3c-0.5-0.2-0.9-0.4-1.4-0.4C18.5,21,17.2,22.4,17.2,24z M30.6,24.9L29,21h-1.2l2.5,6h0.6l2.5-6h-1.2L30.6,24.9z M33.9,27h3.2v-1H35v-1.6h2v-1h-2V22h2.1v-1h-3.2V27z M41.5,22.8c0-1.1-0.7-1.8-2-1.8h-1.7v6h1.1v-2.4h0.1l1.6,2.4H42l-1.8-2.5C41,24.3,41.5,23.7,41.5,22.8z M39.2,23.8h-0.3v-1.8h0.3c0.7,0,1.1,0.3,1.1,0.9C40.3,23.4,40,23.8,39.2,23.8z M7.7,21H6v6h1.6c2.5,0,3.1-2.1,3.1-3C10.8,22.2,9.5,21,7.7,21z M7.4,26H7.1v-4h0.4c1.5,0,2.1,1,2.1,2C9.6,24.4,9.5,26,7.4,26z M15.3,23.3c-0.7-0.3-0.9-0.4-0.9-0.7c0-0.4,0.4-0.6,0.8-0.6c0.3,0,0.6,0.1,0.9,0.5l0.6-0.8C16.2,21.2,15.7,21,15,21c-1,0-1.8,0.7-1.8,1.7c0,0.8,0.4,1.2,1.4,1.6c0.6,0.2,1.1,0.4,1.1,0.9c0,0.5-0.4,0.8-0.9,0.8c-0.5,0-1-0.3-1.2-0.8l-0.7,0.7c0.5,0.8,1.1,1.1,2,1.1c1.2,0,2-0.8,2-1.9C16.9,24.2,16.5,23.8,15.3,23.3z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" alt='American Express'
                  width="48" height="48"
                  viewBox="0 0 48 48">
                    <title>American Express</title>
                  <path fill="#1976D2" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"></path><path fill="#FFF" d="M22.255 20l-2.113 4.683L18.039 20h-2.695v6.726L12.341 20h-2.274L7 26.981h1.815l.671-1.558h3.432l.682 1.558h3.465v-5.185l2.299 5.185h1.563l2.351-5.095v5.095H25V20H22.255zM10.135 23.915l1.026-2.44 1.066 2.44H10.135zM37.883 23.413L41 20.018h-2.217l-1.994 2.164L34.86 20H28v6.982h6.635l2.092-2.311L38.767 27h2.21L37.883 23.413zM33.728 25.516h-4.011v-1.381h3.838v-1.323h-3.838v-1.308l4.234.012 1.693 1.897L33.728 25.516z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  width="48" height="48"
                  viewBox="0 0 48 48">
                    <title>Diner's Club International</title>
                  <path fill="#CFD8DC" d="M45,35c0,2.2-1.8,4-4,4H7c-2.2,0-4-1.8-4-4V13c0-2.2,1.8-4,4-4h34c2.2,0,4,1.8,4,4V35z"></path><path fill="#1565C0" d="M29,16H19c-4.4,0-8,3.6-8,8c0,4.4,3.6,8,8,8h10c4.4,0,8-3.6,8-8C37,19.6,33.4,16,29,16z"></path><path fill="#FFF" d="M19,18c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S22.3,18,19,18z M15,24c0-1.9,1.3-3.4,3-3.9v7.7C16.3,27.4,15,25.9,15,24z M20,27.9v-7.7c1.7,0.4,3,2,3,3.9C23,25.9,21.7,27.4,20,27.9z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" alt='Cashapp'
                  width="48" height="48"
                  viewBox="0 0 48 48">
                    <title>Cashapp</title>
                  <path fill="#64dd17" d="M14,6h20c4.418,0,8,3.582,8,8v20c0,4.418-3.582,8-8,8H14c-4.418,0-8-3.582-8-8V14	C6,9.582,9.582,6,14,6z"></path><path fill="#fafafa" d="M23.056,33.933c-0.122,0-0.245-0.001-0.37-0.004c-3.612-0.088-5.98-2.312-6.781-3.198 c-0.177-0.195-0.171-0.489,0.011-0.68l1.664-1.876c0.178-0.187,0.464-0.209,0.667-0.05c0.738,0.58,2.446,2.054,4.696,2.177 c2.612,0.142,3.829-0.601,3.986-1.736c0.149-1.075-0.375-1.986-3.277-2.739c-5.185-1.345-6.115-4.37-5.796-6.897 c0.335-2.659,3.09-4.777,6.285-4.745c4.566,0.047,7.38,2.086,8.361,2.938c0.22,0.191,0.225,0.525,0.018,0.73l-1.581,1.786 c-0.165,0.164-0.422,0.195-0.617,0.068c-0.799-0.52-2.392-2.074-5.236-2.074c-1.75,0-2.816,0.668-2.927,1.541 c-0.154,1.22,0.661,2.274,3.155,2.837c5.527,1.247,6.457,4.467,5.87,7.068C30.644,31.474,27.907,33.933,23.056,33.933z"></path><path fill="#fafafa" d="M28.032,16.592l0.839-3.99C28.937,12.292,28.699,12,28.382,12h-3.065 c-0.236,0-0.441,0.166-0.489,0.397l-0.843,4.011L28.032,16.592z"></path><path fill="#fafafa" d="M20.916,31l-0.925,4.397C19.926,35.708,20.163,36,20.481,36h3.065c0.236,0,0.441-0.166,0.489-0.397 L25.003,31H20.916z"></path>
                  </svg>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M9.27 14.669a.662.662 0 0 1-.88-.269l-.043-.095-1.818-3.998a.473.473 0 0 1 0-.145.327.327 0 0 1 .335-.328.305.305 0 0 1 .196.066l2.18 1.527a.989.989 0 0 0 .546.167.894.894 0 0 0 .342-.066l10.047-4.5a10.73 10.73 0 0 0-8.171-3.526C6.478 3.502 2 7.232 2 11.87a7.83 7.83 0 0 0 3.46 6.296.662.662 0 0 1 .24.727l-.45 1.701a.945.945 0 0 0-.051.24.327.327 0 0 0 .334.334.414.414 0 0 0 .19-.058l2.18-1.265c.16-.098.343-.151.531-.152.099 0 .197.014.29.043 1.063.3 2.161.452 3.265.45 5.525 0 10.01-3.729 10.01-8.33a7.226 7.226 0 0 0-1.097-3.883L9.35 14.625l-.08.044z"/> </g> </svg> */}

                </div>

          </div>
          :
            <div>
              <h4>There are no items in your cart!</h4>
              <p>Check out the products section to browse our art collection.</p>
              
              <div id='empty-c-banner'>
                <p style={{fontSize:'16px', padding:' 0 2rem', textAlign: 'center'}}>Secure payments</p>
                <a href='https://stripe.com/' target='_blank' rel='noopener, noreferrers'>
                  <img style={{maxWidth: '35%', margin: 'auto', backgroundColor: '#623ea2', borderRadius: '0px'}} src="https://cdn.brandfolder.io/KGT2DTA4/at/v5bcwzcgcmgbp3676v3rg79q/Powered_by_Stripe_-_white.svg"/>  
                </a>
                <div id='icons'>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" alt='Visa'
                  width="48" height="48"
                  viewBox="0 0 48 48">
                    <title>Visa</title>
                  <path fill="#1565C0" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"></path><path fill="#FFF" d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"></path><path fill="#FFC107" d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" alt='Mastercard'
                  width="48" height="48"
                  viewBox="0 0 48 48">
                    <title>Mastercard</title>
                  <path fill="#3F51B5" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"></path><path fill="#FFC107" d="M30 14A10 10 0 1 0 30 34A10 10 0 1 0 30 14Z"></path><path fill="#FF3D00" d="M22.014,30c-0.464-0.617-0.863-1.284-1.176-2h5.325c0.278-0.636,0.496-1.304,0.637-2h-6.598C20.07,25.354,20,24.686,20,24h7c0-0.686-0.07-1.354-0.201-2h-6.598c0.142-0.696,0.359-1.364,0.637-2h5.325c-0.313-0.716-0.711-1.383-1.176-2h-2.973c0.437-0.58,0.93-1.122,1.481-1.595C21.747,14.909,19.481,14,17,14c-5.523,0-10,4.477-10,10s4.477,10,10,10c3.269,0,6.162-1.575,7.986-4H22.014z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" alt='Discover'
                  width="48" height="48"
                  viewBox="0 0 48 48">
                    <title>Discover</title>
                  <path fill="#E1E7EA" d="M45,35c0,2.2-1.8,4-4,4H7c-2.2,0-4-1.8-4-4V13c0-2.2,1.8-4,4-4h34c2.2,0,4,1.8,4,4V35z"></path><path fill="#FF6D00" d="M45,35c0,2.2-1.8,4-4,4H16c0,0,23.6-3.8,29-15V35z M22,24c0,1.7,1.3,3,3,3s3-1.3,3-3c0-1.7-1.3-3-3-3S22,22.3,22,24z"></path><path d="M11.2,21h1.1v6h-1.1V21z M17.2,24c0,1.7,1.3,3,3,3c0.5,0,0.9-0.1,1.4-0.3v-1.3c-0.4,0.4-0.8,0.6-1.4,0.6c-1.1,0-1.9-0.8-1.9-2c0-1.1,0.8-2,1.9-2c0.5,0,0.9,0.2,1.4,0.6v-1.3c-0.5-0.2-0.9-0.4-1.4-0.4C18.5,21,17.2,22.4,17.2,24z M30.6,24.9L29,21h-1.2l2.5,6h0.6l2.5-6h-1.2L30.6,24.9z M33.9,27h3.2v-1H35v-1.6h2v-1h-2V22h2.1v-1h-3.2V27z M41.5,22.8c0-1.1-0.7-1.8-2-1.8h-1.7v6h1.1v-2.4h0.1l1.6,2.4H42l-1.8-2.5C41,24.3,41.5,23.7,41.5,22.8z M39.2,23.8h-0.3v-1.8h0.3c0.7,0,1.1,0.3,1.1,0.9C40.3,23.4,40,23.8,39.2,23.8z M7.7,21H6v6h1.6c2.5,0,3.1-2.1,3.1-3C10.8,22.2,9.5,21,7.7,21z M7.4,26H7.1v-4h0.4c1.5,0,2.1,1,2.1,2C9.6,24.4,9.5,26,7.4,26z M15.3,23.3c-0.7-0.3-0.9-0.4-0.9-0.7c0-0.4,0.4-0.6,0.8-0.6c0.3,0,0.6,0.1,0.9,0.5l0.6-0.8C16.2,21.2,15.7,21,15,21c-1,0-1.8,0.7-1.8,1.7c0,0.8,0.4,1.2,1.4,1.6c0.6,0.2,1.1,0.4,1.1,0.9c0,0.5-0.4,0.8-0.9,0.8c-0.5,0-1-0.3-1.2-0.8l-0.7,0.7c0.5,0.8,1.1,1.1,2,1.1c1.2,0,2-0.8,2-1.9C16.9,24.2,16.5,23.8,15.3,23.3z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" alt='American Express'
                  width="48" height="48"
                  viewBox="0 0 48 48">
                    <title>American Express</title>
                  <path fill="#1976D2" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"></path><path fill="#FFF" d="M22.255 20l-2.113 4.683L18.039 20h-2.695v6.726L12.341 20h-2.274L7 26.981h1.815l.671-1.558h3.432l.682 1.558h3.465v-5.185l2.299 5.185h1.563l2.351-5.095v5.095H25V20H22.255zM10.135 23.915l1.026-2.44 1.066 2.44H10.135zM37.883 23.413L41 20.018h-2.217l-1.994 2.164L34.86 20H28v6.982h6.635l2.092-2.311L38.767 27h2.21L37.883 23.413zM33.728 25.516h-4.011v-1.381h3.838v-1.323h-3.838v-1.308l4.234.012 1.693 1.897L33.728 25.516z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  width="48" height="48"
                  viewBox="0 0 48 48">
                    <title>Diner's Club International</title>
                  <path fill="#CFD8DC" d="M45,35c0,2.2-1.8,4-4,4H7c-2.2,0-4-1.8-4-4V13c0-2.2,1.8-4,4-4h34c2.2,0,4,1.8,4,4V35z"></path><path fill="#1565C0" d="M29,16H19c-4.4,0-8,3.6-8,8c0,4.4,3.6,8,8,8h10c4.4,0,8-3.6,8-8C37,19.6,33.4,16,29,16z"></path><path fill="#FFF" d="M19,18c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S22.3,18,19,18z M15,24c0-1.9,1.3-3.4,3-3.9v7.7C16.3,27.4,15,25.9,15,24z M20,27.9v-7.7c1.7,0.4,3,2,3,3.9C23,25.9,21.7,27.4,20,27.9z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" alt='Cashapp'
                  width="48" height="48"
                  viewBox="0 0 48 48">
                    <title>Cashapp</title>
                  <path fill="#64dd17" d="M14,6h20c4.418,0,8,3.582,8,8v20c0,4.418-3.582,8-8,8H14c-4.418,0-8-3.582-8-8V14	C6,9.582,9.582,6,14,6z"></path><path fill="#fafafa" d="M23.056,33.933c-0.122,0-0.245-0.001-0.37-0.004c-3.612-0.088-5.98-2.312-6.781-3.198 c-0.177-0.195-0.171-0.489,0.011-0.68l1.664-1.876c0.178-0.187,0.464-0.209,0.667-0.05c0.738,0.58,2.446,2.054,4.696,2.177 c2.612,0.142,3.829-0.601,3.986-1.736c0.149-1.075-0.375-1.986-3.277-2.739c-5.185-1.345-6.115-4.37-5.796-6.897 c0.335-2.659,3.09-4.777,6.285-4.745c4.566,0.047,7.38,2.086,8.361,2.938c0.22,0.191,0.225,0.525,0.018,0.73l-1.581,1.786 c-0.165,0.164-0.422,0.195-0.617,0.068c-0.799-0.52-2.392-2.074-5.236-2.074c-1.75,0-2.816,0.668-2.927,1.541 c-0.154,1.22,0.661,2.274,3.155,2.837c5.527,1.247,6.457,4.467,5.87,7.068C30.644,31.474,27.907,33.933,23.056,33.933z"></path><path fill="#fafafa" d="M28.032,16.592l0.839-3.99C28.937,12.292,28.699,12,28.382,12h-3.065 c-0.236,0-0.441,0.166-0.489,0.397l-0.843,4.011L28.032,16.592z"></path><path fill="#fafafa" d="M20.916,31l-0.925,4.397C19.926,35.708,20.163,36,20.481,36h3.065c0.236,0,0.441-0.166,0.489-0.397 L25.003,31H20.916z"></path>
                  </svg>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M9.27 14.669a.662.662 0 0 1-.88-.269l-.043-.095-1.818-3.998a.473.473 0 0 1 0-.145.327.327 0 0 1 .335-.328.305.305 0 0 1 .196.066l2.18 1.527a.989.989 0 0 0 .546.167.894.894 0 0 0 .342-.066l10.047-4.5a10.73 10.73 0 0 0-8.171-3.526C6.478 3.502 2 7.232 2 11.87a7.83 7.83 0 0 0 3.46 6.296.662.662 0 0 1 .24.727l-.45 1.701a.945.945 0 0 0-.051.24.327.327 0 0 0 .334.334.414.414 0 0 0 .19-.058l2.18-1.265c.16-.098.343-.151.531-.152.099 0 .197.014.29.043 1.063.3 2.161.452 3.265.45 5.525 0 10.01-3.729 10.01-8.33a7.226 7.226 0 0 0-1.097-3.883L9.35 14.625l-.08.044z"/> </g> </svg> */}

                </div>
              </div>
            </div>
          }
        

        </div>
      </MDBModalBody>
      <MDBModalFooter>
        {/* <Link to={'/Checkout'}> */}
          {proceed === false ?
          (<MDBBtn hidden={true ? cart.items.length === 0 : false} color='success' onClick={proceedCheckout}>Proceed to checkout</MDBBtn>
        )
        :  <CircularProgress/>
        }
        
        {/* </Link> */}
          <MDBBtn color='primary' onClick={toggleShow}>
            Close
          </MDBBtn>

      </MDBModalFooter>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>
                        {/* </li>
                      </ul> */}
                  </div>
          
<MDBModal
  animationDirection='right'
  show={centralModal}
  tabIndex='-2'
  setShow={setCentralModal}
>
  <MDBModalDialog position='central'  id='policy-modal' >
    <MDBModalContent>
      <MDBModalHeader className='bg-info text-white'>
        <MDBModalTitle>Return/Refund Policy</MDBModalTitle>
        <MDBBtn
          color='none'
          className='btn-close btn-close-white'
          onClick={toggleShowCentral}
        ></MDBBtn>
      </MDBModalHeader>
      <MDBModalBody>
        <p>
          We understand that you may have concerns about your purchase and we want to assure you that we stand behind the quality of our products. However, due to the nature of our business, we regret to inform you that we <u>do not</u> accept returns or offer refunds at this time.
        </p>
        <p>
          We believe that our products are of the highest quality and we strive to provide our customers with an exceptional shopping experience. We carefully select and curate each item to ensure that it meets our standards for quality and value.        
        </p>
        <p>
          We are committed to providing you with accurate and detailed product information, so that you can make an informed decision when purchasing from us. <br/><br/>If you have any questions or concerns about a product, please don't hesitate to contact us and we will be happy to assist you.
        </p>
        <p>
          Thank you for choosing our products and we appreciate your business.
        </p>

      </MDBModalBody>
      <MDBModalFooter style={{backgroundColor:'rgba(77, 76, 76, 0.4)', color:'lightpink'}}>
          Vea Collections 2023
      </MDBModalFooter>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>

    </nav>
    )
}