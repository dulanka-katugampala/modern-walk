import { Suspense } from "react";
import { ProductCategories } from "../Enums";
import RoutePaths from "../router/RoutePaths";
import CategoryCard from "../components/common/CategoryCard";
import FlashSale from "../components/homePage/FlashSale";
import ProductGridLoading from "../components/common/ProductGridLoading";

const Home = () => {
  return (
    <>
      {/* Flash Sale */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-section-title font-bold text-primary-black mb-8 capitalize">
          Flash Sale
        </h2>
        <Suspense fallback={<ProductGridLoading />}>
          <FlashSale />
        </Suspense>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4">
        <h2 className="text-section-title font-bold text-primary-black mb-8 capitalize">
          Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <CategoryCard
            link={RoutePaths.MensClothing}
            title={ProductCategories.MensClothing}
          />
          <CategoryCard
            link={RoutePaths.WomensClothing}
            title={ProductCategories.WomensClothing}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
