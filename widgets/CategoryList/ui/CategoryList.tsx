import Category from "@/entities/category/ui/Category";
import AddCategoryButton from "@/features/add-category/ui/AddCategoryButton";
import React from "react";

const CategoryList = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <h3 className="font-bold text-xl">Категории:</h3>
        <AddCategoryButton />
      </div>
      <div className="flex flex-col gap-2">
        <Category title="Склад" amount={23405} count={46} />
        <Category title="Продано" amount={23405} count={46} />
      </div>
    </div>
  );
};

export default CategoryList;
