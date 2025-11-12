import { MapPin } from 'lucide-react'

const locations = [
  { name: 'Main Factory Outlet', address: 'Industrial Area, Sector 12', time: '10:00 AM - 10:00 PM' },
  { name: 'City Center Kiosk', address: 'Central Mall, Ground Floor', time: '11:00 AM - 9:00 PM' },
  { name: 'Lakeside Cart', address: 'Near Lakeside Park Entrance', time: 'Evenings & Weekends' },
]

export default function Locations(){
  return (
    <div className="bg-gradient-to-b from-rose-50 via-pink-50 to-amber-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 text-center">Where to Find Us</h2>
        <p className="text-pink-900/80 text-center mt-2 max-w-2xl mx-auto">Visit our outlets and grab your favorite scoop!</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {locations.map((l, i) => (
            <div key={i} className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow border border-white">
              <div className="flex items-start gap-3">
                <div className="bg-pink-100 text-pink-700 p-2 rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-pink-700">{l.name}</h3>
                  <p className="text-sm text-pink-900/80">{l.address}</p>
                  <p className="text-xs mt-1 text-pink-900/70">Hours: {l.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 h-64 w-full rounded-2xl overflow-hidden shadow border border-white">
          <iframe title="map" className="w-full h-full" src="https://www.openstreetmap.org/export/embed.html?bbox=72.83%2C18.95%2C72.99%2C19.12&amp;layer=mapnik"></iframe>
        </div>
      </div>
    </div>
  )
}
