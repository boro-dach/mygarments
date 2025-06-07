"use client";
import { useCategories } from "@/entities/category/model/use-categories";
import Category from "@/entities/category/ui/Category";
import AddCategoryButton from "@/features/add-category/ui/add-category-button";
import React from "react";

interface CategoryData {
  id: string;
  title: string;
  amount: number;
  count: number;
}

const CategoryList = () => {
  const { data: categories, isLoading, isError } = useCategories();

  if (isError) {
    return <div>Ошибка загрузки категорий. Пожалуйста, попробуйте позже.</div>;
  }

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <h3 className="font-bold text-xl">Категории:</h3>
        <AddCategoryButton />
      </div>
      <div className="flex flex-col gap-2">
        {categories?.map((category: CategoryData) => (
          <Category
            key={category.id}
            id={category.id}
            title={category.title}
            amount={category.amount}
            count={category.count}
          />
        ))}
        {categories?.length === 0 && <p>Категорий пока нет.</p>}
      </div>
    </div>
  );
};

export default CategoryList;
