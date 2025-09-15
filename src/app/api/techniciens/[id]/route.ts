import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  const technicien = await prisma.technicien.findUnique({
    where: { id },
    include: { utilisateur: true },
  });

  if (!technicien) {
    return NextResponse.json({ error: "Technicien non trouvé" }, { status: 404 });
  }

  return NextResponse.json(technicien);
}
