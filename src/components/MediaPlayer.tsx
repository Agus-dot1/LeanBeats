import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, Maximize2, Minimize2, SkipBack, SkipForward, Youtube } from 'lucide-react';
import { Tooltip } from 'react-tooltip';
import { motion, AnimatePresence } from 'framer-motion';

interface Song {
  id: string;
  title: string;
  artist: string;
  audioUrl: string;
  duration: string;
  youtubeUrl: string;
  imageUrl: string; // Added image URL for each song
}

const songs: Song[] = [
  {
    id: '1',
    title: 'INTRO X-PLOSIVO',
    artist: 'Lea in the mix',
    audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1746488269/intro-x-plosivo_qoozuj.mp3',
    duration: '2:33',
    youtubeUrl: 'https://www.youtube.com/watch?v=B0TfrwBIo6M',
    imageUrl: 'https://res.cloudinary.com/do17gdc0b/image/upload/v1746479151/0D57FE94-C257-4747-BDDF-1F444ACDBFC9_e9dzrx.png'
  },
  {
    id: '2',
    title: 'LIKE A LIKE VS PUSH UP',
    artist: 'Lea in the mix',
    audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1746488264/like-a-like_tznkxb.mp3',
    duration: '2:05',
    youtubeUrl: 'https://youtu.be/TqDakqYRGt0?si=klZtTpSC4Fgmd327&t=564',
    imageUrl: 'https://res.cloudinary.com/do17gdc0b/image/upload/v1746479152/D851250A-D700-4160-B0C3-5922A59BCB41_utr53y_phqsc8.png'
  },
  {
    id: '3',
    title: 'Eternity',
    artist: 'Lea in the mix',
    audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1746488265/eternity_rbavu7.mp3',
    duration: '1:15',
    youtubeUrl: 'https://youtu.be/TqDakqYRGt0?si=-oc_rU90lQ7I0WXU&t=322',
    imageUrl: 'https://res.cloudinary.com/do17gdc0b/image/upload/v1746479151/0D57FE94-C257-4747-BDDF-1F444ACDBFC9_e9dzrx.png'
  },
  {
    id: '4',
    title: 'The Next Episode',
    artist: 'Lea in the mix',
    audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1746488269/the-next-episode_n2vfbv.mp3',
    duration: '1:32',
    youtubeUrl: 'https://youtu.be/TqDakqYRGt0?si=tywPDQn7lB4BlZOD&t=782',
    imageUrl: 'https://res.cloudinary.com/do17gdc0b/image/upload/v1746479152/D851250A-D700-4160-B0C3-5922A59BCB41_utr53y_phqsc8.png'
  },
  {
    id: '5',
    title: 'RETUMBA LA BOCINA',
    artist: 'Lea in the mix',
    audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1746488263/retumba-la-bocina-lea-in-the-mix_8onfZJsH_zq5afn.mp3',
    duration: '2:17',
    youtubeUrl: 'https://www.youtube.com/watch?v=wobsp7AxcH8',
    imageUrl: 'https://res.cloudinary.com/do17gdc0b/image/upload/v1746479151/0D57FE94-C257-4747-BDDF-1F444ACDBFC9_e9dzrx.png'
  }
];

interface PlayerProps {
  isInHero?: boolean;
  onStickyChange?: (isSticky: boolean) => void;
}

const Player: React.FC<PlayerProps> = ({ isInHero = false, onStickyChange }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isExpanded, setIsExpanded] = useState(isInHero);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);

  const currentSong = songs[currentSongIndex];

  // Handle sticky behavior
  useEffect(() => {
    if (isInHero) return; // Don't apply sticky behavior when in hero

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldBeSticky = scrollY > 100;
      
      if (shouldBeSticky !== isSticky) {
        setIsSticky(shouldBeSticky);
        onStickyChange?.(shouldBeSticky);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSticky, isInHero, onStickyChange]);

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
  }, [currentSong, isPlaying]);
  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

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
    setIsPlaying(true);
  };

  const handleNext = () => {
    const newIndex = currentSongIndex === songs.length - 1 ? 0 : currentSongIndex + 1;
    setCurrentSongIndex(newIndex);
    setIsPlaying(true);
  };

  const openYoutube = () => {
    window.open(currentSong.youtubeUrl, '_blank');
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (isInHero) {
    // Hero version - large and prominent
    return (
      <motion.div 
        ref={playerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full"
      >
        <div className="overflow-hidden rounded-3xl shadow-2xl bg-bg-200">
          <audio
            ref={audioRef}
            onEnded={handleNext}
            onError={(e) => {
              console.error('Audio playback error:', e);
              setIsPlaying(false);
            }}
          />

          {/* Album Art Section */}
          <div className="relative h-64 md:h-80">
            <motion.img
              key={currentSong.id}
              src={currentSong.imageUrl}
              alt={currentSong.title}
              className="object-cover w-full h-full"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Play button overlay */}
            <motion.button
              onClick={togglePlay}
              className="absolute p-4 text-white transition-all transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg top-1/2 left-1/2 bg-primary-200 hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? <Pause size={32} /> : <Play size={32} />}
            </motion.button>

            {/* Song info overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="mb-1 text-xl font-bold text-white md:text-2xl">{currentSong.title}</h3>
              <p className="text-white/80">{currentSong.artist}</p>
            </div>
          </div>

          {/* Controls Section */}
          <div className="p-6 space-y-4">
            {/* Progress bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-text-200">
                <span>{formatTime(currentTime)}</span>
                <span>{currentSong.duration}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-bg-300">
                <div 
                  className="h-full transition-all duration-300 rounded-full bg-primary-200"
                  style={{ width: `${(currentTime / (audioRef.current?.duration || 1)) * 100}%` }}
                />
              </div>
            </div>

            {/* Main controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrevious}
                  className="p-2 transition-colors rounded-full hover:bg-bg-300 text-text-100"
                >
                  <SkipBack size={24} />
                </button>
                <button
                  onClick={togglePlay}
                  className="p-3 text-white transition-colors rounded-full bg-primary-200 hover:bg-primary-300"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 transition-colors rounded-full hover:bg-bg-300 text-text-100"
                >
                  <SkipForward size={24} />
                </button>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={openYoutube}
                  className="p-2 transition-colors rounded-full hover:bg-bg-300 text-text-100"
                >
                  <Youtube size={20} />
                </button>
                
                <div className="flex items-center gap-2">
                  <Volume2 size={20} className="text-text-100" />
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-20 h-1 bg-text-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-text-100"
                  />
                </div>
              </div>
            </div>

            {/* Song list */}
            <div className="pt-4 border-t border-bg-300">
              <h4 className="mb-3 text-sm font-medium text-text-200">Playlist</h4>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {songs.map((song, index) => (
                  <button
                    key={song.id}
                    onClick={() => setCurrentSongIndex(index)}
                    className={`w-full text-left p-2 rounded-lg transition-colors ${
                      index === currentSongIndex 
                        ? 'bg-primary-200/10 text-primary-200' 
                        : 'hover:bg-bg-300 text-text-200'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium truncate">{song.title}</span>
                      <span className="text-xs">{song.duration}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Sticky version - compact
  return (
    <AnimatePresence>
      <motion.div 
        ref={playerRef}
        className={`fixed ${isSticky ? 'bottom-6 sm:bottom-9' : 'bottom-4 sm:bottom-6'} left-4 sm:left-6 transition-all duration-300 z-40`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          scale: isSticky ? 0.9 : 1
        }}
        transition={{ duration: 0.5, ease: "anticipate" }} 
        exit={{ opacity: 0, y: 100 }}
      >
        <motion.div 
          className={`bg-bg-200 rounded-lg sm:rounded-xl shadow-2xl ${isExpanded ? 'p-2 sm:p-3' : 'p-1 sm:p-2'} transition-all duration-200`}
          animate={{
            backdropFilter: isSticky ? 'blur(20px)' : 'blur(0px)',
            backgroundColor: isSticky ? 'rgba(44, 46, 48, 0.95)' : 'var(--bg-200)'
          }}
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
                className="flex-1 min-w-0 overflow-x-hidden"
              >
                <h3
                  className="text-sm font-medium truncate text-text-100"
                  data-tooltip-id="song-title-tooltip"
                  data-tooltip-content={currentSong.title}
                >
                  {currentSong.title}
                </h3>
                <Tooltip id="song-title-tooltip" place="top" />
                <p className="text-xs truncate text-text-100">{currentSong.artist}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-text-100">{currentSong.duration}</span>
                  <button
                    onClick={openYoutube}
                    className="p-1 rounded-full hover:bg-bg-300"
                  >
                    <Youtube size={14} className="text-text-100" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Controls */}
            <motion.div 
              className="flex items-center gap-2"
            >
              <button
                onClick={handlePrevious}
                className="p-1.5 sm:p-2 rounded-full transition-colors hover:bg-bg-300 text-text-100"
              >
                <SkipBack size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
              <button
                onClick={togglePlay}
                className="p-2 transition-colors rounded-full bg-primary-200 hover:bg-bg-300 text-text-100"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <button
                onClick={handleNext}
                className="p-2 transition-colors rounded-full hover:bg-bg-300 text-text-100"
              >
                <SkipForward size={18} />
              </button>
            </motion.div>

            {/* Volume Control */}
            <motion.div 
              className="items-center hidden gap-2 group md:flex"
            >
              <Volume2 size={18} className="text-text-100" />
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
    </AnimatePresence>
  );
};

export default Player;