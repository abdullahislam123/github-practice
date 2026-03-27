import React from 'react'

export default function HomePage() {
    const features = [
        {
            icon: '👥',
            title: 'Community Driven',
            description: 'Join a vibrant community of developers passionate about learning and growing together.',
        },
        {
            icon: '📚',
            title: 'Learning Resources',
            description: 'Access curated learning materials, tutorials, and courses from industry experts.',
        },
        {
            icon: '⚡',
            title: 'Regular Sessions',
            description: 'Participate in workshops, webinars, and meetups to enhance your skills.',
        },
        {
            icon: '🤝',
            title: 'Network & Collaborate',
            description: 'Build meaningful connections and collaborate on exciting projects with peers.',
        },
    ]

    return (
        <div>
            {/* Hero Section */}
            <section className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-accent/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Learn, Build, and<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent"> Grow Together</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Welcome to Codrithm - The ultimate destination for developers who want to level up their skills, collaborate with peers, and stay ahead in the tech industry.
                            </p>
                            <div className="flex gap-4">
                                <a href="/join" className="btn-primary">
                                    Get Started
                                </a>
                                <a href="/about" className="btn-outline">
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:flex justify-center">
                            <div className="w-full h-96 bg-gradient-to-br from-primary-200 to-accent/20 rounded-3xl flex items-center justify-center">
                                <div className="text-6xl animate-bounce">💻</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Why Join Codrithm?</h2>
                        <p className="section-subtitle">Everything you need to succeed in your developer journey</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="card text-center">
                                <div className="text-4xl mb-4 flex justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary-600 to-accent text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Join the Community?
                    </h2>
                    <p className="text-lg mb-8 opacity-90">
                        Start your journey today and connect with thousands of developers worldwide
                    </p>
                    <a href="/join" className="px-8 py-4 bg-white text-primary-600 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block">
                        Join Codrithm Now
                    </a>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-4xl font-bold text-primary-600 mb-2">5000+</p>
                            <p className="text-gray-600">Active Members</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-primary-600 mb-2">100+</p>
                            <p className="text-gray-600">Events Hosted</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-primary-600 mb-2">250+</p>
                            <p className="text-gray-600">Learning Resources</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-primary-600 mb-2">50+</p>
                            <p className="text-gray-600">Expert Mentors</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
