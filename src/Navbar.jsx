import { NavLink, Link } from 'react-router-dom'
import { IceCream, Menu, X, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkBase = 'px-4 py-2 rounded-full text-sm font-semibold transition'
  const linkClass = ({ isActive }) => `${linkBase} ${isActive ? 'bg-white text-pink-700' : 'text-white/95 hover:bg-white/20'}`

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-amber-400 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 text-white">
              <span className="bg-white/20 p-2 rounded-full"><IceCream className="w-5 h-5" /></span>
              <div>
                <p className="text-lg sm:text-xl font-extrabold leading-none tracking-wide">5 STAR ICREAM</p>
                <p className="text-[10px] sm:text-xs opacity-90 -mt-0.5">Factory Fresh • Colorful & Creamy</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-3">
              <NavLink to="/" className={linkClass}>Home</NavLink>
              <NavLink to="/flavors" className={linkClass}>Flavors</NavLink>
              <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
              <NavLink to="/locations" className={linkClass}>Locations</NavLink>
              <NavLink to="/about" className={linkClass}>About</NavLink>
              <NavLink to="/contact" className={linkClass}>Contact</NavLink>
              <a href="/contact" className="ml-2 inline-flex items-center gap-2 bg-white text-pink-700 px-4 py-2 rounded-full font-semibold shadow hover:shadow-md">
                <Phone className="w-4 h-4" /> Enquire
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2 rounded hover:bg-white/20">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden px-4 pb-4">
            <div className="flex flex-col gap-2">
              <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>Home</NavLink>
              <NavLink to="/flavors" onClick={() => setOpen(false)} className={linkClass}>Flavors</NavLink>
              <NavLink to="/gallery" onClick={() => setOpen(false)} className={linkClass}>Gallery</NavLink>
              <NavLink to="/locations" onClick={() => setOpen(false)} className={linkClass}>Locations</NavLink>
              <NavLink to="/about" onClick={() => setOpen(false)} className={linkClass}>About</NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)} className={linkClass}>Contact</NavLink>
              <div className="mt-2 flex items-center gap-2 text-white/95">
                <MapPin className="w-4 h-4" /> Spreading smiles across the city
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
