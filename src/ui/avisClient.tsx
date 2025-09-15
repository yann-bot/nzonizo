





import { FaStar } from "react-icons/fa";
import React from "react";

const data = [
    {
        name: "Yann Dubois Ouafete",
        NombreEtoile: 5,
        textAvis : "J'ai trouvé un technicien incroyable en quelques minutes. Il a résolu mon problème d'ordinateur rapidement et professionnellement. Je recommande vivement NzoniZo"
    },
    {
        name: "Mbeti Archange",
        NombreEtoile: 5,
        textAvis : "Mon climatiseur est tombé en panne et j'ai pu trouver un réparateur qualifié très rapidement. Prix raisonnable et travail de qualité. Je n'hésiterai pas à utiliser NzoniZo à nouveau."
    },
    {
        name: "Robert Kete",
        NombreEtoile: 5,
        textAvis : "Grâce à  NzoniZo j'ai pu trouver un frigoriste qualifié pour réparer mon compresseur"
    }
]




export default  function AvisClient() {
     return (
         <div className=" flex flex-col  items-center justify-between ">
             <h2  className="text-3xl font-bold  text-black mb-6">Ce que nos clients pensent</h2>
             <p className="  flex  justify-center w-full   text-lg text-black  ">
                 <span className="p-10">Découvrez les expériences de ceux qui ont utilisé NzoniZo pour leurs besoins techniques</span>
             </p>
            <div className=" grid  grid-cols-1 md:grid-cols-3 gap-2 m-10">
                     {
                         data.map((data, index) => (
                             <div key={index} className="border border-b-orange-500 border-r-orange-500 border-t-gray-300 border-l-gray-300 rounded-md flex flex-col gap-4 h-full p-3">
                                 <div className="flex text-yellow-400 items-center gap-1">
                                     <FaStar />
                                     <span className="text-black">{data.NombreEtoile}</span>
                                 </div>

                                 <div className="font-serif text-black tracking-wide">&#34;{data.textAvis}&#34;</div>

                                 <div className="mt-auto font-bold text-black">{data.name}</div>
                             </div>

                         ))
                     }
            </div>
         </div>
     )
}