export interface Beat {
  id: string;
  title: string;
  producer: string;
  genre: string;
  bpm: number;
  key: string;
  duration: string;
  price: number;
  coverUrl: string;
  audioUrl: string;
  releaseDate: string;
  featured?: boolean;
}