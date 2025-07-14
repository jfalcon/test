import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import '@/styles/index.scss'
import Home from '@/pages/Home.tsx'
import About from '@/pages/About.tsx'
import App from '@/App.tsx'

const root = document.getElementById('root');

if (!root) {
  throw new Error("Main container not found!")
}

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
