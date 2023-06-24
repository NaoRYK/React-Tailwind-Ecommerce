import React,{ createContext, useState } from "react";

export const ShoppingCartContext = createContext();



export const ShoppingCartProvider = ({children}) =>{

    const [count,setCount] = useState(0);
    const [isProductDetailOpen,setisProductDetailOpen] = useState(false);
    const openProductDetail =() => setisProductDetailOpen(true);
    const closeProductDetail =() => setisProductDetailOpen(false);


    //Product detail - show product

    const [productToShow, setProductToShow] = useState({})

    //My Orders - Add products
    const [cartProducts, setCartProducts] = useState([])

    //Checkout show

    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const openCheckout =() => setIsCheckoutOpen(true);
    const closeCheckout =() => setIsCheckoutOpen(false);
    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            setIsCheckoutOpen,
            isCheckoutOpen,
            openCheckout,
            closeCheckout

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}