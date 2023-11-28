import { getAllCategorys } from "../services/allCategorys";
import { useQuery } from "@tanstack/react-query";

export function useCategorys(){

    const { isPending: isCategorysPending, isError: isCategorysError, data: categorys } = useQuery({
        queryKey: ["categorys"],
        queryFn: async () => {
          return await getAllCategorys();
        },
      })
    
      if (isCategorysPending) {
        return <span>Loading...</span>;
      }
    
      if (isCategorysError) {
        return <span>Error: {error.message}</span>;
      }
    
      return{
        isCategorysPending,
        isCategorysError,
        categorys
      }
}