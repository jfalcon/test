import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import App from './App.tsx'

const rootDiv = document.getElementById('root');

if (!rootDiv) {
  throw new Error("React Container not found")
}

createRoot(rootDiv).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
