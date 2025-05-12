import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, ExternalLink, Copy, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import confetti from 'canvas-confetti';

interface OrderSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderSummaryModal: React.FC<OrderSummaryModalProps> = ({ isOpen, onClose }) => {
  const { items, total, purchaseCode, clearCart } = useCart();
  const { showToast } = useToast();
  const [isCopied, setIsCopied] = React.useState(false);


  useEffect(() => {
    const music = confetti.shapeFromText({ text: '🎵' });

    if (isOpen) {
      confetti({
        particleCount: 50,
        spread: 90,
        origin: { y: 0.6 },
        shapes: [music ],
        scalar: 2

      });
    }
  }, [isOpen]);

  const generateOrderText = useCallback(() => {
    const header = `¡Hola! Me gustaría hacer el siguiente pedido:\n\nCódigo de Compra: ${purchaseCode}\n\n`;
    const itemsList = items.map(item => {
      const baseText = `1x ${item.title} (${item.type})`;
      const priceText = ` - $${item.price}`;
      return baseText + priceText;
    }).join('\n');
    const footer = `\n\nTotal: $${total}`;
    return header + itemsList + footer;
  }, [items, purchaseCode, total]);

  const handleCopyCode = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(purchaseCode);
      setIsCopied(true);
      showToast('Código copiado al portapapeles', 'success');
      setTimeout(() => setIsCopied(false), 1000);
    } catch (error) {
      showToast('Error al copiar el código', 'error');
    }
  }, [purchaseCode, showToast]);

  const getWhatsAppLink = useCallback(() => {
    const phoneNumber = "5491132170664";
    const text = generateOrderText();
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  }, [generateOrderText]);

  const handleOrder = useCallback(() => {
    window.open(getWhatsAppLink(), '_blank');
    clearCart();
    onClose();
    showToast('¡Gracias por tu pedido!', 'success');
  }, [getWhatsAppLink, clearCart, onClose, showToast]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 backdrop-blur-sm bg-black/50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="flex fixed inset-0 z-50 justify-center items-center p-4"
          >
            <motion.div
              className="overflow-hidden w-full max-w-lg rounded-2xl shadow-xl bg-bg-100"
              layoutId="order-summary"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <motion.h2
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="text-lg md:text-2xlfont-bold text-text-100"
                  >
                    Resumen del Pedido
                  </motion.h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-bg-200"
                  >
                    <X className="w-5 h-5 text-text-200" />
                  </motion.button>
                </div>

                <div className="mb-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="p-4 mb-4 rounded-xl bg-bg-200"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-text-200">Código de Compra</p>
                        <p className="text-base font-medium md:text-lg text-text-100">{purchaseCode}</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleCopyCode}
                        className="p-2 rounded-full hover:bg-bg-300"
                      >
                        {isCopied ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <Copy className="w-5 h-5 text-text-200" />
                        )}
                      </motion.button>
                    </div>
                  </motion.div>

                  <div className="space-y-4">
                    {items.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-4 items-center p-4 rounded-xl bg-bg-200"
                      >
                        <img
                          src={item.coverUrl}
                          alt={item.title}
                          className="object-cover w-16 h-16 rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="text-sm font-medium md:text-lg text-text-100">{item.title}</h3>
                          <p className="text-sm text-text-200">
                            {item.type === 'beat' ? 'Beat' : 'Pack'}
                          </p>
                        </div>
                        <motion.p
                          className="text-lg font-semibold text-primary-200"
                          layoutId={`price-${item.id}`}
                        >
                          ${item.price}
                        </motion.p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="flex justify-between items-center mb-6"
                >
                  <span className="text-lg text-text-200">Total</span>
                  <motion.span
                    key={total}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-2xl font-bold text-primary-200"
                  >
                    ${total}
                  </motion.span>
                </motion.div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="px-5 rounded-xl border transition-all border-text-200 text-text-200 hover:bg-bg-200"
                  >
                    Editar
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleOrder}
                    className="flex gap-1 justify-center items-center px-2 py-1 text-sm font-medium text-white rounded-xl transition-all bg-primary-200 hover:shadow-lg hover:shadow-primary-200/20"
                  >
                    <ShoppingCart className="w-8 h-5" />
                    Hacer Pedido
                    <ExternalLink className="w-8 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
