
"use client";

import Link from "next/link";
import { FaX } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";

type FormProps = {
  setShow: (value: boolean) => void;
};

export default function Form({ setShow }: FormProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 text-black relative">
        {/* Bouton fermer */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-black p-2"
        >
          <FaX />
        </button>

        {/* Formulaire */}
        <form className="flex flex-col gap-3">
          <h2 className="text-xl text-black font-bold mb-4 self-center">
            Connectez-vous
          </h2>

          <section className="flex flex-col gap-2">
            <input
              type="text"
              id="email"
              placeholder="User name"
              className="p-4 rounded-2xl bg-gray-200 w-full"
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="p-4 rounded-2xl bg-gray-200 w-full"
            />
            <button
              type="submit"
              className="bg-orange-500 p-4 rounded-2xl text-white font-bold hover:bg-orange-600 w-full"
            >
              Connexion
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
