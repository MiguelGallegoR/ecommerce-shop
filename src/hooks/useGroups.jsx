import React from "react";
import { getAllProductsByGender } from "../services/allGenderProducts";

import { useQueries } from "@tanstack/react-query";

export const useGroups = ({ genders }) => {
  //2. query para todos los grupos

  const groups = useQueries({
    queries: Object.entries(genders).map(([key]) => {
      return {
        queryKey: ["groups", key],
        queryFn: async () => {
          try {
            return await getAllProductsByGender(key);
          } catch (error) {
            console.error(`Error fetching data for gender ${key}:`, error);
            throw error; // Lanzar la excepción para que sea manejada por useQueries
          }
        },
      };
    }),
  });
 

  return { groups };
};
