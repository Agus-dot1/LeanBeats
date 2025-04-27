import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Tag, Clock, Music } from 'lucide-react';
import { Beat } from '../types/beat';
import { useCartStore } from '../store/cartStore';
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
  const addToCart = useCartStore(state => state.addToCart);

  const handleAddToCart = () => {
    addToCart({
      id: beat.id,
      type: 'beat',
      title: beat.title,
      price: beat.price,
      coverUrl: beat.coverUrl,
    });
    toast.success('Beat added to cart!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 rounded-2xl transition-all duration-300 bg-bg-200 hover:shadow-lg"
    >
      <div className="flex flex-col gap-4 md:flex-row">
        {/* Cover Image Section */}
        <div className="overflow-hidden relative w-full h-48 rounded-xl md:w-48 md:h-48 group">
          <img
            src={beat.coverUrl}
            alt={beat.title}
            className="object-cover w-full h-full"
          />
          {beat.featured && (
            <div className="absolute top-3 left-3 px-3 py-1 text-sm font-medium text-white rounded-full backdrop-blur-sm bg-primary-200/90">
              Featured
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="mb-1 text-2xl font-bold text-text-100">{beat.title}</h3>
                <p className="text-lg text-text-200">{beat.producer}</p>
              </div>
              <div className="text-2xl font-bold text-primary-200">
                ${beat.price}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center mb-4">
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
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            className="flex gap-2 justify-center items-center px-6 py-3 mt-4 w-full font-medium text-white rounded-xl transition-colors duration-300 bg-primary-200 hover:bg-primary-300"
          >
            <ShoppingCart size={20} />
            <span>Add to Cart</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
