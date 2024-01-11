import { Link } from "react-router-dom";
import { useQueryClient, useQuery, useQueries } from "@tanstack/react-query";
import { getAllProductsByGender } from "../services/allGenderProducts";
import { capitalizeFirstLetter } from "../helpers/helpers";
import { Dropdown } from "antd";
import { useCategorys } from "../hooks/useCategorys.jsx";
import { useGroups } from "../hooks/useGroups.jsx";
import { menuItems } from "../mock/menuItems.js";
export function GenderMenu() {
  const items = (g)=>{
     
   return menuItems.categories.map((c) => (
      {
      key: crypto.randomUUID(),
      label: (
        <Link
        to={`/${Object.keys(
          g
        )[0].toLowerCase()}/${Object.values(
          c
        )[0].toLowerCase()}`}
        key={crypto.randomUUID()}
      >
        {Object.values(c)[0].toUpperCase()}
      </Link>
      )
      
    }
    ))
  }
   
  
  return (
    <div className="gender-menu-container">
      <ul className="gender-menu">
        {menuItems.genders.map((g) => (
          <Dropdown
            menu={{
              items: items(g),
            }}
            key={crypto.randomUUID()}
          >
            <li key={crypto.randomUUID()} className="gender-menu-item-li">
              <Link to={`/${Object.keys(g)[0].toLowerCase()}`}>{Object.values(g)[0].toUpperCase()}</Link>
            </li>
          </Dropdown>
        ))}
        {/* <span className="gender-menu-item-li">BRANDS</span> */}
      </ul>
    </div>
  );
}
