import { addProduct } from "@/prisma-db";
import { revalidatePath } from "next/cache";

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, price, description } = body;

    if (!title || !price) {
      return new Response(JSON.stringify({ error: "Title and price are required" }), {
        headers: { "Content-Type": "application/json" },
        status: 400,
      });
    }

    const product = await addProduct(title, parseInt(price), description);
    revalidatePath("/products-db");
    return new Response(JSON.stringify(product), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error adding product:", error);
    return new Response(JSON.stringify({ error: "Failed to add product", details: error instanceof Error ? error.message : String(error) }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
