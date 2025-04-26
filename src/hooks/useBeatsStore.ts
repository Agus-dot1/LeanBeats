import { create } from 'zustand';
import { Beat } from '../types/beat';

interface BeatsStore {
  cart: Beat[];
  savedBeats: Beat[];
  addToCart: (beat: Beat) => void;
  removeFromCart: (beatId: string) => void;
  toggleSaved: (beat: Beat) => void;
  clearCart: () => void;
}

export const useBeatsStore = create<BeatsStore>((set) => ({
  cart: [],
  savedBeats: [],
  addToCart: (beat) =>
    set((state) => ({
      cart: [...state.cart, beat],
    })),
  removeFromCart: (beatId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== beatId),
    })),
  toggleSaved: (beat) =>
    set((state) => {
      const isSaved = state.savedBeats.some((saved) => saved.id === beat.id);
      return {
        savedBeats: isSaved
          ? state.savedBeats.filter((saved) => saved.id !== beat.id)
          : [...state.savedBeats, beat],
      };
    }),
  clearCart: () => set({ cart: [] }),
}));
