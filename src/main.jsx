import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './routes/Routes'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './authProvider/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
 

  <AuthProvider>
  <RouterProvider router={Routes}></RouterProvider>
  </AuthProvider>
 
)
