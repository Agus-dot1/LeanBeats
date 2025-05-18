import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, CartContextType } from '../types/cart';

const CartContext = createContext<CartContextType | undefined>(undefined);

// Utility function for generating purchase codes
const generatePurchaseCode = (currentItems: CartItem[]) => {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 8).toUpperCase();
  const checksum = currentItems
    .reduce((acc, item) => acc + item.price, 0)
    .toString(36)
    .substring(0, 3)
    .toUpperCase();
  return `LB-${timestamp}-${randomStr}-${checksum}`;
};

// Main CartProvider component
const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const savedItems = localStorage.getItem('cartItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  

  
  const [purchaseCode, setPurchaseCode] = useState<string>(() => {
    const savedCode = localStorage.getItem('purchase-code');
    return savedCode || generatePurchaseCode([]);
  });
  
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem('cart-items', JSON.stringify(items));
    localStorage.setItem('purchase-code', purchaseCode);
  }, [items, purchaseCode]);

  useEffect(() => {
    const newTotal = items.reduce((sum, item) => sum + item.price, 0);
    setTotal(newTotal);
  }, [items]);

  const addItem = (item: CartItem) => {
    if (items.some(existingItem => existingItem.id === item.id)) {
      throw new Error('Item already in cart');
    }
    setItems(prev => [...prev, item]);
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
    setPurchaseCode(generatePurchaseCode([]));
    localStorage.removeItem('cart-items');
    localStorage.removeItem('purchase-code');
  };

  return (
    <CartContext.Provider
      value={{
        items,
        purchaseCode,
        total,
        addItem,
        removeItem,
        clearCart,
        isOpen,
        setIsOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook for using cart context
const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };