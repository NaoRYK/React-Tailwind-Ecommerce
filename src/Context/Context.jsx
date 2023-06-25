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
    const [searchedCategory, setSearchedCategory] = useState(null)

    const filteredItemsByCategory = (items,searchByCategory) =>{
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    //Saber en que url estamos
    const [filterType, setFilterType] = useState(null)

    let currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    

    const filterBy = (searchType,data, searchByTitle, searchByCategory) =>{
        if(searchType === "BY_TITLE"){
            console.log("by title", searchType)
            return filteredItemsByTitle(data,searchByTitle)
            
        }
        if(searchType === "BY_CATEGORY"){
            console.log("by categ", searchType)
            return filteredItemsByCategory(data,searchByCategory)
        }
        if(searchType === "BY_TITLE_AND_CATEGORY"){
            console.log("by dos", searchType)
            return filteredItemsByCategory(data,searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if(searchType === "BY_ALL"){
        
            return data;
        }
        if(searchType === "BY_ALL_AND_TITLE"){
        
            return filteredItemsByTitle(data,searchByTitle);
        }
        if(!searchType ){
 
            return data;
        }
    }
    useEffect(() => {

      if(searchByTitle && searchedCategory) {setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY',data,searchByTitle,searchedCategory))
    setFilterType("BY_TITLE_AND_CATEGORY")
    }
      if(searchByTitle && !searchedCategory) {setFilteredItems(filterBy('BY_TITLE',data,searchByTitle,searchedCategory))
    setFilterType("BY_TITLE")
    }
      if(!searchByTitle && searchedCategory) {setFilteredItems(filterBy('BY_CATEGORY',data,searchByTitle,searchedCategory))
    setFilterType("BY_CATEGORY")
    }
    if(index === "all") {setFilteredItems(filterBy("BY_ALL",data,searchByTitle,searchedCategory))
        setFilterType("BY_ALL")
        
        }
    
        if(index === "all" && searchByTitle) {setFilteredItems(filterBy("BY_ALL_AND_TITLE",data,searchByTitle,searchedCategory))
        setFilterType("BY_ALL_AND_TITLE")
        
        }
      if(!searchByTitle && !searchedCategory) {setFilteredItems(filterBy(null,data,searchByTitle,searchedCategory))
    setFilterType(null)
    }
    //   if(searchedCategory) setFilteredItems(filterBy(data,searchedCategory))
    
    }, [data,searchByTitle,searchedCategory])
//search by categories


console.log("lugar", index, currentPath)

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
            searchedCategory,
            filterType

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}