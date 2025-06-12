import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router";
import { router } from './router/Router';
import AuthContextProvider from './context/AuthContextProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
     <RouterProvider router={router} /> 
    </AuthContextProvider>
    
  </StrictMode>,
)
