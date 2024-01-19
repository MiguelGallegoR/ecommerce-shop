import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useGroupProducts } from "../hooks/useGroupProducts";
import { Card } from "antd";
const { Meta } = Card;
import "../styles/ListOfProducts.css";
import { Filters } from "../components/Filters";
import FilteredListOfProducts from "../components/FilteredListOfProducts";

export default function Group() {
  const queryClient = useQueryClient();
  const [filters, setFilters] = useState({
    active: false,
    size: null,
    price: null,
    discount: null,
    searchWasMade: false,
    products: [],
  });
  const { gender, group } = useParams();

  return (
    <div>
      <div>
        <h1>
          {gender.toUpperCase()} {group.toUpperCase()}
        </h1>
        <h2>{filters.products?.length}</h2>
      </div>


      <FilteredListOfProducts filters={filters} setFilters={setFilters} />
      
    </div>
  );
}
