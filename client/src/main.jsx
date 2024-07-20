import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StoreProvidor from './context/storeProvidor.jsx'
import {  Toaster } from 'react-hot-toast'
ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreProvidor>
    <App />
    <Toaster/>
  </StoreProvidor>,
)
