import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppLayout from './AppLayout';
import UserProvider from './Context/UserProvider';
import { RouterProvider } from 'react-router-dom'; // Make sure to import RouterProvider correctly
import myRoute from './myRoute'; // Adjust the import path as per your file structure

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
     <RouterProvider router={myRoute}/>
    </UserProvider>
  </React.StrictMode>
);
