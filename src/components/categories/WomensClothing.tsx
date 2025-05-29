import { useMemo } from "react";
import { ProductCategories } from "../../Enums";
import ProductsGrid from "../common/ProductGrid";
import { getAllProducts } from "../../api/service";
import { queryKeys } from "../../api/queryKeys";
import { useSuspenseQuery } from "@tanstack/react-query";

const WomensClothing = () => {
  const { data } = useSuspenseQuery({
    queryKey: [queryKeys.AllProducts],
    queryFn: getAllProducts,
  });

  // Since API response doesn't include timestamp, using ID for sorting
  // Assuming higher ID means more recent items
  const filteredData = useMemo(() => {
    return data
      ?.filter(
        (arrItem) =>
          arrItem.category === ProductCategories.WomensClothing
      )
      .sort((a, b) => b.id - a.id) || [];
  }, [data]);

  return (
    <>
      <ProductsGrid data={filteredData} />
    </>
  );
};

export default WomensClothing;
