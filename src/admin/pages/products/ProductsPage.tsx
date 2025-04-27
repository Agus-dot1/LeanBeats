import { Plus, Search, Filter, ArrowUpDown } from 'lucide-react';
import ProductGrid from './components/ProductGrid';
import AddDialog from './components/AddDialog';
import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../../../types/product';

const ProductsPage = () => {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filterOpen, setFilterOpen] = React.useState(false);
  
  const [products] = React.useState<Product[]>([
    {
      id: '1',
      title: 'Trap Soul Beat',
      price: 19.99,
      description: 'Melodic trap beat with soulful elements, perfect for modern R&B artists.',
      imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      type: 'beat',
      bpm: 145,
      key: 'Am',
      tags: ['trap', 'soul', 'r&b'],
      createdAt: new Date().toISOString()
    }
  ]);


  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 gap-6 p-6"
    >
      {/* Header Section */}
      <motion.header 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-[#2c2c2c] to-[#444444] rounded-2xl overflow-hidden shadow-xl"
      >
        <div className="px-8 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white md:text-5xl to-white/60">
                Productos
              </h1>
              <p className="mt-2 text-white/60">
                Gestiona tu catálogo de beats y packs de samples
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setOpen(true)}
              className="flex gap-2 items-center px-6 py-3 font-medium text-white rounded-xl transition-colors bg-primary-200 hover:bg-primary-300"
            >
              <Plus size={24} />
              Crear Producto
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      {/* Search and Filters Bar */}
      <div className="bg-[#2c2c2c] p-4 rounded-xl shadow-lg border border-white/5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#1e1e1e] rounded-lg border border-white/10 focus:outline-none focus:border-primary-200/50 transition-colors"
            />
          </div>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-[#1e1e1e] rounded-lg border border-white/10 hover:border-white/20 transition-colors"
            >
              <Filter size={18} />
              Filtros
            </motion.button>
            <select 
              className="px-4 py-2 bg-[#1e1e1e] rounded-lg border border-white/10 focus:outline-none focus:border-white/20 appearance-none cursor-pointer"
            >
              <option value="recent">Más recientes</option>
              <option value="name">Nombre</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <motion.main 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-[#2c2c2c] rounded-xl shadow-lg border border-white/5 overflow-hidden p-6"
      >
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-[400px] gap-4">
            <div className="w-10 h-10 rounded-full border-4 animate-spin border-primary-200/30 border-t-primary-200" />
            <p className="text-white/60">Cargando productos...</p>
          </div>
        ) : (
          <ProductGrid 
            products={products}
            onEdit={(product) => {
              console.log('Edit product:', product);
            }}
            onDelete={(productId) => {
              console.log('Delete product:', productId);
            }}
          />
        )}
      </motion.main>

      <AddDialog open={open} onClose={() => setOpen(false)} />
    </motion.div>
  );
};

export default ProductsPage;