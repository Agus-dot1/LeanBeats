import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, Maximize2, Minimize2, SkipBack, SkipForward, Youtube } from 'lucide-react';
import { Tooltip } from 'react-tooltip'
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
    audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1745749808/intro-x-plosivo-lea-in-the-mix_wDCyKT2a_vntyy7.mp3',
    duration: '2:33',
    youtubeUrl: 'https://www.youtube.com/watch?v=B0TfrwBIo6M'
  },
  {
    id: '2',
    title: 'LE CLAVO ESTE TAKA',
    artist: 'Lea in the mix',
    audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1745749803/le-clavo-este-taka-lea-in-the-mix_2DYwSA6n_gjyw2e.mp3',
    duration: '2:05',
    youtubeUrl: 'https://www.youtube.com/watch?v=6XxgCEFxiJY'
  },
  {
    id: '3',
    title: 'BAD BOY',
    artist: 'Lea in the mix',
    audioUrl: 'https://res.cloudinary.com/do17gdc0b/video/upload/v1745749802/bad-boy-lea-in-the-mix-remix_Dy9Ja3yu_se7kyw.mp3',
    duration: '2:43',
    youtubeUrl: 'https://www.youtube.com/watch?v=ih-Nk7VLNgA'
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
  }, [currentSong, isPlaying]);

  // Separate effect for volume changes
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
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(true); // This will trigger the useEffect to play the new song
    }
  };

  const handleNext = () => {
    const newIndex = currentSongIndex === songs.length - 1 ? 0 : currentSongIndex + 1;
    setCurrentSongIndex(newIndex);
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(true); // This will trigger the useEffect to play the new song
    }
  };

  const openYoutube = () => {
    window.open(currentSong.youtubeUrl, '_blank');
  };

  return (
    <div className={`fixed ${isExpanded ? 'bottom-8' : 'bottom-3'} left-6 transition-all duration-300`}>
      <div className={`bg-[#1E1E1E] border border-white/10 rounded-xl shadow-2xl ${isExpanded ? 'p-4' : 'p-3'}`}>
        <audio
          ref={audioRef}
          onEnded={handleNext}
        />
        
        <div className={`flex items-center gap-4 ${isExpanded ? 'w-[400px]' : 'w-[300px]'}`}>
          {/* Song Info */}
          {isExpanded && (
            <div className="overflow-x-hidden flex-1 min-w-0">
              <h3 
                className="text-sm font-medium truncate"
                data-tooltip-id="song-title-tooltip"
                data-tooltip-content={currentSong.title}
              >
                {currentSong.title}
              </h3>
              <Tooltip id="song-title-tooltip" place="top" />
              <p className="text-xs truncate text-white/60">{currentSong.artist}</p>
              <div className="flex gap-2 items-center mt-1">
                <span className="text-xs text-white/60">{currentSong.duration}</span>
                <button
                  onClick={openYoutube}
                  className="p-1 rounded-full hover:bg-white/10"
                >
                  <Youtube size={14} className="text-white/60" />
                </button>
              </div>
            </div>
          )}

          {/* Controls */}
          <div className="flex gap-2 items-center">
            <button 
              onClick={handlePrevious}
              className="p-2 rounded-full transition-colors hover:bg-white/10"
            >
              <SkipBack size={18} />
            </button>
            <button 
              onClick={togglePlay}
              className="p-2 rounded-full transition-colors bg-primary-200 hover:bg-primary-300"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full transition-colors hover:bg-white/10"
            >
              <SkipForward size={18} />
            </button>
          </div>

          {/* Volume Control */}
          <div className="flex gap-2 items-center group">
            <Volume2 size={18} className="text-white/60" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 h-1 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
            />
          </div>

          {/* Expand/Collapse Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-full transition-colors hover:bg-white/10"
          >
            {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;