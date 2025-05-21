import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/contact">
      <span className='bg-slate-500 m-5 p-2'>Contact</span>
      </Link>
      <Link to="/error">
      <span className='bg-slate-500 m-5 p-2'>Error</span>
      </Link>
      <Link to="/videoplayer">
      <span className='bg-slate-500 m-5 p-2'>Videoplayer</span>
      </Link>

    </div>
  )
} 

export default Header
