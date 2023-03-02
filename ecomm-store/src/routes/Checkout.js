import { Link} from 'react-router-dom';
import {  Button, Typography } from '@material-ui/core';
import { CartContext } from "../CartContext";
import { useContext, useState } from "react";

import axios from "axios";

export default function Checkout () {

    // Yes, you can insert an array of objects into a MySQL table column. However, MySQL does not have a native data type for arrays, so you will need to decide how you want to represent the array data in the table column.   
    //   Serialize the array to JSON format and insert it as a string value in a VARCHAR or TEXT column.

    // CREATE TABLE my_table (
    //     id INT PRIMARY KEY,
    //     data JSON
    //   );
      
    //   INSERT INTO my_table (id, data) VALUES (1, '[{"name": "John", "age": 25}, {"name": "Jane", "age": 30}]');

    const cart = useContext(CartContext);
    console.log(cart.items)
    
    const orderItems = [];
    for (let i = 0; i < cart.items.length; i++) {
        orderItems.push(cart.items[i].item.product.name + ', key: ' + cart.items[i].item.product.prodkey + ', $' + cart.items[i].item.product.price + ', quantity: ' + cart.items[i].quantity)
    }


    // const orderItems = cart.items.map(currentItem => {
    //     currentItem.item.product.name, 
    //     currentItem.item.product.prodkey, 
    //     currentItem.item.product.price
        
    // })
    console.log(orderItems)
    function handleCheckout () {
        //    setIsUploading(true);
                    // state for showing progress
        //    setIsUploading(false)

        axios.post('http://localhost:3001/orderData', cart.items)

        .then(console.log('Data uploaded to order database: ' + cart.items))
        .catch(error => alert(error))


    }
    
    
    return (
        <>
            <nav>
                <Typography variant='h1'>Vea Art Collection</Typography>
                    <Link to='/'>
                        <Button>home</Button>
                    </Link>
                    <Link to='/products'>
                        <Button>products</Button>
                    </Link>                              
                    <Link to='/about'>
                      <Button>about</Button>
                    </Link>
                    <Link to='/contact'>
                      <Button>contact</Button>
                    </Link> 
            
            </nav>
            <h1>
                Checkout
            </h1>
            <section>
                Main Content Here
            </section>

            <Button onClick={handleCheckout}>Sample Button -- Save Customer Order</Button>
        
        </>
    )
}