import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import TeamPage from './pages/TeamPage'
import EventsPage from './pages/EventsPage'
import ResourcesPage from './pages/ResourcesPage'
import JoinPage from './pages/JoinPage'

export default function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navigation />

                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/team" element={<TeamPage />} />
                        <Route path="/events" element={<EventsPage />} />
                        <Route path="/resources" element={<ResourcesPage />} />
                        <Route path="/join" element={<JoinPage />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    )
}
