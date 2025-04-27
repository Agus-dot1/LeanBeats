import React from 'react';
import { motion } from 'framer-motion';
import { Play, Music, AudioWaveform as Waveform, Volume2, Mic2, Download, ArrowRight } from 'lucide-react';
import { Products } from './components/Products';
import { DrumkitsSection } from './components/DrumkitsSection';
import { Footer } from './components/Footer';
import { Link } from 'react-router-dom';
import Player from './components/MediaPlayer';

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
    <div className="min-h-screen bg-bg-100">
      <div className="overflow-hidden relative min-h-screen bg-black">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2940&auto=format&fit=crop")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <div className="grid items-center min-h-[calc(100vh-120px)] grid-cols-1 gap-6 lg:grid-cols-12">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-8 lg:col-span-7"
            >
              <motion.div variants={item} className="space-y-6">
                <div className="inline-flex gap-2 items-center px-4 py-2 text-sm font-medium text-white rounded-full backdrop-blur-sm bg-primary-200/20">
                  <Music size={16} className="animate-pulse" />
                  <span>Producción Musical</span>
                </div>
                <h1 className="text-7xl font-bold leading-none text-white lg:text-9xl">
                  Sonidos del
                  <br />
                  <span className="text-primary-200">Futuro</span>
                </h1>
                <p className="max-w-2xl text-xl leading-relaxed text-white/80">
                  No tiene que sonar así. Pero suena. No es tu típico beat.
                  Es innecesariamente bueno. Tal vez porque estamos innecesariamente motivados.
                </p>
              </motion.div>

              <motion.div variants={item} transition={{ duration: .8 }} className="flex flex-wrap gap-4">
                <Link to="/beats">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex gap-2 items-center px-8 py-4 font-semibold text-white rounded-full transition-all duration-300 bg-primary-200 hover:shadow-lg hover:shadow-primary-200/20"
                  >
                    <Play size={20} className="animate-pulse" />
                    <span>Escuchar Beats</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </Link>
                <Link to="/packs">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex gap-2 items-center px-8 py-4 font-semibold text-white rounded-full border backdrop-blur-sm transition-all duration-300 border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-white/5"
                  >
                    <Music size={20} />
                    <span>Explorar Drumkits</span>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-6 lg:col-span-5"
            >
              <motion.div variants={item} className="grid grid-cols-2 gap-6" transition={{ duration: .8 }}>
                <div className="p-6 space-y-4 rounded-3xl backdrop-blur-md transition-colors bg-white/10 hover:bg-white/15">
                  <div className="flex justify-center items-center w-12 h-12 rounded-full bg-primary-200">
                    <Waveform className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">500+ Beats</h3>
                  <p className="text-sm text-white/70">Librería en constante crecimiento</p>
                </div>

                <div className="p-6 space-y-4 rounded-3xl backdrop-blur-md transition-colors bg-white/10 hover:bg-white/15">
                  <div className="flex justify-center items-center w-12 h-12 rounded-full bg-primary-200">
                    <Volume2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Pro Quality</h3>
                  <p className="text-sm text-white/70">Masterización profesional</p>
                </div>

                <div className="p-6 space-y-4 rounded-3xl backdrop-blur-md transition-colors bg-white/10 hover:bg-white/15">
                  <div className="flex justify-center items-center w-12 h-12 rounded-full bg-primary-200">
                    <Mic2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Estudio 24/7</h3>
                  <p className="text-sm text-white/70">Sesiones cuando quieras</p>
                </div>

                <div className="p-6 space-y-4 rounded-3xl backdrop-blur-md transition-colors bg-white/10 hover:bg-white/15">
                  <div className="flex justify-center items-center w-12 h-12 rounded-full bg-primary-200">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Instant DL</h3>
                  <p className="text-sm text-white/70">Descarga inmediata</p>
                </div>
              </motion.div>

              <motion.div variants={item} transition={{ duration: .8 }} className="p-6 rounded-3xl backdrop-blur-md transition-colors bg-white/10 hover:bg-white/15">
                <div className="flex gap-4 items-center mb-4">
                  <div className="flex justify-center items-center w-12 h-12 rounded-full bg-primary-200">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Último Lanzamiento</h3>
                    <p className="text-sm text-white/70">Trap Soul Pack Vol. 2</p>
                  </div>
                </div>
                <div className="overflow-hidden h-2 rounded-full bg-white/20">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "70%" }}
                    transition={{ delay: 1.2, duration: .8 }}
                    className="h-full bg-primary-200"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <Products />
      <DrumkitsSection />
      <Footer />
      <Player />
    </div>
  );
}

export default App;
