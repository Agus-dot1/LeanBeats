import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Music2, Play, ExternalLink, Calendar } from 'lucide-react';

const images = [
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
  releaseDate: "2023",
  description: "Su producción más popular con más de 390 millones de reproducciones en YouTube.",
  coverUrl: "https://res.cloudinary.com/do17gdc0b/image/upload/v1746479152/Lean_in_the_mix___imruso003_q4xmja.jpg",
  youtubeUrl: "https://www.youtube.com/watch?v=wobsp7AxcH8",
  audioUrl: "https://res.cloudinary.com/do17gdc0b/video/upload/v1746488263/retumba-la-bocina-lea-in-the-mix_8onfZJsH_zq5afn.mp3",
  stats: "390M+ reproducciones"
};

export const Biography: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 sm:py-24 bg-bg-100">
      <div className="container max-w-6xl px-4 mx-auto">
        {/* Biography Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Image Carousel */}
            <div className="relative">
              <div className="relative overflow-hidden aspect-square rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex].url}
                    alt={images[currentImageIndex].alt}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                </AnimatePresence>
                
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
                  {images.map((_, index) => (
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
            </div>

            {/* Biography Text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200">
                <Music2 size={16} />
                <span>Biografía</span>
              </div>
              
              <h2 className="text-3xl font-bold sm:text-4xl text-text-100">
                Lea in the Mix
              </h2>
              
              <div className="space-y-4 text-text-200">
                <p>
                  DJ y productor musical argentino, reconocido inicialmente por remixar canciones 
                  y más recientemente como creador de instrumentales para artistas destacados.
                </p>
                <p>
                  Su carrera empezó a despegar durante la cuarentena de 2020, cuando subió sus 
                  primeros sets llamados "After Party", que rápidamente se viralizaron y hoy 
                  superan las <span className="font-semibold text-primary-200">16 millones de reproducciones</span> en plataformas digitales.
                </p>
                <p>
                  Su producción más popular acumula más de <span className="font-semibold text-primary-200">390 millones de reproducciones</span> en YouTube.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Latest Release Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200">
            <Calendar size={16} />
            <span>Último Lanzamiento</span>
          </div>

          <div className="overflow-hidden rounded-2xl bg-bg-200">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Cover Image */}
              <div className="relative aspect-square md:aspect-auto">
                <img
                  src={latestRelease.coverUrl}
                  alt={latestRelease.title}
                  className="absolute inset-0 object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => window.open(latestRelease.youtubeUrl, '_blank')}
                    className="p-4 text-white transition-colors rounded-full bg-primary-200 hover:bg-primary-300"
                  >
                    <Play size={32} fill="currentColor" />
                  </motion.button>
                </div>
              </div>

              {/* Release Info */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-text-100">
                    {latestRelease.title}
                  </h3>
                  <p className="text-lg text-text-200">{latestRelease.artist}</p>
                  <p className="text-sm text-text-200">{latestRelease.releaseDate}</p>
                </div>

                <p className="text-text-200">
                  {latestRelease.description}
                </p>

                <div className="p-4 rounded-xl bg-bg-100">
                  <div className="text-2xl font-bold text-primary-200">
                    {latestRelease.stats}
                  </div>
                  <div className="text-sm text-text-200">en YouTube</div>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={latestRelease.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 font-medium text-white rounded-xl bg-primary-200 hover:bg-primary-300"
                  >
                    <Play size={20} />
                    Ver en YouTube
                  </motion.a>
                  
                  <motion.a
                    href={latestRelease.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 font-medium transition-colors rounded-xl bg-bg-100 text-text-100 hover:bg-bg-300"
                  >
                    <ExternalLink size={20} />
                    Compartir
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};