import React, { createContext, useState } from "react";
import { dbList, getItemData } from "./routes/Products";

export const CartContext = createContext({
    items: [],
    addItem: () => {},
    removeItem: () => {},
    totalQuantity: () => {},
    clearAll: () => {},
    getTotalPrice: () => {},
});

function CartProvider({children}){
    
    const [cartItems, setCartItems] = useState([]);

    function addItem(data){
        setCartItems([
            ...cartItems,
            {
                item: data,
            }
        ])
        // console.log(cartItems);
        // console.log(key);

    };
/*
    function removeItem(key){
        setCartItems(
            cartItems => cartItems.filter(item => {
                return item.key != key} ///Puts into array all items that do not have the key defined in the parameter.
            )
        )
    };
    
    function totalQuantity(){
        return cartItems.length;
    };

    function clearAll(){
        let confirm = confirm('Are you sure you want to clear your cart?')
        if (confirm === true) {
            setCartItems([])
        }
    };

    function getTotalPrice(){
        let totalPrice = 0;

        dbList.map(item => {
            const data = getItemData(item.key)
            totalPrice += (data.price * dbList.length);
        })
        return totalPrice;
    }
*/
    const contextValue = {
        items: cartItems,
        addItem,
        // removeItem,
        // totalQuantity,
        // clearAll,
        // getTotalPrice,
    }

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;