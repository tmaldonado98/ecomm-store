import React from "react";
import Nav from "../Nav";
import './Products.css';
import { useState, useContext } from "react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import {  Button } from '@material-ui/core';
// import ModalFive from "../ModalFive";
import {ModalFive, ModalSix} from "../Modals";

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


  
  export default function Products(){
      
      // function hi(){
          //     return props.increase
// }
let dbList = {
    five: {
      name: 'random name',
      img: {
        src: 'src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"',
        className: 'w-100 shadow-1-strong rounded mb-4',
        alt: 'Waves at Sea',
        },
      description: 'first painting description',
      medium: 'acrylic on canvas',
      dimensions: "35' x 50'",
      price: '$300',
      key: 'Five',
  },
  six: {
      name: 'random name again',
      img: {
        src: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp',
      },
      description: 'descr for painting SIX',
      medium: 'acrylic on canvas',
      dimensions: "45' x 64'",
      price: '$120',
      key: 'Six',
  },
  };

// const contentFive = () => {
//     <>
//         <div>
//             <p>{dbList.five.name}</p>
//             <p>{dbList.five.medium}</p>
//             <p>{dbList.five.dimensions}</p>
//             <p>Price: {dbList.five.price}</p>
//         </div>
//     </>
// }

// const [optSmModal, setOptSmModal] = useState(false);

// const toggleShow = () => setOptSmModal(!optSmModal);


// console.log(dbList.two);

    return (
    <>
        <Nav />
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
            {/* <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <img
                        src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Waves at Sea'
                    />
                <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}> 
                    <p>test</p> 
                        <Button onClick={toggleShow}>Enlarge</Button>
                        
                    </div>
                </a>
            </MDBRipple>          */}

                <ModalFive data={dbList.five}/>
        
                <ModalSix data={dbList.six}/>
      </MDBCol>
    </MDBRow>



    





    {/* <MDBBtn onClick={toggleShow}>Small modal</MDBBtn> */}
      

        {/* <button >Add Product 1 to Cart</button> */}
    </>
    )
}