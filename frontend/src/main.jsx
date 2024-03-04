import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import HotelDetailContext from './host/context/HotelDetailContext.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
    <HotelDetailContext>
      <App />
  </HotelDetailContext>
    </Router>
  </Provider>
)
