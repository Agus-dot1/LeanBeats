export interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    imageUrl: string;
    type: 'beat' | 'drumkit';
    bpm?: number;
    key?: string;
    tags: string[];
    createdAt: string;
  }
  
  export interface ProductGridProps {
    products: Product[];
    onEdit: (product: Product) => void;
    onDelete: (productId: string) => void;
  }