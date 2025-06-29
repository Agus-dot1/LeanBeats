import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music2, ChevronLeft, ChevronRight, Play, ExternalLink } from 'lucide-react';

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

const biographyImages = [
  {
    url: "https://res.cloudinary.com/do17gdc0b/image/upload/v1751131607/Bio_1_r7jm2i.webp",
    alt: "Lea in the Mix en estudio"
  },
  {
    url: "https://res.cloudinary.com/do17gdc0b/image/upload/v1751131606/Bio_2_tfdjge.webp",
    alt: "Lea in the Mix produciendo"
  },
  {
    url: "https://res.cloudinary.com/do17gdc0b/image/upload/v1751131610/Bio_3_gyubvc.webp",
    alt: "Lea in the Mix en concierto"
  }
];

const latestRelease = {
  title: "RETUMBA LA BOCINA",
  artist: "Lea in the Mix",
  coverUrl: "https://res.cloudinary.com/do17gdc0b/image/upload/v1746479152/Lean_in_the_mix___imruso003_q4xmja.jpg",
  youtubeUrl: "https://www.youtube.com/watch?v=wobsp7AxcH8",
  views: "23M+",
  releaseDate: "2023"
};

export const Biography: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % biographyImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % biographyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + biographyImages.length) % biographyImages.length);
  };

  return (
    <section className="py-12 sm:py-24 bg-bg-100">
      <div className="container max-w-6xl px-4 mx-auto">
        {/* Biography Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200"
          >
            <Music2 size={16} />
            <span>Biografía</span>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Biography Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl text-text-100">
                Lea in the Mix
              </h2>
              
              <div className="space-y-4 text-text-200">
                <p className="leading-relaxed">
                  Lea in the mix es DJ y productor musical argentino, reconocido inicialmente por remixar canciones y más recientemente como creador de instrumentales para artistas destacados.
                </p>
                
                <p className="leading-relaxed">
                  Su carrera empezó a despegar durante la cuarentena de 2020, cuando subió sus primeros sets llamados "After Party", que rápidamente se viralizaron y hoy superan los <span className="font-semibold text-primary-200">16 millones de reproducciones</span> en plataformas digitales.
                </p>
                
                <p className="leading-relaxed">
                  En 2023 lanzó dos remixes que se convirtieron rápidamente en hits virales: "Retumba la bocina", con más de <span className="font-semibold text-primary-200">23 millones de reproducciones</span> en YouTube y "Esta vida me encanta", que supera los <span className="font-semibold text-primary-200">8 millones de reproducciones</span> en YouTube y acumula más de 5 millones de videos en TikTok.
                </p>
                
                <p className="leading-relaxed">
                  En paralelo, Lea comenzó a producir música para artistas de la nueva escena urbana. Su producción más popular acumula más de <span className="font-semibold text-primary-200">390 millones de reproducciones</span> en YouTube.
                </p>
                
                <p className="leading-relaxed">
                  A lo largo de su carrera ha colaborado con grandes referentes del género como <span className="font-semibold">Duki, Tiago PZK, J Rei, Ecko, Callejero Fino, L-Gante</span>, entre otros, dejando su huella en cada beat.
                </p>
              </div>
            </motion.div>

            {/* Image Carousel */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                <motion.img
                  key={currentImageIndex}
                  src={biographyImages[currentImageIndex].url}
                  alt={biographyImages[currentImageIndex].alt}
                  className="object-cover w-full h-full"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
                
                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {biographyImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Latest Release Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200"
          >
            <Play size={16} />
            <span>Último Lanzamiento</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-2xl bg-bg-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Cover Image */}
              <div className="relative h-[300px] md:h-[400px]">
                <img
                  src={latestRelease.coverUrl}
                  alt={latestRelease.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Play Button Overlay */}
                <motion.a
                  href={latestRelease.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="p-6 rounded-full bg-primary-200 group-hover:bg-primary-300 transition-colors shadow-lg">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                </motion.a>
              </div>

              {/* Song Info */}
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-text-100 mb-2">
                      {latestRelease.title}
                    </h3>
                    <p className="text-lg text-text-200">{latestRelease.artist}</p>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div>
                      <div className="text-2xl font-bold text-primary-200">{latestRelease.views}</div>
                      <div className="text-sm text-text-200">Reproducciones</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-text-100">{latestRelease.releaseDate}</div>
                      <div className="text-sm text-text-200">Lanzamiento</div>
                    </div>
                  </div>
                  
                  <motion.a
                    href={latestRelease.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-200 text-white rounded-full font-medium hover:bg-primary-300 transition-colors"
                  >
                    <Play size={20} />
                    Ver en YouTube
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};