import { useQueryClient, useQuery } from "@tanstack/react-query";
import getAllProducts from "../services/allProducts.js";
import { Card } from "antd";
import "../styles/ListOfProducts.css";

const { Meta } = Card;
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
      return products;
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
      <div className="list-of-products-container">
        <h1>List of Products</h1>
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
    </>
  );
}
