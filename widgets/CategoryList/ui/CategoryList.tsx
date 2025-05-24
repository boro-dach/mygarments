"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/entities/category/api/getCategories";
import Category from "@/entities/category/ui/Category";
import AddCategoryButton from "@/features/add-category/ui/add-category-button";

interface CategoryData {
  id: string | number;
  title: string;
  amount: number;
  count: number;
}

const CategoryList = () => {
  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useQuery<CategoryData[], Error>({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: true,
  });

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <h3 className="font-bold text-xl">Категории:</h3>
          <AddCategoryButton />
        </div>
        <p>Загрузка категорий...</p>
      </div>
    );
  }

  if (isError) {
    console.error("Ошибка загрузки категорий:", error);
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <h3 className="font-bold text-xl">Категории:</h3>
          <AddCategoryButton />
        </div>
        <p>
          Ошибка загрузки категорий: {error?.message || "Неизвестная ошибка"}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <h3 className="font-bold text-xl">Категории:</h3>
        <AddCategoryButton />
      </div>
      <div className="flex flex-col gap-2">
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <Category
              key={category.id}
              title={category.title}
              amount={category.amount}
              count={category.count}
            />
          ))
        ) : (
          <p>Нет доступных категорий.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
