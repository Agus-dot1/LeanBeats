import { motion } from 'framer-motion';
import { Play, Music, AudioWaveform as Waveform, Volume2, Mic2, Download, ArrowRight } from 'lucide-react';
import { Footer } from './components/Footer';
import { Link } from 'react-router-dom'; // Change the import to get the beats array instead of the component
import { SEO } from './components/SEO';
import { Bio } from './components/Bio';
import { Collabs } from './components/Collabs'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: .2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

function App() {

  return (
    <div className="min-h-screen mt-14 md:mt-0 bg-bg-100">
      <SEO
        title="Inicio"
        description="Descubre la mejor música para tu proyecto."
      />
      <div className="relative min-h-screen overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 bg-bg-100">
          <motion.div
            initial={{ scale: 1.3, opacity: 0 }}
            viewport={{ once: true }}
            animate={{ scale: 0.8, opacity: 1 }}
            transition={{ duration: 1.5, ease:'anticipate', repeat: 0 }} 
            className="inset-0 bg-center bg-cover rounded-xl sm:absolute"
            style={{
              backgroundImage: 'url("https://res.cloudinary.com/do17gdc0b/image/upload/v1746479152/Lean_in_the_mix___imruso003_q4xmja.jpg")',
              filter: 'brightness(0.6)',
            }}
          />
        </div>

        <div className="container relative z-10 p-4 mx-auto sm:px-24 sm:py-14">
          <div className="grid items-center min-h-[calc(100vh-120px)] grid-cols-1 gap-6 lg:grid-cols-12">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
              className="space-y-6 sm:space-y-8 lg:col-span-7"
            >
              <motion.div variants={item} className="space-y-4 sm:space-y-6">
                <div className="inline-flex gap-2 items-center px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white rounded-full backdrop-blur-sm bg-primary-200/20">
                  <Music size={14} className="animate-pulse sm:w-4 sm:h-4" />
                  <span>Producción Musical</span>
                </div>
                <h1 className="text-4xl font-bold leading-none text-white uppercase sm:text-5xl lg:text-7xl">
                  Lea in
                  <span className="text-primary-200"> The Mix</span>
                </h1>
                <p className="max-w-2xl text-base leading-relaxed sm:text-base text-white/90 text-balance">
                  Catálogo oficial de Lea In The Mix. En esta pagina vas a poder encontrar una amplia variedad de beats y librerías para tus proyectos.
                </p>
              </motion.div>

              <motion.div variants={item} transition={{ duration: .8 }} className="flex flex-wrap gap-4">
                <Link to="/beats">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 rounded-full bg-primary-200 hover:shadow-lg hover:shadow-primary-200/20"
                  >
                    <Play size={20} className="animate-pulse" />
                    <span>Escuchar Beats</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </Link>
                <Link to="/librerias">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 border rounded-full backdrop-blur-sm border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-white/5"
                  >
                    <Music size={20} />
                    <span>Explorar Librerías</span>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="space-y-4 sm:space-y-6 lg:col-span-5"
            >
              <motion.div variants={container} className="grid grid-cols-2 gap-2 select-none sm:gap-3">
                <motion.div
                  className="p-4 space-y-3 transition-all duration-300 rounded-3xl backdrop-blur-md sm:p-6 sm:space-y-4 group bg-white/10 hover:bg-white/15 hover:shadow-xl hover:shadow-white/5"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full sm:w-12 sm:h-12 bg-primary-200">
                    <Waveform className="w-4 h-4 text-white sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white transition-colors sm:text-xl group-hover:text-primary-200">Producción Pro</h3>
                  <p className="text-xs transition-colors sm:text-sm text-white/70 group-hover:text-white/90">Calidad profesional garantizada</p>
                </motion.div>

                <motion.div
                  className="p-4 space-y-3 transition-all duration-300 rounded-3xl backdrop-blur-md sm:p-6 sm:space-y-4 group bg-white/10 hover:bg-white/15 hover:shadow-xl hover:shadow-white/5"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full sm:w-12 sm:h-12 bg-primary-200">
                    <Volume2 className="w-4 h-4 text-white sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white transition-colors sm:text-xl group-hover:text-primary-200">Mezcla & Master</h3>
                  <p className="text-xs transition-colors sm:text-sm text-white/70 group-hover:text-white/90">Sonido profesional y competitivo</p>
                </motion.div>

                <motion.div
                  className="p-4 space-y-3 transition-all duration-300 rounded-3xl backdrop-blur-md sm:p-6 sm:space-y-4 group bg-white/10 hover:bg-white/15 hover:shadow-xl hover:shadow-white/5"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full sm:w-12 sm:h-12 bg-primary-200">
                    <Mic2 className="w-4 h-4 text-white sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white transition-colors sm:text-xl group-hover:text-primary-200">Grabación Pro</h3>
                  <p className="text-xs transition-colors sm:text-sm text-white/70 group-hover:text-white/90">Equipamiento de alta gama</p>
                </motion.div>

                <motion.div
                  className="p-4 space-y-3 transition-all duration-300 rounded-3xl backdrop-blur-md sm:p-6 sm:space-y-4 group bg-white/10 hover:bg-white/15 hover:shadow-xl hover:shadow-white/5"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full sm:w-12 sm:h-12 bg-primary-200">
                    <Download className="w-4 h-4 text-white sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white transition-colors sm:text-xl group-hover:text-primary-200">Packs & Samples</h3>
                  <p className="text-xs transition-colors sm:text-sm text-white/70 group-hover:text-white/90">Librerías profesionales</p>
                </motion.div>
              </motion.div>

              <motion.div variants={item} transition={{ duration: .8 }} className="p-4 transition-colors select-none rounded-3xl backdrop-blur-md sm:p-6 bg-white/10 hover:bg-white/15">
                <div className="flex items-center gap-3 mb-3 sm:gap-4 sm:mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full sm:w-12 sm:h-12 bg-primary-200">
                    <Music className="w-4 h-4 text-white sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">Catálogo de beats</h3>
                    <p className="text-xs sm:text-sm text-white/70">Próximamente...</p>
                  </div>
                </div>
                <div className="overflow-hidden h-1.5 sm:h-2 rounded-full bg-white/20">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "70%" }}
                    transition={{ delay: 1.8, duration: 1, ease: 'circInOut' }}
                    className="h-full bg-primary-200"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <Bio />
      <Collabs />
      <Footer />
    </div>
  );
}

export default App;
