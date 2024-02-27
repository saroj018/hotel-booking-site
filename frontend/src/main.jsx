import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import HotelDetailContext from './host/context/HotelDetailContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HotelDetailContext>
    <Router>
      <App />
    </Router>
  </HotelDetailContext>
)
