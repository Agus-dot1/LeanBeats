import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

interface ProductCardProps {
  product: {
    title: string;
    price: number;
    description: string;
    imageUrl: string;
    type: 'beat' | 'drumkit';
    createdAt: string;
  };
  onEdit: () => void;
  onDelete: () => void;
}

const ProductCard = ({ product, onEdit, onDelete }: ProductCardProps) => {
  return (
    <div className="bg-[#1e1e1e] rounded-lg border border-white/10 hover:border-white/20 transition-all">
      <div className="relative group">
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          className="object-cover w-full h-48 rounded-t-lg" 
        />
        <div className="flex absolute inset-0 gap-2 justify-center items-center opacity-0 transition-opacity bg-black/50 group-hover:opacity-100">
          <button 
            onClick={onEdit}
            className="p-2 rounded-full transition-colors bg-white/10 hover:bg-white/20"
          >
            <Edit2 size={18} />
          </button>
          <button 
            onClick={onDelete}
            className="p-2 text-red-500 rounded-full transition-colors bg-red-500/10 hover:bg-red-500/20"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <span className="px-2 py-1 text-xs rounded-full bg-white/10">
            {product.type}
          </span>
        </div>
        <p className="text-xl font-bold">${product.price}</p>
        <p className="text-sm text-white/60 line-clamp-2">{product.description}</p>
        <p className="text-sm text-white/40">
          Added {new Date(product.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;