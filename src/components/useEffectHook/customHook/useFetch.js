import React, { useEffect, useState } from 'react'

function useFetch(url) {
    const [data,setData] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(null);

    useEffect(()=>{
         fetch(url)
         .then((res)=>{
            if(!res.ok){
                 throw Error("Something is Wrong!!");
            }else{
                return res.json();
            }
            
         })
         .then((data)=>{
            setData(data);
            setIsLoading(false);
         })
         .catch((error)=>{
           setIsError(error.message);
           setIsLoading(false);
         })
    }, [url])
  return {data, isLoading, isError}
}

export default useFetch