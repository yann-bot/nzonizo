
import SearchForm from '@/ui/formRecherche'
import Link from "next/link"
import ServicesCarousel from '@/ui/serviceCarousel'

export default function Hero(){
    return(
        <div className=" flex lg:flex flex-col gap-2 justify-center items-center bg-orange-50 rounded-b-[50px] border-b border-gray-400 p-5">
            <div className=" lg:flex flex-col gap-2 justify-center items-center ">
                <h1 className="text-3xl mt-15 font-mono font-bold text-black " >Trouver des technciens qualifies et fiable  pour tous vos travaux</h1>
                  <p className="text-2xl mt-5 lg:flex flex-col items-center font-serif justify-center text-gray-500"> <span>Des milliers de techniciens sont prêts à  intervenir pour</span> <span>répondre à vos besoins</span>  </p>
            </div>
            <div className="md:mt-10 w-full md:w-2/3 flex flex-col md:flex-row gap-2 justify-center">
            <SearchForm  />
            <Link href="/Recherche" className="w-full md:w-auto">
                <button className="w-full md:w-auto border p-2 bg-orange-500 text-white hover:bg-orange-700">
                Rechercher
                </button>
            </Link>
            </div>
             <div className=" rounded-2xl w-2/3 mt-10 ">
                    <ServicesCarousel />
            </div>
        </div>
    )
}