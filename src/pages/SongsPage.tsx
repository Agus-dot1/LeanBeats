import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Music, Volume2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { BeatCard } from '../components/BeatCard';
import { BeatsFilter } from '../components/BeatsFilter';
import { Beat } from '../types/beat';
import { Toaster } from 'react-hot-toast';

const SongsPage: React.FC = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set(['All']));
  const [sortBy, setSortBy] = useState('recent');
  const [volume, setVolume] = useState(0.8);
  const { ref: loadMoreRef, inView } = useInView();

  const songs = useMemo(() => [
    {
      id: '1',
      title: 'Example Song',
      producer: 'Artist Name',
      genre: 'Pop',
      bpm: 128,
      key: 'Am',
      duration: '3:45',
      price: 150,
      coverUrl: 'https://example.com/cover.jpg',
      audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1745683911/beat-reggaeton-013_asvPv5N1_zw6dqc.mp3',
      mood: ['Happy', 'Energetic'],
      tags: ['Pop', 'Summer', '128bpm'],
      releaseDate: '2024-03-15',
      createdAt: '2024-03-15',
      plays: 1000,
      ratings: {
        average: 4.5,
        count: 100
      },
      featured: true
    }
  ], []);

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

  const filteredSongs = useMemo(() => {
    return songs.filter(song => {
      const matchesSearch = 
        song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        song.producer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenre = selectedGenres.has('All') || selectedGenres.has(song.genre);
      return matchesSearch && matchesGenre;
    }).sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'popular':
          return b.plays - a.plays;
        case 'recent':
        default:
          return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
      }
    });
  }, [songs, searchQuery, selectedGenres, sortBy]);

  const togglePlay = (songId: string) => {
    setCurrentlyPlaying(current => current === songId ? null : songId);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-bg-100">
      <Helmet>
        <title>Songs | Artist Name</title>
        <meta name="description" content="Listen to and purchase songs by Artist Name" />
      </Helmet>

      <Toaster position="bottom-center" />

      <div className="container px-4 mx-auto max-w-5xl">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex gap-2 items-center px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-200/10 text-primary-200"
          >
            <Music size={16} className="animate-pulse" />
            <span>Songs</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-4xl font-bold md:text-6xl text-text-100"
          >
            Latest <span className="text-primary-200">Releases</span>
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

        <div className="fixed right-4 bottom-4 z-50">
          <div className="flex gap-2 items-center p-2 rounded-full border shadow-lg bg-bg-100 border-bg-200">
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

        <div className="space-y-4">
          {filteredSongs.map(song => (
            <BeatCard
              key={song.id}
              beat={song}
              isPlaying={currentlyPlaying === song.id}
              onPlay={() => togglePlay(song.id)}
              globalVolume={volume}
            />
          ))}
        </div>

        <div ref={loadMoreRef} className="h-20" />
      </div>
    </div>
  );
};

export default SongsPage;