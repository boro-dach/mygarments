"use client";

import { useDeleteCategory } from "@/entities/category/model/use-categories"; // <-- Укажите ваш правильный путь к хукам
import { Button } from "@/shared/ui/button";
import { Loader2, Trash } from "lucide-react";

interface DeleteCategoryButtonProps {
  categoryId: string;
}

const DeleteCategoryButton = ({ categoryId }: DeleteCategoryButtonProps) => {
  const { mutate, isPending } = useDeleteCategory();

  const handleDelete = () => {
    mutate(categoryId);
  };

  return (
    <Button
      className="w-8 h-8"
      variant="outline"
      size="icon"
      onClick={handleDelete}
      disabled={isPending}
    >
      {isPending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Trash className="h-4 w-4" />
      )}
    </Button>
  );
};

export default DeleteCategoryButton;
