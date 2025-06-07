"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAddCategory } from "@/entities/category/model/use-categories";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { formSchema } from "../model/schema";

interface AddCategoryFormProps {
  onSuccess?: () => void;
}

export function AddCategoryForm({ onSuccess }: AddCategoryFormProps) {
  const addCategory = useAddCategory();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await addCategory.mutateAsync(values);
      form.reset();
      onSuccess?.();
    } catch (error) {}
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название категории</FormLabel>
              <FormControl>
                <Input placeholder="Например: Склад" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={addCategory.isPending}
          className="w-full"
        >
          {addCategory.isPending ? "Добавление..." : "Добавить категорию"}
        </Button>
      </form>
    </Form>
  );
}
