import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ReviewProvider } from './lib/review';
import { CompanyLayoutProvider, HomeLayoutProvider, TrmsLayoutProvider, VersionProvider } from './lib/version';
import { App } from './App';
import './styles/app.css';
import './styles/v3.css';
import './styles/v4.css';
import './styles/v6.css';
import './styles/home-slider.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <VersionProvider><CompanyLayoutProvider><TrmsLayoutProvider><HomeLayoutProvider><ReviewProvider>
        <App />
      </ReviewProvider></HomeLayoutProvider></TrmsLayoutProvider></CompanyLayoutProvider></VersionProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
