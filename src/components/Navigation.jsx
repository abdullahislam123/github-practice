import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
    ]

    return (
        <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="w-11 h-11 bg-gradient-to-br from-primary-600 via-accent to-primary-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 transform group-hover:scale-110">
                            C
                        </div>
                        <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent hidden sm:inline">Codrithm</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-gray-700 hover:text-primary-600 font-semibold transition-colors duration-200 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button and Mobile Menu */}
                    <div className="flex items-center space-x-4">
                        <button className="hidden sm:block px-6 py-2.5 bg-gradient-to-r from-primary-600 to-accent text-white rounded-lg font-bold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            Get Started
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-2xl text-gray-700 hover:text-primary-600 transition-colors"
                        >
                            {isOpen ? '✕' : '☰'}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden pb-6 space-y-2 animate-in fade-in slide-in-from-top">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent/10 rounded-lg font-semibold transition-all duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="w-full px-4 py-3 bg-gradient-to-r from-primary-600 to-accent text-white rounded-lg font-bold text-sm hover:shadow-lg transition-all duration-300 mt-4">
                            Get Started
                        </button>
                    </div>
                )}
            </div>
        </nav>
    )
}
