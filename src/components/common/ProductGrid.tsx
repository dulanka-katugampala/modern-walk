import ProductCard from "./ProductCard";
import type { Product } from "../../types";

interface ProductsGridProps {
  data: Product[];
}

const ProductsGrid = ({ data }: ProductsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
      {data?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
