import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    const stats = [
        { value: '5000+', label: 'Active Members' },
        { value: '100+', label: 'Events Hosted' },
        { value: '250+', label: 'Learning Resources' },
        { value: '50+', label: 'Expert Mentors' },
    ]

    const features = [
        {
            icon: '🎓',
            title: 'Comprehensive Learning',
            description: 'Access tutorials, courses, and certifications designed for all skill levels'
        },
        {
            icon: '🤝',
            title: 'Community Support',
            description: 'Connect with thousands of developers and get help when you need it'
        },
        {
            icon: '📚',
            title: 'Quality Resources',
            description: 'Curated learning materials from industry experts and professionals'
        },
        {
            icon: '🚀',
            title: 'Career Growth',
            description: 'Land better opportunities and accelerate your developer career'
        },
    ]

    const upcomingEvents = [
        {
            title: 'React Fundamentals Workshop',
            date: 'April 15, 2026',
            attendees: 342,
            icon: '⚛️'
        },
        {
            title: 'Web Dev Networking Meetup',
            date: 'April 20, 2026',
            attendees: 156,
            icon: '🚀'
        },
        {
            title: 'AI Tools for Developers',
            date: 'April 22, 2026',
            attendees: 478,
            icon: '🤖'
        },
    ]

    return (
        <div className="min-h-screen bg-[#030712] font-sans overflow-hidden">
            {/* Global Ambient Background */}
            <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none z-0"></div>

            {/* Hero Section */}
            <section className="relative pt-24 sm:pt-32 md:pt-48 pb-24 sm:pb-32 md:pb-40">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-accent/20 rounded-full mix-blend-screen filter blur-[150px] animate-pulse pointer-events-none"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[150px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl max-w-3xl mb-16 relative">
                        <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            <span className="text-gray-300 font-bold uppercase tracking-[0.2em] text-xs">Welcome to the Developer Hub</span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter drop-shadow-2xl">
                            Learn, Build, <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-purple-400">Grow Together.</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-400 mb-12 font-medium leading-relaxed max-w-2xl">
                            The elite platform for developers to master new skills, collaborate on high-impact projects, and accelerate their careers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link to="/resources" className="group px-8 py-5 bg-gradient-to-r from-accent via-blue-500 to-purple-600 rounded-2xl font-black text-white text-lg shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                                Start Learning <span className="group-hover:translate-x-2 transition-transform">➜</span>
                            </Link>
                            <Link to="/join" className="group px-8 py-5 bg-[#ffffff05] border border-white/10 rounded-2xl font-black text-white text-lg backdrop-blur-md hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                                Join Community
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative z-20 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="group relative bg-[#ffffff03] backdrop-blur-xl rounded-[32px] p-10 border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-2 group-hover:from-accent group-hover:to-white transition-all duration-500">
                                        {stat.value}
                                    </p>
                                    <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-32 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Codrithm?</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
                            Everything you need to orchestrate your success in the tech industry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="group relative bg-[#ffffff03] backdrop-blur-xl rounded-[32px] p-10 border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_-20px_rgba(139,92,246,0.3)] overflow-hidden">
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent rounded-full filter blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mb-8 text-3xl group-hover:scale-110 transition-transform duration-500 shadow-lg">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-blue-400 transition-all duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 font-medium leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] bg-accent/10 rounded-full filter blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                                Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Sessions</span>
                            </h2>
                            <p className="text-xl text-gray-400 font-medium">
                                Join our premium technical workshops and level up your engineering skills.
                            </p>
                        </div>
                        <Link to="/events" className="group hidden md:inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all">
                            View Calendar <span className="group-hover:translate-x-1 transition-transform">➜</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className="group relative bg-[#ffffff03] backdrop-blur-xl rounded-[32px] p-8 border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div className="relative z-10 flex-grow">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-3xl group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500">
                                            {event.icon}
                                        </div>
                                        <div className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-bold text-gray-300 tracking-wider">
                                            UPCOMING
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-6 leading-snug group-hover:text-blue-400 transition-colors">
                                        {event.title}
                                    </h3>
                                </div>
                                <div className="relative z-10 mt-auto pt-6 border-t border-white/5">
                                    <div className="bg-[#030712]/50 rounded-xl p-4 flex justify-between items-center mb-6">
                                        <div>
                                            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Date</p>
                                            <p className="text-sm text-gray-300 font-bold">{event.date}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Registered</p>
                                            <p className="text-sm text-accent font-bold">{event.attendees}</p>
                                        </div>
                                    </div>
                                    <button className="w-full py-4 text-sm font-black uppercase tracking-widest text-white border border-white/10 rounded-xl group-hover:bg-white group-hover:text-[#030712] transition-colors duration-300">
                                        Reserve Spot
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center md:hidden mt-8">
                        <Link to="/events" className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all">
                            View Full Calendar ➜
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
