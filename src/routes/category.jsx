import React from "react";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { Card, Divider } from "antd";
import { useParams, Link } from "react-router-dom";
import { getAllProductsByGender } from "../services/allGenderProducts";
import { capitalizeFirstLetter, getRandomProducts } from "../helpers/helpers";
import "../styles/Category.css";

const { Meta } = Card;

function Category() {
  const { gender, category } = useParams();
  const queryClient = useQueryClient();

  //3. hago mi query
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["categoryGroups", gender],
    queryFn: async () => {
      const productsWithGroups = await getAllProductsByGender(gender);
      const { allProducts, groupsByCategory } = productsWithGroups;
      if (!productsWithGroups) {
        return [];
      }

      const categoryProducts = allProducts.filter(
        (product) => product.category[0] === category
      );
      const randomProducts = getRandomProducts(categoryProducts, 5);

      const caterogyGrops = groupsByCategory.filter(
        (group) => group.category === category
      );
      return { caterogyGrops, randomProducts };
    },
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }


  const { caterogyGrops, randomProducts } = data;
  return (
    <div>
      <ul className="category-list-of-groups">
        {caterogyGrops[0].groups.map((group) => (
          <Card size="small" key={group} hoverable={true} className="group-card">
            <Link
              to={`/${gender}/${category}/${group}`}
              className="category-list-of-groups-link"
            >
              <h3 className="category-list-of-groups-title">
                {group.toUpperCase()}
              </h3>
            </Link>
          </Card>
        ))}
      </ul>

      <h2 className="list-of-products-title" style={{ marginBottom: "1.5em" }}>
        Some of our {capitalizeFirstLetter(gender)}{" "}
        {capitalizeFirstLetter(category)} products
      </h2>
      
      <ul className="list-of-products">
        {randomProducts.map((product) => (
          <li key={product._id} className="product">
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
              <Meta title={product.name} description={`${product.price}€`} />
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
