import React from 'react'
import { Link } from 'react-router-dom'
import Newsletter from '../components/Newsletter'

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
            title: 'Web Development Bootcamp',
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
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 pt-20 sm:pt-32 md:pt-40 pb-24 sm:pb-32 md:pb-48">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-2xl mb-16">
                        <div className="inline-block px-8 py-3 bg-accent/30 border-2 border-accent rounded-full mb-10 hover:bg-accent/40 transition-colors">
                            <span className="text-accent font-bold text-base">✨ Welcome to the Developer Community</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight drop-shadow-lg">
                            Learn, Build, <br /> and Grow Together
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-16 leading-relaxed font-semibold drop-shadow-md">
                            The ultimate platform for developers to learn new skills, collaborate on projects, and advance their careers
                        </p>
                        <p className="text-lg md:text-xl text-gray-200 mb-12 font-medium">
                            Join Codrithm and connect with 5000+ developers worldwide
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className="px-10 py-5 bg-gradient-to-r from-accent to-yellow-400 text-gray-900 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 shadow-xl">
                                🚀 Start Learning Now
                            </button>
                            <button className="px-10 py-5 border-3 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                👥 Join Community
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 relative z-20 mb-12 sm:mb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="group relative bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-3 border border-gray-100 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <p className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-accent to-primary-600 mb-4 group-hover:animate-bounce">
                                    {stat.value}
                                </p>
                                <p className="text-gray-700 text-lg font-bold group-hover:text-accent transition-colors duration-300">{stat.label}</p>
                            </div>
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent to-primary-600 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section className="py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-20">
                        <span className="inline-block px-4 sm:px-6 py-2 bg-accent/20 border border-accent rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
                            <span className="text-accent font-bold">✨ Our Benefits</span>
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent">Codrithm</span>?</h2>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
                            Everything you need to succeed in your developer journey
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 overflow-hidden">
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary-600/10"></div>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary-600/20 rounded-full filter blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                                <div className="relative z-10">
                                    <div className="text-7xl mb-8 group-hover:scale-125 group-hover:animate-bounce transition-transform duration-300 inline-block">{feature.icon}</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors duration-300">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-20">
                        <span className="inline-block px-4 sm:px-6 py-2 bg-primary-600/20 border border-primary-600 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
                            <span className="text-primary-600 font-bold">🎯 Events</span>
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent">Events & Workshops</span></h2>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
                            Join our community events and accelerate your learning
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-accent to-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                <div className="p-10 relative z-10">
                                    <div className="text-8xl mb-6 group-hover:animate-bounce inline-block transition-transform duration-300">{event.icon}</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-accent transition-colors duration-300">{event.title}</h3>
                                    <div className="space-y-4 text-gray-600 mb-8">
                                        <p className="flex items-center gap-3 text-lg">
                                            <span className="text-2xl">📅</span> <span className="font-semibold">{event.date}</span>
                                        </p>
                                        <p className="flex items-center gap-3 text-lg">
                                            <span className="text-2xl">👥</span> <span className="font-semibold">{event.attendees} people interested</span>
                                        </p>
                                    </div>
                                    <button className="w-full py-4 bg-gradient-to-r from-primary-600 to-accent text-white rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:from-primary-700 hover:to-accent/90">
                                        Register Now ➜
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button className="group px-10 py-5 bg-gradient-to-r from-primary-600 to-accent text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:from-primary-700 hover:to-accent/90">
                            View All Events ✨
                        </button>
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-20">
                        <span className="inline-block px-4 sm:px-6 py-2 bg-primary-600/20 border border-primary-600 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
                            <span className="text-primary-600 font-bold">🌍 Community Platforms</span>
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
                            Connect on Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent">Preferred Platform</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
                            Choose your favorite way to connect with our thriving community of developers
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
                        <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 overflow-hidden">
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-primary-600/10"></div>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-primary-600/20 rounded-full filter blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="relative z-10">
                                <div className="text-7xl mb-6 group-hover:animate-bounce inline-block transition-transform duration-300">💬</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">Discord</h3>
                                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">Real-time chat with 2500+ active members</p>
                                <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                    Join Discord ↗
                                </button>
                            </div>
                        </div>

                        <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 overflow-hidden">
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-primary-600/10"></div>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-primary-600/20 rounded-full filter blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="relative z-10">
                                <div className="text-7xl mb-6 group-hover:animate-bounce inline-block transition-transform duration-300">📱</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">WhatsApp</h3>
                                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">Quick updates with 1800+ engaged members</p>
                                <button className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                    Join WhatsApp ↗
                                </button>
                            </div>
                        </div>

                        <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 overflow-hidden">
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 to-primary-600/10"></div>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-600/20 to-primary-600/20 rounded-full filter blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="relative z-10">
                                <div className="text-7xl mb-6 group-hover:animate-bounce inline-block transition-transform duration-300">💻</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">GitHub</h3>
                                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">Open-source projects with 3500+ collaborators</p>
                                <button className="w-full py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                    Visit GitHub ↗
                                </button>
                            </div>
                        </div>

                        <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 overflow-hidden">
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-primary-600/10"></div>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-primary-600/20 rounded-full filter blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="relative z-10">
                                <div className="text-7xl mb-6 group-hover:animate-bounce inline-block transition-transform duration-300">🔗</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">LinkedIn</h3>
                                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">Professional network with 3200+ followers</p>
                                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                    Follow LinkedIn ↗
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-20">
                        <span className="inline-block px-4 sm:px-6 py-2 bg-yellow-400/20 border border-yellow-400 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
                            <span className="text-yellow-600 font-bold">⭐ Success Stories</span>
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent">Members Say</span></h2>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">Join thousands of developers transforming their careers</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                text: "Codrithm helped me land my dream job! The resources and community support were invaluable.",
                                author: "Sarah Johnson",
                                role: "Full-Stack Developer",
                                avatar: "👩‍💻"
                            },
                            {
                                text: "The best community for learning web development. Everyone is so helpful and supportive!",
                                author: "Mike Chen",
                                role: "React Developer",
                                avatar: "👨‍💻"
                            },
                            {
                                text: "Amazing courses and mentors. I've grown so much as a developer since joining Codrithm.",
                                author: "Emily Rodriguez",
                                role: "Junior Developer",
                                avatar: "👩‍🚀"
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 overflow-hidden">
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-accent/5"></div>
                                </div>
                                <div className="relative z-10">
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => <span key={i} className="text-2xl group-hover:animate-bounce transition-all" style={{ animationDelay: `${i * 0.1}s` }}>⭐</span>)}
                                    </div>
                                    <p className="text-gray-700 text-lg mb-8 leading-relaxed italic font-medium group-hover:text-gray-900 transition-colors duration-300">"{testimonial.text}"</p>
                                    <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                                        <div className="text-5xl">{testimonial.avatar}</div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-lg group-hover:text-accent transition-colors duration-300">{testimonial.author}</p>
                                            <p className="text-gray-500 font-semibold">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Newsletter />
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary-600 to-accent opacity-100"></div>
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
                    <span className="inline-block px-6 py-2 bg-white/20 border border-white/40 rounded-full mb-8 backdrop-blur-md">
                        <span className="text-white font-bold">🎉 Limited Time Offer</span>
                    </span>
                    <h2 className="text-6xl md:text-7xl font-black mb-8 leading-tight">Ready to Transform Your Career?</h2>
                    <p className="text-2xl mb-16 opacity-95 max-w-3xl mx-auto font-medium">
                        Join 5000+ developers and start building amazing projects today. Get started for free!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="group px-12 py-6 bg-white text-accent rounded-2xl font-black text-xl hover:bg-gradient-to-r hover:from-white hover:to-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-110 flex items-center justify-center gap-2">
                            <span>🚀 Get Started Free</span>
                        </button>
                        <button className="group px-12 py-6 border-3 border-white text-white rounded-2xl font-black text-xl hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl transform hover:scale-110 flex items-center justify-center gap-2">
                            <span>📚 Learn More</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
