import React, { useEffect, useRef } from "react";
import getAllGroupProducts from "../services/allGroupProducts";
import { useQuery } from "@tanstack/react-query";
export const useGroupProducts = ({ group, gender, setFilters }) => {
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

  const allGroupProductsByGender = allGroupProducts?.filter((product) => {
    return product.gender.some((productGender) => productGender.toLowerCase() === gender);
  });

  //setear filters con el resultado de la query. De forma que cuando se añadan filtros, filtramos a partir de estos resultados.
  //creo una referencia para evitar que se renderize de forma infinita. Ya que la query es una promesa que pasa de  isPending a isError o data.

  const allGroupProductsByGenderRef = useRef(allGroupProductsByGender);
  
  useEffect(() => {
    allGroupProductsByGenderRef.current = allGroupProductsByGender;
    setFilters((prev) => ({
      ...prev,
      products: allGroupProductsByGenderRef.current,
    }));
    console.log('valor de allGroupProductsByGender ', allGroupProductsByGender);
  }, [allGroupProducts]);



  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return { isPending, isError, allGroupProductsByGender};
};
