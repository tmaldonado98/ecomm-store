import React, { createContext, useState } from "react";
import { dbList, getItemData } from "./routes/Products";

export const CartContext = createContext({
    items: [],
    getSingleItemQuantity: () => {},
    addItem: () => {},
    removeItem: () => {},
    editQuant: () => {},
    totalQuantity: () => {},
    clearAll: () => {},
    // getTotalPrice: () => {},
    validity: [],
    handleCardSelect: () => {},
    showSelect: [],
    // editCartQuant: [],
});

function CartProvider({children}){
    
    const [cartItems, setCartItems] = useState([]);

    const [itemQuant, setItemQuant] = useState(0)

    const [cartValidate, setCartValidate] = useState(true);
    
    const [showSelect, setShowSelect] = useState(false);

    // const [showCardSelect, setShowCardSelect] = useState(true);

    function getSingleItemQuantity (value) {
        if (value === '' || value === 0) {
            setCartValidate(true); /// true because this value is put into 'disabled' attribute in add to cart button, in ModalProd component.
        } else {
            setItemQuant(value);
            // console.log(value)
            setCartValidate(false);
        }   
    }

    function addItem(data){
            setCartItems([
                ...cartItems,
                {
                    item: data,
                    quantity: itemQuant,
                }
            ])
            setCartValidate(true);
            setItemQuant(0);
    };

    function removeItem(key){
        setCartItems(
            cartItems => cartItems.filter(object => {
                return object.item.key != key} ///Puts into array all items that do not have the key defined in the parameter.
            )
        )
    };

    function editQuant (key){

        let itemToChange=  cartItems.find(currentItem => currentItem.item.key === key);
        console.log(itemToChange);
        
        // if (itemToChange) {
            
        // }

        const edited = cartItems.map(object =>{
                if (object.item == itemToChange.item) {
                    return {item: itemToChange.item, quantity: itemQuant}
                    
                    // object.item = itemToChange.item, object.quantity = itemToChange.quantity;
                } else {
                    return object
                }
            }
            )
        
        setCartItems(edited)

        console.log(cartItems);
        setCartValidate(true);
        setItemQuant(0);

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

    // function getTotalPrice(){
    //     let totalPrice = 0;

    //     cartItems.map(currentItem => {
    //         const data = currentItem.item.price;
    //         const currentQuant = currentItem.quantity;
    //         // console.log(data);
    //         totalPrice += data * currentQuant;
    //     })
    //     console.log(Number(totalPrice))
    //     return Number(totalPrice).toFixed(2);
    // }

    function handleCardSelect () {
        setShowSelect(!showSelect);
    }

    const contextValue = {
        items: cartItems,
        getSingleItemQuantity,
        addItem,
        removeItem,
        editQuant,
        totalQuantity,
        clearAll,
        validity: cartValidate,
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