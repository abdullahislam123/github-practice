import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        { name: 'Home', path: '/' },
    ]

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent rounded-lg flex items-center justify-center text-white font-bold text-lg">
                            C
                        </div>
                        <span className="text-xl font-bold text-gray-900 hidden sm:inline">Codrithm</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-700 hover:text-primary-600"
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden pb-4 space-y-2">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}
