import { Button } from "@/shared/ui/button";
import { Plus } from "lucide-react";
import React from "react";

const AddCategoryButton = () => {
  return (
    <Button variant="secondary" className="w-6 h-6">
      <Plus />
    </Button>
  );
};

export default AddCategoryButton;
