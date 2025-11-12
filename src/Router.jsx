import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Flavors from './pages/Flavors'
import Gallery from './pages/Gallery'
import Locations from './pages/Locations'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './Navbar'
import Footer from './components/Footer'

export default function AppRouter(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flavors" element={<Flavors />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
