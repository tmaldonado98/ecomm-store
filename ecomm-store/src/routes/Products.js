import React from "react";
import Nav from "../Nav";
import { useState, useContext } from "react";

import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    // MDBRow,
    // MDBCol,
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

  import {
    // MDBContainer,
    // MDBCol,
    // MDBRow,
  } from 'mdb-react-ui-kit';

  import {
    MDBContainer,
    MDBCol,
    MDBLightbox,
    MDBLightboxItem,
    MDBRow,
  } from 'mdb-react-ui-kit';


export default function Products(){

    // function hi(){
//     return props.increase
// }

const [optSmModal, setOptSmModal] = useState(false);

const toggleShow = () => setOptSmModal(!optSmModal);

    return (
    <>
        <Nav />
        <h1>Products</h1>

    <MDBLightbox>
    <MDBRow>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBLightboxItem
                    src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/1.webp'
                    fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/1.webp'
                    className='w-100 mb-2 mb-md-4'
                />
                <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>
                
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBLightboxItem
                    src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/1.webp'
                    fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/1.webp'
                    className='w-100 mb-2 mb-md-4'
                />
                <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBLightboxItem
                    src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/1.webp'
                    fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/1.webp'
                    className='w-100 mb-2 mb-md-4'
                />
                <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>

            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBLightboxItem
                src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/1.webp'
                fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/1.webp'
                className='w-100 mb-2 mb-md-4'
                />
                <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBLightboxItem
                    src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/1.webp'
                    fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/1.webp'
                    className='w-100 mb-2 mb-md-4'
                />
                <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>

            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBLightboxItem
                    src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/1.webp'
                    fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/1.webp'
                    className='w-100 mb-2 mb-md-4'
                />
                <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>
      </MDBCol>
    </MDBRow>
    </MDBLightbox>


    {/* <MDBBtn onClick={toggleShow}>Small modal</MDBBtn> */}
      

        {/* <button >Add Product 1 to Cart</button> */}
    </>
    )
}