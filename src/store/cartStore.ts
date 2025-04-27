import create from 'zustand';

type CartItem = {
  id: string;
  type: 'beat' | 'pack';
  title: string;
  price: number;
  coverUrl?: string;
};

type CartState = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addToCart: (item) => {
    if (!get().items.find(i => i.id === item.id && i.type === item.type)) {
      set(state => ({ items: [...state.items, item] }));
    }
  },
  removeFromCart: (id) => set(state => ({ items: state.items.filter(i => i.id !== id) })),
  clearCart: () => set({ items: [] }),
}));