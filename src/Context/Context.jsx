import React,{ createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();



export const ShoppingCartProvider = ({children}) =>{
    //API
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null)
    const [data,setData] = useState(null)


    const [count,setCount] = useState(0);
    const [isProductDetailOpen,setisProductDetailOpen] = useState(false);
    const openProductDetail =() => setisProductDetailOpen(true);
    const closeProductDetail =() => setisProductDetailOpen(false);



    //Product detail - show product

    const [productToShow, setProductToShow] = useState({})

    //My Order - Add products
    const [cartProducts, setCartProducts] = useState([])

    //Checkout show

    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const openCheckout =() => setIsCheckoutOpen(true);
    const closeCheckout =() => setIsCheckoutOpen(false);


    //My orders
    const [order,setOrder] = useState([]);

    //Search
    const [searchByTitle, setSearchByTitle] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    const filteredItemsByTitle = (items,searchByTitle) =>{
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {

      if(searchByTitle) setFilteredItems(filteredItemsByTitle(data,searchByTitle))
    
    }, [data,searchByTitle])
//search by categories

    const [searchedCategory, setSearchedCategory] = useState("")

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
            closeCheckout,
            order,
            setOrder,
            setLoading,
            loading,
            error,
            setError,
            data,
            setData,
            setSearchByTitle,
            searchByTitle,
            filteredItems,
            setFilteredItems,
            setSearchedCategory,
            searchedCategory

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}