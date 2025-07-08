import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* The BrowserRouter gives 'context' to the rest of our application about what page we're on and what to show. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
