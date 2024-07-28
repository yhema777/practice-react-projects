import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from './images/logo.jpg';
import location from './images/location.png'
import search from './images/search.png'
import TourPackages from './components/TourPackages';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import tourPackages from './components/data'


function App() {

  return (
    <BrowserRouter>
      <div className='header'>
        <img src={logo} class="logo"></img>
        <div className="search-box">
          <img src={location} className="icon-location"></img>
          <input type="text" className="text" placeholder="Where do you want to go?" />
          <img src={search} className="icon-search"></img>
        </div>

        <nav>
          <div className='info'>
            <li className='no-bullets'>
              <Link to="/" className="nav-link">Tour Packages</Link>
            </li>
          </div>
          <div>
            <li className='no-bullets'>
              <Link to="/about" className="nav-link">About Us</Link>
            </li>

          </div>
          <div>
            <li className='no-bullets'>
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </li>

          </div>

        </nav>
      </div>
      <div className='content'>
        <Routes>
          <Route path="/" element={<TourPackages packages={tourPackages}/>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

      </div>

    </BrowserRouter>


  );
}

export default App;
