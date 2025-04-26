import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navigation } from './components/Navigation';

const queryClient = new QueryClient();

// Lazy load components
const App = React.lazy(() => import('./App'));
const BeatsPage = React.lazy(() => import('./pages/BeatsPage'));
const PacksPage = React.lazy(() => import('./pages/PacksPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));

// Admin pages
const AdminLayout = React.lazy(() => import('./admin/components/layout/Layout'));
const Productos = React.lazy(() => import('./admin/pages/products/ProductsPage'));
const Ayuda = React.lazy(() => import('./admin/pages/help/HelpPage'));
const Configuracion = React.lazy(() => import('./admin/pages/settings/SettingsPage'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-bg-100">
    <div className="animate-pulse text-text-100">Cargando...</div>
  </div>
);

// Create a layout component to handle the navigation and outlet
const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

const RoutesApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Main app routes */}
            <Route element={<Layout />}>
              <Route path="/" element={<App />} />
              <Route path="/beats" element={<BeatsPage />} />
              <Route path="/packs" element={<PacksPage />} />
              <Route path="/contacto" element={<ContactPage />} />
            </Route>

            {/* Admin routes */}
            <Route path="/admin" element={<AdminLayout />}>
              {/* Nested routes for admin */}
              <Route index element={<Productos />} />
              <Route path="Ayuda" element={<Ayuda />} />
              <Route path="Configuracion" element={<Configuracion />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </QueryClientProvider>
  );
};

export default RoutesApp;
