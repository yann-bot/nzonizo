
import service from "@/data/service"
import Link from "next/link";

/**
 * Form component for searching services by location and service type
 *
 * @returns {JSX.Element} A form component with a select input for service type and a text input for location
 */
export default function Form() {
  return (
    <div className="border-5 rounded-3xl">
      <form className="flex flex-col gap-2 border-5 pl-2  pr-2 rounded-3xl  border-white  md:gap-0 md:flex-row bg-white text-black w-full md:w-auto">
      <select className="w-full p-2 md:w-1/2   rounded-l-2xl text-xl">
        {service.map((service, index) => (
          <option key={index} value={service.nom}>
            {service.nom}
          </option>
        ))}
      </select>
      <input
        type="search"
        placeholder="Ville ou quartier"
        className=" p-2 w-full md:w-1/2 text-xl text-gray-500 pl-2"
      />
      <Link href="/recherche" className="w-full md:w-auto">
           <button className="w-full md:w-auto border p-2 bg-orange-500 text-white rounded-xl hover:bg-orange-700">
                   Rechercher
             </button>
      </Link>
    </form>

    </div>
   
  );
}
