import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const events = [
    {
        id: 1,
        title: 'React Fundamentals Workshop',
        date: 'April 15, 2026',
        time: '18:30 - 20:30 GMT',
        type: 'Workshop',
        icon: '⚛️',
        attendees: 342,
        description: 'New to React? Join us for a hands-on workshop covering the core concepts of React and modern web development.',
        status: 'Upcoming',
        color: 'from-blue-500 to-blue-400'
    },
    {
        id: 2,
        title: 'Community Hackathon: AI Tools',
        date: 'April 20, 2026',
        time: '10:00 - 18:00 GMT',
        type: 'Hackathon',
        icon: '🤖',
        attendees: 156,
        description: 'Collaborate with fellow developers to build innovative tools using the latest AI models and APIs.',
        status: 'Open',
        color: 'from-accent to-purple-400'
    },
    {
        id: 3,
        title: 'Web Dev Networking Meetup',
        date: 'April 22, 2026',
        time: '19:00 - 21:00 GMT',
        type: 'Meetup',
        icon: '🤝',
        attendees: 478,
        description: 'Connect with developers worldwide, share your experiences, and discover new opportunities in the tech industry.',
        status: 'Open',
        color: 'from-green-400 to-emerald-500'
    },
    {
        id: 4,
        title: 'Advanced Tailwind UI Design',
        date: 'April 25, 2026',
        time: '17:00 - 19:00 GMT',
        type: 'Technical Session',
        icon: '🎨',
        attendees: 212,
        description: 'Master the art of creating premium, high-performance UIs using only Tailwind CSS utility classes.',
        status: 'Upcoming',
        color: 'from-blue-400 to-accent'
    },
    {
        id: 5,
        title: 'Open Source Contribution Day',
        date: 'April 28, 2026',
        time: '12:00 - 16:00 GMT',
        type: 'Workshop',
        icon: '💻',
        attendees: 89,
        description: 'Learn how to contribute to major open-source projects and start your journey towards becoming a maintainer.',
        status: 'Upcoming',
        color: 'from-orange-400 to-orange-500'
    },
    {
        id: 6,
        title: 'The Future of JavaScript',
        date: 'May 02, 2026',
        time: '18:00 - 20:00 GMT',
        type: 'Learning Event',
        icon: '🚀',
        attendees: 512,
        description: 'Exploring the upcoming features in ES2026 and the next-generation frameworks shaping the web.',
        status: 'Open',
        color: 'from-yellow-400 to-orange-500'
    }
]

export default function EventsPage() {
    const [filter, setFilter] = useState('All')
    
    const categories = ['All', 'Workshop', 'Meetup', 'Hackathon', 'Technical Session', 'Learning Event']
    
    const filteredEvents = filter === 'All' 
        ? events 
        : events.filter(e => e.type === filter)

    return (
        <div className="min-h-screen bg-[#030712] font-sans overflow-hidden">
            {/* Global Ambient Background */}
            <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0 pointer-events-none"></div>

            {/* Hero Section */}
            <section className="relative py-24 sm:py-32 md:py-48 z-10 overflow-hidden text-center">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] bg-accent/20 rounded-full mix-blend-screen filter blur-[150px] animate-pulse pointer-events-none"></div>
                    <div className="absolute bottom-0 left-1/4 w-[50vw] h-[50vw] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[150px] animate-pulse pointer-events-none" style={{ animationDelay: '3s' }}></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                        <span className="text-gray-300 font-bold uppercase tracking-[0.2em] text-xs">Community Calendar</span>
                    </div>
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
                        Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-accent">Events</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
                        Join expert-led workshops, community meetups, and technical sessions to accelerate your developer career.
                    </p>
                </div>
            </section>

            {/* Next Activity Highlights Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="mb-12">
                    <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4 tracking-tight">
                        <span className="relative flex h-4 w-4">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                        </span>
                        Happening Next
                    </h2>
                    
                    <div className="group relative bg-[#ffffff03] backdrop-blur-3xl rounded-[40px] p-8 sm:p-12 border border-white/5 shadow-2xl overflow-hidden hover:border-white/20 transition-all duration-700">
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-accent/20 via-blue-500/10 to-transparent rounded-full filter blur-[120px] -mr-40 -mt-20 group-hover:opacity-100 opacity-30 transition-all duration-700 pointer-events-none"></div>
                        
                        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                            <div className="lg:w-1/3 flex items-center justify-center">
                                <div className="relative">
                                    <div className="w-64 h-64 bg-white/5 border border-white/10 rounded-[50px] shadow-2xl flex items-center justify-center text-[120px] transform group-hover:rotate-12 group-hover:scale-105 group-hover:bg-accent/10 transition-all duration-700">
                                        ⚛️
                                    </div>
                                    <div className="absolute -top-6 -right-6 px-8 py-3 bg-red-500 text-white font-black uppercase tracking-widest rounded-full text-xs shadow-[0_0_20px_rgba(239,68,68,0.5)] transform group-hover:scale-110 transition-all animate-pulse">
                                        LIVE SOON
                                    </div>
                                </div>
                            </div>
                            
                            <div className="lg:w-2/3">
                                <span className="inline-block px-5 py-2 bg-blue-500/10 text-blue-400 font-black text-[10px] uppercase tracking-widest rounded-full mb-6 border border-blue-500/20">
                                    Featured Workshop
                                </span>
                                <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-accent transition-all duration-500">
                                    React Fundamentals Workshop
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                    <div className="flex items-center gap-5 p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-xl">📅</div>
                                        <div>
                                            <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mb-1">Date</p>
                                            <p className="text-lg font-black text-white">April 15, 2026</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5 p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-xl">⏰</div>
                                        <div>
                                            <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mb-1">Time</p>
                                            <p className="text-lg font-black text-white">18:30 - 20:30 GMT</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-accent via-purple-500 to-blue-600 text-white rounded-2xl font-black text-lg hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transform hover:scale-105 transition-all duration-300">
                                    Set Reminder 🔔
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter and Grid Section */}
                <div className="py-32 relative z-10 border-t border-white/5 bg-white/[0.01] rounded-[60px]">
                    <div className="flex flex-col items-center mb-20 text-center px-4">
                        <h2 className="text-4xl sm:text-5xl font-black text-white mb-10 tracking-tight">Explore Calendar</h2>
                        
                        <div className="flex flex-wrap justify-center gap-3 bg-white/5 backdrop-blur-xl p-3 rounded-[30px] border border-white/10 shadow-2xl max-w-full">
                            {categories.map((cat) => (
                                <button 
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-6 py-3 rounded-[20px] font-black text-xs uppercase tracking-widest transition-all duration-300 ${
                                        filter === cat 
                                            ? 'bg-gradient-to-r from-accent to-blue-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]' 
                                            : 'text-gray-400 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-12">
                        {filteredEvents.map((event) => (
                            <div 
                                key={event.id}
                                className="group bg-[#ffffff03] rounded-[40px] p-8 border border-white/5 hover:border-white/20 shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col"
                            >
                                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-10 rounded-full filter blur-[50px] transition-opacity duration-500 pointer-events-none`}></div>
                                
                                <div className="relative z-10 flex-grow">
                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center text-4xl text-white mb-8 shadow-xl transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500`}>
                                        {event.icon}
                                    </div>
                                    <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/5 text-gray-300 mb-6 border border-white/10 group-hover:border-white/20 transition-colors`}>
                                        {event.type}
                                    </span>
                                    <h3 className="text-2xl font-black text-white mb-6 leading-tight group-hover:text-blue-400 transition-colors">
                                        {event.title}
                                    </h3>
                                    <div className="space-y-4 text-gray-400 font-medium mb-10 text-sm">
                                        <div className="flex items-center gap-3">
                                            <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">📅</span> {event.date}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">⏰</span> {event.time}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-emerald-400">👥</span> <span className="text-emerald-400">{event.attendees} Registered</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative z-10 mt-auto">
                                    <button className="w-full py-4 text-white font-black text-sm uppercase tracking-widest border border-white/10 rounded-2xl hover:bg-white hover:text-[#030712] transition-colors duration-300">
                                        View Details
                                    </button>
                                </div>
                                <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${event.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Speaking CTA Section */}
            <section className="relative py-32 overflow-hidden z-10 border-t border-white/5 border-b">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-[#030712] to-blue-500/5"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl sm:text-6xl font-black text-white mb-8 tracking-tight">Submit Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Session</span></h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium">
                        "Share your knowledge with the community. We're always looking for new speakers and workshop leads."
                    </p>
                    <button className="px-10 py-5 bg-gradient-to-r from-accent to-blue-500 text-white rounded-2xl font-black text-lg hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transform hover:-translate-y-1 transition-all duration-500 inline-flex flex-row items-center gap-3">
                        Become a Speaker 🎙️
                    </button>
                </div>
            </section>
        </div>
    )
}
