import React from 'react';
const ProductCard = () => {
  return (
    <div className="bg-[#1e1e1e] rounded-lg border border-white/10">
      <img src="https://images.unsplash.com/photo-1718644013409-b6097fe54a9f?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product" className="w-full h-48 object-cover rounded-lg mb-4" />
      <div className="p-5 gap-2 flex flex-col">
        <h3 className="text-lg font-semibold mb-2">Nombre del Producto</h3>
        <p className="text-xl font-bold">$12.99</p>
        <p className="text-gray-500 mb-4">Descripcion del producto.</p>

        <p>Añadido abr 14, 2025</p>
        <div className="flex gap-2">
          <button className="bg-[#1e1e1e] text-white py-2 px-4 border rounded-lg hover:bg-[#101010] transition-colors">
            Editar
          </button>
          <button className="bg-[#eb4645] text-white py-2 px-4 rounded-lg hover:bg-[#ff574a] transition-colors">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;