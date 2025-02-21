import React, {createContext, useContext, useState } from 'react';

const themeContext = createContext("light");
const Context = () => {
    const [theme, setTheme] = useState("light");
 
    return (
        <themeContext.Provider value={theme}>
             <div>
             <Context1 />
            <button className='p-2 m-2 border border-b-slate-800' onClick={()=>setTheme(theme==="light"? "dark" : "light")}>Click me!</button>
        </div>
        </themeContext.Provider>
       
    )
}

const Context1 = () => {
    const theme = useContext(themeContext);
    const className = 'panel-' + theme;
    const backgroundClass = theme === 'light' ? 'bg-white' : 'bg-gray-800 text-white';
    return (
        <div className={`${className} ${backgroundClass} p-2 m-2`}>
            hi
            <Context2 />
        </div>
    )
}

const Context2 = () => {
    return (
        <div className='py-3'>
            This is context 2!
        </div>
    )
}


const Context3 = () => {
    return (
        <div>

        </div>
    )
}



export default Context;
