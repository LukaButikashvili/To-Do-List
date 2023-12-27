import { z } from "zod";

export const listSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    details: z.string(),
    status: z.string(),
  })
);
