import { Phone, Mail } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="bg-gradient-to-r from-amber-200 via-pink-200 to-fuchsia-200 border-t border-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-semibold text-pink-800">© {new Date().getFullYear()} 5 STAR ICREAM — All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="tel:9782017257" className="inline-flex items-center gap-2 bg-white text-pink-700 px-4 py-2 rounded-full font-semibold shadow hover:shadow-md">
              <Phone className="w-4 h-4" /> Call 97820 17257
            </a>
            <a href="mailto:2006amanagarwal@gmail.com" className="inline-flex items-center gap-2 bg-pink-700 text-white px-4 py-2 rounded-full font-semibold shadow hover:shadow-md">
              <Mail className="w-4 h-4" /> Email Us
            </a>
          </div>
        </div>
        <div className="mt-4 text-xs text-pink-900/80 flex flex-wrap items-center gap-3 justify-center md:justify-end">
          <span>Factory Fresh</span>
          <span>•</span>
          <span>Colorful • Creamy • Happy</span>
        </div>
      </div>
    </footer>
  )
}
