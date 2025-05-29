import { Suspense } from "react";
import ProductGridLoading from "../components/common/ProductGridLoading";
import MensClothing from "../components/categories/MensClothing";
import { ProductCategories } from "../Enums";

const MensClothingPage = () => {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-section-title font-bold text-primary-black mb-8 capitalize">
        {ProductCategories.MensClothing}
      </h2>
      <Suspense fallback={<ProductGridLoading />}>
        <MensClothing />
      </Suspense>
    </section>
  );
};

export default MensClothingPage;
