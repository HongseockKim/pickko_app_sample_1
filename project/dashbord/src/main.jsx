import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import {RouterProvider} from "react-router-dom";
import {router} from "../../../router/router.jsx";


ReactDOM.createRoot(document.getElementById('dashbord')).render(
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
