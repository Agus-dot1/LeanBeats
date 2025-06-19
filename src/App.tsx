import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Music, Headphones } from 'lucide-react';
import { Footer } from './components/Footer';
import { Link } from 'react-router-dom'; 
import ServiceCard from './components/ServiceCard';

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
      <motion.div 
        initial="hidden"
        animate={isLoading ? "hidden" : "visible"}
        variants={containerVariants}
        className="min-h-screen bg-bg-100"
      >
        
        <div className="relative w-full min-h-screen pt-24 pb-16 overflow-hidden bg-bg-100 md:pt-60 md:pb-24">
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
                  <Music className="w-4 h-4 mr-2" />
                  <span>Productor Musical</span>
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
                  Catálogo oficial de Lea In The Mix. Encuentra una amplia variedad de beats y librerías para tus proyectos musicales.
                </motion.p>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-wrap justify-center gap-4 pt-4 lg:justify-start"
                >
                                    <Link to="/librerias">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center px-6 py-3 font-medium text-white transition-all transform rounded-full shadow-lg bg-gradient-to-r from-orange-500 to-red-500 shadow-orange-500/20"
                    >
                      <Music className="w-5 h-5 mr-2" />
                      Explorar Librerías
                    </motion.button>
                  </Link>
                  <Link to="/beats">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center px-6 py-3 font-medium text-white transition-all transform border rounded-full border-gray-700/50 bg-gray-800/50 hover:bg-gray-800"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Explorar Beats
                    </motion.button>
                  </Link>

                </motion.div>
              </motion.div>
              
              <motion.div 
                variants={containerVariants}
                className="w-full lg:w-1/2"
              >
                <div className="grid grid-cols-1 gap-6">
                  <motion.div
                    variants={itemVariants}
                  >
                    <ServiceCard 
                      icon={<Music className="w-6 h-6" />}
                      title="Beats"
                      description="Beats profesionales y únicos para tus proyectos musicales. Encontrá el sonido perfecto para tu próximo hit."
                      color="from-orange-500 to-red-500"
                    />
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                  >
                    <ServiceCard 
                      icon={<Headphones className="w-6 h-6" />}
                      title="Packs & Samples"
                      description="Librerías profesionales con samples de alta calidad para producción musical. Incluye drums, efectos y más."
                      color="from-purple-500 to-indigo-500"
                    />
                  </motion.div>
                </div>

                
              </motion.div>
            </div>
          </div>
        </div>
        <Footer />
      </motion.div>
    </>
  );
}

export default App;
