import React, { useState } from 'react'

export default function Newsletter() {
    const [email, setEmail] = useState('')
    const [isSubscribed, setIsSubscribed] = useState(false)

    const handleSubscribe = (e) => {
        e.preventDefault()
        if (email) {
            setIsSubscribed(true)
            setEmail('')
            setTimeout(() => setIsSubscribed(false), 3000)
        }
    }

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-primary-700 shadow-2xl overflow-hidden relative">
                    {/* Background Decoration - Hidden on mobile */}
                    <div className="hidden sm:block absolute top-0 right-0 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-accent/10 rounded-full blur-3xl -mr-24 sm:-mr-28 md:-mr-32 -mt-24 sm:-mt-28 md:-mt-32 opacity-50"></div>
                    <div className="hidden sm:block absolute bottom-0 left-0 w-40 sm:w-48 h-40 sm:h-48 bg-primary-600/10 rounded-full blur-3xl -ml-20 sm:-ml-24 -mb-20 sm:-mb-24 opacity-50"></div>

                    <div className="relative z-10 max-w-full md:max-w-2xl w-full">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2 sm:mb-3 md:mb-4">
                            Stay Updated
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-primary-100 mb-4 sm:mb-6 md:mb-8 font-medium">
                            Get the latest news, events, and resources delivered to your inbox
                        </p>

                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 w-full">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full sm:flex-1 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-xs sm:text-sm md:text-base"
                            />
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-accent to-yellow-400 text-gray-900 rounded-lg font-bold text-xs sm:text-sm md:text-base hover:shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                            >
                                {isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
                            </button>
                        </form>

                        <p className="text-xs text-gray-300 mt-3 sm:mt-4">
                            ✓ No spam. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
