import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import RoutesApp from './routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <RoutesApp />
    </HelmetProvider>
  </StrictMode>
);