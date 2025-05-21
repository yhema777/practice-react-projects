
import { Children } from 'react';
// import About from './About';
import './App.css';
// import Contact from './Contact';
import Header from './Header.js';
import Body from './Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';


function App() {
  const About = lazy(()=>import('./About'));
  const Contact = lazy(()=>import('./Contact'));
  function AppLayout(){
    return (
      <div className="App">
        <Header />
        <Suspense fallback={<h3>Loading...</h3>}>
          <Outlet />
        </Suspense>
        
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
