import React from 'react'

export default function AboutPage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary-600 to-accent text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">About Codrithm</h1>
                    <p className="text-xl opacity-90">Empowering developers through community, knowledge, and collaboration</p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title text-center mb-8">Our Story</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Codrithm was born from a simple belief: developers learn better together. In a rapidly evolving tech landscape,
                        isolated learning can be challenging and demotivating. We created Codrithm to be the central hub where developers
                        of all levels can connect, share knowledge, and grow together.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        What started as a small initiative has grown into a thriving community of thousands of passionate developers,
                        mentors, and industry experts working together to build a better learning ecosystem.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div className="card">
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To create an inclusive, supportive community where developers of all levels can learn, collaborate,
                                and achieve their goals. We provide free resources, regular sessions, and mentorship to help our members
                                succeed in their careers.
                            </p>
                        </div>
                        <div className="card">
                            <div className="text-4xl mb-4">💖</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To become the go-to platform for developer education and community building, where knowledge flows freely,
                                opportunities are abundant, and every member feels valued and empowered to reach their full potential.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title text-center mb-12">Who We Serve</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🎓</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Beginners</h3>
                            <p className="text-gray-600">
                                Just starting your coding journey? Find tutorials, courses, and mentors to guide you through the fundamentals.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🚀</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Intermediate Developers</h3>
                            <p className="text-gray-600">
                                Looking to level up your skills? Access advanced resources, participate in projects, and connect with peers.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">⭐</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Experts</h3>
                            <p className="text-gray-600">
                                Help us guide the next generation. Share your knowledge and mentor aspiring developers in our community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title text-center mb-12">Our Core Values</h2>
                    <div className="space-y-6">
                        {[
                            { title: 'Inclusivity', description: 'We welcome developers of all backgrounds, experience levels, and identities.' },
                            { title: 'Knowledge Sharing', description: 'We believe in the power of sharing knowledge freely and openly.' },
                            { title: 'Collaboration', description: 'We foster an environment where developers work together to solve problems.' },
                            { title: 'Continuous Learning', description: 'We encourage lifelong learning and growth in our community.' },
                            { title: 'Support & Help', description: 'We create a safe space where questions are valued and help is always available.' },
                        ].map((value, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-600 text-white font-bold">
                                        ✓
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
