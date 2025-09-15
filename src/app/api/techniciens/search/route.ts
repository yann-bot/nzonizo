
import {NextResponse} from  "next/server";
import {PrismaClient} from "@prisma/client";




const prisma = new PrismaClient();

export async function GET(req: Request) {
     const {searchParams} = new URL(req.url)
     const specialite = searchParams.get("specialite");
        //retourner les techniciens par specialite si une specialite est passe en paramettre
        if(specialite) {
            const techniciens = await prisma.technicien.findMany({
                where: {
                    specialite: {
                        contains: specialite,
                        mode: "intensitive",
                    },
                    statut: true,
                },
                include: {utilisateur: true},
            });
            return NextResponse.json(techniciens)
        }
}
  