import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Package, Wand2, FileAudio, HardDrive, Plus, X, Star, Crown, ShoppingBag } from 'lucide-react';
// import { useCart } from '../context/CartContext';
// import { useToast } from '../context/ToastContext';
import { Footer } from '../components/Footer';


const CONTENT_LABELS: Record<string, string> = {
  bassSnareBass: "BASS + SNARE BASS",
  // add more custom labels if needed
};

interface PackContent {
  [key: string]: number | undefined;
  bases?: number;
  claps?: number;
  complementos?: number;
  fxs?: number;
  impactos?: number;
  punteos?: number;
  platillos?: number;
  percusiones?: number;
  oneShots?: number;
  kicks?: number;
  repiques?: number;
  snares?: number;
  snareBass?: number;
  vocales?: number;
  loops?: number;
  transiciones?: number;
  bass?: number;
}


interface PricingOption {
  name: string;
  price: number;
  features: string[];
  gumroadUrl: string;
  badge?: string;
  contents: PackContent;  
}

interface Pack {
  id: string;
  title: string;
  description: string;
  color?: string;
  imageUrl: string;
  price: number;
  category: string;
  gumroadUrl: string;
  features: {
    samples: number;
    formats: string[];
    size: string[];
  };
  displayContents: string[];
  pricing: {
    classic: PricingOption;
    full: PricingOption;
  };
}

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  pack: Pack;
}

const ContentDialog: React.FC<DialogProps> = ({ isOpen, onClose, pack }) => {
  const [activeTab, setActiveTab] = useState<'classic' | 'full'>('classic');

  
  const getTabStyles = () => {
    if (activeTab === 'classic') {
      return 'bg-primary-200 text-white';
    }
    
    return `${
      pack.color === 'bg-gradient-to-br from-purple-500 to-pink-500'
        ? 'bg-gradient-to-r from-purple-500 to-pink-500'
        : pack.color === 'bg-gradient-to-br from-orange-500 to-yellow-500'
        ? 'bg-gradient-to-r from-orange-500 to-orange-600'
        : 'bg-gradient-to-r from-purple-500 to-pink-500'
    } text-white`;
  };

    const getCardStyles = () => {
    if (activeTab === 'classic') {
      return 'bg-bg-100 hover:bg-bg-300';
    }

    return pack.color === 'bg-gradient-to-br from-orange-500 to-yellow-500'
      ? 'bg-gradient-to-br from-orange-600/20 to-yellow-400/20 hover:from-orange-600/30 hover:to-yellow-400/30'
      : 'bg-gradient-to-br from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30';
  };

  const getIconColor = () => {
    if (activeTab === 'classic') {
      return 'text-primary-200';
    }

    return pack.color === 'bg-gradient-to-br from-orange-500 to-yellow-500'
      ? 'text-orange-400'
      : 'text-purple-600';
  };


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
              className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full transition-colors hover:bg-bg-100 text-text-200 hover:text-text-100"
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

            {/* Tabs */}
            <div className="flex gap-2 mb-4 border-b border-bg-100">
              <button
                  onClick={() => setActiveTab('classic')}
                  className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                    activeTab === 'classic'
                      ? getTabStyles()
                      : 'text-text-200 hover:bg-bg-100'
                  }`}
                >
                <span className="flex items-center gap-2">
                  <Star size={16} />
                  Versión Classic
                </span>
              </button>
                <button
                  onClick={() => setActiveTab('full')}
                  className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                    activeTab === 'full'
                      ? getTabStyles()
                      : 'text-text-200 hover:bg-bg-100'
                  }`}
                >
                <span className="flex items-center gap-2">
                  <Crown size={16} />
                  Versión Full
                </span>
              </button>
            </div>
            
            {/* Content Grid */}
            <AnimatePresence mode="wait">
                        <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 gap-2 xs:grid-cols-2 sm:gap-3 md:gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {Object.entries(pack.pricing[activeTab].contents).map(([key, value]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-2 transition-colors rounded-xl sm:p-3 md:p-4 sm:rounded-2xl ${getCardStyles()}`}
              >
                <div className="flex gap-1.5 sm:gap-2 items-center mb-1 sm:mb-2">
                  <FileAudio size={14} className={`sm:w-4 sm:h-4 ${getIconColor()}`} />
                  <div className="text-xs font-medium uppercase sm:text-sm text-text-100">
                    {CONTENT_LABELS[key] || key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
                <div className="text-lg font-bold sm:text-xl md:text-2xl text-text-100">
                  {value} <span className="text-xs font-normal sm:text-sm text-text-200">archivos</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

            <div className="flex items-center justify-end gap-2 pt-4 mt-4 border-t sm:gap-4 sm:pt-6 md:pt-8 sm:mt-6 md:mt-8 border-bg-100">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium transition-colors rounded-full sm:px-6 sm:py-3 sm:text-base bg-bg-200 text-text-200 hover:bg-bg-100"
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
  // const { addItem } = useCart();
  // const { showDuplicateItemToast } = useToast();
  const [selectedGenre, setSelectedGenre] = useState<string>('todos');
  const [selectedPack, setSelectedPack] = useState<Pack | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  

  // Comment out cart functionality
  // const handleAddToCart = (pack: Pack) => {
  //   const itemToAdd = {
  //     id: pack.id,
  //     type: 'pack' as const,
  //     title: pack.title,
  //     price: pack.price,
  //     coverUrl: pack.imageUrl
  //   };
  //   try {
  //     addItem(itemToAdd);
  //     showToast('¡Pack añadido al carrito!','success');
  //   }catch (error) {
  //     showDuplicateItemToast(pack.title);
  //   }
  // }

  const genres = ['todos', 'ALETEO', 'RKT'];

  // Example pack object with pricing
  const packs: Pack[] = [
    {
      id: 'p1',
      title: 'SAMPLE PACK ALETEO Vol. 1',
      color: 'bg-gradient-to-br from-orange-500 to-yellow-500',
      description: 'Este pack es una herramienta indispensable para cualquier productor de música electrónica que busque crear pistas con un sonido único y atractivo. Con sonidos inspirados en mis propias producciones y remixs, este pack te brinda la oportunidad de agregar un toque personal a tus creaciones.',
      imageUrl: 'https://res.cloudinary.com/do17gdc0b/image/upload/v1747593291/0D57FE94-C257-4747-BDDF-1F444ACDBFC9_eexnof.png',
      price: 40,
      category: 'ALETEO',
      gumroadUrl: 'https://agustory06.gumroad.com/l/your-pack-1-url', // Add your Gumroad URL
      features: {
        samples: 250,
        formats: ['WAV'],
        size: ['384 MB', '241 MB'],
      },
      displayContents: ['kicks', 'snares', 'fxs', 'bases'],
      pricing: {
        classic: {
          name: 'Versión Clasic',
          price: 27,
          features: [
            'Acceso a samples básicos',
            'Licencia de uso comercial'
          ],
          gumroadUrl: 'https://leainthemix.gumroad.com/l/sptrrvol1clasic',
          contents: {
            bases: 13,
            claps: 10,
            complementos: 10,
            fxs: 10,
            impactos: 10,
            punteos: 18,
            platillos: 9,
            percusiones: 11,
            kicks: 10,
            repiques: 15,
            snares: 10,
            snareBass: 11,
            transiciones: 11,
            vocales: 12
          }
        },
        full: {
          name: 'Versión Full',
          price: 40,
          features: [
            'Todos los samples',
            'Contenido exclusivo'
          ],
          gumroadUrl: 'https://leainthemix.gumroad.com/l/spaleteovol1',
          badge: 'Más Popular',
          contents: {
            bases: 21,
            claps: 14,
            complementos: 16,
            fxs: 20,
            impactos: 14,
            kicks: 19,
            percusiones: 17,
            platillos: 9,
            punteos: 41,
            repiques: 22,
            snares: 13,
            snareBass: 19,
            transiciones: 11,
            vocales: 12
          }
        }
      }
    },
    {
      id: 'p2',
      title: 'SAMPLE PACK TURREO - RKT - REMIXDROP Vol. 1',
      description: 'Descubre una colección exclusiva de sonidos únicos, cuidadosamente elaborados a lo largo de mi carrera como DJ y productor. Cada sample refleja mi esencia creativa, listo para enriquecer tu música con un toque personal.',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500',
      imageUrl: 'https://res.cloudinary.com/do17gdc0b/image/upload/v1750768510/SAMPLE_PACK_TURREO_RKT_REMIXDROP_VOL_1_lp5ql6.jpg',
      price: 40,
      category: 'RKT',
      gumroadUrl: 'https://leainthemix.gumroad.com/l/sptrrvol1', // Add your Gumroad URL
      features: {
        samples: 250,
        formats: ['WAV'],
        size: ['295 MB', '180 MB'],
      },
      displayContents: ['kicks', 'snares', 'fxs', 'bases'],
      pricing: {
        classic: {
          name: 'Versión Clasic',
          price: 27,
          features: [
            'Acceso a samples básicos',
            'Licencia de uso comercial'
          ],
          gumroadUrl: 'https://leainthemix.gumroad.com/l/spturreorrvol1clasic',
          contents: {
            bases: 19,
            claps: 10,
            bassSnareBass: 13,
            complementos: 15,
            fxs: 28,
            kicks: 15,
            oneShots: 10,
            percusiones: 11,   
            platillos: 4,
            punteos: 20,
            repiques: 11,
            snares: 19,
            vocales: 16
          }
        },
        full: {
          name: 'Versión Full',
          price: 40,
          features: [
            'Todos los samples',
            'Contenido exclusivo'
          ],
          gumroadUrl: 'https://leainthemix.gumroad.com/l/sptrrvol1',
          badge: 'Más Popular',
          contents: {
            bases: 32,
            claps: 21,
            bassSnareBass: 20,
            complementos: 27,
            fxs: 33,
            kicks: 28,
            oneShots: 14,
            percusiones: 11,   
            platillos: 4,
            punteos: 33,
            repiques: 20,
            snares: 26,
            vocales: 19
          }
        }
      }
    }
  ];

  const filteredPacks = packs.filter(pack =>
    selectedGenre === 'todos' || pack.category === selectedGenre
  );

  const [isLoading, setIsLoading] = useState(true);

  // Add loading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <div className="min-h-screen pb-16 lg:pb-48 pt-28 bg-gradient-to-b from-bg-300 via-bg-100 to-bg-200">
      <Helmet>
        <title>LIBRERÍAS | LEA IN THE MIX</title>
        <meta name="description" content="Packs de samples y kits de batería profesionales para productores musicales. Sonidos de alta calidad para tus producciones." />
      </Helmet>

      <div className="container px-4 mx-auto max-w-7xl">
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
            className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-6xl text-text-100"
          >
            Packs de Samples & <span className="text-primary-200">Librerías</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
                  : 'bg-bg-200 text-text-200 hover:bg-bg-100'
              }`}
            >
              {genre.toUpperCase()}
            </button>
          ))}
        </motion.div>

        {/* Packs Grid */}
        <div className="space-y-8">
          {isLoading ? (
            <div className="grid grid-cols-1 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="overflow-hidden rounded-3xl bg-bg-100 animate-pulse">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="h-[300px] lg:h-full bg-bg-200" />
                    <div className="p-8 space-y-8">
                      <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3].map((j) => (
                          <div key={j} className="h-24 rounded-2xl bg-bg-200" />
                        ))}
                      </div>
                      <div className="space-y-4">
                        <div className="w-1/3 h-8 rounded-lg bg-bg-200" />
                        <div className="space-y-3">
                          {[1, 2, 3, 4].map((j) => (
                            <div key={j} className="h-6 rounded-lg bg-bg-200" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>{filteredPacks.map(pack => (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12 overflow-hidden transition-shadow duration-300 rounded-3xl bg-bg-200 hover:shadow-xl group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-[300px] lg:h-full min-h-[400px]">
                    <img
                      src={pack.imageUrl}
                      alt={pack.title}
                      className="absolute inset-0 object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] transition-all duration-500 group-hover:bg-black/50 group-hover:backdrop-blur-[3px]" />
                    <div className="absolute inset-0 flex flex-col justify-between p-8">
                      <div className="space-y-4 transition-all duration-500 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                        <span className="inline-flex items-center gap-2 px-3 py-1 text-xs text-white rounded-full backdrop-blur-sm sm:text-sm bg-white/10">
                          <Package size={14} />
                          {pack.category}
                        </span>
                          <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">{pack.title}</h2>
                          <p className="text-sm sm:text-base text-white/80">{pack.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 space-y-6">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                      <div className="p-3 rounded-2xl sm:p-4 bg-bg-100">
                        <FileAudio className="w-5 h-5 mb-2 sm:w-6 sm:h-6 text-primary-200" />
                        <div className="text-lg font-bold sm:text-xl md:text-2xl text-text-100">{pack.features.samples}</div>
                        <div className="text-xs sm:text-sm text-text-200">Samples Totales</div>
                      </div>
                      {pack.features.size.length === 2 ? (
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col items-center p-3 rounded-2xl sm:p-4 bg-bg-100">
                            <HardDrive className="w-5 h-5 mb-2 sm:w-6 sm:h-6 text-primary-200" />
                            <div className="text-lg font-bold sm:text-xl md:text-2xl text-text-100">{pack.features.size[1]}</div>
                            <div className="text-xs sm:text-sm text-text-200">Clasic</div>
                          </div>
                          <div className="flex flex-col items-center p-3 rounded-2xl sm:p-4 bg-bg-100">
                            <HardDrive className="w-5 h-5 mb-2 sm:w-6 sm:h-6 text-primary-200" />
                            <div className="text-lg font-bold sm:text-xl md:text-2xl text-text-100">{pack.features.size[0]}</div>
                            <div className="text-xs sm:text-sm text-text-200">Full</div>
                          </div>
                        </div>
                      ) : (
                        <div className="p-3 rounded-2xl sm:p-4 bg-bg-100">
                          <HardDrive className="w-5 h-5 mb-2 sm:w-6 sm:h-6 text-primary-200" />
                          <div className="text-lg font-bold sm:text-xl md:text-2xl text-text-100">{pack.features.size[0]}</div>
                          <div className="text-xs sm:text-sm text-text-200">Tamaño Total</div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold sm:text-xl text-text-100">Contenido</h3>
                        <button
                          onClick={() => {
                            setSelectedPack(pack);
                            setIsDialogOpen(true);
                          }}
                          className="flex items-center gap-2 px-3 py-1 text-sm rounded-full bg-bg-200 text-text-200 hover:bg-bg-100"
                        >
                          <Plus size={16} />
                          <span>Ver Todo</span>
                        </button>
                      </div>
                      <div className="space-y-2">
                        {pack.displayContents.map((key) => (
                          <div key={key} className="flex items-center justify-between py-2 border-b border-bg-100">
                            <span className="capitalize text-text-200">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                            <span className="font-medium text-text-100">
                              {pack.pricing.full.contents[key as keyof PackContent] || 0} Archivos
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Dual Pricing Section */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-text-100">Opciones de Compra</h3>
                      <div className="grid grid-rows-1 gap-4">
                        {/* Classic Version */}
                        <div className="relative flex flex-col justify-between p-4 py-3 transition-all duration-200 border lg:flex-row lg:items-center rounded-2xl bg-bg-100 border-slate-600/50 hover:border-slate-500">
                          <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Star className="w-4 h-4 text-text-100" />
                            <h4 className="font-semibold text-text-200">{pack.pricing.classic.name}</h4>
                          </div>
                          <div className="mb-3 text-2xl font-bold text-text-100">${pack.pricing.classic.price}</div>
                          <ul className="mb-4 space-y-1">
                            {pack.pricing.classic.features.map((feature, idx) => (
                              <li key={idx} className="text-xs text-text-200">• {feature}</li>
                            ))}
                          </ul>
                      </div>
                          <a href={pack.pricing.classic.gumroadUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full lg:w-1/2">
                            <button className="w-full h-full flex items-center justify-center gap-2 px-4 py-2 text-lg font-medium text-text-100 transition-all duration-200 transform bg-bg-200 rounded-xl border-slate-600/50 hover:border-slate-500 hover:scale-[1.02] hover:shadow-lg ">
                              Comprar Clasic <ShoppingBag />
                            </button>
                          </a>
                        </div>

                        {/* Full Version */}
                        <div
                          className={`relative flex  flex-col justify-between p-4 transition-all duration-200 border lg:items-center lg:flex-row rounded-2xl
                          ${
                            pack.color === 'bg-gradient-to-br from-purple-500 to-pink-500'
                            ? 'bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/50 hover:border-purple-400'
                            : pack.color === 'bg-gradient-to-br from-orange-500 to-yellow-500'
                            ? 'bg-gradient-to-br from-orange-600/20 to-yellow-400/20 border-orange-500/50 hover:border-orange-400'
                            : 'bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/50 hover:border-purple-400'
                          }`
                          }
                        >
                          {pack.pricing.full.badge && (
                          <div
                            className={`absolute px-3 py-1 text-xs font-medium text-white rounded-full -top-3 left-4
                            ${
                              pack.color === 'bg-gradient-to-br from-purple-500 to-pink-500'
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                              : pack.color === 'bg-gradient-to-br from-orange-500 to-yellow-500'
                              ? 'bg-gradient-to-r from-orange-500 to-orange-600'
                              : 'bg-gradient-to-r from-purple-500 to-pink-500'
                            }`
                            }
                          >
                            {pack.pricing.full.badge}
                          </div>
                          )}
                          <div>
                          <div className="flex items-center gap-2 mb-2">
                            {pack.color === 'bg-gradient-to-br from-orange-500 to-yellow-500' ? (
                            <Crown className="w-4 h-4 text-orange-400" />
                            ) : (
                            <Crown className="w-4 h-4 text-purple-400" />
                            )}
                            <h4 className="font-semibold text-text-100">{pack.pricing.full.name}</h4>
                          </div>
                          <div className="mb-3 text-2xl font-bold text-text-100">${pack.pricing.full.price}</div>
                          <ul className="mb-4 space-y-1">
                            {pack.pricing.full.features.map((feature, idx) => (
                            <li key={idx} className="text-xs text-text-200">• {feature}</li>
                            ))}
                          </ul>
                          </div>
                          <a
                          href={pack.pricing.full.gumroadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full lg:w-1/2"
                          >
                            <button
                            className={`w-full flex items-center justify-center gap-2 h-full px-4 py-2 text-lg font-medium text-white transition-all duration-200 transform shadow-lg rounded-xl hover:scale-[1.02]
                            ${
                              pack.color === 'bg-gradient-to-br from-purple-500 to-pink-500'
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:shadow-purple-500/25'
                              : pack.color === 'bg-gradient-to-br from-orange-500 to-yellow-500'
                              ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:shadow-orange-500/25'
                              : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:shadow-purple-500/25'
                            }`
                            }
                            >
                            Comprar Full <ShoppingBag />
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </>
          )}
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
      <Footer />
    </>
    
  );
};

export default PacksPage;
