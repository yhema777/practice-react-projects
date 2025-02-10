import React from 'react'
import { useState, useMemo } from 'react';
import findNthPrime from './helper';

const Memo = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [number, setNumber] = useState(0);
    console.log("Rendering...");
    const nthPrime = useMemo(()=>findNthPrime(number),[number]);
    //const nthPrime = findNthPrime(number);


  return (
    <div>
      <button className = "p-1 m-4 border border-black rounded-md" onClick={()=>setIsDarkTheme(!isDarkTheme)}>Toggle</button>
      <div className = {"p-1 m-4 w-96 h-40 border border-black" + 
      (isDarkTheme &&  " text-red-600 bg-gray-900 ")}>
        <input 
        className = "m-4 border border-black " 
        type="number" 
        value = {number}
        onChange={(e)=>setNumber(e.target.value)}
        />
        <div>Value: {nthPrime} </div>
      </div>
    
      
    </div>
   
    
  )
}

export default Memo;
