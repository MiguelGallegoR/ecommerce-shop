import React, { useEffect } from "react";
import getFilterProducts from "../services/filterProducts";
import { useQuery } from "@tanstack/react-query";
export const useFilterProducts = ({ group, price, size, discount, searchWasMade }) => {
  //3. hago mi query
  if(discount){
    discount=1
  }

  const {
    isFilterPending,
    isFilterError,
    data: allFilterProducts,
  } = useQuery({
    queryKey: ["filterProducts", group, price, size, discount],
    queryFn: async () => {
        if(searchWasMade){
            return await getFilterProducts({ group, price, size, discount });
        }
    },
  });

  if (isFilterPending) {
    return <span>Loading...</span>;
  }

  if (isFilterError) {
    return <span>Error: {error.message}</span>;
  }

  return { isFilterPending, isFilterError, allFilterProducts };
};
