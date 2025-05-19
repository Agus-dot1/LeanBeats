import { motion } from 'framer-motion';
import { Play, Music, AudioWaveform as Waveform, Headphones } from 'lucide-react';
import { Footer } from './components/Footer';
import { Link } from 'react-router-dom'; 
import { SEO } from './components/SEO';
import { Collabs } from './components/Collabs'
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
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mt-7 min-h-screen bg-bg-100"
    >
      <SEO
        title="Inicio"
        description="Descubre la mejor música para tu proyecto."
      />
      
      <div className="overflow-hidden relative pt-24 pb-16 min-h-screen bg-bg-100 md:pt-60 md:pb-24">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-bg-300 via-bg-300 to-bg-100">
          <motion.div
            initial={{ scale: 1.3, opacity: 0 }}
            viewport={{ once: true }}
            animate={{ scale: 0.8, opacity: 1 }}
            transition={{ duration: .8, ease:'anticipate', repeat: 0 }} 
            className="inset-0 bg-center bg-cover rounded-3xl bg-bg-100 sm:absolute"
            style={{
              backgroundImage: 'url("https://res.cloudinary.com/do17gdc0b/image/upload/v1746479152/Lean_in_the_mix___imruso003_q4xmja.jpg")',
              filter: 'brightness(0.6)',
            }}
          />
        </div>

        <div className="container relative z-10 px-4 mx-auto md:px-20">
          <div className="flex flex-col gap-8 items-center lg:flex-row lg:gap-12">
            <motion.div 
              className="space-y-6 w-full text-center lg:w-1/2 lg:text-left"
              variants={containerVariants}
            >
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center px-3 py-1 mb-2 text-sm font-medium text-orange-400 rounded-full bg-orange-500/10"
              >
                <Music className="mr-2 w-4 h-4" />
                <span>Producción Musical</span>
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
                className="mx-auto max-w-xl text-lg text-white/90 lg:mx-0"
              >
                Catálogo oficial de Lea In The Mix. Encuentra una amplia variedad de beats y librerías para tus proyectos musicales de alta calidad.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4 justify-center pt-4 lg:justify-start"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-6 py-3 font-medium text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg transition-all transform shadow-orange-500/20"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Explorar Beats
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-6 py-3 font-medium text-white rounded-full border border-gray-700 transition-all transform bg-gray-800/50 hover:bg-gray-800"
                >
                  <Music className="mr-2 w-5 h-5" />
                  Explorar Librerías
                </motion.button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              className="w-full lg:w-1/2"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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

              <motion.div 
                variants={itemVariants}
                className="mt-6"
              >
                <div className="overflow-hidden p-6 rounded-2xl transition-all duration-300 transform  group hover:-translate-y-1 border backdrop-blur-sm select-none bg-gray-800/50 border-gray-700/50 hover:bg-[#1D1F21] group">
                  <motion.div 
                    className="absolute -top-24 -right-24 w-40 h-40 rounded-full blur-xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.4 }}
                    transition={{ duration: 0.3 }}
                  />
                        <div className={`absolute -top-24 -right-24 w-40 h-40 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40`}></div>
      
                  <div className="flex flex-col items-start">
                    
                    <div className="flex justify-center items-center mb-4 w-12 h-12 text-white bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
                      <Waveform className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Catálogo de beats</h3>
                      <p className="text-sm text-white/90">Próximamente una amplia selección de beats premium</p>
                    </div>
                  </div>
                  <div className="mt-4 h-2 bg-gray-700 rounded-full">
                    <motion.div 
                      className="h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "66.666667%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <Collabs />
      <Footer />
    </motion.div>
  );
}

export default App;
