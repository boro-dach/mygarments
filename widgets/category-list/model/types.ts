import { getCategories } from "@/entities/category/api/get-categories";
import { useQuery } from "@tanstack/react-query";
import { CategoryData } from "./category-data";

export const useCategories = () => {
  return useQuery<CategoryData[], Error>({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: true,
  });
};
