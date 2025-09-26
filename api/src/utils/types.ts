import { z } from "zod";

export const contactApiZodObj = z
  .object({
    name: z.string().min(1, "Name is required").max(100),
    email: z.string().optional(),
    telegram: z.string().optional(),
    twitter: z.string().optional(),
    otherSocial: z.string().optional(),
    message: z.string().min(1, "Message is required").max(1000),
  })
  .refine(
    (data) => data.email || data.telegram || data.twitter || data.otherSocial,
    {
      message:
        "At least one contact method - email, telegram, twitter, or other social, is required",
      path: ["email"],
    },
  );
