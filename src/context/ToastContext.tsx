import React, { createContext, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, X, Info, AlertTriangle } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type: ToastType) => void;
  showDuplicateItemToast: (itemName: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: ToastType) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 2000);
  };

  const showDuplicateItemToast = (itemName: string) => {
    showToast(`"${itemName}" ya está en el carrito`, 'info');
  };

  return (
    <ToastContext.Provider value={{ showToast, showDuplicateItemToast }}>
      {children}
      <div className="flex fixed inset-x-0 bottom-4 z-50 flex-col items-center">
        <AnimatePresence>
          {toasts.map(toast => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className={`flex items-center gap-3 mb-2 px-5 py-3 rounded-lg shadow-xl max-w-md backdrop-blur-md ${
                toast.type === 'success' 
                  ? 'bg-green-500/90 text-white' 
                  : toast.type === 'error' 
                  ? 'bg-red-500/90 text-white' 
                  : toast.type === 'info'
                  ? 'bg-blue-500/90 text-white'
                  : 'bg-amber-500/90 text-white'
              }`}
            >
              {toast.type === 'success' ? (
                <CheckCircle className="w-5 h-5 shrink-0" />
              ) : toast.type === 'error' ? (
                <XCircle className="w-5 h-5 shrink-0" />
              ) : toast.type === 'info' ? (
                <Info className="w-5 h-5 shrink-0" />
              ) : (
                <AlertTriangle className="w-5 h-5 shrink-0" />
              )}
              <span className="text-sm font-medium">{toast.message}</span>
              <button
                onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
                className="p-1 ml-auto rounded-full transition-colors hover:bg-white/20"
                aria-label="Cerrar notificación"
              >
                <X size={16} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast debe ser usado dentro de un ToastProvider');
  }
  return context;
};