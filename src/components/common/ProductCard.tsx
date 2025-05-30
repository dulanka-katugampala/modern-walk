import { useMemo } from "react";
import type { Product } from "../../types";
import { ProductCategories } from "../../Enums";

const ProductCard = ({ title, price, image, category, description }: Product) => {
  const cardStyles = useMemo(() => {
    switch (category) {
      case ProductCategories.MensClothing:
        return "bg-primary-green";

      case ProductCategories.WomensClothing:
        return "bg-primary-red";

      default:
        return 'bg-white';
    }
  }, [category]);

  return (
    <article className="bg-white rounded-primary shadow-primary-card overflow-hidden flex flex-col transform hover:scale-102 transition-all duration-300">
      <h3 className="text-product-title text-center font-bold text-primary-black mb-4 mt-7 mx-8">
        {title}
      </h3>
      <div className="flex-grow-1 py-5">
        <img src={image} alt={title} className="w-2/3 mx-auto h-full object-contain aspect-1/1" />
      </div>
      <div
        className={`px-10 py-4 text-center flex flex-col items-center justify-center rounded-primary min-h-32 ${cardStyles}`}
      >
        <span className="text-product-price font-bold text-primary-blue mb-3">${price}</span>
        <p className="text-product-description text-primary-black line-clamp-4 mb-2 break-all text-center">{description}</p>
      </div>
    </article>
  );
};

export default ProductCard;
