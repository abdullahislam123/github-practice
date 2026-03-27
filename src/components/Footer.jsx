import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300 mt-20 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Newsletter Section */}
                <div className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl p-10 mb-16 border border-primary-700">
                    <div className="max-w-2xl">
                        <h3 className="text-3xl font-black text-white mb-4">Stay Updated</h3>
                        <p className="text-primary-100 mb-6 text-lg">Get the latest news, events, and resources delivered to your inbox</p>
                        <div className="flex gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
                            />
                            <button className="px-8 py-3 bg-gradient-to-r from-accent to-yellow-400 text-gray-900 rounded-lg font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent rounded-lg flex items-center justify-center text-white font-black text-lg">
                                C
                            </div>
                            <span className="text-2xl font-black text-white">Codrithm</span>
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed font-medium">
                            Learn, Build, and Grow Together. Join the community of 5000+ developers learning and building amazing projects.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-black mb-6 text-lg">Quick Links</h3>
                        <ul className="space-y-3 text-base">
                            <li><a href="/" className="text-gray-400 hover:text-accent font-semibold transition-colors duration-200">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-accent font-semibold transition-colors duration-200">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-accent font-semibold transition-colors duration-200">Events</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-accent font-semibold transition-colors duration-200">Resources</a></li>
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h3 className="text-white font-black mb-6 text-lg">Community</h3>
                        <ul className="space-y-3 text-base">
                            <li><a href="#" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 font-semibold transition-colors duration-200">💬 Discord</a></li>
                            <li><a href="#" className="flex items-center gap-2 text-gray-400 hover:text-green-400 font-semibold transition-colors duration-200">💬 WhatsApp</a></li>
                            <li><a href="#" className="flex items-center gap-2 text-gray-400 hover:text-gray-300 font-semibold transition-colors duration-200">💻 GitHub</a></li>
                            <li><a href="#" className="flex items-center gap-2 text-gray-400 hover:text-blue-300 font-semibold transition-colors duration-200">🐦 Twitter</a></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-white font-black mb-6 text-lg">Connect</h3>
                        <div className="flex flex-col gap-3">
                            <a href="#" className="inline-flex items-center gap-3 text-gray-400 hover:text-accent font-semibold transition-colors duration-200">
                                <span className="text-2xl">✉️</span> Email
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-gray-400 hover:text-gray-300 font-semibold transition-colors duration-200">
                                <span className="text-2xl">💻</span> GitHub
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-gray-400 hover:text-blue-400 font-semibold transition-colors duration-200">
                                <span className="text-2xl">🔗</span> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 my-8"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm font-semibold">
                        &copy; {currentYear} <span className="font-black text-white">Codrithm</span>. All rights reserved. | Made with ❤️ for developers
                    </p>
                    <div className="flex gap-8 text-sm">
                        <a href="#" className="text-gray-500 hover:text-accent font-semibold transition-colors duration-200">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-accent font-semibold transition-colors duration-200">Terms of Service</a>
                        <a href="#" className="text-gray-500 hover:text-accent font-semibold transition-colors duration-200">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
