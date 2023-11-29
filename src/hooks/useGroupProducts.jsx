import React from "react";
import getAllGroupProducts from "../services/allGroupProducts";
import { useQuery } from "@tanstack/react-query";
export const useGroupProducts = ({ group }) => {
  //3. hago mi query
  const {
    isPending,
    isError,
    data: allGroupProducts,
  } = useQuery({
    queryKey: ["groupProducts", group],
    queryFn: async () => {
      return await getAllGroupProducts(group);
    },
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return { isPending, isError, allGroupProducts };
};
