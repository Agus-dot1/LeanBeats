import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import WaveSurfer from 'wavesurfer.js';
import { Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  url: string;
  isPlaying: boolean;
  onPlayPause: () => void;
  onFinish?: () => void;
  className?: string;
  globalVolume?: number;
  onLoadingChange?: (loading: boolean) => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  url,
  isPlaying,
  onPlayPause,
  onFinish,
  className = '',
  globalVolume = 0.5,
  onLoadingChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const wavesurfer = WaveSurfer.create({
      container: containerRef.current,
      waveColor: '#4A5568',
      progressColor: '#FD5732',
      cursorColor: 'white',
      barWidth: 3,
      barGap: 3,
      height: 60,
      url,
    });

    wavesurferRef.current = wavesurfer;

    wavesurfer.on('ready', () => {
      setLoading(false);
      onLoadingChange?.(false);
      wavesurfer.setVolume(globalVolume);
      setDuration(wavesurfer.getDuration());
    });

    wavesurfer.on('audioprocess', () => {
      setCurrentTime(wavesurfer.getCurrentTime());
    });

    wavesurfer.on('finish', () => {
      onFinish?.();
      setCurrentTime(duration);
    });

    return () => {
      wavesurfer.destroy();
    };
  }, [url]);

  // Update volume when global volume changes
  useEffect(() => {
    wavesurferRef.current?.setVolume(globalVolume);
  }, [globalVolume]);

  // Control playback
  useEffect(() => {
    if (!wavesurferRef.current) return;
    
    if (isPlaying) {
      wavesurferRef.current.play();
    } else {
      wavesurferRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className={`relative ${className}`}>
      <div className="flex gap-4 items-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onPlayPause}
          className="p-3 text-white rounded-full shadow-lg bg-primary-200"
          disabled={loading}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </motion.button>
        <div className="text-sm font-medium text-text-200">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
      <div
        ref={containerRef}
        className={`mt-4 rounded-xl overflow-hidden ${loading ? 'animate-pulse' : ''}`}
      />
    </div>
  );
};