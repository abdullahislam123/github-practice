import React from 'react'

export default function AboutPage() {
    const purposes = [
        {
            icon: '🎯',
            title: 'Our Purpose',
            description: 'Codrithm is built to empower developers of all levels to learn, collaborate, and grow together in a supportive community environment.'
        },
        {
            icon: '💡',
            title: 'Why We Created It',
            description: 'We recognized that learning to code can be overwhelming and lonely. We created Codrithm to provide a welcoming space where beginners feel supported and experienced developers can mentor and contribute.'
        },
    ]

    const audience = [
        {
            icon: '🚀',
            title: 'For Beginners',
            subtitle: 'Just Starting Your Journey',
            benefits: [
                'Structured learning paths',
                'Beginner-friendly resources',
                'Mentorship from experienced developers',
                'Support from a welcoming community'
            ]
        },
        {
            icon: '⭐',
            title: 'For Developers',
            subtitle: 'Advancing Your Skills',
            benefits: [
                'Advanced technical discussions',
                'Networking opportunities',
                'Contribute to open-source projects',
                'Share knowledge and mentor others'
            ]
        },
    ]

    const achievements = [
        {
            icon: '📚',
            title: 'Master New Technologies',
            description: 'Keep up with the latest frameworks, tools, and programming languages through curated courses and workshops.'
        },
        {
            icon: '🤝',
            title: 'Build Real Projects',
            description: 'Collaborate on real-world projects with team members from around the world and build your portfolio.'
        },
        {
            icon: '💼',
            title: 'Career Advancement',
            description: 'Get job-ready with interview prep, portfolio reviews, and direct connections with hiring partners.'
        },
        {
            icon: '🎓',
            title: 'Earn Certifications',
            description: 'Complete courses and earn industry-recognized certifications to validate your skills.'
        },
        {
            icon: '🌍',
            title: 'Global Network',
            description: 'Connect with thousands of developers worldwide, share experiences, and build lasting professional relationships.'
        },
        {
            icon: '💪',
            title: 'Personal Growth',
            description: 'Build confidence in your abilities through hands-on learning, feedback, and supportive community interactions.'
        },
    ]

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-br from-primary-50 to-accent-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent">
                            About Codrithm
                        </h1>
                        <p className="text-2xl text-gray-700 font-semibold mb-4">
                            Learn, Build, and Grow Together
                        </p>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            A community dedicated to empowering developers of all levels to succeed through learning, collaboration, and mutual support.
                        </p>
                    </div>
                </div>
            </section>

            {/* Purpose Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-black text-center mb-16 text-gray-900">
                        Our Story
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {purposes.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl border border-primary-100 hover:border-primary-300 transition-colors duration-300"
                            >
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-black text-center mb-16 text-gray-900">
                        Who It's For
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {audience.map((group, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="text-5xl mb-4">{group.icon}</div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                    {group.title}
                                </h3>
                                <p className="text-primary-600 font-semibold mb-6">
                                    {group.subtitle}
                                </p>
                                <ul className="space-y-3">
                                    {group.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-accent text-xl mr-3 font-bold">✓</span>
                                            <span className="text-gray-700 text-lg">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Members Can Learn & Achieve */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-black text-center mb-16 text-gray-900">
                        What You Can Learn & Achieve
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {achievements.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary-600 to-accent text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                        Ready to Join Our Community?
                    </h2>
                    <p className="text-xl mb-8 text-white/90">
                        Start your learning journey today and connect with thousands of developers who are passionate about growth.
                    </p>
                    <button className="px-8 py-4 bg-white text-primary-600 rounded-lg font-bold text-lg hover:bg-gray-100 shadow-lg transform hover:scale-105 transition-all duration-300">
                        Get Started Now
                    </button>
                </div>
            </section>
        </div>
    )
}
