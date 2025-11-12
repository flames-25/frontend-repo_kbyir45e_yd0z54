const images = Array.from({length: 12}).map((_,i)=> `https://images.unsplash.com/photo-1551024709-8f23befc6cf7?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=${i}`)

export default function Gallery(){
  return (
    <div className="bg-gradient-to-b from-amber-50 via-pink-50 to-rose-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">Colorful Gallery</h2>
        <p className="text-pink-900/80 text-center mt-2 max-w-2xl mx-auto">A peek at our creamy creations and factory-fresh delights.</p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl shadow border border-white/80 bg-white">
              <img src={src} alt={`ice-cream-${i}`} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
