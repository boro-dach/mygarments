"use client";
import { addCategory } from "../api/add-category";
import { getCategories } from "../api/get-categories";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
}

export function useAddCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.success("Категория успешно добавлена!");
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message || "Ошибка добавления категории";
      toast.error(message);
    },
  });
}
