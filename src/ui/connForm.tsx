

import Link from "next/link";
import { FaX } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";

type FormProps = {
    setShow: (value: boolean) => void;
};

export default function Form({ setShow }: FormProps) {
    return (
        <div className=" text-black fixed my-3 top-30 left-1/2 -translate-x-1/2 z-50 px-4 shadow-2xl rounded-2xl container flex flex-col w-fit bg-white">
            <div className="">
                <button onClick={() => setShow(false)} className="p-2 pt-6 text-black">
                    <FaX />
                </button>
            </div>

            <form className="flex flex-col w-100 gap-3 m-15 mt-20 mb-20">
                <h2 className="text-xl text-black font-bold mb-4 self-center">Connectez-vous</h2>
                <section className="flex flex-col gap-2">
                    <input
                        type="texte"
                        id="email"
                        placeholder="User name"
                        className="p-4 rounded-2xl bg-gray-200"
                    />
                     <input
                        type="password"
                        id="usename"
                        placeholder="Password"
                        className="p-4 rounded-2xl bg-gray-200"
                    />
                    <button type="submit" className="bg-orange-500  p-4 rounded-2xl">
                        Connexion
                    </button>
                </section>
                <div className="text-center">ou</div>
                <section className="flex flex-col gap-2">
                    <button type="button" className="bg-gray-300 flex items-center p-4 rounded-2xl">
                        <FcGoogle className="w-10 mr-15" />
                        <span className="">Connexion avec Google</span>
                    </button>
                    <button type="button" className="bg-gray-300  flex items-center p-4 rounded-2xl">
                        <FaPhoneAlt className="w-10 mr-15" />
                        <span>Connexion avec Numéro</span>
                    </button>
                </section>
                <section className="flex flex-col items-center mt-4">
                    <p>Vous n&#39;avez pas encore de compte ?</p>
                    <Link href="#" className="text-blue-500 underline">
                        Inscrivez-vous
                    </Link>
                </section>
            </form>
        </div>
    );
}
