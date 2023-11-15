import { Link } from "react-router-dom";
export function GenderMenu() {
  const genders = {
    womens: "Women",
    mens: "Men",
    kids: "Kids",
  };
  return (
    <div className="gender-menu-container">
      <ul className="gender-menu">
        {Object.entries(genders).map(([key, value]) => (
          <li key={key} >
            <Link to={`/${key}`} className="gender-menu-item">{value}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
