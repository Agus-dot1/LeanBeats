import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Music, Music2, Play, Share, Share2, Star, Youtube } from 'lucide-react';
import { useState } from 'react';

interface Song {
  id: string;
  audioUrl: string;
  videoUrl: string;
}

const songs: Song[] = [
  {
    id: '1',
    audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1746488269/intro-x-plosivo_qoozuj.mp3',
    videoUrl: "URL_ADDRESS.cloudinary.com/do17gdc0b/video/upload/v1746488269/intro-x-plosivo_qoozuj.mp4"
  },
  {
    id: '2',
    audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1746488269/intro-x-plosivo_qoozuj.mp3',
    videoUrl: "URL_ADDRESS.cloudinary.com/do17gdc0b/video/upload/v1746488269/intro-x-plosivo_qoozuj.mp4"
  },
  {
    id: '3',
    audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1746488269/intro-x-plosivo_qoozuj.mp3',
    videoUrl: "URL_ADDRESS.cloudinary.com/do17gdc0b/video/upload/v1746488269/intro-x-plosivo_qoozuj.mp4"
  },
];





const collaborations = [
  {
    id: 1,
    artist: {
      name: "Tiago PZK",
      country: "Argentina", 
      genre: "RKT",
    },
    song: {
      title: "Remix Drop",
      duration: "3:45",
      genre: "RKT/Trap",
      type: "Producción & Mezcla"
    },
    performance: {
      totalStreams: "1.2M",
      certifications: ["Oro en Argentina"],
      peakChart: "#3 en Top 50 Argentina"
    },
    image: "https://res.cloudinary.com/do17gdc0b/image/upload/v1746479152/Lean_in_the_mix___imruso003_q4xmja.jpg",
    link: "https://www.youtube.com/watch?v=TqDakqYRGt0",
    featured: false
  },
  {
    id: 2,
    artist: {
      name: "Callejero Fino",
      country: "Argentina",
      genre: "RKT",
    },
    song: {
      title: "Rockstar 2.0",
      duration: "3:45",
      genre: "RKT/Trap",
      type: "Producción & Mezcla"
    },
    performance: {
      totalStreams: "1.2M",
      certifications: ["Oro en Argentina"],
      peakChart: "#3 en Top 50 Argentina"
    },
    image: "/colabo.png",
    link: "https://www.youtube.com/watch?v=TqDakqYRGt0",
    featured: true
  },
  {
    id: 3,
    artist: {
      name: "La Joaqui",
      country: "Argentina",
      genre: "RKT",
    },
    song: {
      title: "Rockstar 2.0",
      duration: "3:45",
      genre: "RKT/Trap",
      type: "Producción & Mezcla"
    },
    performance: {
      totalStreams: "1.2M",
      certifications: ["Oro en Argentina"],
      peakChart: "#3 en Top 50 Argentina"
    },
    image: "https://res.cloudinary.com/do17gdc0b/image/upload/v1746479152/Lean_in_the_mix___imruso003_q4xmja.jpg",
    link: "https://www.youtube.com/watch?v=TqDakqYRGt0",
    featured: false
  }
];
export const Collabs: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <AnimatePresence>
    <section className="py-24 bg-bg-100">
      <div className="container px-4 mx-auto max-w-8xl">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex gap-2 items-center px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200"
          >
            <Music2 size={16} className="animate-pulse" />
            <span>Colaboraciones</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-text-100"
          >
            Artistas Destacados
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-lg text-text-100"
          >
            Descubre las colaboraciones más exitosas y los artistas con los que he tenido el placer de trabajar.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {collaborations.map((collab) => (
            <motion.div
              key={collab.id}
              animate={{
                scale: hoveredId === null || hoveredId === collab.id ? 1 : 0.90,
                transform: hoveredId === null || hoveredId === collab.id? 'translateY(0)' : 'translateY(15px)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden shadow-xl rounded-2xl transition-all duration-300 ${
                collab.featured 
                  ? 'border-2 border-primary-200 ' 
                  : ''
              }`}
            >
              <motion.div 
                className="relative aspect-[3/4] overflow-hidden"
                animate={{
                  filter: hoveredId === null || hoveredId === collab.id ? 'brightness(1)' : 'brightness(0.5) blur(2px) grayscale(.5)',
                }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setHoveredId(collab.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, ease: "circInOut" }}
                  className="w-full h-full"
                >
                  <img
                    src={collab.image}
                    alt={`${collab.artist} - ${collab.song}`}
                    className="object-cover absolute inset-0 w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/80" />
                </motion.div>
                
                {collab.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 text-sm font-medium text-white rounded-full bg-primary-200">
                    <Star size={14} className="inline-block mr-1" />
                    Destacado
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 p-6">
                  {typeof collab.artist !== 'string' ? (
                    <>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2 py-1 text-xs font-medium rounded-full text-white/80 bg-white/10">
                          {collab.song.genre}
                        </span>
                        <span className="px-2 py-1 text-xs font-medium rounded-full text-white/80 bg-white/10">
                          {collab.song.type}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center mb-3">
                        <div className="space-y-1">
                          <p className="text-sm text-white/80">{collab.song.title}</p>
                          <p className="text-xs text-white/60">{collab.performance.peakChart}</p>
                        </div>
                        {collab.performance.certifications?.map((cert, index) => (
                          <span key={index} className="px-2 py-1 text-xs font-medium text-white rounded-full bg-primary-200">
                            {cert}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-white">{collab.performance.totalStreams}</span>
                          <span className="text-xs text-white/60">Reproducciones totales</span>
                        </div>
                        <div className="flex gap-2">
                          <motion.a
                            href={collab.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 text-white"
                          >
                            <Play size={20} />
                          </motion.a>
                          <motion.a
                            href={collab.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 text-white"
                          >
                            <ExternalLink size={20} />
                          </motion.a>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="mb-4 text-white/80">{collab.song.title}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-white/60">{collab.performance.totalStreams} reproducciones</span>
                        <motion.a
                          href={collab.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-white rounded-full bg-primary-200"
                        >
                          <Play size={20} />
                        </motion.a>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </AnimatePresence>
  );
};