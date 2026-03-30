import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
                <Navigation />

                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    )
}
