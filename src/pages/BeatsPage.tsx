import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Music, Filter } from 'lucide-react';
import { Footer } from '../components/Footer';
import { BeatsFilter } from '../components/BeatsFilter';
import { BeatCard } from '../components/BeatCard';
import { Beat } from '../types/beat';

const BeatsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set(['Todos']));
  const [sortBy, setSortBy] = useState('recent');
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<string | null>(null);
  const [globalVolume, setGlobalVolume] = useState(0.5);
  const [isLoading, setIsLoading] = useState(true);
  const [beats, setBeats] = useState<Beat[]>([]);

  // Sample beats data - in a real app, this would come from an API
  const sampleBeats: Beat[] = [
    {
      id: 'beat1',
      title: 'Noche de Verano',
      producer: 'Lea in the Mix',
      genre: 'Trap',
      bpm: 140,
      key: 'Am',
      duration: '2:20',
      price: 30.00,
      featured: true,
      coverUrl: 'https://res.cloudinary.com/do17gdc0b/image/upload/v1746479151/0D57FE94-C257-4747-BDDF-1F444ACDBFC9_e9dzrx.png',
      audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1746488269/intro-x-plosivo_qoozuj.mp3',
      releaseDate: '2023-09-25',
    },
    {
      id: 'beat2',
      title: 'Luna Llena',
      producer: 'Lea in the Mix',
      genre: 'Hip Hop',
      bpm: 95,
      key: 'Gm',
      duration: '2:20',
      price: 40.00,
      featured: false,
      coverUrl: 'https://res.cloudinary.com/do17gdc0b/image/upload/v1746479152/D851250A-D700-4160-B0C3-5922A59BCB41_utr53y_phqsc8.png',
      audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1746488264/like-a-like_tznkxb.mp3',
      releaseDate: '2023-09-25',
    },
    {
      id: 'beat3',
      title: 'Amanecer',
      producer: 'Lea in the Mix',
      genre: 'RKT',
      bpm: 128,
      key: 'C',
      duration: '2:20',
      price: 55.00,
      featured: false,
      coverUrl: 'https://res.cloudinary.com/do17gdc0b/image/upload/v1746479151/0D57FE94-C257-4747-BDDF-1F444ACDBFC9_e9dzrx.png',
      audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1746488265/eternity_rbavu7.mp3',
      releaseDate: '2023-09-25',
    },
    {
      id: 'beat4',
      title: 'Ritmo Nocturno',
      producer: 'Lea in the Mix',
      genre: 'Electronic',
      bpm: 130,
      key: 'Dm',
      duration: '2:20',
      price: 25.00,
      featured: true,
      coverUrl: 'https://res.cloudinary.com/do17gdc0b/image/upload/v1746479152/D851250A-D700-4160-B0C3-5922A59BCB41_utr53y_phqsc8.png',
      audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1746488269/the-next-episode_n2vfbv.mp3',
      releaseDate: '2023-09-25',
    },
    {
      id: 'beat5',
      title: 'Atardecer',
      producer: 'Lea in the Mix',
      genre: 'Pop',
      bpm: 110,
      key: 'F',
      duration: '2:20',
      price: 32.00,
      featured: false,
      coverUrl: 'https://res.cloudinary.com/do17gdc0b/image/upload/v1746479151/0D57FE94-C257-4747-BDDF-1F444ACDBFC9_e9dzrx.png',
      audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1746488263/retumba-la-bocina-lea-in-the-mix_8onfZJsH_zq5afn.mp3',
      releaseDate: '2023-09-25',
    }
  ];

  // Load beats data
  useEffect(() => {
    // Simulate API fetch with a delay
    const timer = setTimeout(() => {
      setBeats(sampleBeats);
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Handle play/pause for beats
  const handlePlayPause = useCallback((beatId: string) => {
    setCurrentlyPlayingId(prevId => (prevId === beatId ? null : beatId));
  }, []);

  // Filter beats based on search query and selected genres
  const filteredBeats = beats.filter(beat => {
    const matchesSearch = beat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         beat.producer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         beat.genre.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesGenre = selectedGenres.has('Todos') || selectedGenres.has(beat.genre);
    
    return matchesSearch && matchesGenre;
  });

  // Sort beats based on selected sort option
  const sortedBeats = [...filteredBeats].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'popular':
        return a.featured ? -1 : 1;
      case 'recent':
      default:
        return 0; // Keep original order for "recent"
    }
  });

  // Handle genre selection
  const handleGenreChange = (genre: string) => {
    setSelectedGenres(prev => {
      const newGenres = new Set(prev);
      
      if (genre === 'Todos') {
        return new Set(['Todos']);
      }
      
      if (newGenres.has(genre)) {
        newGenres.delete(genre);
        if (newGenres.size === 0) {
          return new Set(['Todos']);
        }
      } else {
        newGenres.add(genre);
        newGenres.delete('Todos');
      }
      
      return newGenres;
    });
  };

  return (
    <div className="relative min-h-screen pt-24 pb-20 bg-gradient-to-b from-bg-300 via-bg-100 to-bg-100">
      <Helmet>
        <title>Beats | Lea In The Mix</title>
        <meta name="description" content="Explora nuestro catálogo de beats de alta calidad. Encuentra el sonido perfecto para tu próximo proyecto musical." />
      </Helmet>

      <div className="container px-4 mx-auto max-w-7xl">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200"
          >
            <Music size={16} className="animate-pulse" />
            <span>Catálogo de Beats</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-bold md:text-6xl text-text-100"
          >
            Encuentra tu <span className="text-primary-200">Sonido</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mb-8 text-lg text-text-200"
          >
            Explora nuestra colección de beats de alta calidad. Todos los beats incluyen licencia de uso y están listos para tu próximo proyecto.
          </motion.p>
        </div>

        {/* Filters Section */}
        <BeatsFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedGenres={selectedGenres}
          onGenreChange={handleGenreChange}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Beats Grid */}
        <div className="space-y-6">
          {isLoading ? (
            // Loading state
            <div className="grid grid-cols-1 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-64 rounded-xl animate-pulse bg-bg-200"></div>
              ))}
            </div>
          ) : sortedBeats.length > 0 ? (
            // Beats list
            <AnimatePresence mode="popLayout">
              {sortedBeats.map(beat => (
                <motion.div
                  key={beat.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <BeatCard
                    beat={beat}
                    isPlaying={currentlyPlayingId === beat.id}
                    onPlay={() => handlePlayPause(beat.id)}
                    globalVolume={globalVolume}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          ) : (
            // Empty state
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-16 text-text-200"
            >
              <Filter size={48} className="mb-4 opacity-50" />
              <h3 className="mb-2 text-xl font-semibold">No se encontraron beats</h3>
              <p>Intenta con otros filtros o términos de búsqueda</p>
            </motion.div>
          )}
        </div>

       
      </div>
       {/* Volume Control */}
       <div className="justify-end bottom-2 md:flex md:sticky md:mr-14 z-15">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-full shadow-lg bg-bg-200"
          >
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-text-200">Volumen</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={globalVolume}
                onChange={(e) => setGlobalVolume(parseFloat(e.target.value))}
                className="w-24 h-2 rounded-lg appearance-none cursor-pointer bg-bg-300"
              />
            </div>
          </motion.div>
        </div>
      <Footer />
    </div>
  );
};

export default BeatsPage;