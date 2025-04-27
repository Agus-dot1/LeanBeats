import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Package, Music2, Download, Play, Wand2, FileAudio, Folder, HardDrive } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import toast from 'react-hot-toast';

interface Pack {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  category: string;
  features: {
    samples: number;
    formats: string[];
    size: string;
    bpm: string;
  };
  contents: {
    drums: number;
    melodias: number;
    oneshots: number;
    loops: number;
  };
}

const PacksPage: React.FC = () => {
  const addToCart = useCartStore(state => state.addToCart);
  
  const packs: Pack[] = [
    {
      id: '1',
      title: 'Trap Soul Essentials Vol. 1',
      description: 'Una colección premium de melodías con alma, baterías contundentes y sonidos atmosféricos perfectos para la producción moderna de Trap Soul.',
      imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2940',
      price: 49.99,
      category: 'Trap Soul',
      features: {
        samples: 450,
        formats: ['WAV', 'MIDI'],
        size: '1.2 GB',
        bpm: '80-160'
      },
      contents: {
        drums: 120,
        melodias: 80,
        oneshots: 150,
        loops: 100
      }
    }
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-bg-100">
      <Helmet>
        <title>Packs de Samples y Kits de Batería | Lea in the Mix</title>
        <meta name="description" content="Packs de samples y kits de batería profesionales para productores musicales. Sonidos de alta calidad para tus producciones." />
      </Helmet>

      <div className="container px-4 mx-auto max-w-6xl">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex gap-2 items-center px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200"
          >
            <Wand2 size={16} className="animate-pulse" />
            <span>Sonidos Premium</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-4xl font-bold md:text-6xl text-text-100"
          >
            Packs de Samples & <span className="text-primary-200">Kits de Batería</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-lg text-text-200"
          >
            Samples, loops y kits de calidad profesional creados para la producción musical moderna.
            Todos los sonidos son 100% libres de regalías y están listos para tu próximo éxito.
          </motion.p>
        </div>

        {/* Pack Destacado */}
        {packs.map(pack => (
          <motion.div
            key={pack.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="overflow-hidden mb-12 rounded-3xl bg-bg-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[300px] lg:h-full min-h-[400px]">
                <img
                  src={pack.imageUrl}
                  alt={pack.title}
                  className="object-cover absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                <div className="flex absolute inset-0 flex-col justify-between p-8">
                  <div className="space-y-4">
                    <span className="inline-flex gap-2 items-center px-3 py-1 text-sm text-white rounded-full backdrop-blur-sm bg-white/10">
                      <Package size={14} />
                      {pack.category}
                    </span>
                    <h2 className="text-3xl font-bold text-white">{pack.title}</h2>
                    <p className="text-white/80">{pack.description}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex gap-2 items-center px-6 py-3 font-medium text-white rounded-full bg-primary-200 w-fit"
                  >
                    <Play size={18} />
                    Vista Previa
                  </motion.button>
                </div>
              </div>

              <div className="p-8 space-y-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-bg-300/50">
                    <FileAudio className="mb-2 w-6 h-6 text-primary-200" />
                    <div className="text-2xl font-bold text-text-100">{pack.features.samples}</div>
                    <div className="text-sm text-text-200">Samples Totales</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-bg-300/50">
                    <Folder className="mb-2 w-6 h-6 text-primary-200" />
                    <div className="text-2xl font-bold text-text-100">{pack.features.formats.join(', ')}</div>
                    <div className="text-sm text-text-200">Formatos</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-bg-300/50">
                    <HardDrive className="mb-2 w-6 h-6 text-primary-200" />
                    <div className="text-2xl font-bold text-text-100">{pack.features.size}</div>
                    <div className="text-sm text-text-200">Tamaño Total</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-bg-300/50">
                    <Music2 className="mb-2 w-6 h-6 text-primary-200" />
                    <div className="text-2xl font-bold text-text-100">{pack.features.bpm}</div>
                    <div className="text-sm text-text-200">Rango BPM</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-text-100">Contenido</h3>
                  <div className="space-y-3">
                    {Object.entries(pack.contents).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-2 border-b border-bg-300">
                        <span className="capitalize text-text-200">{key}</span>
                        <span className="font-medium text-text-100">{value} Archivos</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <div className="text-3xl font-bold text-text-100">${pack.price}</div>
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex gap-2 items-center px-6 py-3 font-medium text-white rounded-full bg-primary-200"
                      onClick={() => {
                        addToCart({
                          id: pack.id,
                          type: 'pack',
                          title: pack.title,
                          price: pack.price,
                          coverUrl: pack.imageUrl,
                        });
                        toast.success('¡Pack añadido al carrito!');
                      }}
                    >
                      Añadir al carrito
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex gap-2 items-center px-6 py-3 font-medium rounded-full bg-bg-300 text-text-100"
                    >
                      <Download size={18} />
                      Demo
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PacksPage;