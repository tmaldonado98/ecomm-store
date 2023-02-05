import React from "react";
import Nav from "../Nav";
import { useState } from "react";

export default function Products(props){
    // const [cartAmt, setCartAmt] = useState(cartAmt);

    
    // function increaseCart(){
    //     setCartAmt(cartAmt + 1)
    // }

    return (
        <>
        <Nav />
        <h1>Products</h1>
        <button onClick={ props.increase }>Add Product 1 to Cart</button>
    </>
    )
}