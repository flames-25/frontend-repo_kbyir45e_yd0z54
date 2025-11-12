import { IceCream, Check } from 'lucide-react'

const flavors = [
  { name: 'Classic Vanilla', color: 'from-amber-100 to-yellow-100', tag: 'Bestseller' },
  { name: 'Chocolate Fudge', color: 'from-brown-100 to-amber-100', tag: 'Rich' },
  { name: 'Strawberry Swirl', color: 'from-rose-100 to-pink-100', tag: 'Fresh' },
  { name: 'Mango Delight', color: 'from-orange-100 to-amber-100', tag: 'Seasonal' },
  { name: 'Blueberry Bliss', color: 'from-blue-100 to-indigo-100', tag: 'Fruity' },
  { name: 'Pistachio Dream', color: 'from-emerald-100 to-green-100', tag: 'Nutty' },
  { name: 'Butterscotch', color: 'from-amber-100 to-amber-200', tag: 'Classic' },
  { name: 'Cookies & Cream', color: 'from-zinc-100 to-stone-100', tag: 'Kids Love' },
]

export default function Flavors() {
  return (
    <div className="bg-gradient-to-b from-rose-50 via-pink-50 to-amber-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">Our Flavors</h2>
        <p className="text-pink-900/80 text-center mt-2 max-w-2xl mx-auto">From timeless classics to colorful innovations, every scoop is crafted with love.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {flavors.map((f, i) => (
            <div key={i} className={`rounded-3xl p-6 bg-gradient-to-br ${f.color} border border-white/80 shadow`}> 
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-2xl p-3 shadow">
                  <IceCream className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-pink-700">{f.name}</h3>
                  <p className="text-xs text-pink-900/70">{f.tag}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-pink-900/80">
                <Check className="w-4 h-4" /> Fresh Ingredients
                <Check className="w-4 h-4" /> Creamy Texture
                <Check className="w-4 h-4" /> Factory Made
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
