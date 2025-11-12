import { useState } from 'react'
import { Star, Phone, Mail, MapPin, Clock, Facebook, Instagram, Menu, X, IceCream, Sparkles } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Flavors', href: '#flavors' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/70 border-b border-white/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-pink-400 via-amber-300 to-rose-400 flex items-center justify-center shadow">
              <Star className="h-5 w-5 text-white" />
            </div>
            <span className="font-extrabold text-lg tracking-tight">
              5 STAR ICREAM
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-gray-700 hover:text-pink-600 transition-colors">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full shadow-sm transition-colors">
              <Phone className="h-4 w-4" /> Contact
            </a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/50 bg-white/80 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="py-2" onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-full w-max" onClick={() => setOpen(false)}>
              <Phone className="h-4 w-4" /> Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-b from-rose-50 via-pink-50 to-amber-50">
      <div className="absolute -top-40 -right-40 h-80 w-80 bg-pink-300/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 bg-amber-300/30 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-3 py-1 rounded-full text-sm shadow-sm border border-white/60">
            <Sparkles className="h-4 w-4 text-pink-600" />
            Fresh • Creamy • Happiness
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Scoop up joy at
            <span className="text-pink-600"> 5 STAR ICREAM</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Artisanal ice cream made with love. Classic favorites and bold new flavors — crafted daily for the perfect scoop.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#flavors" className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-full shadow-sm transition">
              Explore Flavors
            </a>
            <a href="#contact" className="bg-white/80 hover:bg-white text-gray-900 px-5 py-3 rounded-full border border-white/70 backdrop-blur transition">
              Contact Us
            </a>
          </div>
          <p className="mt-3 text-sm text-gray-600">Made fresh daily • No artificial colors • Egg-free options</p>
        </div>

        <div className="relative">
          <div className="relative mx-auto h-80 w-80 md:h-[28rem] md:w-[28rem] rounded-full bg-gradient-to-br from-pink-200 via-amber-200 to-rose-200 shadow-xl flex items-center justify-center overflow-hidden">
            <div className="absolute inset-6 rounded-full bg-white/40 blur-xl" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="h-40 w-40 md:h-56 md:w-56 rounded-t-[60px] rounded-b-[20px] bg-pink-200 border-4 border-white shadow-inner" />
              <div className="-mt-4 h-6 w-44 md:w-64 rounded-full bg-amber-200 border-4 border-white shadow" />
              <div className="absolute -top-6 right-8 h-10 w-10 rounded-full bg-rose-300 shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const flavorList = [
  { name: 'Classic Vanilla', desc: 'Madagascar vanilla, silky and timeless', color: 'from-amber-200 to-amber-300' },
  { name: 'Rich Chocolate', desc: 'Premium cocoa for deep chocolate lovers', color: 'from-rose-200 to-rose-300' },
  { name: 'Strawberry Bliss', desc: 'Real strawberries with a fresh finish', color: 'from-pink-200 to-pink-300' },
  { name: 'Mango Magic', desc: 'Tropical, bright and sunny', color: 'from-orange-200 to-amber-300' },
  { name: 'Pistachio Dream', desc: 'Nutty, creamy and elegant', color: 'from-emerald-200 to-emerald-300' },
  { name: 'Cookies & Cream', desc: 'Crunchy cookie bits in vanilla cream', color: 'from-slate-200 to-slate-300' },
]

function Flavors() {
  return (
    <section id="flavors" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Flavors</h2>
            <p className="mt-2 text-gray-600">Handcrafted in small batches for maximum freshness.</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-pink-700 hover:text-pink-800">
            Want wholesale or bulk orders? Contact us →
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flavorList.map((f) => (
            <div key={f.name} className="group rounded-2xl border border-gray-100 shadow-sm overflow-hidden bg-gradient-to-br p-6 transition hover:shadow-lg hover:-translate-y-0.5 "
              style={{ backgroundImage: undefined }}
            >
              <div className={`h-36 rounded-xl bg-gradient-to-br ${f.color} mb-4`} />
              <h3 className="text-xl font-bold text-gray-900">{f.name}</h3>
              <p className="text-gray-600 mt-1">{f.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">Available daily</span>
                <span className="text-sm font-semibold text-pink-700">Fresh • Creamy</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">About 5 STAR ICREAM</h2>
          <p className="mt-4 text-gray-700">
            We are a proudly local ice cream factory crafting premium ice cream with the finest ingredients. Our
            mission is simple: spread happiness one scoop at a time. Whether you love classics or want to try
            something adventurous, we have a flavor for you.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <li className="bg-white/80 border border-white/70 rounded-xl p-4 shadow-sm">Fresh daily</li>
            <li className="bg-white/80 border border-white/70 rounded-xl p-4 shadow-sm">Premium ingredients</li>
            <li className="bg-white/80 border border-white/70 rounded-xl p-4 shadow-sm">Hygienic production</li>
            <li className="bg-white/80 border border-white/70 rounded-xl p-4 shadow-sm">Bulk & events catered</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1600&auto=format&fit=crop"
              alt="Ice cream scoops"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1532678465554-94846274c297?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1497051788611-2c64812349d1?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1580910051074-3eb694886506?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop',
  ]

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Gallery</h2>
        <p className="mt-2 text-gray-600">A peek into our sweet world.</p>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl shadow-sm">
              <img src={src} alt="Ice cream" className="h-full w-full object-cover hover:scale-105 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-16 bg-gradient-to-t from-rose-50 to-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-2 text-gray-600">We'd love to serve you. Reach out for orders, events, or franchise inquiries.</p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-pink-600 mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">Add your number here</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-pink-600 mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">Add your email here</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-pink-600 mt-1" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-600">Add your factory address here</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-pink-600 mt-1" />
              <div>
                <p className="font-semibold">Hours</p>
                <p className="text-gray-600">Mon–Sun: 10:00 AM – 10:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="inline-flex items-center gap-2 text-gray-700 hover:text-pink-700"><Facebook className="h-5 w-5" /> Facebook</a>
              <a href="#" className="inline-flex items-center gap-2 text-gray-700 hover:text-pink-700"><Instagram className="h-5 w-5" /> Instagram</a>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="bg-white/80 backdrop-blur border border-white/70 rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full rounded-lg border-gray-200 focus:ring-pink-500 focus:border-pink-500"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-1 w-full rounded-lg border-gray-200 focus:ring-pink-500 focus:border-pink-500"
                placeholder="+00 000 0000"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full rounded-lg border-gray-200 focus:ring-pink-500 focus:border-pink-500"
                rows={4}
                placeholder="Tell us about your order or event..."
                required
              />
            </div>
            <button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-lg transition">Send Message</button>
            {sent && (
              <p className="text-green-700 text-sm">Thanks! This demo form is not connected yet, but your info is noted.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600">© {new Date().getFullYear()} 5 STAR ICREAM. All rights reserved.</p>
        <div className="text-sm text-gray-500">Crafted with love and a lot of scoops.</div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Flavors />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
