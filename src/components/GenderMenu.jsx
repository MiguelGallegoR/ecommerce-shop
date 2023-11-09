import { Link } from "react-router-dom";
export function GenderMenu() {
  const genders = {
    women: "Women",
    men: "Men",
    kids: "Kids",
  };
  return (
    <div className="gender-menu-container">
      <ul className="gender-menu">
        {Object.entries(genders).map(([key, value]) => (
          <li key={key} >
            <Link to={`/gender/${key}`} className="gender-menu-item">{value}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
