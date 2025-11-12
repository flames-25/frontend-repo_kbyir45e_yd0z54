import { Link } from 'react-router-dom'
import { Star, IceCream, Sparkles, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-rose-50 via-pink-50 to-amber-50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,182,193,0.4),rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white shadow px-3 py-1 rounded-full text-pink-700 text-sm font-semibold">
                <Sparkles className="w-4 h-4" /> Factory Fresh • Since 5 STAR
              </div>
              <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-pink-700">
                5 STAR ICREAM
              </h1>
              <p className="mt-4 text-lg text-pink-900/80 max-w-xl">
                Colorful, creamy, and crafted with love. Discover our rainbow of flavors made fresh at our ice cream factory.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/flavors" className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:shadow-md">
                  Explore Flavors <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-pink-700 px-6 py-3 rounded-full font-semibold shadow hover:shadow-md">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 w-28 h-28 bg-pink-200 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-amber-200 rounded-full blur-2xl" />
              <div className="bg-white/70 backdrop-blur p-6 rounded-3xl shadow-xl border border-white/60">
                <div className="grid grid-cols-3 gap-3">
                  {["Strawberry","Mango","Blueberry","Pistachio","Chocolate","Vanilla"].map((f,i)=> (
                    <div key={i} className="aspect-square rounded-2xl bg-gradient-to-br from-white to-rose-50 border border-rose-100 flex flex-col items-center justify-center text-center p-2">
                      <IceCream className="w-6 h-6 text-pink-500" />
                      <p className="mt-2 text-xs font-semibold text-pink-700">{f}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {title:'Factory Fresh',desc:'Made daily with premium ingredients.',color:'from-pink-400 to-rose-400'},
              {title:'Colorful Variety',desc:'Over 30 flavors and seasonal specials.',color:'from-amber-400 to-yellow-300'},
              {title:'Loved by All',desc:'Serving smiles across the city.',color:'from-fuchsia-400 to-purple-400'},
            ].map((c,i)=> (
              <div key={i} className={`rounded-2xl p-6 text-white shadow-xl bg-gradient-to-br ${c.color}`}>
                <Star className="w-6 h-6" />
                <h3 className="mt-3 text-xl font-bold">{c.title}</h3>
                <p className="opacity-90 mt-1 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-amber-400 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold">Book a Factory Visit</h3>
              <p className="opacity-95 mt-2">Bring your friends and see how the magic happens!</p>
            </div>
            <Link to="/contact" className="bg-white text-pink-700 px-6 py-3 rounded-full font-semibold shadow hover:shadow-md">Contact Now</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
