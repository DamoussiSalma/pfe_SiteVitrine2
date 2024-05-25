import { categories } from "../data/Data";
import "../styles/Categories.scss"
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="category-list">
    {categories?.map((category, index) => (
      <div
        className={`category ${category.label === selectedCategory ? "selected" : ""}`}
        key={index}
        onClick={() => setSelectedCategory(category.label)}
      >
        <div className="category_icon">{category.icon}</div>
        <p>{category.label}</p>
      </div>
    ))}
  </div>
  );
};

export default Categories;