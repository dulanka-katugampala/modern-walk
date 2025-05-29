import { Link } from "react-router-dom";
import { ProductCategories } from "../../Enums";
import { useMemo } from "react";

interface CategoryCardProps {
  link: string;
  title: string;
}

const CategoryCard = ({ link, title }: CategoryCardProps) => {
  const cardStyles = useMemo(() => {
    switch (title) {
      case ProductCategories.MensClothing:
        return "bg-primary-green";

      case ProductCategories.WomensClothing:
        return "bg-primary-red";

      default:
        return "bg-white";
    }
  }, [title]);

  return (
    <>
      <article>
        <Link to={link}>
          <div
            className={`${cardStyles} rounded-5xl flex items-center justify-center aspect-2/1 transform hover:scale-102 transition-all duration-300 px-4 shadow-primary-card`}
          >
            <h3 className="text-main-header font-bold text-center text-white capitalize">{title}</h3>
          </div>
        </Link>
      </article>
    </>
  );
};
export default CategoryCard;
