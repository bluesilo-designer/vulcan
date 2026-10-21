import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ReviewProvider } from './lib/review';
import { App } from './App';
import './styles/app.css';
import './styles/v3.css';
import './styles/v4.css';
import './styles/v6.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <ReviewProvider>
        <App />
      </ReviewProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
