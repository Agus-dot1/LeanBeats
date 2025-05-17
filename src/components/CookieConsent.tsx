import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Cookie, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookie-consent', 'accepted', { expires: 365 });
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "anticipate" }}
          role="alert"
          aria-live="polite"
          className="fixed right-4 bottom-4 z-50 p-4 rounded-xl shadow-lg md:max-w-md md:right-4 bg-bg-200"
        >
          <div className="flex gap-3 items-start">
            <div className="p-2 rounded-full bg-primary-200/10">
              <Cookie className="text-primary-200" size={24} />
            </div>
            <div className="flex-grow">
              <h2 className="mb-2 text-lg font-semibold text-text-100">Cookies 🍪</h2>
              <p className="mb-4 text-sm text-text-200">
                Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar navegando, aceptas nuestra política de cookies.
              </p>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAccept}
                  className="flex-grow px-4 py-2 text-white rounded-xl transition-all bg-primary-200 hover:shadow-lg hover:shadow-primary-200/20"
                  aria-label="Aceptar cookies"
                >
                  Aceptar
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsVisible(false)}
                  className="p-2 rounded-xl transition-colors hover:bg-bg-300"
                  aria-label="Cerrar aviso de cookies"
                >
                  <X size={20} className="text-text-200" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};