import { motion } from 'framer-motion';
import { Music2, Play, Star } from 'lucide-react';

const collaborations = [
  {
    id: 1,
    artist: "Tiago PZK",
    song: "Remix Drop",
    image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg",
    link: "https://www.youtube.com/watch?v=TqDakqYRGt0",
    streams: "1.2M",
    featured: false
  },
  {
    id: 2,
    artist: "Duki",
    song: "Rockstar 2.0",
    image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg",
    link: "https://www.youtube.com/watch?v=TqDakqYRGt0",
    streams: "2.5M",
    featured: true
  },
  {
    id: 3,
    artist: "La Joaqui",
    song: "Aleteo Mix",
    image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg",
    link: "https://www.youtube.com/watch?v=TqDakqYRGt0",
    streams: "800K",
    featured: false
  }
];

export const Collabs: React.FC = () => {
  return (
    <section className="py-24 bg-bg-200">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200"
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
            Artistas <span className="text-primary-200">Destacados</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-lg text-text-200"
          >
            Descubre las colaboraciones más exitosas y los artistas con los que he tenido el placer de trabajar.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {collaborations.map((collab) => (
            <motion.div
              key={collab.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl bg-bg-100 ${
                collab.featured ? 'ring-2 ring-primary-200' : ''
              }`}
            >
              <div className="relative aspect-square">
                <img
                  src={collab.image}
                  alt={`${collab.artist} - ${collab.song}`}
                  className="absolute inset-0 object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {collab.featured && (
                  <div className="absolute px-3 py-1 text-sm font-medium text-white rounded-full top-4 left-4 bg-primary-200">
                    <Star size={14} className="inline-block mr-1" />
                    Destacado
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">{collab.artist}</h3>
                    <p className="text-lg text-white/80">{collab.song}</p>
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-sm text-white/60">{collab.streams} reproducciones</span>
                      <a
                        href={collab.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-full transition-colors bg-primary-200 hover:bg-primary-300"
                      >
                        <Play size={16} />
                        <span>Escuchar</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};