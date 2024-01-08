import { Link } from "react-router-dom";
import { useQueryClient, useQuery, useQueries } from "@tanstack/react-query";
import { getAllProductsByGender } from "../services/allGenderProducts";
import { capitalizeFirstLetter } from "../helpers/helpers";
import { Dropdown } from "antd";
import { useCategorys } from "../hooks/useCategorys.jsx";
import { useGroups } from "../hooks/useGroups.jsx";
import { menuItems } from "../mock/menuItems.js";
export function GenderMenu() {
  
  return (
    <div className="gender-menu-container">
      <ul className="gender-menu">
        {menuItems.genders.map((g) => (
          <Dropdown
            menu={{
              items: [
                {
                  key: 1,
                  label: (
                    <div className="dropdown-menu-item-container">
                      {menuItems.categories.map((c) => (
                        <Link
                          to={`/${Object.keys(
                            g
                          )[0].toLowerCase()}/${Object.values(
                            c
                          )[0].toLowerCase()}`}
                          key={Object.values(c)[0]}
                        >
                          {Object.values(c)[0].toUpperCase()}
                        </Link>
                      ))}
                    </div>
                  ),
                },
              ],
            }}
          >
            <li key={Object.keys(g)[0]} className="gender-menu-item-li">
              <Link to={`/${Object.keys(g)[0].toLowerCase()}`}>{Object.values(g)[0].toUpperCase()}</Link>
            </li>
          </Dropdown>
        ))}
        <span className="gender-menu-item-li">BRANDS</span>
      </ul>
    </div>
  );
}
