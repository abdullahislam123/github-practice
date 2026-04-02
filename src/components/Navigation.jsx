import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Team', path: '/team' },
        { name: 'Events', path: '/events' },
        { name: 'Resources', path: '/resources' },
    ]

    return (
        <nav className="bg-[#030712]/80 backdrop-blur-xl sticky top-0 z-50 border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center space-x-3 group perspective-1000">
                        <div className="w-11 h-11 relative overflow-hidden rounded-xl flex items-center justify-center border border-white/10 group-hover:border-accent/50 transition-colors duration-500 shadow-lg group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-accent to-purple-600 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500"></div>
                            <span className="relative z-10 text-white font-black text-xl drop-shadow-md">C</span>
                        </div>
                        <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 hidden sm:inline tracking-tight group-hover:to-purple-400 transition-colors duration-300">
                            Codrithm
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-gray-400 hover:text-white font-bold tracking-wide text-sm transition-colors duration-300 relative group uppercase"
                            >
                                {link.name}
                                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-accent to-blue-500 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.8)]"></span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button and Mobile Menu Toggle */}
                    <div className="flex items-center space-x-4">
                        <Link 
                            to="/join" 
                            className="hidden sm:inline-flex relative group overflow-hidden px-6 py-2.5 rounded-xl font-black text-sm text-white shadow-[0_5px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_5px_25px_rgba(139,92,246,0.5)] transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-accent to-purple-600 transition-transform duration-500 group-hover:scale-110"></div>
                            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                            <span className="relative z-10 drop-shadow-md uppercase tracking-wider">Join Now</span>
                        </Link>
                        
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-2xl text-gray-300 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? '✕' : '☰'}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Dropdown */}
                <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                    <div className="space-y-2 mt-4">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="block px-5 py-4 text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link 
                            to="/join" 
                            onClick={() => setIsOpen(false)} 
                            className="block text-center w-full px-5 py-4 bg-gradient-to-r from-primary-600 to-accent text-white rounded-xl font-black uppercase tracking-widest text-sm hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 mt-6 border border-white/10"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
