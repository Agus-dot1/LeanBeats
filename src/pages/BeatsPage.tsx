import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Music, Volume2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { BeatCard } from '../components/BeatCard';
import { BeatsFilter } from '../components/BeatsFilter';
import { Beat } from '../types/beat';
import { Toaster } from 'react-hot-toast';

const BeatsPage: React.FC = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set(['All']));
  const [sortBy, setSortBy] = useState('recent');
  const [volume, setVolume] = useState(0.8);
  const { ref: loadMoreRef, inView } = useInView();

  const beats: Beat[] = useMemo(() => [
    {
      id: '1',
      title: 'Noche de Verano',
      producer: 'Lea in the Mix',
      genre: 'Trap',
      bpm: 140,
      key: 'Am',
      duration: '3:24',
      price: {
        basic: 29.99,
        premium: 79.99,
        exclusive: 299.99
      },
      coverUrl: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg',
      audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1745398664/BEAT_REGGAETON_013_oeze7x.wav',
      mood: ['Dark', 'Atmospheric'],
      tags: ['Trap', 'Dark', '140bpm'],
      releaseDate: '2024-03-10',
      plays: 1200,
      ratings: {
        average: 4.8,
        count: 156
      },
      featured: true
    },
    // Add more beats here
  ], []);

  useEffect(() => {
    if (inView && beats.length > 0) {
      // Load more beats logic here
    }
  }, [inView, beats.length]);

  const handleGenreChange = (genre: string) => {
    setSelectedGenres(prev => {
      const next = new Set(prev);
      if (genre === 'All') {
        return new Set(['All']);
      }
      next.delete('All');
      if (next.has(genre)) {
        next.delete(genre);
        if (next.size === 0) next.add('All');
      } else {
        next.add(genre);
      }
      return next;
    });
  };

  const filteredBeats = useMemo(() => {
    return beats.filter(beat => {
      const matchesSearch = 
        beat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        beat.producer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenre = selectedGenres.has('All') || selectedGenres.has(beat.genre);
      return matchesSearch && matchesGenre;
    }).sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price.basic - b.price.basic;
        case 'price-high':
          return b.price.basic - a.price.basic;
        case 'popular':
          return b.plays - a.plays;
        case 'recent':
        default:
          return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
      }
    });
  }, [beats, searchQuery, selectedGenres, sortBy]);

  const featuredBeats = useMemo(() => 
    filteredBeats.filter(beat => beat.featured),
    [filteredBeats]
  );

  const regularBeats = useMemo(() => 
    filteredBeats.filter(beat => !beat.featured),
    [filteredBeats]
  );

  const togglePlay = (beatId: string) => {
    setCurrentlyPlaying(current => current === beatId ? null : beatId);
  };

  return (
    <div className="min-h-screen bg-bg-100 pt-28 pb-20">
      <Helmet>
        <title>Catálogo de beats | Lea in the Mix</title>
        <meta name="description" content="Explore our collection of professional beats. Preview and purchase high-quality instrumentals for your next project." />
      </Helmet>

      <Toaster position="bottom-center" />

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200"
          >
            <Music size={16} className="animate-pulse" />
            <span>Catálogo</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-4xl font-bold md:text-6xl text-text-100"
          >
            Encontrá tu próximo <span className="text-primary-200">Hit</span>
          </motion.h1>
        </div>

        <BeatsFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedGenres={selectedGenres}
          onGenreChange={handleGenreChange}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Volume Control */}
        <div className="fixed bottom-4 right-4 z-50">
          <div className="flex items-center gap-2 p-2 rounded-full bg-bg-100 shadow-lg border border-bg-200">
            <Volume2 size={20} className="text-text-100" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-24"
            />
          </div>
        </div>

    {/* Featured Beats */}
    {featuredBeats.length > 0 && (
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-text-100 mb-6">Featured Beats</h2>
        <div className="space-y-4">
          {featuredBeats.map(beat => (
            <BeatCard
              key={beat.id}
              beat={beat}
              isPlaying={currentlyPlaying === beat.id}
              onPlay={() => togglePlay(beat.id)}
              globalVolume={volume}
            />
          ))}
        </div>
      </div>
    )}

    {/* Regular Beats */}
    <div className="space-y-4">
      {regularBeats.map(beat => (
        <BeatCard
          key={beat.id}
          beat={beat}
          isPlaying={currentlyPlaying === beat.id}
          onPlay={() => togglePlay(beat.id)}
          globalVolume={volume}
        />
      ))}
    </div>

        {/* Load More Trigger */}
        <div ref={loadMoreRef} className="h-20" />
      </div>
    </div>
  );
};

export default BeatsPage;