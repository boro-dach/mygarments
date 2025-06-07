import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import React from "react";
import { CategoryProps } from "../model/CategoryProps";
import DeleteCategoryButton from "@/features/delete-category/ui/delete-category-button";

interface ExtendedCategoryProps extends CategoryProps {
  id: string;
}

const Category = ({ id, title, amount, count }: ExtendedCategoryProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">{title}</CardTitle>
        <div className="flex items-center gap-2">
          <DeleteCategoryButton categoryId={id} />
        </div>
      </CardHeader>
      <CardContent className="text-base">
        <p>Сумма: {amount}$</p>
        <p>Вещей: {count}</p>
      </CardContent>
    </Card>
  );
};

export default Category;
