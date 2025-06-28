import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Users, TrendingUp, Award, Music2, Calendar, ArrowRight, X, Star } from 'lucide-react';
import { Collabs } from './Collabs';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const stats = [
  {
    icon: Play,
    value: "16M+",
    label: "Reproducciones After Party",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    value: "390M+",
    label: "Reproducciones en YouTube",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    value: "5M+",
    label: "Videos en TikTok",
    color: "from-purple-500 to-pink-500"
  }
];

const achievements = [
  {
    title: "Retumba la bocina",
    description: "23M+ reproducciones en YouTube",
    year: "2023"
  },
  {
    title: "Esta vida me encanta",
    description: "8M+ reproducciones en YouTube",
    year: "2023"
  },
  {
    title: "After Party Sets",
    description: "Serie viral durante cuarentena",
    year: "2020"
  }
];

const collaborations = [
  "Duki", "Tiago PZK", "J Rei", "Ecko", "Callejero Fino", "L-Gante"
];

const CollabsDialog: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 backdrop-blur-sm bg-black/70"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-4 z-50 overflow-y-auto rounded-3xl shadow-2xl bg-bg-100 md:inset-8 lg:inset-16"
          >
            <div className="relative h-full">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-3 rounded-full transition-colors bg-bg-200/80 backdrop-blur-sm text-text-100 hover:bg-bg-300"
              >
                <X size={24} />
              </motion.button>
              
              <div className="h-full overflow-y-auto">
                <Collabs />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export const Biography: React.FC = () => {
  const [isCollabsOpen, setIsCollabsOpen] = useState(false);

  return (
    <>
      <section className="py-12 sm:py-24 bg-bg-100">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-12"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200"
            >
              <Music2 size={16} className="animate-pulse" />
              <span>Biografía</span>
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="mb-6 text-4xl font-bold md:text-6xl text-text-100"
            >
              La Historia de <span className="text-primary-200">Lea in the Mix</span>
            </motion.h2>
          </motion.div>

          {/* Bento Grid Layout */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6"
          >
            {/* Main Story Card */}
            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden md:col-span-8 rounded-3xl bg-bg-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-[300px] lg:h-full">
                  <img
                    src="https://res.cloudinary.com/do17gdc0b/image/upload/v1751131607/Bio_1_r7jm2i.webp"
                    alt="Lea in the Mix en estudio"
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-5 h-5 text-primary-200" />
                    <span className="text-sm font-medium text-primary-200">Desde 2020</span>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-text-100">El Comienzo</h3>
                  <p className="mb-4 text-text-200 leading-relaxed">
                    Lea in the mix es DJ y productor musical argentino, reconocido inicialmente por remixar canciones y más recientemente como creador de instrumentales para artistas destacados.
                  </p>
                  <p className="text-text-200 leading-relaxed">
                    Su carrera empezó a despegar durante la cuarentena de 2020, cuando subió sus primeros sets llamados "After Party", que rápidamente se viralizaron y hoy superan los 16 millones de reproducciones en plataformas digitales.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <div className="space-y-4 md:col-span-4 md:space-y-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative overflow-hidden p-6 rounded-2xl bg-bg-200 hover:bg-bg-300 transition-colors duration-300"
                >
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-10 rounded-full -translate-y-4 translate-x-4`} />
                  <div className="relative">
                    <stat.icon className={`w-6 h-6 mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                    <div className="text-2xl font-bold text-text-100">{stat.value}</div>
                    <div className="text-sm text-text-200">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Viral Hits Section */}
            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden md:col-span-7 rounded-3xl bg-bg-200"
            >
              <div className="absolute inset-0">
                <img
                  src="https://res.cloudinary.com/do17gdc0b/image/upload/v1751131606/Bio_2_tfdjge.webp"
                  alt="Lea in the Mix produciendo"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
              </div>
              <div className="relative p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-primary-200" />
                  <span className="text-sm font-medium text-primary-200">Hits Virales</span>
                </div>
                <h3 className="mb-6 text-2xl font-bold text-white">Éxitos de 2023</h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-xl bg-white/10 backdrop-blur-sm"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">{achievement.title}</h4>
                        <span className="px-2 py-1 text-xs font-medium text-white rounded-full bg-primary-200">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-sm text-white/80">{achievement.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Collaborations Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden cursor-pointer md:col-span-5 rounded-3xl bg-gradient-to-br from-primary-200/20 via-bg-200 to-orange-500/20 group"
              onClick={() => setIsCollabsOpen(true)}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary-200 -translate-y-8 translate-x-8" />
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-orange-500 translate-y-6 -translate-x-6" />
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-primary-200/10 to-orange-500/10 group-hover:opacity-100" />
              
              <div className="relative p-6 lg:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary-200" />
                    <span className="text-sm font-medium text-primary-200">Colaboraciones</span>
                  </div>
                  <motion.div
                    className="p-2 rounded-full bg-primary-200/10 group-hover:bg-primary-200/20 transition-colors"
                    whileHover={{ rotate: 45 }}
                  >
                    <ArrowRight className="w-4 h-4 text-primary-200" />
                  </motion.div>
                </div>
                
                <h3 className="mb-4 text-2xl font-bold text-text-100 group-hover:text-primary-200 transition-colors">
                  Artistas Destacados
                </h3>
                
                <p className="mb-6 text-text-200 leading-relaxed">
                  A lo largo de su carrera ha colaborado con grandes referentes del género, dejando su huella en cada beat.
                </p>
                
                {/* Featured Artists Preview */}
                <div className="mb-6 space-y-3">
                  {collaborations.slice(0, 3).map((artist, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-bg-100/50 group-hover:bg-bg-100/80 transition-colors"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-200/20">
                        <Star className="w-4 h-4 text-primary-200" />
                      </div>
                      <span className="font-medium text-text-100">{artist}</span>
                    </motion.div>
                  ))}
                  
                  {/* More indicator */}
                  <motion.div
                    className="flex items-center gap-3 p-3 rounded-xl bg-primary-200/10 group-hover:bg-primary-200/20 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-200/30">
                      <span className="text-xs font-bold text-primary-200">+{collaborations.length - 3}</span>
                    </div>
                    <span className="font-medium text-primary-200">Ver todas las colaboraciones</span>
                  </motion.div>
                </div>
                
                {/* Call to action */}
                <motion.div
                  className="flex items-center gap-2 text-sm font-medium text-primary-200 group-hover:gap-3 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <span>Explorar colaboraciones</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>

            {/* Current Success Card */}
            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden md:col-span-12 rounded-3xl bg-gradient-to-r from-primary-200 to-orange-600"
            >
              <div className="absolute inset-0 opacity-20">
                <img
                  src="https://res.cloudinary.com/do17gdc0b/image/upload/v1751131610/Bio_3_gyubvc.webp"
                  alt="Lea in the Mix en concierto"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative p-6 lg:p-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
                  <div>
                    <h3 className="mb-4 text-2xl font-bold text-white lg:text-3xl">
                      Producción Más Popular
                    </h3>
                    <p className="text-lg text-white/90">
                      En paralelo, Lea comenzó a producir música para artistas de la nueva escena urbana. 
                      Su producción más popular acumula más de <span className="font-bold">390 millones de reproducciones</span> en YouTube.
                    </p>
                  </div>
                  <div className="flex justify-center lg:justify-end">
                    <div className="p-6 text-center rounded-2xl bg-white/10 backdrop-blur-sm">
                      <div className="text-3xl font-bold text-white lg:text-4xl">390M+</div>
                      <div className="text-white/80">Reproducciones</div>
                      <div className="text-sm text-white/60">YouTube</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Collabs Dialog */}
      <CollabsDialog isOpen={isCollabsOpen} onClose={() => setIsCollabsOpen(false)} />
    </>
  );
};