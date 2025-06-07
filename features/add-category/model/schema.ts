import { z } from "zod";

export const formSchema = z.object({
  title: z.string(),
});
