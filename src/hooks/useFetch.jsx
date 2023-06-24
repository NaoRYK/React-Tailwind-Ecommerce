import { useState,useEffect } from "react";


const useFetch = (url,sliceAmount)=>{
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null)
    const [data,setData] = useState(null)

    useEffect(()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((data) =>{
            setLoading(false)
            setError(null)
            
            let slicedData = data?.slice(1, sliceAmount);
            console.log("sliced", data, slicedData,url)
            setData(slicedData)
        })
        .catch((err) =>{
            setLoading(false)
            setError(err)
        })
    },[url])

    return{
        loading,
        error,
        data
    };
}

export default useFetch;