import { z } from "zod";

export const formSchema = z.object({
  login: z
    .string()
    .min(4, "Минимальная длинна логина 4 символа")
    .max(16, "Максимальная длинна логина 16 символов"),
  password: z.string().min(6, "Минимальная длинна пароля 6 символов"),
});
