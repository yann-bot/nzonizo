import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📥 Body reçu:", body);

    const { fullname, email, phone, password } = body;

    if (!fullname || !email || !phone || !password) {
      console.error("❌ Champs manquants");
      return new Response(
        JSON.stringify({ error: "Champs obligatoires manquants" }),
        { status: 400 }
      );
    }

    const password_hash = await bcrypt.hash(password, 10);

    console.log("🔐 Mot de passe hashé");

    const utilisateur = await prisma.utilisateur.create({
      data: {
        nom:fullname,
        email,
        telephone:phone,  
        password_hash,
        role: "CLIENT", 
      },
    });

    console.log("✅ Utilisateur créé:", utilisateur);

  return new Response(JSON.stringify(utilisateur), { status: 201 });
   } catch (err: unknown) {
      if (err instanceof Error) {
      console.error("🔥 Erreur serveur API inscription:", err.message);
    } 
    else {
      console.error("🔥 Erreur serveur API inscription:", err);
    }

    return new Response( JSON.stringify({ error: "Erreur interne du serveur" }),{ status: 500 } );
  }
}
