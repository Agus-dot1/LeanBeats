export type CartItemType = 'beat' | 'pack';

export interface CartItem {
  id: string;
  type: CartItemType;
  title: string;
  price: number;
  coverUrl: string;
}

export interface CartContextType {
  items: CartItem[];
  purchaseCode: string;
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}