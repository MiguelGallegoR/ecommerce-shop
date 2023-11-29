import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { useGroupProducts } from "../hooks/useGroupProducts";
import { Card } from "antd";
const { Meta } = Card;
import "../styles/ListOfProducts.css";

export default function Group() {
  const queryClient = useQueryClient();

  const { gender, category, group } = useParams();
  //TODO:
  //todos los  productos por grupo
  //infiniti scroll
  //Componente Filters para ordenar por precio y talla
  const { isPending, isError, allGroupProducts } = useGroupProducts({ group });
  return (
    <div>
      <h1>
        {gender.toUpperCase()} {group.toUpperCase()}
      </h1>
      <div className="list-of-products-container">
        <ul className="list-of-products">
          {allGroupProducts?.map((product) => (
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
    </div>
  );
}
