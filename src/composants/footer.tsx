
import Link from "next/link";
import { TiSocialFacebook, TiSocialLinkedin,TiSocialTwitter } from "react-icons/ti";



export default function Footer() {
    return(
        <footer className='border flex flex-col bg-black text-white  p-5 gap-4 '>
            <div className="md:flex md:justify-between grid grid-cols-2 gap-5 ">
                <section className='md:flex md:flex-col gap-5' >
                    <h1 className="text-2xl font-sans tracking-widest">A propos</h1>
                    <ul className='md:flex md:flex-col gap-2 text-sm font-serif tracking-widest'>
                        <li><Link href="#">Qui sommes-nous</Link></li>
                        <li><Link href="#">Mentions légales</Link></li>
                        <li><Link href="#">Confidentialité</Link></li>
                    </ul>
                </section>
                <section className='md:flex md:flex-col gap-5' >
                    <h1 className="text-2xl font-sans tracking-widest">Techniciens</h1>
                    <ul className='md:flex md:flex-col gap-2 text-sm font-serif tracking-widest'>
                        <li><Link href="#">Electricien</Link></li>
                        <li><Link href="#">Réparateur</Link></li>
                        <li><Link href="#">Froid</Link></li>
                        <li><Link href="#">Mécanicien</Link></li>
                        <li><Link href="#">Maintenancier</Link></li>
                        <li><Link href="#">Jardinier</Link></li>
                    </ul>
                </section>
                <section className='md:flex md:flex-col gap-5' >
                    <h1 className="text-2xl font-sans tracking-widest">Assistance</h1>
                    <ul className='md:flex md:flex-col gap-2 text-sm font-serif tracking-widest'>
                        <li><Link href="#">Centre aide</Link></li>
                        <li><Link href="#">Contact</Link></li>
                    </ul>
                </section>
                <section className='md:flex md:flex-col gap-5' >
                    <h1 className="text-2xl font-sans tracking-widest">Suivez-nous</h1>
                    <ul className='flex  gap-3 text-xl font-serif tracking-widest'>
                        <li><Link href="#"><TiSocialFacebook/></Link></li>
                        <li><Link href="#"><TiSocialTwitter/></Link></li>
                        <li><Link href="#"><TiSocialLinkedin/></Link></li>
                    </ul>
                </section>
            </div>
            <div className=' border-white border-t-1 text-center  font-serif text-sm tracking-wider pt-2 '>
                © 2025,NzoniZo. Tout droit réservé
            </div>
        </footer>
    )
}