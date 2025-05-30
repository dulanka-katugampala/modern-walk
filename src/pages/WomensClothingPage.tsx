import { Suspense } from "react";
import ProductGridLoading from "../components/common/ProductGridLoading";
import WomensClothing from "../components/categories/WomensClothing";
import { ProductCategories } from "../Enums";

const WomensClothingPage = () => {
  return (
    <section className="mx-auto px-4">
      <h2 className="text-section-title font-bold text-primary-black mb-10 capitalize">
        {ProductCategories.WomensClothing}
      </h2>
      <Suspense fallback={<ProductGridLoading />}>
        <WomensClothing />
      </Suspense>
    </section>
  );
};

export default WomensClothingPage;
