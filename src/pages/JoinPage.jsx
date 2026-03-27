import React, { useState } from 'react'

export default function JoinPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        experience: '',
        interests: [],
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleCheckboxChange = (interest) => {
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest],
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert('Thank you for signing up! Check your email for next steps.')
    }

    const communityLinks = [
        {
            platform: 'Discord',
            description: 'Join our Discord server for real-time chat and discussions',
            icon: '💬',
            url: 'https://discord.gg/codrithm',
            members: '2500+',
        },
        {
            platform: 'WhatsApp',
            description: 'Get updates and connect with members on WhatsApp',
            icon: '📱',
            url: 'https://chat.whatsapp.com/codrithm',
            members: '1800+',
        },
        {
            platform: 'GitHub',
            description: 'Check out our open-source projects and contribute',
            icon: '🐙',
            url: 'https://github.com/codrithm',
            members: '450+',
        },
        {
            platform: 'LinkedIn',
            description: 'Follow us for community updates and job opportunities',
            icon: '💼',
            url: 'https://linkedin.com/company/codrithm',
            members: '3200+',
        },
    ]

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary-600 to-accent text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Codrithm</h1>
                    <p className="text-xl opacity-90">Become part of a thriving community of developers</p>
                </div>
            </section>

            {/* Registration & Community Links */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Registration Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Sign Up Today</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                                        Experience Level
                                    </label>
                                    <select
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                                        required
                                    >
                                        <option value="">Select your level</option>
                                        <option value="beginner">Beginner (0-1 year)</option>
                                        <option value="intermediate">Intermediate (1-3 years)</option>
                                        <option value="advanced">Advanced (3+ years)</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-4">
                                        Areas of Interest
                                    </label>
                                    <div className="space-y-2">
                                        {['Web Development', 'Mobile Apps', 'AI/ML', 'DevOps', 'Data Science'].map(interest => (
                                            <label key={interest} className="flex items-center gap-3">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.interests.includes(interest)}
                                                    onChange={() => handleCheckboxChange(interest)}
                                                    className="w-4 h-4 text-primary-600 rounded focus:ring-2 focus:ring-primary-600"
                                                />
                                                <span className="text-gray-700">{interest}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <button type="submit" className="btn-primary w-full">
                                    Create Account
                                </button>
                            </form>
                        </div>

                        {/* Community Links */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Connect With Us</h2>
                            <div className="space-y-4">
                                {communityLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        className="block p-6 border-2 border-gray-200 rounded-xl hover:border-primary-600 hover:shadow-lg transition"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <span className="text-3xl">{link.icon}</span>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-900">{link.platform}</h3>
                                                    <p className="text-sm text-gray-500">{link.members} members</p>
                                                </div>
                                            </div>
                                            <span className="text-primary-600 text-lg">↗</span>
                                        </div>
                                        <p className="text-gray-600 text-sm">{link.description}</p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Join Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title text-center mb-12">Why Join Codrithm?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: '🎓', title: 'Free Learning', description: 'Access to hundreds of tutorials and courses at no cost' },
                            { icon: '👥', title: 'Community Support', description: 'Get help from mentors and peers whenever you need it' },
                            { icon: '⭐', title: 'Opportunities', description: 'Access job opportunities and project collaborations' },
                            { icon: '🚀', title: 'Growth', description: 'Level up your skills and accelerate your career' },
                            { icon: '🤝', title: 'Networking', description: 'Connect with hundreds of developers worldwide' },
                            { icon: '📅', title: 'Regular Events', description: 'Participate in workshops, webinars, and meetups' },
                        ].map((benefit, index) => (
                            <div key={index} className="card text-center">
                                <div className="text-5xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            {
                                question: 'Is membership free?',
                                answer: 'Yes! Codrithm is completely free. All our resources, courses, and events are available to our members at no cost.',
                            },
                            {
                                question: 'Do I need prior coding experience?',
                                answer: 'No! We welcome developers of all levels, from complete beginners to experienced professionals.',
                            },
                            {
                                question: 'How often are events held?',
                                answer: 'We host multiple events every week, including workshops, webinars, and meetups.',
                            },
                            {
                                question: 'Can I get a certificate?',
                                answer: 'Yes, participants can earn certificates for completing courses and attending workshops.',
                            },
                            {
                                question: 'What if I get stuck?',
                                answer: 'Our community is very supportive. You can ask questions on Discord, WhatsApp, or during our live sessions.',
                            },
                        ].map((faq, index) => (
                            <div key={index} className="card">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="section-title mb-6">Still Have Questions?</h2>
                    <p className="section-subtitle mb-8">
                        We're here to help! Get in touch with us anytime.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="mailto:hello@codrithm.com" className="btn-primary flex items-center justify-center gap-2">
                            ✉️ Email Us
                        </a>
                        <a href="#" className="btn-outline flex items-center justify-center gap-2">
                            💬 Chat with Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
