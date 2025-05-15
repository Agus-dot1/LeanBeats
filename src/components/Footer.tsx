import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/leainthemix/?hl=es', label: 'Instagram' },
  { icon: Twitter, href: 'https://x.com/LEAINTHEMIX?t=Uit1fcaASO7KLOHw7F19hw&s=09&fbclid=PAZXh0bgNhZW0CMTEAAafIrp2K50oy2Lq33m-G_FVeWcebG5JKB7b2GjYpsvAqv9yRFUREm3NizN9Opg_aem_KruvMSPge_EL8Uj5TfMnNA  ', label: 'Twitter' },
  { icon: Youtube, href: 'https://www.youtube.com/@LEAINTHEMIX', label: 'Youtube' },
];

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Beats', path: '/beats' },
  { name: 'Librerias', path: '/librerias' },
  { name: 'Contacto', path: '/contacto' },
];

const beatTypes = [
  { name: 'Aleteo', path: '/beats?genre=trap-soul' },
  { name: 'Remix Drop', path: '/beats?genre=latin-house' },
  { name: 'Reguetón', path: '/beats?genre=reggaeton' },
  { name: 'RKT', path: '/beats?genre=pop' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-bg-100">
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 text-2xl font-bold text-text-100">Lea in the Mix</h3>
            <p className="mb-6 text-text-200">
              Creando sonidos innecesariamente buenos, desde Buenos Aires para el mundo.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 transition-colors duration-300 rounded-full bg-bg-200 text-text-100 hover:bg-primary-200 hover:text-white"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-6 text-lg font-semibold text-text-100">Navegación</h4>
            <ul className="space-y-3">
              {navLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link to={path}>
                    <motion.div
                      whileHover={{ x: 1 }}
                      className="flex items-center transition-colors group text-text-200 hover:text-primary-200"
                    >
                      <ArrowRight className="w-4 h-4 -ml-4 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:ml-0" />
                      <span>{name}</span>
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-6 text-lg font-semibold text-text-100">Beats</h4>
            <ul className="space-y-3">
              {beatTypes.map(({ name, path }) => (
                <li key={name}>
                  <Link to={path}>
                    <motion.div
                      whileHover={{ x: 3 }}
                      className="flex items-center transition-colors group text-text-200 hover:text-primary-200"
                    >
                      <ArrowRight className="w-4 h-4 -ml-4 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:ml-0" />
                      <span>{name}</span>
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="mb-6 text-lg font-semibold text-text-100">Contacto</h4>
            <ul className="space-y-4">
              <motion.li 
                whileHover={{ x: 1 }}
                className="flex items-center gap-3 transition-colors text-text-200 hover:text-primary-200"
              >
                <a href="mailto:leainthemix.c@hotmail.com">leainthemix.c@hotmail.com</a>
              </motion.li>
              <motion.li 
                whileHover={{ x: 1 }}
                className="flex items-center gap-3 transition-colors text-text-200 hover:text-primary-200"
              >
                <span>Buenos Aires, Argentina</span>
              </motion.li>
              <motion.li 
                whileHover={{ x: 1 }}
                className="flex items-center gap-3 transition-colors text-text-200 hover:text-primary-200"
              >
                <a href="tel:+54 11 7060-7158">Tel: +54 11 7060-7158</a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-bg-300"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-text-200">
              © {new Date().getFullYear()} Lea in the Mix. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link to="/Legal">
                <motion.a
                  href="/terminos"
                  whileHover={{ y: -2 }}
                  className="text-sm transition-colors text-text-200 hover:text-primary-200"
                >
                  Términos y Condiciones
                </motion.a>
              </Link>
              <Link to="/Legal">
                <motion.a
                  href="/privacidad"
                  whileHover={{ y: -2 }}
                  className="text-sm transition-colors text-text-200 hover:text-primary-200"
                >
                  Política de Privacidad
                </motion.a>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};