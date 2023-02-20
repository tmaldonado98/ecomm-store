import React from "react";
import Nav from "../Nav";
import './Products.css';
import { CartContext } from "../CartContext";
import { useState, useContext } from "react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import {  Button } from '@material-ui/core';
// import ModalFive from "../ModalFive";
import {ModalProd} from "../Modals";

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
    MDBContainer,
    MDBCol,
    MDBRow,
  } from 'mdb-react-ui-kit';


  export const dbList = {
      five: {
        name: 'Name of fifth painting',
        img: {
          src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp',
          className: 'w-100 shadow-1-strong rounded mb-4',
          alt: 'Waves at Sea',
          },
        description: 'fifth painting description',
        medium: 'acrylic on canvas',
        dimensions: "35' x 50'",
        price: 300.00,
        key: 'Five',
    },
    six: {
        name: 'Sixth painting name',
        img: {
          src: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp',
          className: 'w-100 shadow-1-strong rounded mb-4',
          alt: 'Vertical mountain'
        },
        description: 'descr for painting SIX',
        medium: 'oil on canvas',
        dimensions: "45' x 64'",
        price: 120.00,
        key: 'Six',
      },
    };
  
    export function getItemData(currentItem){
      let itemData = dbList.find(item => item === currentItem)
      console.log(itemData);
      return itemData;
    }
  
  export default function Products(){

    return (
    <>
        <Nav />
      {/* <section> */}
          
          <h1>Products</h1>
  
      <MDBRow>
        <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                          <img
                      src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
                      className='w-100 shadow-1-strong rounded mb-4'
                      alt='Boat on Calm Water'
                      />
                  <a>
                      <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
              </MDBRipple>
  
  
     
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <img
            src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Wintry Mountain Landscape'
          />
                  <a>
                      <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
              </MDBRipple>
        </MDBCol>
  
        <MDBCol lg={4} className='mb-4 mb-lg-0'>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <img
            src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Mountains in the Clouds'
          />
                  <a>
                      <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
              </MDBRipple>
              
  
          
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <img
            src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Boat on Calm Water'
          />
                  <a>
                      <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
              </MDBRipple>
        </MDBCol>
  
        <MDBCol lg={4} className='mb-4 mb-lg-0'>
  
                  <ModalProd data={dbList.five}/>
          
                  <ModalProd data={dbList.six}/>
        </MDBCol>
      </MDBRow>
  

        {/* </section>   */}

    





    {/* <MDBBtn onClick={toggleShow}>Small modal</MDBBtn> */}
      

        {/* <button >Add Product 1 to Cart</button> */}
    </>
    )
}

