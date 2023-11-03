
import { categories } from "../mock/categories.js";
export function CategoryMenu() {
    return (
        <div className="category-menu-container">
            <ul className="category-menu">
               {categories.map((category) => (
                   <li key={category.id}>{category.name}</li>
               ))}
            </ul>
        </div>
    )
}