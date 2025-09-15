
import Card from "@/ui/technicienCard";
import Technicien from "@/data/techniciensData";


const technicien = Technicien;



export default function TechnicienGrille() {
    return(
        <div className="flex flex-col items-center justify-between">
            <h2 className="text-3xl font-bold mb-6">Techniciens qualifiés à votre écoute</h2>
            <div className="grid  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 mt-5 gap-10 ">
                {technicien.map((technicien, index) => (
                    <Card  key={index}
                           id = {technicien.id}
                           nom={technicien.nom}
                           avis={34}
                           adresse={technicien.adresse}
                           specialite={technicien.specialite}
                           photo={technicien.photo}
                           sousSpecialite={technicien.sousSpecialites}
                           note={technicien.note}
                           localisation={technicien.localisation}
                    />
                ))
                }
            </div>
        </div>
    )
}