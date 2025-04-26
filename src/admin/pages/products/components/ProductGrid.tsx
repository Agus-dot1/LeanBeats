import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  return (
    <section className="grid grid-cols-4 gap-4 pt-2 border-t border-white/10">
      <ProductCard />
    </section>
      
  )
}

export default ProductGrid;