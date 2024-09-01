import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './home.jsx'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
