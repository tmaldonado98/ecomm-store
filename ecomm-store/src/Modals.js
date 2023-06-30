import { useState, useContext, useEffect, memo } from 'react';
import { CartContext } from './CartContext';
import {BasicSelect, CartSelect} from './Select';
import './Modals.css';
import {BsCartPlus} from 'react-icons/bs'

import {MDBRipple} from 'mdb-react-ui-kit';

import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody
  } from 'mdb-react-ui-kit';

  import {  Button } from '@material-ui/core';


export default function ModalProd (props){
    const [optSmModal, setOptSmModal] = useState(false);

    const toggleShow = () => setOptSmModal(!optSmModal);
    
    const [localShowSelect, setLocalShowSelect] = useState(true);

    const cart = useContext(CartContext);
    // console.log(cart.items)

    function addToCart(){
        // let itemToChange=  cart.items.map(currentItem => currentItem.item.key === props.key);
        let itemToChange =  cart.items.find(currentItem => currentItem.item.product.prodkey === props.product.prodkey);

        // console.log(itemToChange)
        // console.log(itemToChange.quantity)

        // if (itemToChange.quantity === 0) {
        //     cart.addItem(props.producto.data)
        // } else {
        //     cart.editQuant(props.product.key)
        // }
        // return itemToChange.quantity === 0 ? cart.addItem(props.productdata) : cart.editQuant(props.data.key)
        // return cart.editQuant(props.data.key) ? itemToChange.quantity > 0 : 's'
        // const propertiesToAdd = props.
        cart.addItem(props);
        // console.log(props)
        // negative();
        cart.handleCardSelect()
        // cart.showSelect.setShowSelect(!showSelect)
        setLocalShowSelect(!localShowSelect);

        cart.removeValidity();
    }    

    
    function addOriginalOrPrint () {
        if (props.product.invType === 'Original') {
            return <><p>Selling original - only one in stock</p> <Button hidden={true ? cart.items.find(curIt => curIt.item.product.prodkey === props.product.prodkey) : false} onClick={addToCart}>Add to cart <BsCartPlus/></Button></>
         } else if (props.product.invType === 'Print to order'){
            // console.log(cart.validateKey.prodkey, props.product.prodkey)
            return <Button id='add-to-cart-btn' variant='contained' hidden={true ? cart.items.find(curIt => curIt.item.product.prodkey === props.product.prodkey) : false} onClick={addToCart}>Add to cart <BsCartPlus/></Button>
         }
    }

    function selectOriginalOrPrint() {
        if (cart.items.find(curIt => curIt.item.product.prodkey === props.product.prodkey) || props.product.invType === 'Original') {
           return '' 
        } else {
            return <BasicSelect />
        }

    }
  
    return(
        <>
        {props && 
        <>
            <MDBRipple onClick={toggleShow} rippleColor='light' rippleTag='div' className='bg-image hover-overlay prod'>
                    {/* {console.log(src)} */}
                    <img
                    src={props.product.src}
                    className="prod"
                    alt={props.product.title}
                    />
                <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}>
                        <p>
                            {props.product.name}
                        </p> 
                        <p>
                            ${props.product.price} USD
                        </p> 

                        <sub>Click to expand</sub>
                        {/* <Button onClick={toggleShow}>View</Button> */}
                        
                    </div>
                </a>  
            </MDBRipple>

        <MDBModal show={optSmModal} tabIndex='-1' setShow={setOptSmModal}>
        <MDBModalDialog size='lg'>
        <MDBModalContent>
            <MDBModalHeader>
                <MDBModalTitle>{props.product.name}</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
                <MDBModalBody>
                {/* className='modalCard' */}
                    <div>
                        <div id='flex-container-card'>
                            <div id='container-card-text'>   
                                <p>Artwork by {props.product.author}</p>
                                <p>{props.product.medium}</p>
                                <p>{props.product.size}</p>
                                <p><strong>Price: ${props.product.price} USD</strong></p>
                            </div>
                            <div id='selectAndAdd'>
                                    {selectOriginalOrPrint()}
                                {/* <div>
                                </div> */}
                                    {addOriginalOrPrint()}
                                {/* <div>
                                </div> */}
                            
                            </div>
                            {cart.items.find(curIt => curIt.item.product.prodkey === props.product.prodkey) && 
                            <div id='confirm-container'>
                        
                                <p>Your item(s) have been added to you cart! <br/> To modify your order, please go to your cart.</p>
                                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                </svg>
                            </div>}
                        </div>
                        {/* <Button hidden={true ? cart.items.find(curIt => curIt.item.product.prodkey === props.product.prodkey) : false} disabled={cart.validity} onClick={addToCart}>Add to cart<i  class='fas'>&#xf217;</i></Button>                 */}
                    <img
                    src={props.product.src}
                    className="modImg"
                    alt={[props.product.name, props.product.medium, props.product.size]}    
                    />
                        
                        {/* {cart.items.find(curIt => curIt.item.product.prodkey === props.product.prodkey) ? '' : <BasicSelect />} */}
                    </div>
                </MDBModalBody>
            </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    </>
}

</>
    );  
}