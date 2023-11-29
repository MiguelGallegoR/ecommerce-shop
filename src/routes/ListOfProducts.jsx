import { useQueryClient, useQuery } from "@tanstack/react-query";
import getAllProducts from "../services/allProducts.js";
import { Card } from "antd";
import "../styles/ListOfProducts.css";
import { getRandomProducts } from "../helpers/helpers.js";
const { Meta } = Card;
import { Link } from "react-router-dom";

export default function ListOfProducts() {
  //2. uso el query cliente
  const queryClient = useQueryClient();

  //3. hago mi query
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const products = await getAllProducts();
      if (!products) {
        return [];
      }
      const randomProducts = getRandomProducts(products, 10);
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
    <>
      <h1 className="list-of-products-title">Some of our products:</h1>

      <div className="list-of-products-container">
        <ul className="list-of-products">
          {data.map((product) => (
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
          ))}
        </ul>
      </div>
    </>
  );
}
