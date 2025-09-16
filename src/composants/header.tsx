"use client"

import Link from 'next/link';
import {useState} from 'react'
import Form from '@/ui/connForm';
import { FaBars } from "react-icons/fa6";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [showForm, setShowForm] = useState(false)

    return (
        <div className='bg-orange-50 flex justify-between w-full p-5 lg:p-8 items-center'> 
            <Link href='#' className=' text-2xl text-orange-500 font-bold'>NzoniZo</Link>
            <div className=' hidden lg:flex gap-3 '>
                <Link href="/devenirTechnicien" className='md:text-xl text-black md:font-serif  border border-gray-300 p-3 hover:bg-orange-500 hover:text-white'>Devenir technicien</Link>
                <Link href="#"  onClick={() => setShowForm(true)} className='md:text-xl md:font-serif text-black  border border-gray-300 p-3 hover:bg-orange-500 hover:text-white'>Se connecter</Link>
            </div>

              {/* Formulaire de connexion qui s'affiche au clique*/}
            
                {
                showForm && (
                    <>
                        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={() => setShowForm(false)} />
                        <Form setShow={ setShowForm } />
                    </>

                )
              }

            {/* Navigation mobile */}
            <div className=' lg:hidden text-orange-500'>
                 <button onClick={() => setIsOpen(true)} ><FaBars  className='text-2xl '/></button>
                 {isOpen && (
                 <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
                        {/* Croix pour fermer */}
                        <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5 text-3xl text-gray-700 hover:text-red-500"> ✕</button>
                        {/* Liens */}
                        <nav className="flex flex-col gap-6 text-center">
                            <Link href="/devenirTechnicien" onClick={() => setIsOpen(false)}   className="text-2xl font-serif text-black border border-gray-300 px-6 py-3 hover:bg-orange-500 hover:text-white"> Devenir technicien</Link>
                            <Link href="/connexion" className="text-2xl font-serif text-black border border-gray-300 px-6 py-3 hover:bg-orange-500 hover:text-white">Se connecter </Link>
                        </nav>
                    </div>
                )}
            </div>

        </div>
    )
}
