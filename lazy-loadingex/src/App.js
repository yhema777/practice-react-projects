
import { Children } from 'react';
import About from './About';
import './App.css';
import Contact from './Contact';
import Header from './Header.js';
import Body from './Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';


function App() {
  function AppLayout(){
    return (
      <div className="App">
        <Header />
        <Outlet />
      </div> 
    );
    
  }

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
           path: "/",
          element: <Body />,
        },
        {
           path: "/about",
          element: <About />,
        },
        {
           path: "/contact",
          element: <Contact />,
        }
    ]}
  ])

  return <RouterProvider router={appRouter} />;
 
  
}

export default App;
