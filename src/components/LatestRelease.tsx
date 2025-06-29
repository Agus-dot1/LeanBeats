import React from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Music2 } from 'lucide-react';

interface Release {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
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
  coverUrl: "https://res.cloudinary.com/do17gdc0b/image/upload/v1746479152/Lean_in_the_mix___imruso003_q4xmja.jpg",
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
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200">
            <Music2 size={16} />
            <span>Último Lanzamiento</span>
          </div>
          
          <h2 className="text-3xl font-bold md:text-4xl text-text-100">
            Lo Más <span className="text-primary-200">Reciente</span>
          </h2>
        </motion.div>

        {/* Main Release Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-bg-200 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Cover Art */}
            <div className="relative h-[400px] lg:h-[500px]">
              <motion.img
                src={release.coverUrl}
                alt={release.title}
                className="object-cover w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Play Button */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  href={release.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-full bg-primary-200 text-white shadow-2xl hover:bg-primary-300 transition-colors"
                >
                  <Play size={32} className="ml-1" />
                </a>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                {/* Title */}
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-text-100 mb-2">
                    {release.title}
                  </h3>
                  <p className="text-xl text-text-200">{release.artist}</p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-8 text-text-200">
                  <div>
                    <div className="text-2xl font-bold text-primary-200">{release.views}</div>
                    <div className="text-sm">Reproducciones</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-200">{release.releaseDate}</div>
                    <div className="text-sm">Lanzamiento</div>
                  </div>
                </div>

                {/* Action Button */}
                <motion.a
                  href={release.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary-200 text-white rounded-xl font-semibold hover:bg-primary-300 transition-colors shadow-lg"
                >
                  Ver en YouTube
                  <ExternalLink size={20} />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};