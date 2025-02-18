import React from 'react'
import logoStarWars2 from '../assets/LogoStarWars2.png'
import darthvader from '../assets/darthvader.png'
import { motion } from 'framer-motion'

const Main = () => {
    return (
    <main className="flex justify-center mt-26 md:mt-6 sm:mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2">
        {/*Descripción */}
        <div className="p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36">
            <img src={logoStarWars2} alt="logo imperial" className="w-[150px] mx-auto" />
            <p className="py-12 text-white">
            Únete al Imperio Galáctico y conviértete en un Stormtrooper, la fuerza de élite que mantiene el orden en la galaxia. Protege la paz, impone la justicia y sirve al Emperador con honor. Serás parte de la maquinaria más poderosa, recibirás entrenamiento avanzado y enfrentarás misiones en los rincones más emblemáticos del universo. ¡El destino de la galaxia necesita tu lealtad!
            </p>
            <div className="flex justify-center gap-4">
            <a href="#" className="bg-yellow-600 py-2 px-12 rounded-3xl text-white hover:bg-yellow-700 transition-all duration-300 flex items-center cursor-pointer">Únete ahora</a>
            </div>
        </div>
        {/*Imagen */}
        <div className="p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36 mt-[-100px]">
        <motion.img
        src={darthvader}
        alt="Darth Vader"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
        </div>
        </div>
    </main>
    )
}

export default Main