import { createContext, useContext, useState, useEffect } from 'react';
import { BeatService } from '../services/beatService';
import { Beat } from '../../types/beat';
const beatService = new BeatService();

export const BeatsContext = createContext<{
  beats: Beat[];
  loading: boolean;
  error: Error | null;
  createBeat: (beat: Omit<Beat, 'id'>, audio: File, cover: File) => Promise<void>;
}>({
  beats: [],
  loading: false,
  error: null,
  createBeat: async () => {}
});

export const BeatsProvider = ({ children }: { children: React.ReactNode }) => {
  const [beats, setBeats] = useState<Beat[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    loadBeats();
  }, []);

  const loadBeats = async () => {
    setLoading(true);
    try {
      const beats = await beatService.getBeats();
      setBeats(beats as Beat[]);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const createBeat = async (beat: Omit<Beat, 'id'>, audio: File, cover: File) => {
    try {
      await beatService.createBeat(beat, audio, cover);
      await loadBeats(); // Recargar beats después de crear uno nuevo
    } catch (err) {
      setError(err as Error);
      throw err;
    }
  };

  return (
    <BeatsContext.Provider value={{ beats, loading, error, createBeat }}>
      {children}
    </BeatsContext.Provider>
  );
};