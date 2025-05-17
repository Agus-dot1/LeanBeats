import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Music, Timer } from 'lucide-react';
import { Footer } from '../components/Footer';

const BeatsPage: React.FC = () => {
  return (
    <div className="relative pt-24 pb-20 min-h-screen bg-gradient-to-b from-bg-300 via-bg-100 to-bg-100">
      <Helmet>
        <title>Beats | Lea in the Mix</title>
        <meta name="description" content="Nuestro catálogo de beats estará disponible próximamente. Mantente atento para instrumentales de alta calidad para tu próximo proyecto." />
      </Helmet>

      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex gap-2 items-center px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200"
          >
            <Music size={16} className="animate-pulse" />
            <span>Próximamente</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-bold md:text-6xl text-text-100"
          >
            Catálogo de Beats <span className="text-primary-200">Próximamente</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 max-w-2xl text-lg text-text-200"
          >
            Estamos trabajando para traerte los mejores beats para tu próximo éxito. ¡Mantenete atento!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-2 items-center px-6 py-3 rounded-full bg-bg-200"
          >
            <Timer size={20} className="animate-pulse text-primary-200" />
            <span className="text-text-200">Próximamente</span>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BeatsPage;