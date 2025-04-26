export interface Beat {
  id: string;
  title: string;
  producer: string;
  genre: string;
  bpm: number;
  key: string;
  duration: string;
  price: {
    basic: number;
  };
  coverUrl: string;
  audioUrl: string;
  waveformData?: number[];
  mood: string[];
  tags: string[];
  releaseDate: string;
  plays: number;
  ratings: {
    average: number;
    count: number;
  };
  featured?: boolean;
}