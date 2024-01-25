import React, { useEffect, useRef } from "react";
import getAllGroupProducts from "../services/allGroupProducts";
import { useInfiniteQuery } from "@tanstack/react-query";
export const useGroupProducts = ({
  group,
  gender,
  setFilters,
  price,
  size,
  discount,
  search,
  
}) => {
  //query fn recibe un parametro que es un objeto. En el hay varias propiedades, entre ellas pageParam.
  //cuando llamamos a nuestra funcion con el fetch se le pasa esa propiedad y el otro parametro como un objeto.
  //Y dentro de la funcion del fetch se desestructura con el nombre de las propiedasd que ya sabemos para poder acceder a esos valores
  const {
    isPending,
    isError,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["groupProducts", group],
    queryFn: async ({ pageParam }) => {
      return await getAllGroupProducts({
        group: group,
        pageParam,
        price: price,
        size: size,
        discount: discount,
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.nextCursor;
    },
    enabled: search
    
  });

  
  const allGroupProducts = data?.pages?.flatMap((page) => page.products);

  const allGroupProductsByGender = allGroupProducts?.filter((product) => {
    return product.gender.some(
      (productGender) => productGender.toLowerCase() === gender
    );
  });

  // //setear filters con el resultado de la query. De forma que cuando se añadan filtros, filtramos a partir de estos resultados.
  // //creo una referencia para evitar que se renderize de forma infinita. Ya que la query es una promesa que pasa de  isPending a isError o data.

  const allGroupProductsByGenderRef = useRef(allGroupProductsByGender);

  useEffect(() => {
    allGroupProductsByGenderRef.current = allGroupProductsByGender;
    setFilters((prev) => ({
      ...prev,
      products: allGroupProductsByGenderRef.current,
    }));
  }, [data]);

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return {
    isPending,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    allGroupProductsByGender,
  };
};
