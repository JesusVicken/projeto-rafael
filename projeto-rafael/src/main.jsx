import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/ThemeProvider'
import { BrowserRouter } from "react-router-dom"


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="theme">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)