import React, { createContext } from "react";



export const CartContext = createContext({
    items: [],
    addItem: () => {},
    removeItem: () => {},
    totalQuantity: () => {},
    clearAll: () => {},
    getTotalPrice: () => {},
});

export function CartProvider({children}){

    const [cartItems, setCartItems] = useState([]);

    function addItem(){
        setCartItems([
            ...cartItems,
            {
                key: key,
            }
        ])
    };

    const contextValue = {
        items: cartItems,
        addItem:
        removeItem:
        totalQuantity:
        clearAll:
        getTotalPrice:
    }

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}