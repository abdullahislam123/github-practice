import React from 'react'

export default function EventsPage() {
    const events = [
        {
            id: 1,
            title: 'React Fundamentals Workshop',
            description: 'Learn the basics of React, including components, hooks, and state management.',
            date: 'April 15, 2026',
            time: '7:00 PM - 9:00 PM',
            location: 'Online',
            attendees: 342,
            type: 'Workshop',
            image: '⚛️',
        },
        {
            id: 2,
            title: 'Web Development Bootcamp',
            description: 'Intensive bootcamp covering HTML, CSS, JavaScript, and full-stack development.',
            date: 'April 20, 2026',
            time: '6:00 PM - 8:00 PM',
            location: 'Hybrid',
            attendees: 156,
            type: 'Bootcamp',
            image: '🚀',
        },
        {
            id: 3,
            title: 'AI Tools for Developers Webinar',
            description: 'Explore cutting-edge AI tools that can enhance your development workflow.',
            date: 'April 22, 2026',
            time: '5:00 PM - 6:30 PM',
            location: 'Online',
            attendees: 478,
            type: 'Webinar',
            image: '🤖',
        },
        {
            id: 4,
            title: 'Community Meetup & Networking',
            description: 'Casual meetup to network, share experiences, and make new friends in tech.',
            date: 'April 28, 2026',
            time: '6:30 PM - 8:30 PM',
            location: 'Coffee Shop Downtown',
            attendees: 95,
            type: 'Meetup',
            image: '☕',
        },
        {
            id: 5,
            title: 'Code Review & Best Practices Session',
            description: 'Learn industry best practices through real code review sessions with mentors.',
            date: 'May 5, 2026',
            time: '7:00 PM - 8:30 PM',
            location: 'Online',
            attendees: 234,
            type: 'Session',
            image: '📝',
        },
        {
            id: 6,
            title: 'Career Development Workshop',
            description: 'Master resume writing, interview tips, and career advancement strategies.',
            date: 'May 12, 2026',
            time: '6:00 PM - 7:30 PM',
            location: 'Online',
            attendees: 312,
            type: 'Workshop',
            image: '💼',
        },
    ]

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary-600 to-accent text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Upcoming Events</h1>
                    <p className="text-xl opacity-90">Join our community for learning, networking, and growth</p>
                </div>
            </section>

            {/* Events List */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6">
                        {events.map((event) => (
                            <div key={event.id} className="card overflow-hidden hover:shadow-2xl transition-shadow">
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Event Image */}
                                    <div className="flex-shrink-0 w-full md:w-32 h-32 bg-gradient-to-br from-primary-100 to-accent/10 rounded-xl flex items-center justify-center md:rounded-full">
                                        <span className="text-5xl">{event.image}</span>
                                    </div>

                                    {/* Event Details */}
                                    <div className="flex-grow">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                                                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold">
                                                    {event.type}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-4">{event.description}</p>

                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                            <div className="flex items-center gap-2 text-gray-700">
                                                <span className="text-lg">📅</span>
                                                <span className="text-sm">{event.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-700">
                                                <span className="text-lg">🕐</span>
                                                <span className="text-sm">{event.time}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-700">
                                                <span className="text-lg">📍</span>
                                                <span className="text-sm">{event.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-700">
                                                <span className="text-lg">👥</span>
                                                <span className="text-sm">{event.attendees} interested</span>
                                            </div>
                                        </div>

                                        <button className="btn-primary">
                                            Register Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Calendar CTA */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="section-title">Never Miss an Event</h2>
                    <p className="section-subtitle">Subscribe to our calendar to get notifications for all upcoming events</p>
                    <button className="btn-primary">
                        Subscribe to Calendar
                    </button>
                </div>
            </section>
        </div>
    )
}
