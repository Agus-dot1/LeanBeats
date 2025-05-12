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
  const genres = ['All', 'Trap', 'Hip Hop', 'RKT', 'Pop', 'Reggaeton', 'Electronic'];
  const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
  ];

  return (
    <div className="mb-8 bg-bg-100/95">
      <div className="flex flex-col gap-3 p-4 sm:p-6 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 w-5 h-5 -translate-y-1/2 text-text-200" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by title or genre..."
            className="pr-4 pl-10 w-full h-12 text-base rounded-lg transition-shadow bg-bg-200 text-text-100 placeholder:text-text-200/70 focus:outline-none focus:ring-2 focus:ring-primary-200"
          />
        </div>

        <div className="relative shrink-0">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowSort(!showSort)}
            className={`w-full md:w-auto flex items-center justify-center gap-2 px-6 h-12 rounded-lg transition-all duration-200 ${
              showSort 
                ? 'text-white shadow-lg bg-primary-200 shadow-primary-200/20' 
                : 'bg-bg-200 text-text-100 hover:bg-bg-300'
            }`}
          >
            <SlidersHorizontal size={20} />
            <span>Sort by</span>
          </motion.button>

          <AnimatePresence>
            {showSort && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ type: "spring", duration: 0.2 }}
                className="overflow-hidden absolute right-0 z-50 mt-2 w-full md:w-56 rounded-lg shadow-xl backdrop-blur-3xl bg-bg-100/95"
              >
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      onSortChange(option.value);
                      setShowSort(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                      sortBy === option.value 
                        ? 'text-primary-200 bg-primary-200/10 font-medium' 
                        : 'text-text-100 hover:bg-bg-200'
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

      <div className="overflow-x-auto flex flex-wrap gap-2 p-4 sm:p-6 -mx-4 sm:mx-0">
        <div className="flex gap-2 px-4 sm:px-0 min-w-max">
          {genres.map((genre) => (
            <motion.button
              key={genre}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onGenreChange(genre)}
              className={`px-6 h-10 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedGenres.has(genre)
                  ? 'bg-primary-200 text-white shadow-lg shadow-primary-200/20'
                  : 'bg-bg-200 text-text-100 hover:bg-bg-300'
              }`}
            >
              {genre}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};