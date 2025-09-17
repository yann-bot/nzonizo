
"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

// Type pour les erreurs
type FormErrors = {
  fullname?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export default function RegisterForm() {
  // States des champs
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fonction de validation
  const validate = (fullname: string, email: string, password: string, confirmPassword: string): FormErrors => {
    const newErrors: FormErrors = {};

    if (!fullname.trim()) newErrors.fullname = "Le nom complet est requis";
    else if (fullname.length < 3) newErrors.fullname = "Le nom complet doit contenir au moins 3 caractères";

    if (!email.trim()) newErrors.email = "L’email est requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Email invalide";

    if (!password.trim()) newErrors.password = "Mot de passe requis";
    else if (password.length < 6) newErrors.password = "Le mot de passe doit contenir au moins 6 caractères";

    if (!confirmPassword.trim()) newErrors.confirmPassword = "Veuillez confirmer le mot de passe";
    else if (confirmPassword !== password) newErrors.confirmPassword = "Les mots de passe ne correspondent pas";

    return newErrors;
  };

  // Gestion de la soumission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(fullname, email, password, confirmPassword);
    setErrors(validationErrors);

    const hasErrors = Object.values(validationErrors).some((v) => v !== undefined);
    if (!hasErrors) {
      setIsSubmitting(true);

      // Simuler l'envoi backend (remplacer par fetch ou axios)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Inscription réussie ✅", { fullname, email, password });

      // Reset du formulaire
      setFullname("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrors({});
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black/30">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 container max-w-md text-black px-6 py-6 shadow-2xl rounded-2xl z-50 bg-white">
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
          <button type="button" className="bg-gray-300 flex items-center justify-center p-4 rounded-2xl hover:bg-gray-400">
            <FcGoogle className="w-6 h-6 mr-3" />
            <span>Inscription avec Google</span>
          </button>
          <button type="button" className="bg-gray-300 flex items-center justify-center p-4 rounded-2xl hover:bg-gray-400">
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
