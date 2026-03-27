// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <-- tambah ini
import App from './App.tsx';
import './index.css'; // atau tailwind global

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>  {/* <-- Bungkus App di sini */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);