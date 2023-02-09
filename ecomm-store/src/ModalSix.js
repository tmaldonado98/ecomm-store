import Products from './routes/Products';

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




export default function ModalSix (props){
    const [optSmModal, setOptSmModal] = useState(false);
    
    const toggleShow = () => setOptSmModal(!optSmModal);

    return(
        <>

            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <img
                    src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'
                    className='w-100 shadow-1-strong rounded mb-4'
                    alt='Yosemite National Park'
                    />
                <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}>
                        <p>description: 'first painting description',
                            medium: 'acrylic on canvas',
                            dimensions: "35' x 50'",
                            price: '$300',
                        </p> 
                        <Button onClick={toggleShow}>Enlarge</Button>
                        
                    </div>
                </a>  
            </MDBRipple>

        <MDBModal show={optSmModal} tabIndex='-1' setShow={setOptSmModal}>
        <MDBModalDialog size='lg'>
        <MDBModalContent>
            <MDBModalHeader>
            <MDBModalTitle>"Painting SIX"</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
                <MDBModalBody>
                    <img
                    src={props.data.img.src}
                    className='w-100 shadow-1-strong rounded mb-4'
                    // alt='Waves at Sea'
                    />

                        <p>{props.data.description}</p>
                        <p>{props.data.medium}</p>
                        <p>{props.data.dimensions}</p>
                        <p><strong>Price: {props.data.price}</strong></p>
                        <Button>Add to cart</Button>                
                    </MDBModalBody>
            </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
</>
    );  
}