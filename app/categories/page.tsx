import CategoryList from "@/widgets/category-list/ui/category-list";
import WelcomeBanner from "@/widgets/welcome-banner/ui/welcome-banner";
import React from "react";

const Categories = () => {
  return (
    <div className="flex flex-col gap-4 mt-16">
      <WelcomeBanner username="Марк" />
      <CategoryList />
    </div>
  );
};

export default Categories;
