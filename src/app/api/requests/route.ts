import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const requestSchema = z.object({
  name: z.string().trim().min(2).max(120), phone: z.string().trim().min(7).max(24),
  email: z.union([z.string().trim().email().max(254), z.literal("")]).optional(),
  category: z.string().trim().min(2).max(120), title: z.string().trim().min(4).max(180),
  description: z.string().trim().min(15).max(5000), location: z.string().trim().min(2).max(240),
  budget: z.union([z.coerce.number().finite().nonnegative(), z.literal(""), z.undefined()]),
});

export async function POST(req: Request) {
  const parsed = requestSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Please check the required fields." }, { status: 400 });
  const data = parsed.data;
  try {
    const category = await prisma.serviceCategory.findFirst({ where: { OR: [{ name: data.category }, { nameNe: data.category }], active: true } });
    const record = await prisma.serviceRequest.create({ data: {
      reference: `GM-${Date.now().toString(36).toUpperCase()}`,
      title: data.title, description: data.description, phone: data.phone, email: data.email || null,
      district: data.location, location: data.location, categoryId: category?.id ?? null,
      budget: data.budget === "" || data.budget === undefined ? undefined : data.budget,
    }, select: { reference: true } });
    return NextResponse.json({ reference: record.reference }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Request service is not ready. Confirm DATABASE_URL and run migrations." }, { status: 503 });
  }
}
