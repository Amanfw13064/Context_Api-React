import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {IsAuthContextProvider} from './Context/IsAuthConextProvider'

ReactDOM.render(
  <React.StrictMode>
    <IsAuthContextProvider>
    <App />
    </IsAuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
