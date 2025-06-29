import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ExternalLink, Share2, Heart, Volume2, Calendar, Eye, TrendingUp, Music } from 'lucide-react';
import { useToast } from '../context/ToastContext';

interface Release {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  youtubeUrl: string;
  spotifyUrl?: string;
  appleMusicUrl?: string;
  views: string;
  likes?: string;
  releaseDate: string;
  duration: string;
  genre: string;
  description?: string;
  isNew?: boolean;
}

interface LatestReleaseProps {
  release?: Release;
  className?: string;
}

const defaultRelease: Release = {
  id: 'retumba-la-bocina',
  title: "RETUMBA LA BOCINA",
  artist: "Lea in the Mix",
  coverUrl: "https://res.cloudinary.com/do17gdc0b/image/upload/v1746479152/Lean_in_the_mix___imruso003_q4xmja.jpg",
  youtubeUrl: "https://www.youtube.com/watch?v=wobsp7AxcH8",
  spotifyUrl: "https://open.spotify.com/track/example",
  views: "23M+",
  likes: "890K",
  releaseDate: "2023",
  duration: "3:24",
  genre: "Remix/Electronic",
  description: "El remix que conquistó las redes sociales y se convirtió en un fenómeno viral con millones de reproducciones.",
  isNew: true
};

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

export const LatestRelease: React.FC<LatestReleaseProps> = ({ 
  release = defaultRelease, 
  className = "" 
}) => {
  const { showToast } = useToast();
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: release.title,
          text: `Escucha "${release.title}" por ${release.artist}`,
          url: release.youtubeUrl
        });
      } else {
        await navigator.clipboard.writeText(release.youtubeUrl);
        showToast('Link copiado al portapapeles', 'success');
      }
    } catch (error) {
      showToast('Error al compartir', 'error');
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    showToast(isLiked ? 'Removido de favoritos' : 'Añadido a favoritos', 'success');
  };

  const stats = [
    { icon: Eye, value: release.views, label: 'Reproducciones', color: 'text-blue-400' },
    { icon: Heart, value: release.likes || '890K', label: 'Me gusta', color: 'text-red-400' },
    { icon: Calendar, value: release.releaseDate, label: 'Lanzamiento', color: 'text-green-400' },
  ];

  return (
    <section className={`py-12 sm:py-24 bg-bg-100 ${className}`}>
      <div className="container max-w-6xl px-4 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200">
              <TrendingUp size={16} className="animate-pulse" />
              <span>Último Lanzamiento</span>
              {release.isNew && (
                <span className="px-2 py-0.5 text-xs font-bold text-white rounded-full bg-primary-200 animate-pulse">
                  NUEVO
                </span>
              )}
            </div>
            
            <h2 className="text-3xl font-bold md:text-4xl text-text-100">
              Lo Más <span className="text-primary-200">Reciente</span>
            </h2>
          </motion.div>

          {/* Main Release Card */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-bg-200 to-bg-300 shadow-2xl"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Cover Art Section */}
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                <motion.img
                  src={release.coverUrl}
                  alt={release.title}
                  className="object-cover w-full h-full"
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-6 left-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="px-3 py-1 text-sm font-medium text-white rounded-full bg-primary-200/90 backdrop-blur-sm">
                    {release.genre}
                  </span>
                </motion.div>

                <motion.div
                  className="absolute top-6 right-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="px-3 py-1 text-sm font-medium text-white rounded-full bg-black/50 backdrop-blur-sm">
                    {release.duration}
                  </span>
                </motion.div>

                {/* Central Play Button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.a
                    href={release.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                    animate={{ 
                      scale: isHovered ? 1.1 : 1,
                      rotate: isHovered ? 5 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Pulsing Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary-200/30"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    {/* Play Button */}
                    <div className="relative p-8 rounded-full bg-primary-200 shadow-2xl group-hover:bg-primary-300 transition-colors">
                      <Play size={40} className="text-white ml-2" />
                    </div>
                  </motion.a>
                </motion.div>

                {/* Bottom Action Buttons */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="flex gap-3">
                    <motion.button
                      onClick={handleLike}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 rounded-full backdrop-blur-sm transition-colors ${
                        isLiked 
                          ? 'bg-red-500 text-white' 
                          : 'bg-black/50 text-white hover:bg-red-500/80'
                      }`}
                    >
                      <Heart size={20} className={isLiked ? 'fill-current' : ''} />
                    </motion.button>
                    
                    <motion.button
                      onClick={handleShare}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-black/50 text-white hover:bg-primary-200/80 backdrop-blur-sm transition-colors"
                    >
                      <Share2 size={20} />
                    </motion.button>
                  </div>

                  <motion.div
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-black/50 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Volume2 size={16} className="text-white" />
                    <span className="text-sm font-medium text-white">HD Audio</span>
                  </motion.div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.div
                  className="space-y-6"
                  variants={containerVariants}
                >
                  {/* Title and Artist */}
                  <motion.div variants={itemVariants}>
                    <h3 className="text-3xl lg:text-4xl font-bold text-text-100 mb-3 leading-tight">
                      {release.title}
                    </h3>
                    <p className="text-xl text-text-200 flex items-center gap-2">
                      <Music size={20} className="text-primary-200" />
                      {release.artist}
                    </p>
                  </motion.div>

                  {/* Description */}
                  {release.description && (
                    <motion.p 
                      variants={itemVariants}
                      className="text-text-200 leading-relaxed"
                    >
                      {release.description}
                    </motion.p>
                  )}

                  {/* Stats Grid */}
                  <motion.div 
                    variants={itemVariants}
                    className="grid grid-cols-3 gap-4"
                  >
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="text-center p-4 rounded-xl bg-bg-100/50 hover:bg-bg-100 transition-colors"
                        whileHover={{ y: -2 }}
                      >
                        <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                        <div className="text-lg font-bold text-text-100">{stat.value}</div>
                        <div className="text-xs text-text-200">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div 
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <motion.a
                      href={release.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-primary-200 text-white rounded-xl font-semibold hover:bg-primary-300 transition-colors shadow-lg hover:shadow-xl"
                    >
                      <Play size={20} />
                      Ver en YouTube
                      <ExternalLink size={16} />
                    </motion.a>

                    {release.spotifyUrl && (
                      <motion.a
                        href={release.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
                      >
                        <Music size={20} />
                        Spotify
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary-200/10 to-transparent rounded-full translate-y-12 -translate-x-12" />
          </motion.div>

          {/* Additional Info Bar */}
          <motion.div
            variants={itemVariants}
            className="mt-8 p-6 rounded-2xl bg-bg-200 border border-primary-200/20"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary-200/10">
                  <TrendingUp className="w-6 h-6 text-primary-200" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-100">Tendencia Viral</h4>
                  <p className="text-sm text-text-200">Más de {release.views} reproducciones y creciendo</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-text-200">
                <span>Disponible en todas las plataformas</span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};