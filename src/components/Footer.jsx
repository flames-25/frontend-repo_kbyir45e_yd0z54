export default function Footer(){
  return (
    <footer className="bg-gradient-to-r from-amber-200 via-pink-200 to-fuchsia-200 border-t border-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-semibold text-pink-800">© {new Date().getFullYear()} 5 STAR ICREAM — All rights reserved.</p>
          <div className="text-xs text-pink-900/80 flex flex-wrap items-center gap-3">
            <span>Factory Fresh</span>
            <span>•</span>
            <span>Colorful • Creamy • Happy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
