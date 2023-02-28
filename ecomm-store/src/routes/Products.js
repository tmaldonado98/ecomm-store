import React from "react";
import Nav from "../Nav";
import './Products.css';
import { CartContext } from "../CartContext";
import { useState, useContext, useEffect } from "react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import {  Button } from '@material-ui/core';
import ModalProd from "../Modals";
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


  // export const dbList = {
  //     five: {
  //       name: 'Name of fifth painting',
  //       dimensions: "35' x 50'",
  //       medium: 'acrylic on canvas',
  //       // description: 'fifth painting description',
  //       key: 'Five',
  //       img: {
  //         src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp',
  //         className: 'w-100 shadow-1-strong rounded mb-4',
  //         alt: 'Waves at Sea',
  //       },
  //       price: 300.00,
  //     },
  //   six: {
  //       name: 'Sixth painting name',
  //       img: {
  //         src: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp',
  //         className: 'w-100 shadow-1-strong rounded mb-4',
  //         alt: 'Vertical mountain'
  //       },
  //       description: 'descr for painting SIX',
  //       medium: 'oil on canvas',
  //       dimensions: "45' x 64'",
  //       price: 120.00,
  //       key: 'Six',
  //     },
  //   };
  
    // export function getItemData(currentItem){
    //   let itemData = dbList.find(item => item === currentItem)
    //   // console.log(itemData);
    //   return itemData;
    // }
  
    
    
    export default function Products(){
      const [rows, setRows] = useState(null);

      const [mainObj, setMainObj] = useState(null);

      useEffect(() => {
        Axios.get('http://localhost:3001/data')
        .then(response => {
                setRows(response.data);
                // console.log(response.data)
              })
        .then(() => {
                console.log('rows state set ')
              })
        .catch(error => alert(error))
        
      }, []);
      
      useEffect(() => {
        // loopedObj();
        if (rows !== null) {
          
          let pathsObject = {};
          for (let i = 0; i < rows.length; i++) {
            const key = rows[i].prodkey;
            const itemSrc = rows[i].imgsrc;
            const itemName = rows[i].name;
            const itemSize = rows[i].size;
            const itemMedium = rows[i].medium;
            const itemPrice = rows[i].price;
            const itemProdkey = rows[i].prodkey;
            const className = 'w-100 shadow-1-strong rounded mb-4';
            if (!pathsObject[key]) {
            pathsObject[key] = {};
          }
        
          pathsObject[key].src = itemSrc;
          pathsObject[key].name = itemName;
          pathsObject[key].size = itemSize;

          pathsObject[key].medium = itemMedium;
          pathsObject[key].price = itemPrice;
          pathsObject[key].prodkey = itemProdkey;
          
          pathsObject[key].className = 'w-100 shadow-1-strong rounded mb-4';
          // console.log(pathsObject)  
          }
        setMainObj(pathsObject);
        }

        
        console.log("Rows state updated:", rows);
        console.log('mainObj set ', mainObj);
        // console.log('obj one of mainObj ', mainObj.one);
      }, [rows]);
      
      if (!rows) {
        return <div>Loading...</div>
      } 
      
      
        // const mappedObj = rows.map(item => (
        //   item.prodkey = {
        //     prodkey: item.prodkey,
        //     src: item.imgsrc,
        //     name: item.name,
        //     size: item.size,
        //     medium: item.medium,
        //     price: item.price
  
        //   })
        // )
        //   setMainObj(mappedObj);
        //   console.log(mainObj);
       
      // console.log(rows);
      // console.log(mainObj)

      function fetchDBData(){
        console.log(mainObj)

      }

      // console.log(imgData)
      // useEffect(()=> {

        // const loopedObj = () =>{ 
        //   let pathsObject = {};
        //   // console.log(rows)
        //   for (let i = 0; i < rows.length; i++) {
        //     const key = rows[i].prodkey;
        //     const itemSrc = rows[i].imgsrc;
        //     const itemName = rows[i].name;
        //     const itemSize = rows[i].size;
        //     const itemMedium = rows[i].medium;
        //     const itemPrice = rows[i].price;
        //     const itemProdkey = rows[i].prodkey;
        //     const className = 'w-100 shadow-1-strong rounded mb-4';
        //     if (!pathsObject[key]) {
        //       pathsObject[key] = {};
        //     }
          
        //     pathsObject[key].src = itemSrc;
        //     pathsObject[key].name = itemName;
        //     pathsObject[key].size = itemSize;

        //     pathsObject[key].medium = itemMedium;
        //     pathsObject[key].price = itemPrice;
        //     pathsObject[key].prodkey = itemProdkey;

        //     pathsObject[key].className = 'w-100 shadow-1-strong rounded mb-4';
        //     // console.log(pathsObject)  
        //   }
        //     setMainObj(pathsObject);
        //   // setMainObj(pathsObject)
        //   // console.log(mainObj)
        // }

      // }, [rows])
        
      //   console.log(pathsObject.one)
      // const testProps = pathsObject;

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
                      src={rows[0].imgsrc}
                      className='w-100 shadow-1-strong rounded mb-4'
                      alt='Boat on Calm Water'
                      />
                  <a>
                    {console.log(testProps)}
                      <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
              </MDBRipple> */}
            {mainObj && (
              <ModalProd data={mainObj.one}/>)}
              {/* {console.log(pathsObject.one)} */}
            {/* {mainObj && (
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <img
            // src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp'
            src={mainObj.one.src}
            className='w-100 shadow-1-strong rounded mb-4'
            alt='Wintry Mountain Landscape'
          />
                  <a>
                      <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
              </MDBRipple> )} */}
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
                  {/* <ModalProd data={dbList.five}/>
          
                  <ModalProd data={dbList.six}/> */}
        </MDBCol>
      </MDBRow>
  

      <MDBRow>
        <MDBCol>
          {/* <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>

          </MDBRipple> */}
          {/* <ModalProd/> */}
        </MDBCol>
      </MDBRow>
        {/* </section>   */}

    





    {/* <MDBBtn onClick={toggleShow}>Small modal</MDBBtn> */}
      

        {/* <button >Add Product 1 to Cart</button> */}
    </>
    )
}

