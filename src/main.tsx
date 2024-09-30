import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.tsx';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Gia from './pages/Gia.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Gia />,
  },
  {
    path: '/gia',
    element: <Gia />,
  },
  {
    path: '/goodmorning',
    element: <Gia />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
