import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navigation } from './components/Navigation';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import Player from './components/MediaPlayer';
import { CartDrawer } from './components/CartDrawer';
import { CookieConsent } from './components/CookieConsent';

const queryClient = new QueryClient();

// Lazy load components
const App = React.lazy(() => import('./App'));
const BeatsPage = React.lazy(() => import('./pages/BeatsPage'));
const PacksPage = React.lazy(() => import('./pages/PacksPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const LegalPage = React.lazy(() => import('./pages/LegalPage'));
const NotFound = React.lazy(() => import('./pages/NotFound')); // New NotFound componen


const LoadingFallback = () => (
  <div className="flex justify-center items-center min-h-screen bg-bg-100">
    <div className="animate-pulse text-text-100">Cargando...</div>
  </div>
);

// Create a layout component to handle the navigation and outlet
const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <CartDrawer />
      <CookieConsent />
    </>
  );
};

const RoutesApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <CartProvider>
          <ToastProvider>
            <Router>
              <Suspense fallback={<LoadingFallback />}>
                <Player />
                <Routes>
                  {/* Main app routes */}
                  <Route element={<Layout />}>
                    <Route path="/" element={<App />} />
                    <Route path="/beats" element={<BeatsPage />} />
                    <Route path="/librerias" element={<PacksPage />} />
                    <Route path="/contacto" element={<ContactPage />} />
                    <Route path="/legal" element={<LegalPage />} />
                    {/* Catch-all route for 404 */}
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
              </Suspense>
            </Router>
          </ToastProvider>
        </CartProvider>
    </QueryClientProvider>
  );
};

export default RoutesApp;
