import React, { useState } from 'react'
import Newsletter from '../components/Newsletter'

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
        color: 'from-blue-500 to-primary-600'
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
        color: 'from-green-500 to-primary-600'
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
        color: 'from-orange-400 to-pink-500'
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
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Hero Section */}
            <section className="relative pt-24 sm:pt-32 md:pt-40 pb-20 bg-primary-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <span className="inline-block px-8 py-3 bg-accent/20 border border-accent/40 rounded-full mb-10 transform hover:rotate-3 transition-transform cursor-default">
                            <span className="text-white font-black tracking-widest text-sm uppercase">Community Calendar</span>
                        </span>
                        <h1 className="text-5xl sm:text-7xl font-black text-white mb-8 tracking-tight drop-shadow-2xl">
                            Empower Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-accent">Growth Journey</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
                            Join our expert-led workshops, community meetups, and technical sessions to accelerate your developer career.
                        </p>
                    </div>
                </div>
            </section>

            {/* Next Activity Highlights Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-16">
                <div className="mb-12">
                    <h2 className="text-3xl font-black text-gray-900 mb-8 flex items-center gap-4">
                        <span className="w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
                        Happening Next
                    </h2>
                    
                    <div className="group relative bg-white/80 backdrop-blur-2xl rounded-[40px] p-8 sm:p-12 border border-white shadow-2xl overflow-hidden hover:shadow-accent/20 transition-all duration-700">
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-accent/20 via-blue-500/10 to-transparent rounded-full filter blur-[100px] -mr-40 -mt-20 group-hover:opacity-100 opacity-50 transition-all duration-700"></div>
                        
                        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                            <div className="lg:w-1/3 flex items-center justify-center">
                                <div className="relative">
                                    <div className="w-64 h-64 bg-gradient-to-br from-primary-900 to-accent rounded-[50px] shadow-2xl flex items-center justify-center text-[120px] transform group-hover:rotate-12 transition-transform duration-700">
                                        ⚛️
                                    </div>
                                    <div className="absolute -top-6 -right-6 px-10 py-4 bg-red-500 text-white font-black rounded-3xl text-xl shadow-xl transform group-hover:scale-110 transition-all">
                                        LIVE SOON
                                    </div>
                                </div>
                            </div>
                            
                            <div className="lg:w-2/3">
                                <span className="inline-block px-6 py-2 bg-primary-100 text-primary-600 font-black text-sm uppercase tracking-widest rounded-full mb-6">
                                    Featured Workshop
                                </span>
                                <h3 className="text-4xl sm:text-6xl font-black text-gray-900 mb-8 leading-tight group-hover:text-primary-600 transition-colors">
                                    React Fundamentals Workshop
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                                    <div className="flex items-center gap-5">
                                        <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl">📅</div>
                                        <div>
                                            <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">Date</p>
                                            <p className="text-xl font-black text-gray-900">April 15, 2026</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl">⏰</div>
                                        <div>
                                            <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">Time</p>
                                            <p className="text-xl font-black text-gray-900">18:30 - 20:30 GMT</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full sm:w-auto px-12 py-6 bg-gradient-to-r from-primary-600 to-accent text-white rounded-3xl font-black text-xl hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-4">
                                    Set Reminder 🔔
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter and Grid Section */}
                <div className="py-24">
                    <div className="flex flex-col items-center mb-20 text-center">
                        <h2 className="text-4xl sm:text-6xl font-black text-gray-900 mb-10">Explore All Events</h2>
                        
                        <div className="flex flex-wrap justify-center gap-4 bg-white/50 backdrop-blur-md p-4 rounded-[30px] border border-gray-100 shadow-xl overflow-x-auto max-w-full">
                            {categories.map((cat) => (
                                <button 
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 ${
                                        filter === cat 
                                            ? 'bg-primary-900 text-white shadow-xl transform scale-105' 
                                            : 'text-gray-500 hover:text-primary-600 hover:bg-gray-100'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredEvents.map((event) => (
                            <div 
                                key={event.id}
                                className="group bg-white rounded-[40px] p-10 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 relative overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${event.color} opacity-5 group-hover:opacity-10 rounded-full filter blur-3xl transition-opacity duration-500`}></div>
                                
                                <div className="relative z-10">
                                    <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${event.color} flex items-center justify-center text-5xl text-white mb-8 shadow-xl transform group-hover:rotate-6 transition-transform duration-500`}>
                                        {event.icon}
                                    </div>
                                    <span className={`inline-block px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-gray-100 text-gray-600 mb-6 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors`}>
                                        {event.type}
                                    </span>
                                    <h3 className="text-3xl font-black text-gray-900 mb-6 leading-tight group-hover:text-primary-600 transition-colors">
                                        {event.title}
                                    </h3>
                                    <div className="space-y-6 text-gray-600 font-medium mb-10">
                                        <div className="flex items-center gap-4">
                                            <span className="text-2xl">📅</span> {event.date}
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-2xl">⏰</span> {event.time}
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-2xl">👥</span> {event.attendees} Attending
                                        </div>
                                    </div>
                                    <button className="w-full py-4 text-gray-900 font-black text-lg border-2 border-gray-100 rounded-2xl hover:bg-primary-900 hover:text-white hover:border-primary-900 transition-all duration-300">
                                        View Details ➜
                                    </button>
                                </div>
                                <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${event.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter is handled via layout/Footer generally, but adding specialized section for events */}
            <section className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl sm:text-6xl font-black text-gray-900 mb-12">Submit Your Session</h2>
                    <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed font-medium italic">
                        "Share your knowledge with the community. We're always looking for new speakers and workshop leads."
                    </p>
                    <button className="px-12 py-6 bg-gradient-to-r from-accent via-purple-600 to-accent text-white rounded-3xl font-black text-xl hover:shadow-[0_0_50px_rgba(139,92,246,0.3)] transform hover:scale-110 transition-all duration-500">
                        Become a Speaker 🎙️
                    </button>
                </div>
            </section>

            {/* Final CTA handled by Footer/App Layout */}
        </div>
    )
}
