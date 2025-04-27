import React, { useEffect, useState } from 'react'

const useGetQuery = (url) => {
    const [data, setData] = useState();


    useEffect(()=>{
        const fetchData = async() =>{
            try{
              const response = await fetch(url)
              const json = await response.json();
              setData(json);
            }
            catch (err) {
                console.log(err);

            }
        }
        
        fetchData();
    }, []);

  return {data};
}

export default useGetQuery; 
