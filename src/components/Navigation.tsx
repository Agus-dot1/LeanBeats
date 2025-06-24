import React, { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Music, Package, MessageSquare, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
// import { useCart } from '../context/CartContext';
import { useTheme } from '../hooks/useTheme';

const navItems = [
  { path: '/', label: 'Inicio', icon: Home },
  { path: '/librerias', label: 'Librerías', icon: Package },
  { path: '/beats', label: 'Beats', icon: Music },
  { path: '/contacto', label: 'Contacto', icon: MessageSquare },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const { items, setIsOpen: setIsCartOpen } = useCart();
  const { theme } = useTheme();

  // Memoize the toggle function to prevent unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg-300 border-bg-200">
        <nav className="container h-full px-2 py-5 mx-auto">
          <div className="flex items-center justify-between">
            <NavLink
              to="/"
              className="flex items-center w-8 h-8 gap-2 text-base font-bold transition-colors duration-300 md:w-24 md:h-10 md:text-2xl text-text-100 hover:text-primary-200"
              aria-label="Home"
            >
              <img 
                src={theme === 'light' ? '/icon-dark.svg' : '/icon-light.svg'} 
                alt="Lea in the Mix Logo" 
                className="w-full"
              />
            </NavLink>

            <div className="items-center hidden space-x-6 md:flex">
              {navItems.map(({ path, label, icon: Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-primary-200 text-white shadow-lg shadow-primary-200/20'
                        : 'text-text-100 hover:bg-bg-200'
                    }`
                  }
                  aria-label={label}
                >
                  <Icon size={20} aria-hidden="true" />
                  <span>{label}</span>
                </NavLink>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {/* 
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center gap-2 px-4 py-2 transition-colors duration-300 rounded-full text-text-100 hover:bg-bg-200"
                aria-label="Shopping Cart"
              >
                <ShoppingCart size={20} aria-hidden="true" />
                <span className="hidden sm:inline">Carrito</span>
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white rounded-full -top-1 -right-1 bg-primary-200">
                  {items.length}
                </span>
              </button>
              */}
              <ThemeToggle />

              <button
                onClick={toggleMenu}
                className="p-2 transition-colors duration-300 rounded-full text-text-100 hover:bg-bg-200 md:hidden"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="fixed inset-x-0 top-[73px] z-40 md:hidden"
          >
            <div className="p-4 mx-4 border shadow-lg rounded-2xl bg-bg-100 border-bg-200">
              {navItems.map(({ path, label, icon: Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-colors duration-300 ${
                      isActive
                        ? 'bg-primary-200 text-white'
                        : 'text-text-100 hover:bg-bg-200'
                    }`
                  }
                  aria-label={label}
                >
                  <Icon size={20} aria-hidden="true" />
                  <span>{label}</span>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

