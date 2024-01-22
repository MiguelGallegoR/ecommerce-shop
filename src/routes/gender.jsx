import { CategoryBreadcrumb } from "../components/Category-Breadcrumb";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { Card } from "antd";
import { getRandomProducts } from "../helpers/helpers.js";
import getAllProductsByGender from "../services/allGenderProducts.js";
const { Meta } = Card;
import { useParams, Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts.jsx";
import {menuItems} from "../mock/menuItems.js";
export function Gender() {
  const { gender } = useParams();
  const queryClient = useQueryClient();


  const { isPending, isError, allGenderProducts } = useProducts({ gender: gender });
  const randomGenderProducts = getRandomProducts(allGenderProducts, 6);

  return (
    <div>
      <ul className="category-list-of-groups">
        {menuItems.categories.map((category) => (
          <Card
            size="small"
            key={crypto.randomUUID()}
            hoverable={true}
            className="group-card"
          >
            <Link
              to={`/${gender}/${Object.keys(category)[0]}`}
              className="category-list-of-groups-link"
            >
              <h3 className="category-list-of-groups-title">
                {Object.values(category)[0].toUpperCase()}
              </h3>
            </Link>
          </Card>
        ))}
      </ul>
      <h1 className="list-of-products-title">Some {gender} products</h1>
      <div className="list-of-products-container">
        <ul className="list-of-products">
          { randomGenderProducts ? randomGenderProducts?.map((product) => (
            <li key={product._id} className="product">
              <Link to={`/products/${product._id}`} className="product-link">
                <Card
                  hoverable
                  className="product-card"
                  cover={
                    <img
                      alt="example"
                      src={`${import.meta.env.VITE_URL_PREFIX}${product.photo}`}
                      className="product-image"
                    />
                  }
                >
                  <Meta
                    title={product.name}
                    description={`${product.price}€`}
                  />
                </Card>
              </Link>
            </li>
          )) : isPending }
        </ul>
      </div>
    </div>
  );
}
