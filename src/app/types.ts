import { formSchema } from "@/lib/formSchema";
import { z } from "zod";

export type FormSchema = z.infer<typeof formSchema>;
