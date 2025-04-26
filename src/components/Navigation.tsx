import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Music, Package, MessageSquare, ShoppingCart, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { path: '/', label: 'Inicio', icon: Home },
  { path: '/beats', label: 'Beats', icon: Music },
  { path: '/packs', label: 'Packs & Drumkits', icon: Package },
  { path: '/contacto', label: 'Contacto', icon: MessageSquare },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 shadow-lg bg-bg-100 shadow-black/5"
      >
        <nav className="container px-4 py-4 mx-auto max-w-container">
          <div className="flex items-center justify-between">
            <NavLink
              to="/"
              className="text-2xl font-bold transition-colors duration-300 text-text-100 hover:text-primary-200"
              aria-label="Home"
            >
              Lea in the Mix
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 transition-colors duration-300 rounded-full text-text-100 hover:bg-bg-200"
                aria-label="Shopping Cart"
              >
                <ShoppingCart size={20} aria-hidden="true" />
                <span className="hidden sm:inline">Carrito</span>
              </motion.button>

              <ThemeToggle />

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 transition-colors duration-300 rounded-full text-text-100 hover:bg-bg-200 md:hidden"
                aria-expanded={isOpen}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[73px] z-40 md:hidden"
          >
            <div className="p-4 mx-4 border shadow-lg rounded-2xl bg-bg-100/80 backdrop-blur-lg border-bg-200">
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
