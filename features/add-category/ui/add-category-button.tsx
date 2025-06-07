"use client";

import { Button } from "@/shared/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { AddCategoryDrawer } from "./add-category-drawer";

const AddCategoryButton = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <AddCategoryDrawer
      open={open}
      onOpenChange={setOpen}
      trigger={
        <Button variant="secondary" className="w-6 h-6">
          <Plus />
        </Button>
      }
    />
  );
};

export default AddCategoryButton;
