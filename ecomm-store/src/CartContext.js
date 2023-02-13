import React, { createContext, useState } from "react";
import { dbList, getItemData } from "./routes/Products";

export const CartContext = createContext({
    items: [],
    getSingleItemQuantity: () => {},
    addItem: () => {},
    removeItem: () => {},
    totalQuantity: () => {},
    clearAll: () => {},
    getTotalPrice: () => {},
});

function CartProvider({children}){
    
    const [cartItems, setCartItems] = useState([]);

    const [itemQuant, setItemQuant] = useState(0)

    function getSingleItemQuantity (value) {
        setItemQuant(value);
        console.log(value)
    }

    function addItem(data){
            setCartItems([
                ...cartItems,
                {
                    item: data,
                    quantity: itemQuant,
                }
            ])
    };

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

        cartItems.map(currentItem => {
            const data = currentItem.item.price;
            const currentQuant = currentItem.quantity;
            // console.log(data);
            totalPrice += data * currentQuant;
        })
        console.log(Number(totalPrice))
        return Number(totalPrice).toFixed(2);
    }

    const contextValue = {
        items: cartItems,
        getSingleItemQuantity,
        addItem,
        removeItem,
        totalQuantity,
        clearAll,
        getTotalPrice,
    }

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;