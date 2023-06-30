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
  
  // const [mainObj, setMainObj] = useState(null);

  const productsStatic = [
    {prodkey: "one", id: "1", name: "The Spiders' Symphony", size: '24" x 30"', medium: "Mixed media; Acrylic, chalk pastel, and india ink on canvas. Varnished.", price: 200, src: "https://firebasestorage.googleapis.com/v0/b/admin-page-vea-collections.appspot.com/o/images%2Fone?alt=media&token=de054606-31f0-44f5-8304-25ce22408620", invType: "Print to order", author: "Vea Wolf"},
    {prodkey: "two", id: "2", name: "Protector, Prevail", size: '18" x 24"', medium: "Charcoal on paper. Fixed.", price: 200, src: "https://firebasestorage.googleapis.com/v0/b/admin-page-vea-collections.appspot.com/o/images%2Ftwo?alt=media&token=aaf9c577-c0c3-4a4d-a5bc-815a4e5cb763", invType: "Print to order", author: "Vea Wolf"},
    {prodkey: "three", id: "3", name: "Rise The Void", size: '18" x 24"', medium: "Charcoal on paper. Fixed.", price: 200, src: "https://firebasestorage.googleapis.com/v0/b/admin-page-vea-collections.appspot.com/o/images%2Fthree?alt=media&token=11c27c46-fd3a-4e4d-8768-a8dc5f7bbb27", invType: "Print to order", author: "Vea Wolf"},
    {prodkey: "four", id: "4", name: "Tribe: Dream", size: '12" x 36"', medium: "Acrylic on canvas.", price: 230, src: "https://firebasestorage.googleapis.com/v0/b/admin-page-vea-collections.appspot.com/o/images%2Ffour?alt=media&token=31057b0e-4225-46c6-88fa-198c4bebf721", invType: "Print to order", author: "Vea Wolf"},
    {prodkey: "five", id: "5", name: "The Mountain King", size: '24" x 30"', medium: "Mixed media; Acrylic, chalk pastel, and india ink on canvas. Varnished.", price: 250, src: "https://firebasestorage.googleapis.com/v0/b/admin-page-vea-collections.appspot.com/o/images%2Ffive?alt=media&token=83085505-a61b-4e29-b37b-b42c24290f31", invType: "Print to order", author: "Vea Wolf"},
    {prodkey: "six", id: "6", name: "First Portrait", size: '12" x 16"', medium: "Acrylic on canvas.", price: 170, src: "https://firebasestorage.googleapis.com/v0/b/admin-page-vea-collections.appspot.com/o/images%2Fsix?alt=media&token=f2002824-cec3-4bb5-a53a-6dbc93101579", invType: "Print to order", author: "T.M. Vea"},
    {prodkey: "seven", id: "7", name: "Contemplation", size: '24" x 30"', medium: "Acrylic on canvas.", price: 200, src: "https://firebasestorage.googleapis.com/v0/b/admin-page-vea-collections.appspot.com/o/images%2Fseven?alt=media&token=c4972054-1ac6-453d-a5bb-2ba5eff0698b", invType: "Print to order", author: "T.M. Vea"},
    {prodkey: "eight", id: "8", name: "Untitled", size: '12" x 16"', medium: "Acrylic on canvas.", price: 170, src: "https://firebasestorage.googleapis.com/v0/b/admin-page-vea-collections.appspot.com/o/images%2Feight?alt=media&token=c5d9e159-d542-4453-b147-2e456736369d", invType: "Print to order", author: "T.M. Vea"},
    {prodkey: "nine", id: "9", name: "Second Portrait", size: '12" x 16"', medium: "Acrylic on canvas.", price: 170, src: "https://firebasestorage.googleapis.com/v0/b/admin-page-vea-collections.appspot.com/o/images%2Fnine?alt=media&token=df47dadb-79db-401d-9981-fef0b7ab4c3a", invType: "Print to order", author: "T.M. Vea"},
    {prodkey: "ten", id: "10", name: "Love In Distance", size: '32" x 26"', medium: "Acrylic on canvas.", price: 300, src: "https://firebasestorage.googleapis.com/v0/b/admin-page-vea-collections.appspot.com/o/images%2Ften?alt=media&token=55cedab4-6410-44c2-96e7-07812f07106f", invType: "Print to order", author: "T.M. Vea"},
    {prodkey: "eleven", id: "11", name: "Landscape In Bloom", size: '12" x 16"', medium: "Acrylic on canvas.", price: 170, src: "https://firebasestorage.googleapis.com/v0/b/admin-page-vea-collections.appspot.com/o/images%2Feleven?alt=media&token=7f1bca34-8c39-4e42-b366-410dcbe2b389", invType: "Print to order", author: "T.M. Vea"},

  ]

//     useEffect(() => {
// <<<<<<< HEAD
//       Axios.get('https://us-central1-vea-collections-b5045.cloudfunctions.net/app/data')
//     //  , {timeout: 5000}
//     .then(response => {setRows(response.data)})
//     .then(response => console.log(response.data))
//       .catch(error => console.log(error + ' front'))
// =======
//       Axios.get('/data')
//       .then(response => {setRows(response.data)})
//       .catch(error => alert(error))
// >>>>>>> 85311de (Commit for brandon.)
      
//     }, []);
      
    // useEffect(() => {
    //   if (rows !== null) {
        
    //     let pathsObject = {};
    //     for (let i = 0; i < rows.length; i++) {
    //       const key = rows[i].prodkey;
    //       const itemSrc = rows[i].imgsrc;
    //       const itemName = rows[i].name;
    //       const itemSize = rows[i].size;
    //       const itemMedium = rows[i].medium;
    //       const itemPrice = rows[i].price;
    //       const itemProdkey = rows[i].prodkey;
    //       const author = rows[i].author;
    //       const className = 'w-100 shadow-1-strong rounded mb-4';
    //       const invType = rows[i].invtype;
    //       if (!pathsObject[key]) {
    //       pathsObject[key] = {};
    //     }
      
    //     pathsObject[key].src = itemSrc;
    //     pathsObject[key].name = itemName;
    //     pathsObject[key].size = itemSize;
    //     pathsObject[key].medium = itemMedium;

    //     pathsObject[key].price = itemPrice;
    //     pathsObject[key].prodkey = itemProdkey;
        
    //     pathsObject[key].className = className;
    //     pathsObject[key].invType = invType;
    //     pathsObject[key].author = author;
    //     // console.log(pathsObject)  
    //     }
    //     setMainObj(pathsObject);
    //     // console.log('mainObj set ', mainObj);
    //     }        
    //   }, [rows]);
      
      // if (!rows) {
      //   return (
      //   <>
      //     <Nav />
      //     <h2 id="prod-h2">Artworks For Sale</h2>
      //     <div style={{textAlign:'center', width:'100%', height:'100%'}}><p style={{fontSize:'35px'}}>Loading...</p></div>
      //   </>
      //   )
      // } 
      // else {
      
      return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transitionDuration: 0.25}}>
        <Nav />    
        <h2 id="prod-h2">Artworks For Sale</h2>
        <section id="products-section">
          <div id="glass">       
            {/* {mainObj && Object.values(mainObj).map(item => {
              return <ModalProd key={item.prodkey} product={item} />
            })} */}
            {productsStatic.map(each => {
              return <ModalProd key={each.id} product={each} />
            })}
          </div>
        </section>
        <FooterSection/>
      </motion.div>
      )
}
// }

