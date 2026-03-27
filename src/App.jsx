import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

export default function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navigation />

                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    )
}
