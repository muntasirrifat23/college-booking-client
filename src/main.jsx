import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Main';
import Home from './Component/Home/Home';
import App from './App';
import College from './Component/College/College';
import Admission from './Component/Addmission/Admission';
// import Login from './Component/Auth/Login/Login';
import Register from './Component/Auth/Register/Register';
import MyCollege from './Component/MyCollege/MyCollege';
// import Auth from './Component/Auth/Auth';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<App></App>,
      },
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/college',
        element:<College></College>,
      },
      // {
      //   path:'/login',
      //   element:<Login></Login>,
      // },
      {
        path:'/register',
        element:<Register></Register>,
      },
      {
        path:'/admission',
        element:<Admission></Admission>,
      },
      {
        path:'/my',
        element:<MyCollege></MyCollege>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Auth> */}
    <RouterProvider router={router} />

    {/* </Auth> */}

  </React.StrictMode>,
)
