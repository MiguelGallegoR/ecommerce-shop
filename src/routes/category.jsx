import React, { useEffect } from "react";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { Card, Divider } from "antd";
import { useParams, Link } from "react-router-dom";
import { getAllProductsByGender } from "../services/allGenderProducts";
import { capitalizeFirstLetter, getRandomProducts } from "../helpers/helpers";
import { useProducts } from "../hooks/useProducts.jsx";

import "../styles/Category.css";

const { Meta } = Card;

function Category() {
  const { gender, category } = useParams();
  const queryClient = useQueryClient();

  //3. hago mi query
  // const { isPending, isError, data, error } = useQuery({
  //   queryKey: ["categoryGroups", gender],
  //   queryFn: async () => {
  //     const productsWithGroups = await getAllProductsByGender(gender);
  //     const { allProducts, groupsByCategory } = productsWithGroups;
  //     if (!productsWithGroups) {
  //       return [];
  //     }

  //     const categoryProducts = allProducts.filter(
  //       (product) => product.category[0] === category
  //     );
  //     const randomProducts = getRandomProducts(categoryProducts, 5);

  //     const caterogyGrops = groupsByCategory.filter(
  //       (group) => group.category === category
  //     );
  //     return { caterogyGrops, randomProducts };
  //   },
  // });

  // if (isPending) {
  //   return <span>Loading...</span>;
  // }

  // if (isError) {
  //   return <span>Error: {error.message}</span>;
  // }

  // const { caterogyGrops, randomProducts } = data;

  const { isPending, isError, caterogyGrops, randomProducts } = useProducts({
    gender, category
  });
  // const categoryProducts = allProducts?.filter(
  //   (product) => product.category[0] === category
  // );
  // const randomProducts = getRandomProducts(categoryProducts, 5);

  // const caterogyGrops = groupsByCategory?.filter(
  //   (group) => group.category === category
  // );


  return (
    <div>
      <ul className="category-list-of-groups">
        {caterogyGrops ? caterogyGrops[0]?.groups.map((group) => (
          <Card
            size="small"
            key={group}
            hoverable={true}
            className="group-card"
          >
            <Link
              to={`/${gender}/${category}/${group}`}
              className="category-list-of-groups-link"
            >
              <h3 className="category-list-of-groups-title">
                {group.toUpperCase()}
              </h3>
            </Link>
          </Card>
        )): isPending}
      </ul>

      <h2 className="list-of-products-title" style={{ marginBottom: "1.5em" }}>
        Some of our {capitalizeFirstLetter(gender)}{" "}
        {capitalizeFirstLetter(category)} products
      </h2>

      <ul className="list-of-products">
        { randomProducts ? randomProducts?.map((product) => (
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
                <Meta title={product.name} description={`${product.price}€`} />
              </Card>
            </Link>
          </li>
        )) : isPending}
      </ul>
    </div>
  );
}

export default Category;
