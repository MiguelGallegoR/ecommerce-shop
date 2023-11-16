import { useParams } from "react-router-dom";
import { CategoryBreadcrumb } from "../components/Category-Breadcrumb";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { Card } from "antd";
import { getRandomProducts } from "../helpers/helpers.js";
import getAllProductsByGender from "../services/allGenderProducts.js";
const { Meta } = Card;
export function Gender() {
  const { gender } = useParams();
  const queryClient = useQueryClient();

  //3. hago mi query
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["products", gender],
    queryFn: async () => {
      const productsWithGroups = await getAllProductsByGender(gender);
      const {allProducts, groups} = productsWithGroups
      console.log('all products: ', allProducts)
      console.log('all groups: ', groups)
      if (!productsWithGroups) {
        return [];
      }
      const randomProducts = getRandomProducts(allProducts, 10);
      return randomProducts;
    },
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div>

      <h1>Some {gender} products</h1>
      <div className="list-of-products-container">
        <ul className="list-of-products">
          {data.map((product) => (
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
