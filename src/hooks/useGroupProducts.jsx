import React, { useEffect, useRef } from "react";
import getAllGroupProducts from "../services/allGroupProducts";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
export const useGroupProducts = ({
  group,
  gender,
  price,
  size,
  discount,
  search,
  page,
}) => {
  const {
    status,
    data,
    error,
    isFetching,
    isPlaceholderData,
  } = useQuery({
    queryKey: ["groupProducts", group, page, price, size, discount],
    queryFn: async () => {
      return await getAllGroupProducts({
        group: group,
        price: price,
        size: size,
        discount: discount,
        page,
        gender: gender,
      });
    },
    placeholderData: keepPreviousData,
    enabled: search,
  });


  const allGroupProducts = data?.resultProducts
 
  const totalPages = data?.totalPages  


  return {
    status,
    error,
    isFetching,
    isPlaceholderData,
    allGroupProducts,
    totalPages
  };
};
