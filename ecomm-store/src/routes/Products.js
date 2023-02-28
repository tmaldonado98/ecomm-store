import React from "react";
import Nav from "../Nav";
import './Products.css';
import { CartContext } from "../CartContext";
import { useState, useContext, useEffect } from "react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import {  Button } from '@material-ui/core';
// import ModalFive from "../ModalFive";
import {ModalProd} from "../Modals";
import  Axios from 'axios';
import { Buffer } from "buffer";

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
// import { response } from "express";


  export const dbList = {
      five: {
        name: 'Name of fifth painting',
        dimensions: "35' x 50'",
        medium: 'acrylic on canvas',
        // description: 'fifth painting description',
        key: 'Five',
        img: {
          src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp',
          className: 'w-100 shadow-1-strong rounded mb-4',
          alt: 'Waves at Sea',
        },
        price: 300.00,
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
      // console.log(itemData);
      return itemData;
    }
  
    
    
    export default function Products(){

      const [rows, setRows] = useState(null);
      // const [binData, setBinData] = useState(null)
      useEffect(() => {
        Axios.get('http://localhost:3001/data')
        .then(response => setRows(response.data))
        // .then(setBinData(rows.map(item => {return item.imgsrc.data})))
        // .then(const blob = new Blob([rows], {type: 'image/*'} ))
        .catch(error => alert(error))
        
      }, []);
      
      if (!rows) {
        return <div>Loading...</div>
      }
      
      function fetchDBData(){
        console.log(rows);

      }

      const imgData = rows.map(item => (
        item.imgsrc
        )

      )
      // console.log(imgData)
  
        let pathsObject = {};
        for (let i = 0; i < rows.length; i++) {
          const key = rows[i].prodkey;
          const itemSrc = rows[i].imgsrc;
          const itemName = rows[i].name;
          const itemSize = rows[i].size;
          const itemMedium = rows[i].medium;
          const itemPrice = rows[i].price;

          if (!pathsObject[key]) {
            pathsObject[key] = {};
          }
          // let src = {};
          pathsObject[key].src = itemSrc;
          pathsObject[key].name = itemName;
          pathsObject[key].size = itemSize;

          pathsObject[key].medium = itemMedium;
          pathsObject[key].price = itemPrice;
          pathsObject[key].className = 'w-100 shadow-1-strong rounded mb-4';
          console.log(pathsObject)  
        }
        console.log(pathsObject.one)
    return (
    <>
        <Nav />
      {/* <section> */}
          
          <h1>Products</h1>
          
          <Button onClick={fetchDBData}>asdfasf</Button>

          {/* <div>
            <> {rows.map(item => {

              const imageSrc = item.imgsrc;
            
              return (
              <>
                <p key={item.prodkey}>{item.name} {item.prodkey}</p>
                <img height={'100px'} width={'200px'} src={item.imgsrc} />   
              </>
              )
              })}
            </>
          </div> */}

      <MDBRow>
        <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
              {/* <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                          <img
                      // src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
                      src={pathsObject.one}
                      className='w-100 shadow-1-strong rounded mb-4'
                      alt='Boat on Calm Water'
                      />
                  <a>
                      <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
              </MDBRipple> */}
  
              <ModalProd data={pathsObject.one}/>
     
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
            src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Boat on Calm Water'
          />
                  <a>
                      <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
              </MDBRipple>
                  {/* <ModalProd data={dbList.five}/> */}
          
                  {/* <ModalProd data={dbList.six}/> */}
        </MDBCol>
      </MDBRow>
  

      <MDBRow>
        <MDBCol>
          {/* <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>

          </MDBRipple> */}
          <ModalProd/>
        </MDBCol>
      </MDBRow>
        {/* </section>   */}

    





    {/* <MDBBtn onClick={toggleShow}>Small modal</MDBBtn> */}
      

        {/* <button >Add Product 1 to Cart</button> */}
    </>
    )
}

