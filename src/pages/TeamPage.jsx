import React from 'react'

export default function TeamPage() {
    const team = [
        {
            name: 'Sarah Johnson',
            role: 'Founder & CEO',
            bio: 'Passionate about building communities and empowering developers.',
            image: '👩‍💼',
            social: {
                linkedin: '#',
                github: '#',
                email: 'sarah@codrithm.com',
            },
        },
        {
            name: 'Mike Chen',
            role: 'Community Manager',
            bio: 'Dedicated to creating inclusive spaces for all developers.',
            image: '👨‍💼',
            social: {
                linkedin: '#',
                github: '#',
                email: 'mike@codrithm.com',
            },
        },
        {
            name: 'Emily Rodriguez',
            role: 'Technical Mentor',
            bio: 'Full-stack developer with expertise in modern web technologies.',
            image: '👩‍🎓',
            social: {
                linkedin: '#',
                github: '#',
                email: 'emily@codrithm.com',
            },
        },
        {
            name: 'Alex Kumar',
            role: 'Event Organizer',
            bio: 'Orchestrating amazing learning experiences and networking events.',
            image: '👨‍🎓',
            social: {
                linkedin: '#',
                github: '#',
                email: 'alex@codrithm.com',
            },
        },
        {
            name: 'Lisa Wang',
            role: 'Content Creator',
            bio: 'Creating high-quality tutorials and educational content for the community.',
            image: '👩‍💻',
            social: {
                linkedin: '#',
                github: '#',
                email: 'lisa@codrithm.com',
            },
        },
        {
            name: 'James Thompson',
            role: 'Technical Lead',
            bio: 'Guiding technical direction and ensuring platform excellence.',
            image: '👨‍💻',
            social: {
                linkedin: '#',
                github: '#',
                email: 'james@codrithm.com',
            },
        },
    ]

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary-600 to-accent text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet Our Team</h1>
                    <p className="text-xl opacity-90">Meet the passionate individuals behind Codrithm</p>
                </div>
            </section>

            {/* Team Members */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="card text-center">
                                <div className="text-7xl mb-4">{member.image}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                                <p className="text-gray-600 mb-6">{member.bio}</p>
                                <div className="flex justify-center gap-4 text-lg">
                                    <a
                                        href={member.social.linkedin}
                                        className="p-2 bg-gray-100 rounded-full hover:bg-primary-100 transition"
                                    >
                                        in
                                    </a>
                                    <a
                                        href={member.social.github}
                                        className="p-2 bg-gray-100 rounded-full hover:bg-primary-100 transition"
                                    >
                                        ⚙️
                                    </a>
                                    <a
                                        href={`mailto:${member.social.email}`}
                                        className="p-2 bg-gray-100 rounded-full hover:bg-primary-100 transition"
                                    >
                                        ✉️
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Team CTA */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="section-title">Join Our Team</h2>
                    <p className="section-subtitle">We're always looking for talented individuals who want to make a difference</p>
                    <a href="mailto:careers@codrithm.com" className="btn-primary">
                        View Open Positions
                    </a>
                </div>
            </section>
        </div>
    )
}
