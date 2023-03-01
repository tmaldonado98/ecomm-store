import './Nav.css';
import React from 'react';
import { Link} from 'react-router-dom';
import {  Button, Typography } from '@material-ui/core';
import { useState, useContext } from 'react';
import {CartContext} from './CartContext';
import { CartSelect } from './Select';

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

export function ProdInCart(props) {
  const cart = useContext(CartContext);
  const [toggleEdit, setToggleEdit] = useState(false);  //true so that button is hidden by default

  // const [showCartSelect, setShowCartSelect] = useState(true);
  
  function showOrHideEdit() {
    setToggleEdit(!toggleEdit);
  }
  
  const itemKey = props.prod.product.prodkey;
  console.log(itemKey)   ///correct
  function sendKey(){
    cart.editQuant(itemKey);
    // setShowCartSelect(!showCartSelect)
    setToggleEdit(!toggleEdit);

  }

  function remove(){
    // let itemKey = props.prod.product.prodkey
    cart.removeItem(itemKey)
    cart.handleCardSelect()
    // cart.set
  }

  return (
    <>
      {/* {cart.items.map(currentItem => ( */}
                  {/* {props.currentItem.item.name} ${props.currentItem.item.price} */}
                <div className='itemInCart'>
                  {<img src={props.prod.product.src} style={{width:'120px',height:'85px',borderRadius:'15px'}}/>}
                  <p>
                    {props.prod.product.name} - ${props.prod.product.price}
                    <br/>
                    <sub>Quantity: {cart.items.map(curIt => curIt.item.product.prodkey === props.prod.product.prodkey && curIt.quantity)}</sub>  {/*THIS MIGHT BE THE PROBLEM: WORKS FINE ON FIRST RENDER BC IT COMES FROM PROPS. BREAKS ON RE-RENDER BECAUSE DEPENDS ON CART CONTEXT CART ITEMS QUANTITY*/}
                   {/* {props.quantity} */}
                    {/* {cart.items.quantity}  TRIED THIS, DIDN'T WORK AT FIRST, BUT MAYBE NEEDS DIFFERENT ANGLE */}
                  </p>
                {/* <Button onClick={showOrHideEdit}>Edit</Button> */}

                

                {!toggleEdit ? <Button onClick={showOrHideEdit}>Edit</Button> : <Button onClick={showOrHideEdit}>Cancel</Button>}
                {toggleEdit && 
                  <>
                    <CartSelect hidden={!toggleEdit} currentQuant={props.quantity}/>
                    <Button onClick={sendKey}>Confirm</Button>
                  </>} 
                
                <Button onClick={remove}>Remove</Button>
                               
                </div>
                {/* ))} */}
    </>
  )
}


///////

export default function Nav(){
    const [topRightModal, setTopRightModal] = useState(false);

    const toggleShow = () => setTopRightModal(!topRightModal);
    
    const [toggleEdit, setToggleEdit] = useState(false);  //true so that button is hidden by default

    function showOrHideEdit() {
      setToggleEdit(!toggleEdit);
    }

    const cart = useContext(CartContext);
    console.log(cart.items)

    // const cartCount = cart.items.length //cart.items.reduce((sum, item) => sum + item.quantity, 0)
      const cartCount = () => {
        let count = 0;
        cart.items.map(currentItem => {
            count += currentItem.quantity;
          }
        )
        return Number(count);
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
    console.log(Number(totalPrice))
    return Number(totalPrice).toFixed(2);
}

    return(
      <nav>
            <Typography variant='h1'>Vea Art Collection</Typography>
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
            {/* <p>
              Items in your cart:
            </p> */}
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
                  {/* ${getTotalPrice()} */}
                </p>
              </p>
              {/* <p>Shipping - $4.99</p>
              <p>Estimated Tax - $1.22</p>
              <p>
                <u>Total Price - $ amt USD</u>
              </p> */}
            </strong>
          </div>
          :
            <div>
              <h4>There are no items in your cart!</h4>
              <p>Check out the products section to browse my artwork.</p>
            </div>
          }
        

        </div>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn hidden={true ? cart.items.length === 0 : false} color='link' >Proceed to checkout</MDBBtn>
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
    )
}