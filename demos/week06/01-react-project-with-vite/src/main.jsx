import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Hello</h1>
    <App />
  </StrictMode>,
)


// we're going to start mixing our HTML syntax and our javascript

// this weird html looking stuff is called JSX (JavaScript Syntax Extnesion) - it allows us to write this kinda HTML looking code, but under the hood, it's just calling the 'createElement' function, and passing in what to make.

// createElement = document.creatElement

// createElement('h1', {className: 'myClass'}, 'Hello')