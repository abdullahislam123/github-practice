import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-gray-300 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-accent rounded-lg flex items-center justify-center text-white font-bold">
                                C
                            </div>
                            <span className="text-lg font-bold text-white">Codrithm</span>
                        </div>
                        <p className="text-sm text-gray-400">
                            Learn, Build, and Grow Together
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/" className="hover:text-primary-400 transition">Home</a></li>
                            <li><a href="/about" className="hover:text-primary-400 transition">About</a></li>
                            <li><a href="/events" className="hover:text-primary-400 transition">Events</a></li>
                            <li><a href="/resources" className="hover:text-primary-400 transition">Resources</a></li>
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Community</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="flex items-center gap-2 hover:text-primary-400 transition">💬 Discord</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-primary-400 transition">💬 WhatsApp</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-primary-400 transition">💻 GitHub</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-primary-400 transition">🐦 Twitter</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-6 text-2xl">
                            <a href="#" className="hover:scale-125 transition transform hover:text-blue-400" title="Email">
                                ✉️
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition transform hover:text-gray-300" title="GitHub">
                                💻
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition transform hover:text-blue-500" title="LinkedIn">
                                🔗
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition transform hover:text-blue-400" title="Twitter">
                                🐦
                            </a>
                            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition transform hover:text-green-400" title="WhatsApp">
                                💬
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-400">
                            &copy; {currentYear} Codrithm. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
                            <a href="#" className="hover:text-primary-400 transition">Privacy Policy</a>
                            <a href="#" className="hover:text-primary-400 transition">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
