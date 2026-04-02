import React from 'react'
import { Link } from 'react-router-dom'
import Newsletter from './Newsletter'

export default function Footer() {
    return (
        <footer className="bg-[#010308] border-t border-white/5 pt-20 relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full filter blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Newsletter Section - Integrated cleanly */}
                <div className="mb-24">
                    <Newsletter />
                </div>
                
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link flex="true" to="/" className="flex items-center space-x-3 mb-6 group inline-flex">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">
                                C
                            </div>
                            <span className="text-2xl font-black text-white tracking-tight">Codrithm</span>
                        </Link>
                        <p className="text-gray-500 font-medium leading-relaxed max-w-xs">
                            Learn, Build, and Grow Together. Join the elite community of ambitious developers building amazing projects.
                        </p>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Navigation</h4>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Events', 'Resources', 'Team'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(' us', '')}`} className="text-gray-400 hover:text-white transition-colors duration-300 font-medium flex items-center group">
                                        <span className="w-0 h-px bg-accent mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Community Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Community</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Discord', icon: '💬' },
                                { name: 'WhatsApp', icon: '📱' },
                                { name: 'GitHub', icon: '💻' },
                                { name: 'Twitter', icon: '🐦' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium flex items-center gap-3 group">
                                        <span className="opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">{item.icon}</span>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Connect</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group">
                                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">✉️</span>
                                <span className="font-medium">hello@codrithm.com</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group">
                                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">🔗</span>
                                <span className="font-medium">LinkedIn</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm font-medium">
                        © 2026 <span className="text-white font-bold">Codrithm</span>. All rights reserved. <br className="md:hidden" />
                        <span className="hidden md:inline"> | </span> Made with <span className="text-red-500 animate-pulse inline-block">❤️</span> for developers
                    </p>
                    <div className="flex space-x-6 text-sm font-medium">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
