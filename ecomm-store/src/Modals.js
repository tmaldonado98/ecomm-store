import Products from './routes/Products';
// import { CartContext, CartProvider } from './CartContext';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import Nav from './Nav';
import {BasicSelect, CartSelect} from './Select';

import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBRipple
  } from 'mdb-react-ui-kit';

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

import { useState } from "react";



export function ModalProd (props){
    const [optSmModal, setOptSmModal] = useState(false);

    const toggleShow = () => setOptSmModal(!optSmModal);
    
    const [showSelect, setShowSelect] = useState(true);

    const cart = useContext(CartContext);
    // console.log(cart.items)

    function negative(){
        cart.handleCardSelect(false);
    }

    function positive(){
        cart.handleCardSelect(true);
    }


    function addToCart(){
        // let itemToChange=  cart.items.map(currentItem => currentItem.item.key === props.data.key);
        let itemToChange=  cart.items.find(currentItem => currentItem.item.key === props.data.prodkey);

        console.log(itemToChange)
        // console.log(itemToChange.quantity)

        // if (itemToChange.quantity === 0) {
        //     cart.addItem(props.data)
        // } else {
        //     cart.editQuant(props.data.key)
        // }
        // return itemToChange.quantity === 0 ? cart.addItem(props.data) : cart.editQuant(props.data.key)
        // return cart.editQuant(props.data.key) ? itemToChange.quantity > 0 : 's'

        cart.addItem(props.data);
        // negative();
        cart.handleCardSelect()
        // cart.showSelect.setShowSelect(!showSelect)
        setShowSelect(!showSelect);
    }    

      
    
    return(
        <>
            <MDBRipple onClick={toggleShow} rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <img
                    src={props.data.src}
                    className={props.data.className}
                    />
                <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}>
                        <p>
                            {props.data.name}
                        </p> 

                        <p>
                        ${props.data.price} USD
                        </p> 

                        <Button onClick={toggleShow}>View</Button>
                        
                    </div>
                </a>  
            </MDBRipple>

        <MDBModal show={optSmModal} tabIndex='-1' setShow={setOptSmModal}>
        <MDBModalDialog size='lg'>
        <MDBModalContent>
            <MDBModalHeader>
            <MDBModalTitle>"{props.data.name}"</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
                <MDBModalBody>
                    <img
                    src={props.data.src}
                    className={props.data.className}
                    // alt={props.data.img.alt}    
                    />

                        <div className='modalCard'>
                            {/* <p>{props.data.description}</p> */}
                            <p>{props.data.medium}</p>
                            <p>{props.data.size}</p>
                            <p><strong>Price: ${props.data.price} USD</strong></p>
                            <Button hidden={cart.showSelect} disabled={cart.validity} onClick={addToCart}>Add to cart</Button>                
                            <br/>
                            <BasicSelect show={cart.showSelect} hidden={cart.showSelect} />
                            <p hidden={!cart.showSelect}>Your item(s) have been added to you cart! <br/> To modify your order, please go to your cart.</p>
                        </div>
                    </MDBModalBody>
            </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
</>
    );  
}

// export function ModalSix (props){
//     const [optSmModal, setOptSmModal] = useState(false);
    
//     const toggleShow = () => setOptSmModal(!optSmModal);

//     return(
//         <>

//             <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
//                         <img
//                     src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'
//                     className='w-100 shadow-1-strong rounded mb-4'
//                     alt='Yosemite National Park'
//                     />
//                 <a>
//                     <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}>
//                         <p>description: 'first painting description',
//                             medium: 'acrylic on canvas',
//                             dimensions: "35' x 50'",
//                             price: '$300',
//                         </p> 
//                         <Button onClick={toggleShow}>Enlarge</Button>
                        
//                     </div>
//                 </a>  
//             </MDBRipple>

//         <MDBModal show={optSmModal} tabIndex='-1' setShow={setOptSmModal}>
//         <MDBModalDialog size='lg'>
//         <MDBModalContent>
//             <MDBModalHeader>
//             <MDBModalTitle>"Painting SIX"</MDBModalTitle>
//             <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
//             </MDBModalHeader>
//                 <MDBModalBody>
//                     <img
//                     src={props.data.img.src}
//                     className='w-100 shadow-1-strong rounded mb-4'
//                     // alt='Waves at Sea'
//                     />

//                         <p>{props.data.description}</p>
//                         <p>{props.data.medium}</p>
//                         <p>{props.data.dimensions}</p>
//                         <p><strong>Price: {props.data.price}</strong></p>
//                         <Button>Add to cart</Button>                
//                     </MDBModalBody>
//             </MDBModalContent>
//             </MDBModalDialog>
//         </MDBModal>
// </>
//     );  
// }