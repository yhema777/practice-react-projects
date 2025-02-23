import React, { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';



const Body = () => {
  const dispatch = useDispatch;
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ])

    //Whenever user sign in/sign ip/ sign out, this will be triggered. 
    //On Authchange, we are saving the logins in Redux
   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));

        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });

   }, [])
     
  return (
    <div>
      <RouterProvider router ={appRouter}/>
    </div>
  )
}

export default Body;
