
import service from "@/data/service"

export default function Form() {
    return (
         <form className=" md:w-2/3 flex bg-white text-black">
                        <select className=" md:w-1/2 border border-gray-400 border-r-0">
                            {
                                service.map((service,  index)=>(
                                    <option key={index} value={service.nom}>{service.nom}</option>
                                    )
                                )
                            }
                        </select>
                      <input type='search' placeholder="Ville ou quartier " className='border border-gray-400 text-gray-500 flex md:w-1/2  pl-2' />
        </form>
    )
}