import { useEffect, useContext } from "react";
import { ShoppingCartContext } from "../Context/Context";


const useFetch = (url,sliceAmount)=>{
   const context = useContext(ShoppingCartContext);
    useEffect(()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((data) =>{
            context.setLoading(false)
            context.setError(null)
            
            let slicedData = data?.slice(1, sliceAmount);
         
            context.setData(slicedData)
        })
        .catch((err) =>{
            context.setLoading(false)
            context.setError(err)
        })
    },[url])

}

export default useFetch;