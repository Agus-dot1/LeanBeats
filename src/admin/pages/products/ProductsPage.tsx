import { Plus } from 'lucide-react';
import ProductGrid from './components/ProductGrid';
import AddDialog from './components/AddDialog';
import React from 'react';

const ProductsPage = () => {
  const [open, setOpen] = React.useState(false);
  
  return (
    <div className="grid grid-cols-1 font-medium grid-row-2 gap-5">
    <header className="flex flex-row justify-between p-8 bg-[#444444] border border-white/10 rounded-lg">
      <h1 className="text-5xl ">Productos</h1>
      <button
        onClick={() => setOpen(true)}
        type="button"
       className="flex text-2xl flex-row py-2 px-20 gap-2 items-center bg-[#1e1e1e] rounded-lg hover:bg-[#101010] transition-colors">
        <Plus size={28} />
        Agregar
      </button>
      <AddDialog open={open} onClose={() => setOpen(false)} />
    </header>
    <main className="p-8 bg-[#444444] border border-white/10 rounded-lg gap-5 flex flex-col">
      <h2 className="text-2xl">Lista de productos</h2>
      <ProductGrid />
    </main>

    </div>
  )
}

export default ProductsPage;