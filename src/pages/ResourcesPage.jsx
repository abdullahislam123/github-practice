import React from 'react'

export default function ResourcesPage() {
    const resources = [
        {
            category: 'Tutorials',
            items: [
                {
                    title: 'Web Development Fundamentals',
                    description: 'Complete guide to HTML, CSS, and JavaScript basics',
                    url: '#',
                    icon: '📚',
                },
                {
                    title: 'React Complete Guide',
                    description: 'Master React with hooks, context, and advanced patterns',
                    url: '#',
                    icon: '⚛️',
                },
                {
                    title: 'Node.js & Express Guide',
                    description: 'Build scalable backend applications with Node.js',
                    url: '#',
                    icon: '🟢',
                },
                {
                    title: 'Database Design Basics',
                    description: 'SQL and NoSQL databases explained with examples',
                    url: '#',
                    icon: '🗄️',
                },
            ],
        },
        {
            category: 'Free Courses',
            items: [
                {
                    title: 'The Complete JavaScript Course',
                    description: 'From basics to advanced JavaScript concepts',
                    url: '#',
                    icon: '💛',
                },
                {
                    title: 'Full Stack Web Development',
                    description: 'Learn both frontend and backend development',
                    url: '#',
                    icon: '🌐',
                },
                {
                    title: 'Mobile App Development',
                    description: 'Build native apps with React Native and Flutter',
                    url: '#',
                    icon: '📱',
                },
                {
                    title: 'DevOps & Cloud Deployment',
                    description: 'Deploy applications on AWS, Docker, and Kubernetes',
                    url: '#',
                    icon: '☁️',
                },
            ],
        },
        {
            category: 'AI Tools',
            items: [
                {
                    title: 'ChatGPT for Developers',
                    description: 'Use AI to generate code and solve problems faster',
                    url: '#',
                    icon: '🤖',
                },
                {
                    title: 'GitHub Copilot Guide',
                    description: 'AI-powered code completion and suggestions',
                    url: '#',
                    icon: '👨‍💻',
                },
                {
                    title: 'AI-Powered Code Analysis',
                    description: 'Tools for code review and quality assurance',
                    url: '#',
                    icon: '🔍',
                },
                {
                    title: 'Machine Learning Basics',
                    description: 'Introduction to ML, TensorFlow, and PyTorch',
                    url: '#',
                    icon: '🧠',
                },
            ],
        },
        {
            category: 'GitHub Repositories',
            items: [
                {
                    title: 'Awesome Web Development Projects',
                    description: 'Curated list of open-source web projects to learn from',
                    url: '#',
                    icon: '⭐',
                },
                {
                    title: 'Algorithm & Data Structures',
                    description: 'Open-source implementations and practice problems',
                    url: '#',
                    icon: '📊',
                },
                {
                    title: 'Design System & UI Components',
                    description: 'Reusable components and design patterns',
                    url: '#',
                    icon: '🎨',
                },
                {
                    title: 'API Integration Examples',
                    description: 'Real-world API integration code samples',
                    url: '#',
                    icon: '🔗',
                },
            ],
        },
    ]

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary-600 to-accent text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Learning Resources</h1>
                    <p className="text-xl opacity-90">Access free tutorials, courses, tools, and repositories to boost your skills</p>
                </div>
            </section>

            {/* Resources by Category */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {resources.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-20">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 pb-4 border-b-2 border-primary-600">
                                {section.category}
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {section.items.map((item, itemIndex) => (
                                    <a
                                        key={itemIndex}
                                        href={item.url}
                                        className="card group cursor-pointer"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <span className="text-4xl">{item.icon}</span>
                                            <span className="text-primary-600 opacity-0 group-hover:opacity-100 transition text-lg">↗</span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {item.description}
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Additional Resources */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title text-center mb-12">Quick Resources</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Documentation', description: 'Official docs for popular frameworks and tools', icon: '📖' },
                            { title: 'Code Snippets', description: 'Ready-to-use code examples for common tasks', icon: '✂️' },
                            { title: 'Cheat Sheets', description: 'Quick reference guides for all programming languages', icon: '📋' },
                        ].map((resource, index) => (
                            <div key={index} className="card text-center">
                                <div className="text-5xl mb-4">{resource.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
                                <p className="text-gray-600 mb-4">{resource.description}</p>
                                <a href="#" className="text-primary-600 font-semibold hover:text-primary-700">
                                    Explore →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Resources */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="section-title">Share Your Resources</h2>
                    <p className="section-subtitle mb-8">
                        Have a helpful resource or tutorial? Share it with the community!
                    </p>
                    <button className="btn-primary">
                        Suggest a Resource
                    </button>
                </div>
            </section>
        </div>
    )
}
