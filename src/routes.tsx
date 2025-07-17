import { Suspense, useState, useEffect, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navigation } from './components/Navigation';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import { CartDrawer } from './components/CartDrawer';
import { CookieConsent } from './components/CookieConsent';
import { Loader } from './components/Loader';
// Import Player directly to avoid unnecessary suspense
import Player from './components/MediaPlayer';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Prevents unnecessary refetches
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Lazy load components with prefetch
const App = lazy(() => import('./App'));
const BeatsUnavailable = lazy(() => import('./pages/BeatsUnavailablePage'));
const PacksPage = lazy(() => import('./pages/PacksPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Simple loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-bg-100">
    <div className="w-10 h-10 rounded-full animate-spin border-3 border-primary-200 border-t-transparent"></div>
  </div>
);

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
  const [initialLoading, setInitialLoading] = useState(() => {
    const hasLoaded = localStorage.getItem('hasLoadedSite');
    return !hasLoaded;
  });

  const handleInitialLoadingComplete = () => {
    setInitialLoading(false);
    localStorage.setItem('hasLoadedSite', 'true');
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('hasLoadedSite');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);


  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <ToastProvider>
          <Router>
            {initialLoading && <Loader onLoadingComplete={handleInitialLoadingComplete} />}
            <Player />
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<App />} />
                  <Route path="/beats" element={<BeatsUnavailable />} />
                  <Route path="/librerias" element={<PacksPage />} />
                  <Route path="/contacto" element={<ContactPage />} />
                  <Route path="/legal" element={<LegalPage />} />
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
