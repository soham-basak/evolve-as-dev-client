<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import Providers from './components/Providers';

import './globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
=======
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
>>>>>>> origin/main
  </React.StrictMode>
);
