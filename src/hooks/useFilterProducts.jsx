import React, { useEffect } from "react";
import getFilterProducts from "../services/filterProducts";
import { useQuery } from "@tanstack/react-query";
export const useFilterProducts = ({ group, price, size, discount }) => {
  const { refetch, data: allFilterProducts } = useQuery({
    queryKey: [
      "filterProducts",
      group,
      price,
      size,
      discount
    ],
    queryFn: async () => {
      return await getFilterProducts( group, price, size, discount );
     
    },
    refetchOnWindowFocus: false,
    enabled: false, //disable the query:
    //this is how we keep it from running on component mount.
  });

  return {
    allFilterProducts,
    refetch,
  };
};
