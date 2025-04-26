import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, Music, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-100 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-text-100 mb-6">Lea in the Mix</h3>
            <p className="text-text-200 mb-6">
              Creando sonidos innecesariamente buenos desde Buenos Aires para el mundo.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="p-2 rounded-full bg-bg-200 text-text-100"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="p-2 rounded-full bg-bg-200 text-text-100"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="p-2 rounded-full bg-bg-200 text-text-100"
              >
                <Youtube size={20} />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-text-100 mb-6">Navegación</h4>
            <ul className="space-y-3">
              {['Inicio', 'Beats', 'Estudio', 'Agenda', 'Contacto'].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 3 }}
                    className="text-text-200 hover:text-text-100 transition-colors"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-text-100 mb-6">Beats</h4>
            <ul className="space-y-3">
              {['Trap Soul', 'Latin House', 'Reggaeton', 'Pop', 'Kits'].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 3 }}
                    className="text-text-200 hover:text-text-100 transition-colors"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-text-100 mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-text-200">
                <Mail size={18} />
                <span>contacto@leainthemix.com</span>
              </li>
              <li className="flex items-center gap-3 text-text-200">
                <MapPin size={18} />
                <span>Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-center gap-3 text-text-200">
                <Music size={18} />
                <span>Estudio: +54 11 1234-5678</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-bg-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-200 text-sm">
              © {new Date().getFullYear()} Lea in the Mix. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-text-200 hover:text-text-100 text-sm"
              >
                Términos y Condiciones
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-text-200 hover:text-text-100 text-sm"
              >
                Política de Privacidad
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};