import React from "react";
import getAllProductsByGender from "../services/allGenderProducts";
import { getRandomProducts } from "../helpers/helpers";
import { useQuery } from "@tanstack/react-query";
export const useProducts = ({ gender, category }) => {
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

  if(category){
    const categoryProducts = allProducts?.filter(
      (product) => product.category[0] === category
    );
    const randomProducts = getRandomProducts(categoryProducts, 5);
  
    const caterogyGrops = groupsByCategory?.filter(
      (group) => group.category === category
    );
    return { caterogyGrops, randomProducts };
  }
 

  return { isPending, isError, allGenderProducts: allProducts, groupsByCategory };
};
