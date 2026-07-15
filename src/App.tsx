import { useEffect, useState } from 'react'
import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import FeaturedProducts from './sections/FeaturedProducts'
// import WhyChoose from './sections/WhyChoose'
import CustomerReviews from './sections/CustomerReviews'
import BeforeAfter from './sections/BeforeAfter'
// import HowItWorks from './sections/HowItWorks'
import FAQ from './sections/FAQ'
// import FinalCTA from './sections/FinalCTA'
import Footer from './sections/Footer'
import FloatingWhatsApp from './sections/FloatingWhatsApp'
import AllProducts from './pages/AllProducts'

function App() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)

    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  if (hash === '#all-products') {
    return (
      <div style={{ minHeight: '100vh' }}>
        <Navigation />
        <AllProducts />
        <Footer />
        <FloatingWhatsApp />
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-black)' }}>
      <Navigation />
      <main>
        <Hero />
        <FeaturedProducts />
        {/* <WhyChoose /> */}
        <CustomerReviews />
        <BeforeAfter />
        {/* <HowItWorks /> */}
        <FAQ />
        {/* <FinalCTA /> */}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
