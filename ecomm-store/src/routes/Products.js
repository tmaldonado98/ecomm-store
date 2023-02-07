import React from "react";
import Nav from "../Nav";
import { useState, useContext } from "react";

export default function Products(props){
function hi(){
    return props.increase
}
    return (
    <>
        <Nav />
        <h1>Products</h1>
        <button onClick={hi}>Add Product 1 to Cart</button>
    </>
    )
}