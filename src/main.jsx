//entry point
import { StrictMode } from 'react'
import g from 'react-dom/client'
import './index.css'
import App from './App'

g.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
