import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';

interface BeatsFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedGenres: Set<string>;
  onGenreChange: (genre: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export const BeatsFilter: React.FC<BeatsFilterProps> = ({
  searchQuery,
  onSearchChange,
  selectedGenres,
  onGenreChange,
  sortBy,
  onSortChange,
}) => {
  const [showSort, setShowSort] = useState(false);
  const genres = ['Todos', 'Trap', 'Hip Hop', 'RKT', 'Pop', 'Reguetón', 'Electronica'];
  const sortOptions = [
    { value: 'recent', label: 'Más Reciente' },
    { value: 'popular', label: 'Más Popular' },
    { value: 'price-low', label: 'Precio: Menor a Mayor' },
    { value: 'price-high', label: 'Precio: Mayor a Menor' },
  ];

  return (
    <div className="sticky top-20 z-30 py-4 mb-8 space-y-6 rounded-3xl backdrop-blur-lg bg-bg-100/80">
      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-200" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscá por título o género..."
            className="py-3 pr-4 pl-12 w-full rounded-full bg-bg-200 text-text-100 placeholder-text-200 focus:outline-none focus:ring-2 focus:ring-primary-200"
          />
        </div>
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowSort(!showSort)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-colors ${
              showSort ? 'text-white bg-primary-200' : 'bg-bg-200 text-text-100'
            }`}
          >
            <SlidersHorizontal size={20} />
            <span className="hidden sm:inline">Ordenar por:</span>
          </motion.button>
          <AnimatePresence>
            {showSort && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="overflow-hidden absolute right-0 mt-2 w-48 rounded-xl border shadow-lg bg-bg-100 border-bg-200"
              >
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      onSortChange(option.value);
                      setShowSort(false);
                    }}
                    className={`w-full text-left px-4 py-3 hover:bg-bg-200 transition-colors ${
                      sortBy === option.value ? 'text-primary-200 bg-bg-200' : 'text-text-100'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {genres.map((genre) => (
          <motion.button
            key={genre}
            onClick={() => onGenreChange(genre)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedGenres.has(genre)
                ? 'bg-primary-200 text-white'
                : 'bg-bg-200 text-text-100 hover:bg-bg-300'
            }`}
          >
            {genre}
          </motion.button>
        ))}
      </div>
    </div>
  );
};