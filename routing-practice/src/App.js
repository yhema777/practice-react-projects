import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Error from './components/Error';
import Videoplayer from './components/Videoplayer';
import Contact from './components/Contact';
import './App.css';

function App(){
  function AppLayout() {
    return (
      <div className="App">
        <Header />
        <SideBar />
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
          path: "/error",
          element: <Error />,
        },
        {
          path: "/videoplayer",
          element: <Videoplayer />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appRouter} />;

}

export default App;
