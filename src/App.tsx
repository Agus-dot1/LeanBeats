import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, Headphones, Package, Play, Star, Download } from 'lucide-react';
import { Footer } from './components/Footer';
import { Link } from 'react-router-dom'; 
import ServiceCard from './components/ServiceCard';
import { Helmet } from 'react-helmet-async';
import { Biography } from './components/Biography';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Featured drum kits data
const featuredKits = [
  {
    id: 1,
    title: "ALETEO Vol. 1",
    category: "Electronic",
    samples: "250+ Samples",
    size: "384 MB",
    price: "$40",
    image: "https://res.cloudinary.com/do17gdc0b/image/upload/v1747593291/0D57FE94-C257-4747-BDDF-1F444ACDBFC9_eexnof.png"
  },
  {
    id: 2,
    title: "TURREO RKT Vol. 1",
    category: "Urban",
    samples: "250+ Samples", 
    size: "295 MB",
    price: "$40",
    image: "https://res.cloudinary.com/do17gdc0b/image/upload/v1750768510/SAMPLE_PACK_TURREO_RKT_REMIXDROP_VOL_1_lp5ql6.jpg"
  }
];

function App() {
  const heroImageUrl = "https://res.cloudinary.com/do17gdc0b/image/upload/v1746479152/Lean_in_the_mix___imruso003_q4xmja.jpg";
  const [isLoading, setIsLoading] = useState(false);
  
  // Check if the site is currently loading (controlled by routes.tsx)
  useEffect(() => {
    const hasLoaded = localStorage.getItem('hasLoadedSite');
    setIsLoading(!hasLoaded);
    
    // Listen for changes to the loading state
    const checkLoading = () => {
      const currentLoadState = localStorage.getItem('hasLoadedSite');
      setIsLoading(!currentLoadState);
    };
    
    // Check every 100ms until loaded
    const interval = setInterval(checkLoading, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>LEA IN THE MIX</title>
        <meta name="description" content="Packs de samples profesionales para productores musicales. Sonidos de alta calidad para tus producciones." />
      </Helmet>
    
      <motion.div 
        initial="hidden"
        animate={isLoading ? "hidden" : "visible"}
        variants={containerVariants}
        className="min-h-screen bg-bg-100"
      >
        
        <div className="relative w-full min-h-screen pt-24 pb-16 overflow-hidden bg-bg-100 md:pt-32 md:pb-24">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-bg-300 via-bg-300 to-bg-100">
            <motion.div
              initial={{ scale: 1.3, opacity: 0 }}
              viewport={{ once: true }}
              animate={isLoading ? { scale: 1.3, opacity: 0 } : { scale: 0.8, opacity: 1 }}
              transition={{ duration: .8, ease:'anticipate', repeat: 0 }} 
              className="absolute inset-0 hidden scale-100 bg-center bg-cover md:rounded-3xl bg-bg-100 md:block"
              style={{
                backgroundImage: `url("${heroImageUrl}")`,
                filter: 'brightness(0.8)',
              }}
            />
            <div
              className="absolute inset-0 scale-100 bg-center bg-cover 2xl:hidden bg-bg-100"
              style={{
                backgroundImage: `url("${heroImageUrl}")`,
                filter: 'brightness(0.6)',
              }}
            />
          </div>
          
          <div className="container relative z-10 px-4 mx-auto max-w-7xl">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
              <motion.div 
                className="w-full space-y-6 text-center lg:w-1/2 lg:text-left"
                variants={containerVariants}
              >
                <motion.div 
                  variants={itemVariants}
                  className="inline-flex items-center px-3 py-1 mb-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-orange-500 to-red-500"
                >
                  <Package className="w-4 h-4 mr-2" />
                  <span>Sample Packs Premium</span>
                </motion.div>
                
                <motion.h1 
                  variants={itemVariants}
                  className="text-5xl font-bold tracking-tighter md:text-6xl lg:text-7xl"
                >
                  <span className="text-white">LEA IN </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">THE MIX</span>
                </motion.h1>
                
                <motion.p 
                  variants={itemVariants}
                  className="max-w-xl mx-auto text-lg text-white lg:mx-0"
                >
                  Librerías de samples profesionales creadas para productores que buscan sonidos únicos. 
                  Cada pack incluye drums, efectos y elementos exclusivos para elevar tus producciones.
                </motion.p>

                {/* Stats */}
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-wrap justify-center gap-6 pt-4 lg:justify-start"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-sm text-white/80">Samples Únicos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-sm text-white/80">Libres de Regalías</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">WAV</div>
                    <div className="text-sm text-white/80">Alta Calidad</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-wrap justify-center gap-4 pt-6 lg:justify-start"
                >
                  <Link to="/librerias">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center px-8 py-4 font-medium text-white transition-all transform rounded-full shadow-lg bg-gradient-to-r from-orange-500 to-red-500 shadow-orange-500/20"
                    >
                      <Package className="w-5 h-5 mr-2" />
                      Explorar Librerías
                    </motion.button>
                  </Link>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-8 py-4 font-medium text-white transition-all transform border border-white/20 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Escuchar Demos
                  </motion.button>
                </motion.div>
              </motion.div>
              
              <motion.div 
                variants={containerVariants}
                className="w-full lg:w-1/2"
              >
                {/* Featured Drum Kits Preview */}
                <div className="space-y-4">
                  <motion.h3
                    variants={itemVariants}
                    className="text-xl font-semibold text-center text-white lg:text-left"
                  >
                    Packs Destacados
                  </motion.h3>
                  
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {featuredKits.map((kit, index) => (
                      <motion.div
                        key={kit.id}
                        variants={itemVariants}
                        transition={{ delay: index * 0.1 }}
                        className="overflow-hidden transition-all duration-300 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 hover:scale-105"
                      >
                        <div className="relative h-32">
                          <img
                            src={kit.image}
                            alt={kit.title}
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-black/40" />
                          <div className="absolute top-2 left-2">
                            <span className="px-2 py-1 text-xs font-medium text-white rounded-full bg-primary-200">
                              {kit.category}
                            </span>
                          </div>
                          <div className="absolute top-2 right-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 text-white transition-colors rounded-full bg-white/20 hover:bg-white/30"
                            >
                              <Play size={16} />
                            </motion.button>
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <h4 className="mb-2 font-semibold text-white">{kit.title}</h4>
                          <div className="flex items-center justify-between mb-3 text-sm text-white/80">
                            <span>{kit.samples}</span>
                            <span>{kit.size}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-white">{kit.price}</span>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Service Card */}
                  <motion.div
                    variants={itemVariants}
                    className="mt-6"
                  >
                    <ServiceCard 
                      icon={<Headphones className="w-6 h-6" />}
                      title="Calidad Profesional"
                      description="Samples masterizados y listos para usar en tus producciones. Compatibles con todos los DAWs principales."
                      color="from-purple-500 to-indigo-500"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <Biography />
        <Footer />
      </motion.div>
    </>
  );
}

export default App;