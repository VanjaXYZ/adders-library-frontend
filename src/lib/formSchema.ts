import * as z from "zod";

export const formSchema = z.object({
  username: z
    .string()
    .min(4, { message: "Username must contain at least 4 character(s)" })
    .max(50),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 character(s)" }),
});
