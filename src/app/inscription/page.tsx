
"use client"





import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";



export default function RegisterForm() {

  return (
    <div className=" flex items-center justify-center w-full h-screen bg-black/30">


      {/* Formulaire */}
      <form className="flex flex-col gap-3  container max-w-md text-black px-6 py-6 shadow-2xl rounded-2xl z-50 bg-white">
        <h2 className="text-xl text-black font-bold mb-4 self-center">Inscrivez-vous</h2>

        <section className="flex flex-col gap-2">
          <input type="text" id="fullname" placeholder="Nom complet" className="p-4 rounded-2xl bg-gray-200"/>
          <input  type="email"  id="email"  placeholder="Email"  className="p-4 rounded-2xl bg-gray-200"/>
          <input type="password"  id="password"  placeholder="Mot de passe"  className="p-4 rounded-2xl bg-gray-200"/>
          <input type="password"  id="confirm-password"  placeholder="Confirmer le mot de passe"  className="p-4 rounded-2xl bg-gray-200" />

          <button type="submit" className="bg-orange-500 text-white font-bold p-4 rounded-2xl hover:bg-orange-600">
            Créer un compte
          </button>
        </section>

        {/* Séparateur */}
        <div className="text-center text-gray-500 mt-2">ou</div>
        {/* Connexion via Google / téléphone */}
        <section className="flex flex-col gap-2">
          <button type="button" className="bg-gray-300 flex items-center justify-center p-4 rounded-2xl hover:bg-gray-400">
            <FcGoogle className="w-6 h-6 mr-3" />
            <span>Inscription avec Google</span>
          </button>
          <button type="button" className="bg-gray-300 flex items-center justify-center p-4 rounded-2xl hover:bg-gray-400">
            <FaPhoneAlt className="w-5 h-5 mr-3" />
            <span>Inscription avec Numéro</span>
          </button>
        </section>

        {/* Lien vers connexion */}
        <section className="flex flex-col items-center mt-4">
          <p>Vous avez déjà un compte ?</p>
          <Link href="/connexion" className="text-blue-500 underline">
            Connectez-vous
          </Link>
        </section>
      </form>
    </div>
  );
}
