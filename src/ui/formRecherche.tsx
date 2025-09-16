
import service from "@/data/service"

/**
 * Form component for searching services by location and service type
 *
 * @returns {JSX.Element} A form component with a select input for service type and a text input for location
 */
export default function Form() {
  return (
    <form className="flex flex-col gap-2  md:gap-0 md:flex-row bg-white text-black w-full md:w-auto">
      <select className="w-full p-2 md:w-1/2 border border-gray-400 md:border-r-0">
        {service.map((service, index) => (
          <option key={index} value={service.nom}>
            {service.nom}
          </option>
        ))}
      </select>
      <input
        type="search"
        placeholder="Ville ou quartier"
        className=" p-2 w-full md:w-1/2 border border-gray-400 text-gray-500 pl-2"
      />
    </form>
  );
}
