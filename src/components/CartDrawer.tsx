import React, { useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { OrderSummaryModal } from './OrderSummaryModal';
import { Link } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const { items, total, isOpen, setIsOpen, removeItem } = useCart();
  const [showOrderSummary, setShowOrderSummary] = React.useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleProceedToCheckout = useCallback(() => {
    setIsOpen(false);
    setShowOrderSummary(true);
  }, [setIsOpen]);

  // Add useEffect to save cart state to localStorage whenever it changes
  React.useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }, [items]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'anticipate' }}
              className="fixed inset-0 z-50 backdrop-blur-sm bg-black/50"
              onClick={handleClose}
            />
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ duration: 0.5, ease: 'anticipate' }}
              className="overflow-y-auto fixed top-0 right-0 bottom-0 z-[5000] p-6 w-full max-w-md border-l shadow-xl bg-bg-100 border-bg-200"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-text-100">Carrito de Compras</h2>
                    <p className="text-sm text-text-200">{items.length} {items.length === 1 ? 'item' : 'items'}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleClose}
                    className="p-2 rounded-full text-text-100 hover:bg-bg-200"
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                <div className="flex-1 mb-6">
                  {items.length === 0 ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col justify-center items-center h-full text-text-200"
                    >
                      <ShoppingCart size={48} className="mb-4 opacity-20" />
                      <p className="text-lg font-medium">Tu carrito está vacío</p>
                      <p className="text-sm text-center">Añade algunos beats o packs para continuar</p>
                    </motion.div>
                  ) : (
                    <div className="space-y-4">
                      <AnimatePresence mode="popLayout">
                        {items.map((item) => (
                          <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.15 }}
                            className="flex gap-4 items-center p-4 rounded-xl transition-colors bg-bg-200 hover:bg-bg-300"
                          >
                            <img
                              src={item.coverUrl}
                              alt={item.title}
                              className="object-cover w-16 h-16 rounded-lg"
                            />
                            <div className="flex-1">
                              <h3 className="font-medium text-text-100">{item.title}</h3>
                              <p className="text-sm text-text-200">
                                {item.type === 'beat' ? 'Beat' : 'Pack'}
                              </p>
                            </div>
                            <div className="flex flex-col gap-2 items-end">
                              <p className="text-lg font-semibold text-primary-200">
                                ${item.price}
                              </p>
                              <motion.button
                                whileHover={{ scale: 1.1, color: '#ef4444' }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => removeItem(item.id)}
                                className="p-1 text-sm transition-colors text-text-200 hover:text-red-500"
                              >
                                <Trash2 size={16} />
                              </motion.button>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-bg-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-text-200">Total:</span>
                    <motion.span 
                      key={total}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      className="text-xl font-bold text-text-100"
                    >
                      ${total}
                    </motion.span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleProceedToCheckout}
                    className="flex gap-2 justify-center items-center px-6 py-3 w-full font-medium text-white rounded-xl transition-all bg-primary-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary-200/20"
                    disabled={items.length === 0}
                  >
                    <ShoppingCart size={20} />
                    Proceder al pago
                  </motion.button>
                  <p className="flex flex-col mt-2 text-xs text-center text-text-100">
                      * Los precios son en dólares estadounidenses (USD).<br />
                      <span>* Clickeando en proceder al pago, estás aceptando los <Link className='block underline text-primary-200' to="/Legal">términos y condiciones</Link></span>
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <OrderSummaryModal
        isOpen={showOrderSummary}
        onClose={() => setShowOrderSummary(false)}
      />
    </>
  );
};