import CategoryList from "@/widgets/CategoryList/ui/CategoryList";
import WelcomeBanner from "@/widgets/WelcomeBanner/ui/WelcomeBanner";
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
