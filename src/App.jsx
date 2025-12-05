import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#F0F9FF] dark:bg-[#0C1421] antialiased">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
