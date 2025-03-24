import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import Welcome from './Components/Welcome.jsx'
import Counter from './Components/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Login/> 
    <Register/>
    <Welcome/>
    <Counter/>
  </StrictMode>,
)
