import { Card, CardContent, CardHeader } from "@/shared/ui/card";
import React from "react";
import { CategoryProps } from "../model/CategoryProps";

const Category = ({ title, amount, count }: CategoryProps) => {
  return (
    <Card>
      <CardHeader className="font-bold text-lg">{title}</CardHeader>
      <CardContent className="text-base">
        <p>Сумма: {amount}$</p>
        <p>Вещей: {count}</p>
      </CardContent>
    </Card>
  );
};

export default Category;
