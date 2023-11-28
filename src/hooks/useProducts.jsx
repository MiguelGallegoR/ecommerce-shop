import React from "react";
import getAllProductsByGender from "../services/allGenderProducts";
import { useQuery } from "@tanstack/react-query";
export const useProducts = ({ gender }) => {
  //3. hago mi query
  const { isPending, isError, data } = useQuery({
    queryKey: ["products", gender],
    queryFn: async () => {
      return await getAllProductsByGender(gender);
    },
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const { allProducts, groupsByCategory } = data;


  return { isPending, isError, allProducts, groupsByCategory };
};
