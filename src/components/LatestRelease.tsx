import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Music2 } from 'lucide-react';

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
  title: "LA PRE$IÓN 危 Vol • 1",
  artist: "Lea in the Mix",
  videoUrl: "https://hidfzvotnlochxeuoqdj.supabase.co/storage/v1/object/public/images//Bio%202.webp",
  youtubeUrl: "https://www.youtube.com/watch?v=KcdNDoIfGbs",
  views: "1M+",
  releaseDate: "2025"
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
              poster="https://res.cloudinary.com/do17gdc0b/image/upload/v1751131606/Bio_2_tfdjge.webp"
            >
              <source src={release.videoUrl} type="video/mp4" />
              {/* Fallback image if video fails to load */}
              <img 
                src="https://res.cloudinary.com/do17gdc0b/image/upload/v1751131606/Bio_2_tfdjge.webp"
                alt={release.title}
                className="absolute inset-0 object-cover w-full h-full"
              />
            </video>
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
              
                {/* Title and Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <h3 className="mb-2 text-4xl font-bold lg:text-6xl">
                    {release.title}
                  </h3>
                  <p className="mb-6 text-xl lg:text-2xl text-white/90">{release.artist}</p>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-8 mb-8 text-white/80">
                    <div className="text-center">
                      <div className="text-2xl font-bold lg:text-3xl text-primary-200">{release.views}</div>
                      <div className="text-sm lg:text-base">Reproducciones</div>
                    </div>
                    <div className="w-px h-12 bg-white/30"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold lg:text-3xl text-primary-200">{release.releaseDate}</div>
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
                    className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-white transition-all border bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 border-white/20"
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