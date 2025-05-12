import React, { memo } from 'react';
import { Tag, Clock, Music, Download, ShoppingCart, Share2, Play, Pause } from 'lucide-react';
import { Beat } from '../types/beat';
import { AudioPlayer } from './AudioPlayer';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

interface BeatCardProps {
  beat: Beat;
  isPlaying: boolean;
  onPlay: () => void;
  globalVolume?: number;
}

export const BeatCard: React.FC<BeatCardProps> = memo(({ 
  beat, 
  isPlaying, 
  onPlay,   
  globalVolume = 0.5  
}) => {
  const { addItem } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = () => {
    addItem({
      id: beat.id,
      type: 'beat',
      title: beat.title,
      price: beat.price,
      coverUrl: beat.coverUrl
    });
    showToast('¡Beat añadido al carrito!', 'success');
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: beat.title,
        text: `Check out this beat: ${beat.title} by ${beat.producer}`,
        url: window.location.href
      });
    } catch (error) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link copiado al portapapeles', 'success');
    }
  };

  const handleDownloadDemo = async () => {
    try {
      const response = await fetch(beat.audioUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${beat.title}_demo.mp3`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      showToast('Demo descargado exitosamente', 'success');
    } catch (error) {
      showToast('Error al descargar el demo', 'error');
    }
  };

  return (
    <div className={`relative rounded-xl ${beat.featured ? 'bg-gradient-to-br from-bg-200 to-bg-300 border-2 border-primary-200' : 'bg-bg-200'}`}>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4">
        {/* Cover Image Section */}
        <div className="relative w-full sm:w-[180px] aspect-square shrink-0">
          <img
            src={beat.coverUrl}
            alt={beat.title}
            className="object-cover w-full h-full rounded-lg opacity-70"
            loading="lazy"
          />
          {beat.featured && (
            <div className="absolute -top-3 -right-3 px-4 py-1 text-sm font-bold text-white rounded-full shadow-lg bg-primary-200">
              Featured
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between items-start mb-3">
            <div className="min-w-0 w-full sm:w-auto">
              <h3 className="text-xl sm:text-2xl font-bold truncate text-text-100">{beat.title}</h3>
              <p className="text-base sm:text-lg text-text-200">{beat.producer}</p>
            </div>
            <div className="flex gap-2 items-center w-full sm:w-auto justify-end">
              <span className="text-2xl sm:text-3xl font-bold text-primary-200">${beat.price}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full bg-bg-300 text-text-100">
              <Tag size={14} />
              {beat.genre}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full bg-bg-300 text-text-100">
              <Clock size={14} />
              {beat.bpm} BPM
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full bg-bg-300 text-text-100">
              <Music size={14} />
              {beat.key}
            </span>
          </div>

          <div className="mb-4">
            <AudioPlayer
              url={beat.audioUrl}
              isPlaying={isPlaying}
              onPlayPause={onPlay}
              onFinish={onPlay}
              globalVolume={globalVolume}
            />
          </div>

          <div className="flex flex-wrap gap-2 items-center mt-auto">
            <button
              onClick={handleAddToCart}
              className="flex-1 min-w-[200px] flex justify-center items-center gap-2 px-6 py-2.5 font-medium text-white rounded-lg bg-primary-200 hover:bg-primary-300"
            >
              <ShoppingCart size={18} />
              <span>Añadir al carrito</span>
            </button>
            <button
              onClick={handleDownloadDemo}
              className="flex-1 sm:flex-none items-center gap-2 px-6 py-2.5 font-medium rounded-lg bg-bg-300 text-text-100 hover:bg-bg-400"
            >
              <Download size={18} />
              <span>Demo</span>
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 p-2.5 font-medium rounded-lg bg-bg-300 text-text-100 hover:bg-bg-400"
            >
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

BeatCard.displayName = 'BeatCard';