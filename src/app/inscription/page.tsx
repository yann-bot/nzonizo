"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import {useRouter} from "next/navigation";
import {validate, FormErrors} from '@/app/utils/validation'; 

export default function RegisterForm() {
  // States des champs
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //Les autres etats
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();


    
  // Gestion de la soumission
 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(fullname, email, phone, password, confirmPassword);
    setErrors(validationErrors);

    const hasErrors = Object.values(validationErrors).some((v) => v !== undefined);
    if (!hasErrors) {
      setIsSubmitting(true);
     

      const postObject = {
        method: "POST",
        headers: {"Content-type": "Application/json"},
        body: JSON.stringify({fullname, email, phone, password}),
      };

     try {
          const res = await fetch("/api/auth", postObject )
          if(res.ok) {
              alert("Inscription réussie ✅")
              // Reset du formulaire
              setFullname("")
              setEmail("")
              setPhone("")
              setPassword("")
              setConfirmPassword("")
              setErrors({})
             
              router.push("/")

         } else {
          const errorText = await res.text()
          alert(errorText)
         }
       } catch(err){
         console.error("Erreur Prisma:", err);
         alert("erreur lors de l'inscritption")


        } finally {
         setIsSubmitting(false);

     }
 
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black/30">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 container max-w-md text-black px-6 py-6 shadow-2xl rounded-2xl z-50 bg-white"
      >
        <h2 className="text-xl text-black font-bold mb-4 self-center">Inscrivez-vous</h2>

        <section className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Nom complet"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className={`p-4 rounded-2xl bg-gray-200 ${errors.fullname ? "border-red-500 border" : ""}`}
          />
          {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`p-4 rounded-2xl bg-gray-200 ${errors.email ? "border-red-500 border" : ""}`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <input
            type="tel"
            placeholder="Numéro de téléphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`p-4 rounded-2xl bg-gray-200 ${errors.phone ? "border-red-500 border" : ""}`}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`p-4 rounded-2xl bg-gray-200 ${errors.password ? "border-red-500 border" : ""}`}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`p-4 rounded-2xl bg-gray-200 ${errors.confirmPassword ? "border-red-500 border" : ""}`}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}

          <button
            type="submit"
            className="bg-orange-500 text-white font-bold p-4 rounded-2xl hover:bg-orange-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "En cours d'envoi..." : "Créer un compte"}
          </button>
        </section>

        <div className="text-center text-gray-500 mt-2">ou</div>

        <section className="flex flex-col gap-2">
          <button
            type="button"
            className="bg-gray-300 flex items-center justify-center p-4 rounded-2xl hover:bg-gray-400"
          >
            <FcGoogle className="w-6 h-6 mr-3" />
            <span>Inscription avec Google</span>
          </button>
          <button
            type="button"
            className="bg-gray-300 flex items-center justify-center p-4 rounded-2xl hover:bg-gray-400"
          >
            <FaPhoneAlt className="w-5 h-5 mr-3" />
            <span>Inscription avec Numéro</span>
          </button>
        </section>

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
