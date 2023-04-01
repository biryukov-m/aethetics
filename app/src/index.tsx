import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './sass/all.scss';

const container = document.getElementById('wrapper')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
