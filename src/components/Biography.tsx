import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music2, ChevronLeft, ChevronRight } from 'lucide-react';
import { LatestRelease } from './LatestRelease';

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
    url: "https://hidfzvotnlochxeuoqdj.supabase.co/storage/v1/object/public/images//Bio%201.webp",
    alt: "Lea in the Mix en estudio"
  },
  {
    url: "https://hidfzvotnlochxeuoqdj.supabase.co/storage/v1/object/public/images//Bio%203.webp",
    alt: "Lea in the Mix produciendo"
  },
  {
    url: "https://hidfzvotnlochxeuoqdj.supabase.co/storage/v1/object/public/images//Bio%202.webp",
    alt: "Lea in the Mix en concierto"
  }
];

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
                  className="absolute p-2 text-white transition-colors -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/50 hover:bg-black/70"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute p-2 text-white transition-colors -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/50 hover:bg-black/70"
                >
                  <ChevronRight size={20} />
                </button>
                
                {/* Dots Indicator */}
                <div className="absolute flex gap-2 -translate-x-1/2 bottom-4 left-1/2">
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
        <LatestRelease />
      </div>  
    </section>
  );
};