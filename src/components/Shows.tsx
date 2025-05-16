import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Music2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Show {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  ticketUrl: string;
  featured?: boolean;
}

const shows: Show[] = [
  {
    id: '1',
    title: 'Aleteo Night',
    date: '2024-03-15',
    location: 'Teatro Gran Rex, Buenos Aires',
    description: 'Una noche única de música electrónica con los mejores exponentes del género. Presentando nuevos remixes y colaboraciones exclusivas.',
    imageUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    ticketUrl: 'https://ticketek.com.ar',
    featured: true
  },
  {
    id: '2',
    title: 'Urban Fest 2024',
    date: '2024-02-28',
    location: 'Luna Park, Buenos Aires',
    description: 'Festival urbano con los mejores artistas nacionales',
    imageUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
    ticketUrl: 'https://ticketek.com.ar'
  },
  {
    id: '3',
    title: 'Summer Vibes',
    date: '2024-02-14',
    location: 'Mandarine Park, Buenos Aires',
    description: 'La mejor música electrónica al aire libre',
    imageUrl: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
    ticketUrl: 'https://ticketek.com.ar'
  },
  {
    id: '4',
    title: 'Club Night',
    date: '2024-02-01',
    location: 'Crobar, Buenos Aires',
    description: 'Noche de club con los mejores DJs',
    imageUrl: 'https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg',
    ticketUrl: 'https://ticketek.com.ar'
  }
];

export const Shows: React.FC = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-AR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const featuredShow = shows.find(show => show.featured);
  const pastShows = shows.filter(show => !show.featured).slice(0, 3);

  return (
    <section className="py-24 bg-bg-100">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex gap-2 items-center px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200"
          >
            <Music2 size={16} className="animate-pulse" />
            <span>Próximos Shows</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-bold text-text-100"
          >
            Eventos <span className="text-primary-200">Destacados</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-lg text-text-200"
          >
            No te pierdas los próximos shows y eventos especiales.
            Sé parte de la experiencia musical en vivo.
          </motion.p>
        </div>

        {/* Featured Show */}
        {featuredShow && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mb-12 overflow-hidden rounded-3xl bg-bg-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[300px] lg:h-full min-h-[400px]">
                <img
                  src={featuredShow.imageUrl}
                  alt={featuredShow.title}
                  className="absolute inset-0 object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-center p-8">
                  <div className="space-y-4">
                    <span className="inline-flex gap-2 items-center px-3 py-1 text-sm text-white rounded-full backdrop-blur-sm bg-white/10">
                      Destacado
                    </span>
                    <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                      {featuredShow.title}
                    </h2>
                    <p className="max-w-xl text-lg text-white/80">
                      {featuredShow.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex gap-2 items-center text-white/90">
                        <Calendar size={20} />
                        <span>{formatDate(featuredShow.date)}</span>
                      </div>
                      <div className="flex gap-2 items-center text-white/90">
                        <MapPin size={20} />
                        <span>{featuredShow.location}</span>
                      </div>
                    </div>
                    <motion.a
                      href={featuredShow.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex gap-2 items-center px-6 py-3 mt-4 font-medium text-white rounded-full bg-primary-200"
                    >
                      <span>Comprar Tickets</span>
                      <ArrowRight size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <img
                  src={featuredShow.imageUrl}
                  alt={featuredShow.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-transparent" />
              </div>
            </div>
          </motion.div>
        )}

        {/* Past Shows Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pastShows.map((show, index) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden group rounded-2xl bg-bg-200"
            >
              <div className="relative h-48">
                <img
                  src={show.imageUrl}
                  alt={show.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="mb-2 text-xl font-bold text-white">{show.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex gap-1 items-center text-sm text-white/90">
                      <Calendar size={16} />
                      <span>{formatDate(show.date)}</span>
                    </div>
                    <div className="flex gap-1 items-center text-sm text-white/90">
                      <MapPin size={16} />
                      <span>{show.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="mb-4 text-sm text-text-200">{show.description}</p>
                <motion.a
                  href={show.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex gap-2 items-center px-4 py-2 text-sm font-medium text-white rounded-full bg-primary-200"
                >
                  <span>Ver Detalles</span>
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};