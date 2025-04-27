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
  mood?: string[];
  tags: string[];
  releaseDate: string;
  createdAt: string;
  plays: number;
  ratings?: {
    average: number;
    count: number;
  };
  featured?: boolean;
}