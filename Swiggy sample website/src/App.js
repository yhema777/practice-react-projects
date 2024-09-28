import './App.css';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Header from './components/Header';
import Restaurant from './components/Restaurant';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurantMenu';


function App() {
  return (
    <div className="App">
     <Header />
     <Outlet />   
    </div>
  );
}

 const appRouter = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Restaurant />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      }
    
    ],
    errorElement: <Error />
  }


])

export default appRouter;
