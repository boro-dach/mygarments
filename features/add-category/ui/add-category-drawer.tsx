"use client";
import { Button } from "@/shared/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/ui/drawer";
import { AddCategoryForm } from "./add-category-form";

interface AddCategoryDrawerProps {
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function AddCategoryDrawer({
  trigger,
  open,
  onOpenChange,
}: AddCategoryDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="font-bold text-xl">
              Добавить категорию
            </DrawerTitle>
            <DrawerDescription>
              Создайте новую категорию для ваших вещей
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <AddCategoryForm onSuccess={() => onOpenChange?.(false)} />
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Отмена</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
