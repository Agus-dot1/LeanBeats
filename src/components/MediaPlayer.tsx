import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, Maximize2, Minimize2, SkipBack, SkipForward, Youtube } from 'lucide-react';
import { Tooltip } from 'react-tooltip';
import { motion } from 'framer-motion';

interface Song {
  id: string;
  title: string;
  artist: string;
  audioUrl: string;
  duration: string;
  youtubeUrl: string;
}

const songs: Song[] = [
  {
    id: '1',
    title: 'INTRO X-PLOSIVO',
    artist: 'Lea in the mix',
    audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1746488269/intro-x-plosivo_qoozuj.mp3',
    duration: '2:33',
    youtubeUrl: 'https://www.youtube.com/watch?v=B0TfrwBIo6M'
  },
  {
    id: '2',
    title: 'LIKE A LIKE VS PUSH UP',
    artist: 'Lea in the mix',
    audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1746488264/like-a-like_tznkxb.mp3',
    duration: '2:05',
    youtubeUrl: 'https://youtu.be/TqDakqYRGt0?si=klZtTpSC4Fgmd327&t=564'
  },
  {
    id: '3',
    title: 'Eternity',
    artist: 'Lea in the mix',
    audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1746488265/eternity_rbavu7.mp3',
    duration: '1:15',
    youtubeUrl: 'https://youtu.be/TqDakqYRGt0?si=-oc_rU90lQ7I0WXU&t=322'
  },
  {
    id: '4',
    title: 'The Next Episode',
    artist: 'Lea in the mix',
    audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1746488269/the-next-episode_n2vfbv.mp3',
    duration: '1:32',
    youtubeUrl: 'https://youtu.be/TqDakqYRGt0?si=tywPDQn7lB4BlZOD&t=782'
  },
  {
    id: '5',
    title: 'RETUMBA LA BOCINA',
    artist: 'Lea in the mix',
    audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1746488263/retumba-la-bocina-lea-in-the-mix_8onfZJsH_zq5afn.mp3',
    duration: '2:17',
    youtubeUrl: 'https://www.youtube.com/watch?v=wobsp7AxcH8'
  }
];

const Player: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentSong.audioUrl;
      audioRef.current.volume = volume;
      audioRef.current.load();
  
      const handleError = (event: Event) => {
        console.error('Audio error:', event);
      };
  
      const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current?.currentTime || 0);
      };
  
      const handleEnded = () => {
        handleNext();
      };
  
      audioRef.current.addEventListener('error', handleError);
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.addEventListener('ended', handleEnded);
  
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
          setIsPlaying(false);
        });
      }
  
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('error', handleError);
          audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
          audioRef.current.removeEventListener('ended', handleEnded);
        }
      };
    }
  }, [currentSong, isPlaying, volume]); // Add volume to dependency array

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play()
          .catch(error => {
            console.error('Error playing audio:', error);
            setIsPlaying(false);
          });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const value = parseFloat(e.target.value);
    setVolume(value);
  };

  const handlePrevious = () => {
    const newIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
    setCurrentSongIndex(newIndex);
    // Remove the pause call since it's handled in the useEffect
    setIsPlaying(true);
  };

  const handleNext = () => {
    const newIndex = currentSongIndex === songs.length - 1 ? 0 : currentSongIndex + 1;
    setCurrentSongIndex(newIndex);
    // Remove the pause call since it's handled in the useEffect
    setIsPlaying(true);
  };

  const openYoutube = () => {
    window.open(currentSong.youtubeUrl, '_blank');
  };

  return (
    <motion.div 
      className={`fixed ${isExpanded ? 'bottom-4 sm:bottom-8' : 'bottom-2 sm:bottom-3'} left-4 sm:left-6 transition-all duration-300 z-40`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
    >
      <motion.div 
        className={`bg-bg-200  rounded-lg sm:rounded-xl shadow-2xl ${isExpanded ? 'p-3 sm:p-4' : 'p-2 sm:p-3'} transition-all duration-200`}
      >
        <audio
          ref={audioRef}
          onEnded={handleNext}
          onError={(e) => {
            console.error('Audio playback error:', e);
            setIsPlaying(false);
          }}
        />

        <motion.div 
          className={`flex items-center transition-all duration-100 gap-1 sm:gap-4 ${isExpanded ? 'w-[250px] sm:w-[300px] md:w-[400px]' : 'w-[150px] sm:w-[170px] md:w-[300px]'}`}
        >
          {/* Song Info */}
          {isExpanded && (
            <motion.div 
              className="overflow-x-hidden flex-1 min-w-0"
            >
              <h3
                className="text-sm font-medium truncate text-text-100"
                data-tooltip-id="song-title-tooltip"
                data-tooltip-content={currentSong.title}
              >
                {currentSong.title}
              </h3>
              <Tooltip id="song-title-tooltip" place="top" />
              <p className="text-xs truncate text-text-100/60">{currentSong.artist}</p>
              <div className="flex gap-2 items-center mt-1">
                <span className="text-xs text-text-100/60">{currentSong.duration}</span>
                <button
                  onClick={openYoutube}
                  className="p-1 rounded-full hover:bg-bg-300"
                >
                  <Youtube size={14} className="text-text-100/60" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Controls */}
          <motion.div 
            className="flex gap-2 items-center"
          >
            <button
              onClick={handlePrevious}
              className="p-1.5 sm:p-2 rounded-full transition-colors hover:bg-bg-300 text-text-100"
            >
              <SkipBack size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
            <button
              onClick={togglePlay}
              className="p-2 rounded-full transition-colors bg-primary-200 hover:bg-bg-300 text-text-100"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full transition-colors hover:bg-bg-300 text-text-100"
            >
              <SkipForward size={18} />
            </button>
          </motion.div>

          {/* Volume Control */}
          <motion.div 
            className="hidden gap-2 items-center group md:flex"
          >
            <Volume2 size={18} className="text-text-100/60" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 h-1 bg-text-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-text-100"
            />
          </motion.div>

          {/* Expand/Collapse Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-full transition-colors hover:bg-bg-300 text-text-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Player;
