import React from "react";
import { Filters } from "./Filters";
import { Link } from "react-router-dom";
import { Button, Card } from "antd";
const { Meta } = Card;

export default function FilteredListOfProducts({
  filters,
  setFilters,
  children,
}) {
  
  return (
    <div className="list-of-products-container">
      <Filters filters={filters} setFilters={setFilters}>
        <ul className="list-of-products">
          {filters.products?.length &&
            filters.products?.map((product) => (
              <li key={product._id} className="product">
                <Link to={`/products/${product._id}`} className="product-link">
                  <Card
                    hoverable
                    className="product-card"
                    cover={
                      <img
                        alt="example"
                        src={`${import.meta.env.VITE_URL_PREFIX}${
                          product.photo
                        }`}
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
      </Filters>
    </div>
  );
}
