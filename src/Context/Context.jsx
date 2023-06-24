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

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}