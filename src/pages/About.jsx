export default function About(){
  return (
    <div className="bg-gradient-to-b from-amber-50 via-pink-50 to-rose-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">About 5 STAR ICREAM</h2>
        <p className="text-pink-900/80 text-center mt-2 max-w-2xl mx-auto">We are a factory-based ice cream brand creating colorful, creamy joy for everyone. Every batch is crafted with premium ingredients and lots of love.</p>
        <div className="mt-10 bg-white/80 backdrop-blur rounded-3xl p-8 shadow border border-white">
          <h3 className="text-xl font-bold text-pink-700">Our Story</h3>
          <div className="mt-2 space-y-4 text-pink-900/80">
            <p>
              Our journey began with a simple dream and a lot of determination. Right after completing 12th grade, I decided to turn my passion for ice cream into something bigger — a factory that could bring smiles to people with every scoop.
            </p>
            <p>
              Starting this factory was not easy; it took hard work, long hours, and countless challenges. But with dedication and belief in quality, what began as a small venture has now grown into a recognized brand loved by many.
            </p>
            <p>
              Today, our ice cream is not just a product — it’s a symbol of passion, perseverance, and purity. Every flavor we create tells the story of our journey from a dream to a brand that people trust and enjoy.
            </p>
          </div>
          <h3 className="mt-6 text-xl font-bold text-pink-700">Why Choose Us</h3>
          <ul className="list-disc pl-6 mt-2 text-pink-900/80 space-y-1">
            <li>Factory fresh production</li>
            <li>Colorful, family-friendly flavors</li>
            <li>Quality ingredients and hygiene</li>
            <li>Custom orders for events and parties</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
