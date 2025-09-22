"use client";

import Link from "next/link";
import React, { useState} from "react";
import { FcGoogle } from "react-icons/fc";
import { FaPhoneAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import {useRouter} from "next/navigation";
import {useAuth} from "@/context/authContext"
import { FormErrors} from '@/app/utils/validationConnexion';
import {handleSubmitCon} from "@/app/utils/handleSubmitCon";


export default function Form() {
  const [username , setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const router = useRouter();
  const {login} = useAuth();

  const handleSubmit =(e: React.FormEvent) =>  handleSubmitCon(
      e,
      username,
      password,
      setErrors,
      setIsSubmitting,
      (user, token) => {
          login(user, token);       // stocker le token + user
          setUserName("");          // reset champs
          setPassword("");
          setErrors({});
          alert("Succes")
          router.push("/");         // redirection
      }
  )



  
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 text-black relative">
        
        {/* Formulaire */}
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <h2 className="text-xl text-black font-bold mb-4 self-center">
            Connectez-vous
          </h2>

  
          <section className="flex flex-col gap-2">
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => {
                  setUserName(e.target.value);
                  // Effacer l'erreur quand l'utilisateur modifie le champ
                  if (errors.username) {
                    setErrors({ ...errors, username: undefined });
                  }
                }}
                id="username"
                name="username"
                placeholder="Non d'utilisateur/Email"
                className="p-4 rounded-2xl bg-gray-200 w-full border-transparent focus:border-orange-500 focus:ring-0"
                disabled={isSubmitting}
                aria-invalid={errors.username ? "true" : "false"}
                aria-describedby={errors.username ? "username-error" : undefined}
              />
              {errors.username && (
                <p id="username-error" className="text-red-500 text-sm mt-1" role="alert">
                  {errors.username}
                </p>
              )}
            </div>

            <div>
            
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    // Effacer l'erreur quand l'utilisateur modifie le champ
                    if (errors.password) {
                      setErrors({ ...errors, password: undefined });
                    }
                  }}
                  id="password"
                  name="password"
                  placeholder="Votre mot de passe"
                  className="p-4 rounded-2xl bg-gray-200 w-full border-transparent focus:border-orange-500 focus:ring-0 pr-12"
                  disabled={isSubmitting}
                  aria-invalid={errors.password ? "true" : "false"}
                  aria-describedby={errors.password ? "password-error" : undefined}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Masquer   le mot de passe" : "Afficher le mot de passe"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p id="password-error" className="text-red-500 text-sm mt-1" role="alert">
                  {errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-orange-500 p-4 rounded-2xl text-white font-bold hover:bg-orange-600 w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Connexion en cours...
                </>
              ) : (
                "Connexion"
              )}
            </button>
          </section>


          <div className="text-center text-gray-500 mt-2">ou</div>

          <section className="flex flex-col gap-2">
            <button
              type="button"
              className="bg-gray-300 flex items-center justify-center p-4 rounded-2xl hover:bg-gray-400 w-full"
            >
              <FcGoogle className="w-6 h-6 mr-3" />
              <span>Connexion avec Google</span>
            </button>
            <button
              type="button"
              className="bg-gray-300 flex items-center justify-center p-4 rounded-2xl hover:bg-gray-400 w-full"
            >
              <FaPhoneAlt className="w-5 h-5 mr-3" />
              <span>Connexion avec Numéro</span>
            </button>
          </section>

          <section className="flex flex-col items-center mt-4">
            <p>Vous n’avez pas encore de compte ?</p>
            <Link href="/inscription" className="text-blue-500 underline">
              Inscrivez-vous
            </Link>
          </section>
        </form>
      </div>
    </div>
  );
}
