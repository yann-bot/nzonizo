import { NextResponse } from 'next/server';
import {prisma} from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req: Request){
    try {
        const body = await req.json();
        console.log("📥 Body reçu:", body);

        const {username, password} = body;
        if(!username || !password ) {
             console.error("❌ Champs manquants");
             return new Response(JSON.stringify({ error: "Champs obligatoires manquants" }),{ status: 400 } );
        }
        
        console.log("🔐 Mot de passe hashé");

        const utilisateur = await prisma.utilisateur.findFirst({
        where: {
            OR: [ { email: username }, { nom: username},],
         },
        });

    if (!utilisateur) {
      return NextResponse.json(
        { error: "Utilisateur introuvable" },
        { status: 404 }
      );
    }

    // Vérification du mot de passe
    const passwordValide = await bcrypt.compare(
      password,
      utilisateur.password_hash // champ dans ta DB
    );

    if (!passwordValide) {
      return NextResponse.json(
        { error: "Mot de passe incorrect" },
        { status: 401 }
      );
    }

    // Authentification réussie → tu peux générer un token JWT ou une session
        const token = jwt.sign({
            id: utilisateur.id,
            email: utilisateur.email,
            role:utilisateur.role,
        },
            process.env.JWT_SECRET_KEY as string ,
            { expiresIn: '1h' }
        )
    return NextResponse.json({
      message: "Connexion réussie",
      utilisateur: {
        nom: utilisateur.nom,
        email: utilisateur.email,
      }, token })



    } catch(err: unknown) {
         if(err instanceof Error) {
                console.error("🔥 Erreur serveur API connexion 1:", err.message);
         } else {
              console.error("🔥 Erreur serveur API connexion:", err);
         }

       return NextResponse.json({err:"Erreur interne du serveur"}, {status:501})
   }


}
