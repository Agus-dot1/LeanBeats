import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, Headphones, Package, Play } from 'lucide-react';
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
            <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8">
              
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-orange-500 to-red-500"
              >
                <Package className="w-4 h-4 mr-2" />
                <span>Sample Packs Premium</span>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-6xl font-bold tracking-tighter md:text-7xl lg:text-8xl xl:text-9xl"
              >
                <span className="text-white">LEA IN </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">THE MIX</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="max-w-3xl mx-auto text-xl text-white md:text-2xl lg:text-3xl font-light leading-relaxed"
              >
                Librerías de samples que definen el sonido de la nueva generación.
                <br />
                <span className="text-white/80">Creadas para productores que buscan la excelencia.</span>
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-col gap-4 pt-8 sm:flex-row sm:gap-6"
              >
                <Link to="/librerias">
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-10 py-5 text-lg font-medium text-white transition-all transform rounded-full shadow-2xl bg-gradient-to-r from-orange-500 to-red-500 shadow-orange-500/30 hover:shadow-orange-500/50"
                  >
                    <Package className="w-6 h-6 mr-3" />
                    Explorar Catálogo
                  </motion.button>
                </Link>
                
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-10 py-5 text-lg font-medium text-white transition-all transform border-2 border-white/30 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:border-white/50"
                >
                  <Play className="w-6 h-6 mr-3" />
                  Escuchar Demos
                </motion.button>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                variants={itemVariants}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:block"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-white/60"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M12 19L7 14M12 19L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Single Service Card Section */}
        <motion.div 
          variants={containerVariants}
          className="container px-4 mx-auto max-w-7xl -mt-20 relative z-20"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-md mx-auto"
          >
            <ServiceCard 
              icon={<Headphones className="w-6 h-6" />}
              title="Packs & Samples"
              description="Librerías profesionales con samples de alta calidad para producción musical. Incluye drums, efectos y más."
              color="from-purple-500 to-indigo-500"
            />
          </motion.div>
        </motion.div>

        <Biography />
        <Footer />
      </motion.div>
    </>
  );
}

export default App;