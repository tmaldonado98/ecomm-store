import './Nav.css';
import React, { useEffect } from 'react';
import { Link} from 'react-router-dom';
import {  Button, Typography } from '@material-ui/core';
import { useState, useContext } from 'react';
import {CartContext} from './CartContext';
import { CartSelect } from './Select';
import Axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { FaCcAmazonPay, FaCcAmex, FaCcApplePay, FaCcDinersClub, FaCcDiscover, FaCcJcb, FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcVisa, FaGooglePay } from "react-icons/fa";

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
                    <Button onClick={showOrHideEdit}>Edit</Button> 
                    :
                    <Button onClick={showOrHideEdit}>Cancel</Button>
                  :
                  null
                }

                {props.prod.product.invType === 'Print to order' && toggleEdit &&
                  <>
                    <CartSelect hidden={!toggleEdit} currentQuant={props.quantity}/>
                    <Button onClick={sendKey}>Confirm</Button>
                  </>
                }

                <Button onClick={remove}>Remove</Button>
                               
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
      <nav>
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
                <u>Cost (before shipping & taxes):</u> 
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
          <FaCcVisa style={{ fontSize: '24px', color: '#333' }}/>
{/* FaCcAmazonPay, FaCcAmex, FaCcApplePay, FaCcDinersClub, FaCcDiscover, FaCcJcb, FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcVisa, FaGooglePay */}

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
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="48" height="48"
                viewBox="0 0 48 48">
                <path fill="#1565C0" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"></path><path fill="#FFF" d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"></path><path fill="#FFC107" d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"></path>
                </svg>
{/* FaCcAmazonPay, FaCcAmex, FaCcApplePay, FaCcDinersClub, FaCcDiscover, FaCcJcb, FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcVisa, FaGooglePay */}
              </div>
            </div>
          }
        

        </div>
      </MDBModalBody>
      <MDBModalFooter>
        {/* <Link to={'/Checkout'}> */}
          {proceed === false ?
          (<MDBBtn hidden={true ? cart.items.length === 0 : false} color='link' onClick={proceedCheckout}>Proceed to checkout</MDBBtn>
        )
        :  <CircularProgress/>
        }
        
        {/* </Link> */}
          <MDBBtn onClick={toggleShow}>
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