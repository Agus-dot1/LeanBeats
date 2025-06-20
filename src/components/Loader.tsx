import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music } from 'lucide-react';
import { useImagePreloader } from '../hooks/useImagePreloader';

const VISIT_KEY = 'has_visited_leanbeats';

interface LoaderProps {
  onLoadingComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const { imagesPreloaded } = useImagePreloader();
  const [loadingMessage, setLoadingMessage] = useState("Cargando experiencia musical...");

  // Array of dynamic loading messages
  const loadingMessages = React.useMemo(() => [
    "Cargando experiencia musical...",
    "Masterizando samples...",
    "Probando sonidos...",
    "Ajustando frecuencias...",
    "Sincronizando beats...",
    "Calibrando ecualizadores...",
    "Preparando ritmos...",
    "Mezclando pistas...",
    "Afinando instrumentos...",
    "Amplificando bajos..."
  ], []);

  // Update loading message based on progress
  useEffect(() => {
    const messageIndex = Math.min(
      Math.floor(progress / (200 / loadingMessages.length)),
      loadingMessages.length - 1
    );
    setLoadingMessage(loadingMessages[messageIndex]);
  }, [progress, loadingMessages]);

  // Prevent scrolling while loader is active
  useEffect(() => {
    // Save the original overflow style
    const originalOverflow = document.body.style.overflow;
    
    // Disable scrolling
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling when loader is complete
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const hasVisitedBefore = React.useMemo(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(VISIT_KEY) === 'true';
  }, []);

  // Store visit after first load
  useEffect(() => {
    if (!hasVisitedBefore) {
      localStorage.setItem(VISIT_KEY, 'true');
    }
  }, [hasVisitedBefore]);

  useEffect(() => {
    // Simulate asset loading with incremental progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const increment = hasVisitedBefore 
          ? Math.max(5, Math.floor((100 - prev) / 5))  // Fast increment for returning visitors
          : Math.max(1, Math.floor((100 - prev) / 10)); // Original increment for first visit
        
        const nextProgress = Math.min(prev + increment, 100);
        
        if (nextProgress === 100 && imagesPreloaded) {
          clearInterval(interval);
          
          const transitionDelay = hasVisitedBefore ? 100 : 200;
          const completionDelay = hasVisitedBefore ? 400 : 600;
          
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onLoadingComplete, completionDelay);
          }, transitionDelay);
        }
        
        return nextProgress;
      });
    }, hasVisitedBefore ? 50 : 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete, imagesPreloaded, hasVisitedBefore]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg-100"
          initial={{ opacity: 1, y: 0 }}
          exit={{ 
            opacity: 0,
            y: "-100%",
            transition: { 
              duration: 0.8, 
              ease: "circInOut",
              opacity: { duration: 0.3, delay: 0.5 }
            }
          }}
        >
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mb-8">
              <motion.div
                className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-20 blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-orange-500 to-red-500"
                animate={{ 
                  rotate: 360,
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Music className="w-10 h-10 text-white" />
              </motion.div>
            </div>
            
            <motion.h1 
              className="mb-2 text-4xl font-bold text-text-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-text-100">LEA IN </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">THE MIX</span>
            </motion.h1>
            
            <motion.div
              key={loadingMessage}
              className="h-6 mb-8 text-center text-text-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {loadingMessage}
            </motion.div>
            
            <div className="w-64 h-2 overflow-hidden rounded-full bg-bg-300">
              <motion.div 
                className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            <motion.p 
              className="mt-2 text-sm text-text-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {progress}%
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};