import React, { useEffect, useState } from 'react'

const useGetQuery = (url) => {
    const [data, setData] = useState();


    useEffect(()=>{
        fetch(url)
        .then(result=>result.json())
        .then(json=>setData(json))
        .catch(err=>console.log(err))
    }, []);

  return {data};
}

export default useGetQuery; 
