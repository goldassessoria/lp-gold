
"use server";

import * as z from "zod";
import { db } from "@/lib/firebase/admin";

const formSchema = z.object({
  name: z.string().min(2),
  contact: z.string().min(10),
  pizzeriaName: z.string().min(2),
  monthlyInvestment: z.string(),
  monthlyRevenue: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export async function saveLead(data: FormData): Promise<{ success: boolean; error?: string }> {
    try {
        const validatedData = formSchema.parse(data);

        await db.collection("leads").add({
            ...validatedData,
            createdAt: new Date(),
        });
        
        return { success: true };
    } catch (error) {
        console.error("Error saving lead:", error);
        if (error instanceof z.ZodError) {
            return { success: false, error: "Dados inválidos." };
        }
        return { success: false, error: "Ocorreu um erro no servidor." };
    }
}
