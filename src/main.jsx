import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './Style.css'
import router from './route/Route'
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AllContext from './allContext/AllContext'
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AllContext>
        <RouterProvider router={router} />
      </AllContext>
    </HelmetProvider>
  </React.StrictMode>
)

