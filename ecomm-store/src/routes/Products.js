import React from "react";
import Nav from "../Nav";
import FooterSection from '../Footer';
import './Products.css';
import { useState, useEffect } from "react";
import 'react-medium-image-zoom/dist/styles.css';
import ModalProd from "../Modals";
import  Axios from 'axios';
import { motion } from 'framer-motion';
    
export default function Products(){

  const [centralModal, setCentralModal] = useState(false);
  
  const toggleShowCentral = () => setCentralModal(!centralModal);
  
  const [rows, setRows] = useState(null);
  
  const [mainObj, setMainObj] = useState(null);

    useEffect(() => {
      Axios.get('https://us-central1-vea-collections-b5045.cloudfunctions.net/app/data')
    //  , {timeout: 5000}
    .then(response => {setRows(response.data)})
    .then(response => console.log(response.data))
      .catch(error => console.log(error + ' front'))
      
    }, []);
      
    useEffect(() => {
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
          const author = rows[i].author;
          const className = 'w-100 shadow-1-strong rounded mb-4';
          const invType = rows[i].invtype;
          if (!pathsObject[key]) {
          pathsObject[key] = {};
        }
      
        pathsObject[key].src = itemSrc;
        pathsObject[key].name = itemName;
        pathsObject[key].size = itemSize;
        pathsObject[key].medium = itemMedium;

        pathsObject[key].price = itemPrice;
        pathsObject[key].prodkey = itemProdkey;
        
        pathsObject[key].className = className;
        pathsObject[key].invType = invType;
        pathsObject[key].author = author;
        // console.log(pathsObject)  
        }
        setMainObj(pathsObject);
        // console.log('mainObj set ', mainObj);
        }        
      }, [rows]);
      
      if (!rows) {
        return (
        <>
          <Nav />
          <h2 id="prod-h2">Artworks For Sale</h2>
          <div style={{textAlign:'center', width:'100%', height:'100vh'}}><p style={{fontSize:'35px'}}>Loading...</p></div>
        </>
        )
      } 
      else {
      
      return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transitionDuration: 0.25}}>
        <Nav />    
        <h2 id="prod-h2">Artworks For Sale</h2>
        <section id="products-section">
          <div id="glass">       
            {mainObj && Object.values(mainObj).map(item => {
              return <ModalProd key={item.prodkey} product={item} />
            })}
          </div>
        </section>

        <FooterSection/>
      </motion.div>
      )
}
}

