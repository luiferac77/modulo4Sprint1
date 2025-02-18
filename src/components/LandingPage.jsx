import React from 'react'
import fondo from '../assets/Fondo-starWars.webp'
import NavBar from './NavBar'
import Main from './Main'
import Footer from './Footer'

const LandingPage = () => {
    return (
        <div className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${fondo})` }}>
            {/* Navbar */}
            <NavBar />
            {/* Main */}
            <Main />
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default LandingPage