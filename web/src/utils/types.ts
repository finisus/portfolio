import { z } from "zod";

export type Theme = "dark" | "light" | "system";

export const contactFormZodObj = z.object({
  name: z.string().min(1, "Please let me know what I should refer to you as."),
  email: z.string().optional(),
  telegram: z.string().optional(),
  twitter: z.string().optional(),
  otherSocial: z.string().optional(),
  message: z.string().min(1, "Please enter your message."),
});
export type ContactFormInput = z.infer<typeof contactFormZodObj>;
