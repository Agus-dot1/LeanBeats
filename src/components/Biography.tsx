import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Users, TrendingUp, Award, Music2, Calendar, Star, ExternalLink, Youtube, Headphones } from 'lucide-react';

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

const collaborationsData = [
  {
    name: "Duki",
    genre: "Trap/Hip Hop",
    status: "featured",
    streams: "100M+",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
  },
  {
    name: "Tiago PZK",
    genre: "RKT/Trap",
    status: "featured",
    streams: "80M+",
    image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
  },
  {
    name: "Callejero Fino",
    genre: "RKT",
    status: "regular",
    streams: "50M+",
    image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
  },
  {
    name: "L-Gante",
    genre: "Cumbia 420",
    status: "featured",
    streams: "200M+",
    image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
  },
  {
    name: "J Rei",
    genre: "Trap",
    status: "regular",
    streams: "30M+",
    image: "https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
  },
  {
    name: "Ecko",
    genre: "Trap/Hip Hop",
    status: "regular",
    streams: "40M+",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
  }
];

export const Biography: React.FC = () => {
  const [hoveredArtist, setHoveredArtist] = useState<string | null>(null);

  return (
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
            className="relative md:col-span-5 p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-bg-200 via-bg-200 to-bg-300 border-2 border-primary-200"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200 to-orange-500 rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full translate-y-12 -translate-x-12" />
            </div>

            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full">
                    <Users className="w-5 h-5 text-primary-200" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-primary-200">Colaboraciones</span>
                    <div className="text-xs text-text-200">Artistas de renombre</div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-text-100">Top Tier</span>
                </div>
              </div>

              <h3 className="mb-4 text-2xl font-bold text-text-100">Artistas Destacados</h3>
              <p className="mb-6 text-text-200">
                A lo largo de su carrera ha colaborado con grandes referentes del género, dejando su huella en cada beat.
              </p>

              {/* Artists Grid - Fixed positioning and z-index */}
              <div className="relative grid grid-cols-2 gap-3 mb-6">
                {collaborationsData.map((artist, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onHoverStart={() => setHoveredArtist(artist.name)}
                    onHoverEnd={() => setHoveredArtist(null)}
                    className={`relative group ${hoveredArtist === artist.name ? 'z-50' : 'z-10'}`}
                  >
                    <div className="relative p-3 transition-all duration-300 rounded-xl bg-bg-100 hover:bg-bg-300 hover:shadow-lg hover:scale-105">
                      {artist.status === 'featured' && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-2 border-bg-100" />
                      )}
                      
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img
                            src={artist.image}
                            alt={artist.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-200/20 to-transparent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-text-100 text-sm truncate">{artist.name}</div>
                          <div className="text-xs text-text-200 truncate">{artist.genre}</div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Details - Fixed positioning */}
                    <AnimatePresence>
                      {hoveredArtist === artist.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 right-0 top-full mt-1 p-3 rounded-xl bg-bg-100 shadow-2xl border border-bg-300 z-[100]"
                          style={{
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                          }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-primary-200">Reproducciones</span>
                            <div className="flex items-center gap-1">
                              <Headphones className="w-3 h-3 text-text-200" />
                              <span className="text-xs font-semibold text-text-100">{artist.streams}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Youtube className="w-3 h-3 text-red-500" />
                            <span className="text-xs text-text-200">Ver colaboración</span>
                            <ExternalLink className="w-3 h-3 text-text-200" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Summary Stats */}
              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-gradient-to-r from-primary-200/10 to-orange-500/10">
                <div className="text-center">
                  <div className="text-lg font-bold text-text-100">6+</div>
                  <div className="text-xs text-text-200">Artistas Top</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-text-100">500M+</div>
                  <div className="text-xs text-text-200">Streams Totales</div>
                </div>
              </div>
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
  );
};