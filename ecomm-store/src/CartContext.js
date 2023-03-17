import { Axios } from "axios";
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    items: [],
    getSingleItemQuantity: () => {},
    addItem: () => {},
    removeItem: () => {},
    editQuant: () => {},
    totalQuantity: () => {},
    clearAll: () => {},
    // getTotalPrice: () => {},
    validateKey: [],
    validity: () => {},
    removeValidity: () => {},
    handleCardSelect: () => {},
    showSelect: [],
    // editCartQuant: [],
});

function CartProvider({children}){
    
    const [cartItems, setCartItems] = useState([]);

    const [itemQuant, setItemQuant] = useState(0)

    const [cartValidate, setCartValidate] = useState({prodkey: 'default'});
    
    const [showSelect, setShowSelect] = useState(false);

    // const [showCardSelect, setShowCardSelect] = useState(true);

    function getSingleItemQuantity (value) {
        if (value === 0) {
            // setCartValidate(true); /// true because this value is put into 'disabled' attribute in add to cart button, in ModalProd component.
            setItemQuant(1)
        } else {
            setItemQuant(value);
            // console.log(value)
            // setCartValidate(false);
        }   
    }

    function addItem(data){
        console.log(data)

        if (data.product.invType === 'Print to order') {
            setCartItems([
                ...cartItems,
                {
                    item: data,
                    quantity: itemQuant,
                }
            ])
            // setCartValidate(true);
            setItemQuant(1);    

        } else {
            setCartItems([
                ...cartItems,
                {
                    item: data,
                    quantity: 1,
                }
            ])
            // setCartValidate(true);
            setItemQuant(1);
        }
    };

    function removeItem(key){
        setCartItems(
            cartItems => cartItems.filter(object => {
                return object.item.product.prodkey != key} ///Puts into array all items that do not have the key defined in the parameter.
            )
        )
    };

    function editQuant (itemKey){

        const itemToChange=  cartItems.find(currentItem => currentItem.item.product.prodkey === itemKey);
        console.log(itemToChange);

        const edited = cartItems.map(object =>{
                if (object.item.product === itemToChange.item.product) {  //,aybe add .product
                    // console.log({item: itemToChange.item.product, quantity: itemQuant})
                    return {item: itemToChange.item, quantity: itemQuant}                    
                    // return {item: itemToChange.item.product, quantity: itemQuant} --> old version. This makes cart.items start from the product object, which then nullifies all the code in the other components which start from item
                } else {
                    return object
                }
            }
            )
        
        setCartItems(edited)

        console.log(cartItems);
        setCartValidate(true);
        setItemQuant(1);
    }
    
    function totalQuantity(){
        return cartItems.length;
    };

    function clearAll(){
        let confirm = confirm('Are you sure you want to clear your cart?')
        if (confirm === true) {
            setCartItems([])
        }
    };


    function handleCardSelect () {
        setShowSelect(!showSelect);
    }

    function validity (prodkey) {
        setCartValidate({prodkey: prodkey});
        // console.log(prodkey)    
    }
    function removeValidity(){
        setCartValidate({})
    }

    const contextValue = {
        items: cartItems,
        getSingleItemQuantity,
        addItem,
        removeItem,
        editQuant,
        totalQuantity,
        clearAll,
        validateKey: cartValidate,
        validity,
        removeValidity,
        handleCardSelect,
        showSelect: showSelect,
        // getTotalPrice,
        // editCartQuant: editCartQuant,
    }

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;