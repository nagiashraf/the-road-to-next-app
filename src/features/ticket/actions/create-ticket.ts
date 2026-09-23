// To avoid the error: "Functions cannot be passed directly to Client Components
// unless you explicitly expose it by marking it with "use server"."
"use server";

import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";
import { revalidatePath } from "next/cache";

// This function will be running on the server.
export const createTicket = async (formData: FormData) => {
  const data = {
    title: formData.get("title"),
    content: formData.get("content"),
  };

  await prisma.ticket.create({ 
    data: {
      title: data.title as string,
      content: data.content as string,
    }
  });

  // Revalidate the Next.js default cache and re-fetch the data to update the tickets
  // page UI (where the form is rendered) with the new ticket without reloading the page.
  revalidatePath(ticketsPath());
}