// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import App from './App'
import './index.css'

// Apply saved theme on initial load
const savedTheme = localStorage.getItem('sv_theme') || 'dark'
document.documentElement.classList.toggle('dark', savedTheme === 'dark')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
