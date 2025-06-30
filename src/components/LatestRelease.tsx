import React from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Music2 } from 'lucide-react';

interface Release {
  id: string;
  title: string;
  artist: string;
  videoUrl: string;
  youtubeUrl: string;
  views: string;
  releaseDate: string;
}

interface LatestReleaseProps {
  release?: Release;
  className?: string;
}

const defaultRelease: Release = {
  id: 'retumba-la-bocina',
  title: "RETUMBA LA BOCINA",
  artist: "Lea in the Mix",
  videoUrl: "https://res.cloudinary.com/do17gdc0b/video/upload/v1746488269/intro-x-plosivo_qoozuj.mp4",
  youtubeUrl: "https://www.youtube.com/watch?v=wobsp7AxcH8",
  views: "23M+",
  releaseDate: "2023"
};

export const LatestRelease: React.FC<LatestReleaseProps> = ({ 
  release = defaultRelease, 
  className = "" 
}) => {
  return (
    <section className={`py-16 sm:py-24 bg-bg-100 ${className}`}>
      <div className="container max-w-6xl px-4 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200">
            <Music2 size={16} />
            <span>Último Lanzamiento</span>
          </div>
          
          <h2 className="text-3xl font-bold md:text-4xl text-text-100">
            Lo Más <span className="text-primary-200">Reciente</span>
          </h2>
        </motion.div>

        {/* Large Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl group"
        >
          {/* Video Background */}
          <div className="relative w-full h-[60vh] min-h-[500px] lg:h-[70vh]">
            <video
              className="absolute inset-0 object-cover w-full h-full"
              autoPlay
              muted
              loop
              playsInline
              poster="https://res.cloudinary.com/do17gdc0b/image/upload/v1746479152/Lean_in_the_mix___imruso003_q4xmja.jpg"
            >
              <source src={release.videoUrl} type="video/mp4" />
              {/* Fallback image if video fails to load */}
              <img 
                src="https://res.cloudinary.com/do17gdc0b/image/upload/v1746479152/Lean_in_the_mix___imruso003_q4xmja.jpg"
                alt={release.title}
                className="absolute inset-0 object-cover w-full h-full"
              />
            </video>
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                {/* Play Button */}
                <motion.div
                  className="mb-8"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    href={release.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-200 text-white shadow-2xl hover:bg-primary-300 transition-colors"
                  >
                    <Play size={32} className="ml-1" />
                  </a>
                </motion.div>

                {/* Title and Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <h3 className="text-4xl lg:text-6xl font-bold mb-2">
                    {release.title}
                  </h3>
                  <p className="text-xl lg:text-2xl text-white/90 mb-6">{release.artist}</p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 mb-8 text-white/80">
                    <div className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-primary-200">{release.views}</div>
                      <div className="text-sm lg:text-base">Reproducciones</div>
                    </div>
                    <div className="w-px h-12 bg-white/30"></div>
                    <div className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-primary-200">{release.releaseDate}</div>
                      <div className="text-sm lg:text-base">Lanzamiento</div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.a
                    href={release.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
                  >
                    Ver en YouTube
                    <ExternalLink size={20} />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};