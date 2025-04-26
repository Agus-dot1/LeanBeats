import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Tag, Clock, Music } from 'lucide-react';
import { Beat } from '../types/beat';
import { useBeatsStore } from '../hooks/useBeatsStore';
import toast from 'react-hot-toast';
import { AudioPlayer } from './AudioPlayer';

interface BeatCardProps {
  beat: Beat;
  isPlaying: boolean;
  onPlay: () => void;
  globalVolume?: number;
}

export const BeatCard: React.FC<BeatCardProps> = ({ 
  beat, 
  isPlaying, 
  onPlay,   
  globalVolume = 0.5  
}) => {
  const { addToCart } = useBeatsStore();
  const [loading, setLoading] = React.useState(true);

  const handleAddToCart = () => {
    addToCart(beat);
    toast.success('Added to cart!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 bg-bg-200 rounded-2xl hover:shadow-lg transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row gap-4">
        {/* Cover Image Section */}
        <div className="relative w-full md:w-48 h-48 md:h-48 overflow-hidden rounded-xl group">
          <img
            src={beat.coverUrl}
            alt={beat.title}
            className="object-cover w-full h-full"
          />
          {beat.featured && (
            <div className="absolute px-3 py-1 text-sm font-medium text-white rounded-full top-3 left-3 bg-primary-200/90 backdrop-blur-sm">
              Featured
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-2xl font-bold text-text-100 mb-1">{beat.title}</h3>
                <p className="text-text-200 text-lg">{beat.producer}</p>
              </div>
              <div className="text-2xl font-bold text-primary-200">
                ${beat.price.basic}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="flex items-center gap-2 text-sm text-text-200 bg-bg-300/50 px-3 py-1.5 rounded-full">
                <Tag size={16} />
                {beat.genre}
              </span>
              <span className="flex items-center gap-2 text-sm text-text-200 bg-bg-300/50 px-3 py-1.5 rounded-full">
                <Clock size={16} />
                {beat.bpm} BPM
              </span>
              <span className="flex items-center gap-2 text-sm text-text-200 bg-bg-300/50 px-3 py-1.5 rounded-full">
                <Music size={16} />
                {beat.key}
              </span>
            </div>

            <div className="w-full">
              <AudioPlayer
                url={beat.audioUrl}
                isPlaying={isPlaying}
                onPlayPause={onPlay}
                onFinish={onPlay}
                globalVolume={globalVolume}
                onLoadingChange={setLoading}
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 font-medium text-white rounded-xl bg-primary-200 hover:bg-primary-300 transition-colors duration-300"
          >
            <ShoppingCart size={20} />
            <span>Add to Cart</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
