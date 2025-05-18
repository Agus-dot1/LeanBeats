import { motion } from 'framer-motion';
import { Play, Music, AudioWaveform as Waveform, Volume2, Mic2, Download } from 'lucide-react';
import { Footer } from './components/Footer';
import { Link } from 'react-router-dom'; 
import { SEO } from './components/SEO';
import { Collabs } from './components/Collabs'


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: .5
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
      <SEO
        title="Inicio"
        description="Descubre la mejor música para tu proyecto."
      />
      <div className="overflow-hidden relative min-h-screen bg-black">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-bg-300 via-bg-300 to-bg-100">
          <motion.div
            initial={{ scale: 1.3, opacity: 0 }}
            viewport={{ once: true }}
            animate={{ scale: 0.8, opacity: 1 }}
            transition={{ duration: 1.5, ease:'anticipate', repeat: 0 }} 
            className="inset-0 bg-center bg-cover rounded-3xl sm:absolute"
            style={{
              backgroundImage: 'url("https://res.cloudinary.com/do17gdc0b/image/upload/v1746479152/Lean_in_the_mix___imruso003_q4xmja.jpg")',
              filter: 'brightness(0.6)',
            }}
          />
        </div>

        <div className="container relative z-10 p-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 pt-20 pb-32 min-h-screen lg:grid-cols-12 lg:gap-8 lg:pt-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="space-y-8 lg:col-span-7 lg:pt-28"
            >
              <div className="space-y-6">
                <div className="inline-flex gap-2 items-center px-4 py-2 text-sm font-medium text-white rounded-full backdrop-blur-sm bg-primary-200/20">
                  <Music size={16} className="animate-pulse" />
                  <span>Producción Musical</span>
                </div>
                <h1 className="text-5xl font-bold leading-tight text-white uppercase sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
                  Lea in
                  <span className="text-primary-200"> The Mix</span>
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
                  Catálogo oficial de Lea In The Mix. En esta pagina vas a poder encontrar una amplia variedad de beats y librerías para tus proyectos.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/beats">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex gap-3 items-center px-8 py-4 text-lg font-semibold text-white rounded-full transition-all duration-300 bg-primary-200 hover:shadow-lg hover:shadow-primary-200/20"
                  >
                    <Play size={24} className="animate-pulse" />
                    <span>Explorar Beats</span>
                  </motion.button>
                </Link>
                <Link to="/librerias">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex gap-3 items-center px-8 py-4 text-lg font-semibold text-white rounded-full border backdrop-blur-sm transition-all duration-300 border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-white/5"
                  >
                    <Music size={24} />
                    <span>Explorar Librerías</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.1 }}
              variants={container}
              className="space-y-6 lg:col-span-5"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: <Waveform className="w-6 h-6 text-white" />,
                    title: "Producción Pro",
                    description: "Calidad profesional garantizada"
                  },
                  {
                    icon: <Volume2 className="w-6 h-6 text-white" />,
                    title: "Mezcla & Master",
                    description: "Sonido profesional y competitivo"
                  },
                  {
                    icon: <Mic2 className="w-6 h-6 text-white" />,
                    title: "Grabación Pro",
                    description: "Equipamiento de alta gama"
                  },
                  {
                    icon: <Download className="w-6 h-6 text-white" />,
                    title: "Packs & Samples",
                    description: "Librerías profesionales"
                  }
                ].map((service, index) => (
                  <motion.div
                    key={service.title}
                    variants={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .9 + (index * 0.1) }}
                    className="p-6 space-y-4 rounded-3xl backdrop-blur-md transition-all duration-300 group bg-white/5 hover:bg-white/10 hover:shadow-xl hover:shadow-white/5"
                  >
                    <div className="flex justify-center items-center w-14 h-14 rounded-2xl bg-primary-200">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white transition-colors select-none group-hover:text-primary-200">
                        {service.title}
                      </h3>
                      <p className="text-sm transition-colors select-none text-white/70 group-hover:text-white/90">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="p-6 rounded-3xl backdrop-blur-md transition-colors bg-white/5 hover:bg-white/10"
              >
                <div className="flex gap-4 items-center mb-4">
                  <div className="flex justify-center items-center w-14 h-14 rounded-2xl bg-primary-200">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white select-none">Catálogo de beats</h3>
                    <p className="text-sm select-none text-white/70">Próximamente...</p>
                  </div>
                </div>
                <div className="overflow-hidden h-2 rounded-full bg-white/10">
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
      <Collabs />
      <Footer />
    </div>
  );
}

export default App;
