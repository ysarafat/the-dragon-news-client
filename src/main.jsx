import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AuthProviders from './Providers/AuthProviders';
import router from './Routes/Routes';
import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
        <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
