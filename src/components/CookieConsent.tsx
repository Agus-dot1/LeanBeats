import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      setShowConsent(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 4, ease: 'anticipate' }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed right-0 bottom-0 left-0 z-50 p-4 border-t bg-bg-200 border-bg-300"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col gap-4 justify-between items-center sm:flex-row">
              <div className="flex gap-3 items-center">
                <Cookie className="w-5 h-5 text-primary-200" />
                <p className="text-sm text-text-200">
                  Usamos cookies para mejorar tu experiencia. Si continuas utilizando la pagina, asumimos que aceptas las cookies. <Link to="/Legal" className="text-primary-200 hover:underline">Más información</Link>.
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-bg-300 text-text-200 hover:bg-bg-400"
                >
                  Rechazar
                </button>
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-200 hover:bg-primary-100"
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};