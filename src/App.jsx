import Navbar from './Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}
