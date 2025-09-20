import { NextResponse } from 'next/server';
import {prisma} from '@/lib/prisma';
import bcrypt from 'bcryptjs';



export async function POST(req: Request){
    try {
        const body = await req.json();
        console.log("📥 Body reçu:", body);

        const {username, password} = body;
        if(!username || !password ) {
             console.error("❌ Champs manquants");
             return new Response(JSON.stringify({ error: "Champs obligatoires manquants" }),{ status: 400 } );
        }
        
        const password_hash = await bcrypt.hash(password, 10);
        console.log("🔐 Mot de passe hashé");

       async function Traitement(user: any) {
                 if (!user) {
                   return NextResponse.json({ error: "Utilisateur introuvable" }, { status: 404 })  
               }
                const passwordValide = await bcrypt.compare( password, user.password_hash);
                if (!passwordValide) {
                return NextResponse.json({ error: "Mot de passe incorrect" },{ status: 401 }); 
              }

               return NextResponse.json({
                message: "Connexion réussie",
                utilisateur: { nom: user.nom, email: user.email},
                });
        }    
   
        if(username.includes("@")){
                const utilisateur = await prisma.utilisateur.findUnique({where:{email: username}});
                Traitement(utilisateur);
            } else {
                const utilisateur =  await prisma.utilisateur.findFirst({where:{nom: username}})
                Traitement(utilisateur)
         }

     } catch(err:unknown) {
         if(err instanceof Error) {
                console.error("🔥 Erreur serveur API connexion 1:", err.message);
         } else {
              console.error("🔥 Erreur serveur API connexion:", err);
         }

       return NextResponse.json({err:"Erreur interne du serveur"}, {status:501})

    }

}



