import {NextResponse} from  "next/server";
import {PrismaClient} from "@prisma/client";

const  prisma = new PrismaClient();

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url);
   
    //sinon, on retourne tous les techniciens
    const alltechniciens = await prisma.technicien.findMany({
        include: {utilisateur: true},
    });
    return NextResponse.json(alltechniciens);
}

