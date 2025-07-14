import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/index.scss'
import App from '@/App.tsx'

const root = document.getElementById('root');

if (!root) {
  throw new Error("Main container not found!")
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
