// import './App.css';
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import logo from './images/logo.jpg';
// import location from './images/location.png'
// import search from './images/search.png'
// import TourPackages from './components/TourPackages';
// import AboutUs from './components/AboutUs';
// import ContactUs from './components/ContactUs';


// function App() {

//   return (
//     <BrowserRouter>
//       <div className='header'>
//         <img src={logo} class="logo"></img>
//         <div className="search-box">
//           <img src={location} className="icon-location"></img>
//           <input type="text" className="text" placeholder="Where do you want to go?" />
//           <img src={search} className="icon-search"></img>
//         </div>

//         <nav>
//           <div className='info'>
//             <li className='no-bullets'>
//               <Link to="/" className="nav-link">Tour Packages</Link>
//             </li>
//           </div>
//           <div>
//             <li className='no-bullets'>
//               <Link to="/about" className="nav-link">About Us</Link>
//             </li>

//           </div>
//           <div>
//             <li className='no-bullets'>
//               <Link to="/contact" className="nav-link">Contact Us</Link>
//             </li>

//           </div>

//         </nav>
//       </div>
//       <div className='content'>
//         <Routes>
//           <Route path="/" element={<TourPackages />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/contact" element={<ContactUs />} />
//         </Routes>

//       </div>

//     </BrowserRouter>


//   );
// }

// export default App;

import React, { useState } from "react";
import {
  Box, Tab, Tabs
} from '@mui/material';
import {
  Route,
  Link,
  Routes,
  Navigate,
  useLocation,
  useNavigate
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import TourPackages from "./components/TourPackages";
import Contact from "./components/Contact";
import tourPackages from './data';

function App() {
  const [tabValue, setTabValue] = React.useState("packages");
  const [showDetail, setShowDetail] = useState({ show: false });    
  const [filterValue, setFilterValue] = useState("");
  let location = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    if(location.pathname == "" || location.pathname == "/"){
      if(location.search){
        let value = location.search.split("?filter=")[1];
        setFilterValue(value);    
      }
      if(tabValue !== "packages") setTabValue("packages");
    }else if(location.pathname == "/about"){
      if(tabValue !== "aboutus") setTabValue("aboutus");
    }else if(location.pathname == "/contact"){
      if(tabValue !== "contact") setTabValue("contact");
    }else if(location.pathname.indexOf("/package/") > -1){
      if(tabValue) setTabValue(false);
    }
  }, [location]);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    if(showDetail.show){
      let obj = {
        show: false
      };
      setShowDetail({...obj});
    }
  };
  const clearTabValue = (obj) => {
    setTabValue(false);
    setShowDetail({...obj});
  };
  const showFilterValue = (value) => {
    setFilterValue(value);  
    if(value){
      navigate("/?filter=" + value);
    }else{
      navigate("/");
    } 
    
    if(tabValue !== "packages"){      
      navigate(0);
    }
  };
  return (  
    
    <div className="App">     
      <Box sx={{top: "0", position: "fixed", zIndex:"1030", background:"#fff", width:"100%"}}>
        <Header selectedTab={tabValue} setFilterValue={v => showFilterValue(v)} filterValue={filterValue}/>
        <Box sx={{ width: '100%', borderBottom: 2, borderColor: 'divider', display: "flex", justifyContent: "space-between" }}>
          <Tabs value={tabValue} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
            {/* <Tab label="Home" value="home" className="textTransformNone" /> */}
            <Tab label="Tour Packages" value="packages" className="textTransformNone" component={Link} to={"/"}/>
            <Tab label="About Us" value="aboutus" className="textTransformNone" component={Link} to={"/about"}/>
            <Tab label="Contact Us" value="contact" className="textTransformNone" component={Link} to={"/contact"}/>
          </Tabs>
        </Box>
      </Box>
      <Box sx={{top: "142px", position: "absolute", width:"100%"}}>
       {
        showDetail.show && (
          <Navigate to={"/package/" + showDetail.path} replace={false} />
        )
      }
          <Routes>
            <Route
              path="/"
              element={<TourPackages clearSelectedTab={(obj) => clearTabValue(obj)} filterValue={filterValue} packages={tourPackages}/> }
            ></Route>
            <Route
              path="/about"
              element={<AboutUs />}
            ></Route>
            <Route
              path="/contact"
              element={<Contact />}
            ></Route>
         
          </Routes>
      </Box> 
    </div>
  
  );
}

export default App;


