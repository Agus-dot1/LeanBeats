import React from 'react';
import { Product, ProductGridProps } from '../../../../types/product';


const ProductGrid: React.FC<ProductGridProps> = ({ products, onEdit, onDelete }) => {
  if (products.length === 0) {
    return (
      <div className="py-12 text-center text-white/60">
        No hay productos disponibles
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <div key={product.id} className="bg-[#1e1e1e] rounded-lg p-4">
          <img 
            src={product.imageUrl} 
            alt={product.title} 
            className="object-cover mb-4 w-full h-48 rounded-lg"
          />
          <h3 className="mb-2 text-lg font-semibold">{product.title}</h3>
          <p className="mb-4 text-sm text-white/60">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-primary-200">
              ${product.price}
            </span>
            <div className="flex gap-2">
              <button 
                onClick={() => onEdit(product)}
                className="px-3 py-1 rounded-lg transition-colors bg-white/10 hover:bg-white/20"
              >
                Editar
              </button>
              <button 
                onClick={() => onDelete(product.id)}
                className="px-3 py-1 text-red-500 rounded-lg transition-colors bg-red-500/10 hover:bg-red-500/20"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;