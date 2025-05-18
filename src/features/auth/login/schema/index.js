import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Email is not valid" }),
  password: z.string().nonempty({ message: "Password is required" }),
});
