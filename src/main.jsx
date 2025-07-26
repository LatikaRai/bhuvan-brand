import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Collections from './components/Collections.jsx'
import About from './components/About.jsx'
import Home from './components/Home.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/home', element: <Home />},
  {path: '/collections', element: <Collections />},
  {path: '/raised-right', element: <App />},
  {path: '/story', element: <About />},
])
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
