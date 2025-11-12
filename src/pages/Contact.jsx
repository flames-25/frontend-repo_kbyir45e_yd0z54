import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = (e) => { e.preventDefault(); setSent(true); }

  return (
    <div className="bg-gradient-to-b from-rose-50 via-pink-50 to-amber-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">Contact 5 STAR ICREAM</h2>
        <p className="text-pink-900/80 text-center mt-2 max-w-2xl mx-auto">We’d love to hear from you. Reach us for orders, events, or feedback.</p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="bg-white/80 backdrop-blur rounded-3xl p-6 shadow border border-white">
            <h3 className="text-xl font-bold text-pink-700">Contact Details</h3>
            <ul className="mt-4 space-y-3 text-pink-900/80">
              <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-pink-600" /> +91 97820 17257</li>
              <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-pink-600" /> 2006amanagarwal@gmail.com</li>
              <li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-pink-600" /> 5 STAR ICREAM Factory, Industrial Area, Sector 12, Your City</li>
            </ul>

            <div className="mt-6 h-56 w-full rounded-2xl overflow-hidden border border-white">
              <iframe title="map" className="w-full h-full" src="https://www.openstreetmap.org/export/embed.html?bbox=72.83%2C18.95%2C72.99%2C19.12&amp;layer=mapnik"></iframe>
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-white/80 backdrop-blur rounded-3xl p-6 shadow border border-white">
            <div className="grid grid-cols-1 gap-4">
              <input name="name" required placeholder="Your Name" value={form.name} onChange={onChange} className="px-4 py-3 rounded-xl bg-white border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300" />
              <input name="phone" required placeholder="Phone" value={form.phone} onChange={onChange} className="px-4 py-3 rounded-xl bg-white border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300" />
              <input name="email" type="email" placeholder="Email (optional)" value={form.email} onChange={onChange} className="px-4 py-3 rounded-xl bg-white border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300" />
              <textarea name="message" rows="4" placeholder="Message" value={form.message} onChange={onChange} className="px-4 py-3 rounded-xl bg-white border border-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300" />
              <button className="inline-flex items-center justify-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:shadow-md"><Send className="w-4 h-4"/> Send</button>
              {sent && <p className="text-sm text-green-700">Thanks! We received your message. We will contact you shortly.</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
