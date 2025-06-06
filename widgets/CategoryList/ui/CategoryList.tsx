"use client";
import { useCategories } from "@/entities/category/model/use-categories";
import Category from "@/entities/category/ui/Category";
import AddCategoryButton from "@/features/add-category/ui/add-category-button";
import React from "react";
import { toast } from "sonner";

const CategoryList = () => {
  const { data: categories, isLoading, error } = useCategories();

  if (error) {
    toast.error("Ошибка загрузки категорий");
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
        {categories?.map((category: any) => (
          <Category
            key={category.id}
            title={category.title}
            amount={category.amount}
            count={category.count}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
