import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <div>
            <Link to="/about"><span className='m-5 p-2'>About</span></Link>
            <Link to="/contact"><span className='m-5 p-2'>Contact</span></Link>
        </div>
    )
}
