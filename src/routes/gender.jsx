import { CategoryBreadcrumb } from "../components/Category-Breadcrumb";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { Card } from "antd";
import { getRandomProducts } from "../helpers/helpers.js";
import getAllProductsByGender from "../services/allGenderProducts.js";
import { useCategorys } from "../hooks/useCategorys.jsx";
const { Meta } = Card;
import { useParams, Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts.jsx";
export function Gender() {
  const { gender } = useParams();
  const queryClient = useQueryClient();

  // //3. hago mi query
  // const { isPending, isError, data, error } = useQuery({
  //   queryKey: ["products", gender],
  //   queryFn: async () => {
  //     const productsWithGroups = await getAllProductsByGender(gender);
  //     const { allProducts, groups } = productsWithGroups;
  //     if (!productsWithGroups) {
  //       return [];
  //     }
  //     const randomProducts = getRandomProducts(allProducts, 10);
  //     return randomProducts;
  //   },
  // });

  const { isCategorysPending, isCategorysError, categorys } = useCategorys();
  const { isPending, isError, allProducts } = useProducts({ gender });
  const randomProducts = getRandomProducts(allProducts, 10);
  return (
    <div>
      <ul className="category-list-of-groups">
        {categorys?.map((category) => (
          <Card
            size="small"
            key={category}
            hoverable={true}
            className="group-card"
          >
            <Link
              to={`/${gender}/${category}`}
              className="category-list-of-groups-link"
            >
              <h3 className="category-list-of-groups-title">
                {category.toUpperCase()}
              </h3>
            </Link>
          </Card>
        ))}
      </ul>
      <h1 className="list-of-products-title">Some {gender} products</h1>
      <div className="list-of-products-container">
        <ul className="list-of-products">
          {randomProducts?.map((product) => (
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
    </div>
  );
}
