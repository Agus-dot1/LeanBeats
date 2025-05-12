import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Package, Wand2, FileAudio, Folder, HardDrive, Plus, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

interface PackContent {
  [key: string]: number | undefined;
  bases?: number;
  claps?: number;
  complementos?: number;
  fxs?: number;
  punteos?: number;
  platillos?: number;
  percusiones?: number;
  oneShots?: number;
  kicks?: number;
  repiques?: number;
  snares?: number;
  vocales?: number;
  loops?: number;
}

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
  };
  contents: PackContent;
  displayContents: string[];
}

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  pack: Pack;
}

const ContentDialog: React.FC<DialogProps> = ({ isOpen, onClose, pack }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 backdrop-blur-md sm:p-4 bg-black/70"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative p-4 mx-2 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl sm:p-6 md:p-8 sm:mx-4 sm:rounded-3xl bg-bg-200 shadow-black/20"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full transition-colors hover:bg-bg-300 text-text-200 hover:text-text-100"
            >
              <X size={16} className="sm:w-5 sm:h-5" />
            </button>

            <div className="mb-4 sm:mb-6 md:mb-8">
              <span className="inline-flex gap-1.5 sm:gap-2 items-center px-2 sm:px-3 py-0.5 sm:py-1 mb-2 sm:mb-4 text-xs sm:text-sm rounded-full text-primary-200 bg-primary-200/10">
                <Package size={12} className="sm:w-4 sm:h-4" />
                {pack.category}
              </span>
              <h3 className="text-xl font-bold sm:text-2xl md:text-3xl text-text-100">{pack.title}</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-2 xs:grid-cols-2 sm:gap-3 md:gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {Object.entries(pack.contents).map(([key, value]) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 transition-colors rounded-xl sm:p-3 md:p-4 sm:rounded-2xl bg-bg-300/50 hover:bg-bg-300"
                >
                  <div className="flex gap-1.5 sm:gap-2 items-center mb-1 sm:mb-2">
                    <FileAudio size={14} className="sm:w-4 sm:h-4 text-primary-200" />
                    <div className="text-xs font-medium uppercase sm:text-sm text-text-200">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                  <div className="text-lg font-bold sm:text-xl md:text-2xl text-text-100">
                    {value} <span className="text-xs font-normal sm:text-sm text-text-200">archivos</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-2 pt-4 mt-4 border-t sm:gap-4 sm:pt-6 md:pt-8 sm:mt-6 md:mt-8 border-bg-300">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium transition-colors rounded-full sm:px-6 sm:py-3 sm:text-base bg-bg-300 text-text-200 hover:bg-bg-300/70"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const PacksPage: React.FC = () => {
  const { addItem } = useCart();
  const { showToast } = useToast();
  const [selectedGenre, setSelectedGenre] = useState<string>('todos');
  const [selectedPack, setSelectedPack] = useState<Pack | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const genres = ['todos', 'aleteo', 'remix drop'];

  const packs: Pack[] = [
    {
      id: 'p1',
      title: 'Esenciales de Aleteo Vol. 1',
      description: 'Este pack es una herramienta indispensable para cualquier productor de música electrónica que busque crear pistas con un sonido único y atractivo. Con sonidos inspirados en mis propias producciones y remixs, este pack te brinda la oportunidad de agregar un toque personal a tus creaciones.',
      imageUrl: 'https://res.cloudinary.com/do17gdc0b/image/upload/v1746479151/0D57FE94-C257-4747-BDDF-1F444ACDBFC9_e9dzrx.png',
      price: 40,
      category: 'aleteo',
      features: {
        samples: 172,
        formats: ['WAV'],
        size: '289 MB',
      },
      contents: {
        bases: 14,
        claps: 13,
        complementos: 12,
        fxs: 20,
        punteos: 27,
        platillos: 9,
        percusiones: 10,
        oneShots: 10,
        kicks: 14,
        repiques: 21,
        snares: 18,
        loops: 10
      },
      displayContents: ['kicks', 'snares', 'fxs', 'bases']
    },
    {
      id: 'p2',
      title: 'Kit Remix Drop Vol. 1',
      description: 'Descubre una colección exclusiva de sonidos únicos, cuidadosamente elaborados a lo largo de mi carrera como DJ y productor. Cada sample refleja mi esencia creativa, listo para enriquecer tu música con un toque personal.',
      imageUrl: 'https://res.cloudinary.com/do17gdc0b/image/upload/v1746479152/D851250A-D700-4160-B0C3-5922A59BCB41_utr53y_phqsc8.png',
      price: 40,
      category: 'remix drop',
      features: {
        samples: 228,
        formats: ['WAV'],
        size: '205 MB',
      },
      contents: {
        bases: 25,
        claps: 16,
        complementos: 22,
        fxs: 26,
        punteos: 27,
        platillos: 4,
        percusiones: 11,
        oneShots: 10,
        kicks: 20,
        repiques: 21,
        snares: 19,
        vocales: 14
      },
      displayContents: ['kicks', 'snares', 'fxs', 'bases']
    }
  ];

  const filteredPacks = packs.filter(pack =>
    selectedGenre === 'todos' || pack.category === selectedGenre
  );

  return (
    <div className="min-h-screen pb-20 pt-28 bg-bg-100">
      <Helmet>
        <title>Librerías | Lea in the Mix</title>
        <meta name="description" content="Packs de samples y kits de batería profesionales para productores musicales. Sonidos de alta calidad para tus producciones." />
      </Helmet>

      <div className="container max-w-6xl px-4 mx-auto">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200"
          >
            <Wand2 size={16} className="animate-pulse" />
            <span>Sonidos Premium</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-6xl text-text-100"
          >
            Packs de Samples & <span className="text-primary-200">Librerías</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-base sm:text-lg text-text-200"
          >
            Samples, loops y kits de calidad profesional creados para la producción musical moderna.
            Todos los sonidos son 100% libres de regalías y están listos para tu próximo éxito.
          </motion.p>
        </div>

        {/* Genre Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 p-4 mb-8 overflow-x-auto rounded-2xl bg-bg-200"
        >
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-6 py-2.5 text-sm font-medium rounded-xl transition-all whitespace-nowrap ${
                selectedGenre === genre
                  ? 'bg-primary-200 text-white shadow-lg shadow-primary-200/20'
                  : 'bg-bg-300/50 text-text-200 hover:bg-bg-300'
              }`}
            >
              {genre.charAt(0).toUpperCase() + genre.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Packs Grid */}
        <div className="space-y-8">
          {filteredPacks.map(pack => (
            <motion.div
              key={pack.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 overflow-hidden transition-shadow duration-300 rounded-3xl bg-bg-200 hover:shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-[300px] lg:h-full min-h-[400px]">
                  <img
                    src={pack.imageUrl}
                    alt={pack.title}
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-[3px]" />
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <div className="space-y-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 text-xs text-white rounded-full backdrop-blur-sm sm:text-sm bg-white/10">
                        <Package size={14} />
                        {pack.category}
                      </span>
                      <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">{pack.title}</h2>
                      <p className="text-sm sm:text-base text-white/80">{pack.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-2xl sm:p-4 bg-bg-300/50">
                      <FileAudio className="w-5 h-5 mb-2 sm:w-6 sm:h-6 text-primary-200" />
                      <div className="text-lg font-bold sm:text-xl md:text-2xl text-text-100">{pack.features.samples}</div>
                      <div className="text-xs sm:text-sm text-text-200">Samples Totales</div>
                    </div>
                    <div className="p-3 rounded-2xl sm:p-4 bg-bg-300/50">
                      <Folder className="w-5 h-5 mb-2 sm:w-6 sm:h-6 text-primary-200" />
                      <div className="text-lg font-bold sm:text-xl md:text-2xl text-text-100">{pack.features.formats.join(', ')}</div>
                      <div className="text-xs sm:text-sm text-text-200">Formatos</div>
                    </div>
                    <div className="p-3 rounded-2xl sm:p-4 bg-bg-300/50">
                      <HardDrive className="w-5 h-5 mb-2 sm:w-6 sm:h-6 text-primary-200" />
                      <div className="text-lg font-bold sm:text-xl md:text-2xl text-text-100">{pack.features.size}</div>
                      <div className="text-xs sm:text-sm text-text-200">Tamaño Total</div>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold sm:text-xl text-text-100">Contenido</h3>
                      <button
                        onClick={() => {
                          setSelectedPack(pack);
                          setIsDialogOpen(true);
                        }}
                        className="flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-bg-300/50 text-text-200 hover:bg-bg-300"
                      >
                        <Plus size={16} />
                        <span>Ver Todo</span>
                      </button>
                    </div>
                    <div className="space-y-3">
                      {pack.displayContents.map((key) => (
                        <div key={key} className="flex items-center justify-between py-2 border-b border-bg-300">
                          <span className="capitalize text-text-200">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <span className="font-medium text-text-100">
                            {pack.contents[key as keyof PackContent] || 0} Archivos
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="text-xl font-bold sm:text-2xl md:text-3xl text-text-100">${pack.price}</div>
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 font-medium text-white rounded-full bg-primary-200"
                        onClick={() => {
                          addItem({
                            id: pack.id,
                            type: 'pack',
                            title: pack.title,
                            price: pack.price,
                            coverUrl: pack.imageUrl,
                          });
                          showToast('!Librerías añadida al carrito!', 'success');
                        }}
                      >
                        Añadir al carrito
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPacks.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-12 text-text-200"
          >
            <Package size={48} className="mb-4 opacity-50" />
            <h3 className="mb-2 text-xl font-semibold">No hay packs en esta categoría</h3>
            <p>Prueba seleccionando otra categoría</p>
          </motion.div>
        )}

        {selectedPack && (
          <ContentDialog
            isOpen={isDialogOpen}
            onClose={() => {
              setIsDialogOpen(false);
              setSelectedPack(null);
            }}
            pack={selectedPack}
          />
        )}
      </div>
    </div>
  );
};

export default PacksPage;
