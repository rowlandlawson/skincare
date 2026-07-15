import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import MorphText from '@/components/ui/MorphText'

const whatsappUrl =
  "https://wa.me/2348154080021?text=Hi%20O4%20Beauty%2C%20I'm%20interested%20in%20your%20skincare%20products"

export default function Hero() {
  const [showPreloader, setShowPreloader] = useState(true)

  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // The MorphText takes (interval/1000) * words.length seconds.
    // Let's use 1500ms per word, 3 words = 4500ms.
    // Wait for that to finish, then fade out preloader and animate hero in.
    const timer = setTimeout(() => {
      setShowPreloader(false)
    }, 4500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!showPreloader && heroRef.current && contentRef.current && imageRef.current) {
      const tl = gsap.timeline()

      tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.out' })
      tl.fromTo(contentRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
        "-=0.5"
      )
      tl.fromTo(imageRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out' },
        "-=0.8"
      )
    }
  }, [showPreloader])

  return (
    <>
      {/* Preloader */}
      {showPreloader && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: '#0a0a0b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <MorphText
            words={["AUTHENTIC", "TRUSTED", "EFFECTIVE"]}
            interval={1500}
            fontSize="clamp(2rem, 8vw, 5rem)"
            textClassName="text-[#c9a96e]"
          />
        </div>
      )}

      {/* Main Hero Background */}
      <section
        ref={heroRef}
        style={{
          minHeight: '100dvh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          opacity: showPreloader ? 0 : 1,
          background: 'url("https://res.cloudinary.com/drpwe6wjp/image/upload/v1784049296/ChatGPT_Image_Jul_14_2026_06_14_19_PM_umia4h.png") center/cover no-repeat',
        }}
      >
        <div className="container-main w-full" style={{ paddingTop: '8rem', paddingBottom: '4rem', zIndex: 1 }}>
          <div className="flex relative w-full h-full min-h-[70vh] items-center">

            {/* Mobile overlay for text readability - stationary */}
            <div className="absolute w-[200vw] h-[200vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-black/90 via-black/50 to-transparent md:hidden z-10 pointer-events-none" />

            {/* Left – Text Content */}
            <div ref={contentRef} className="w-full lg:w-1/2 flex flex-col items-start text-left relative z-20 md:pr-0">
              <div style={{
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                color: '#c9a96e',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}>
                AUTHENTIC. TRUSTED. EFFECTIVE.
              </div>

              <h1 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: '#fff',
                marginBottom: '0.5rem',
                letterSpacing: '-0.02em'
              }}>
                Skin That <br className="hidden lg:block" /> Speaks Before <br />
                <em style={{
                  fontStyle: 'italic',
                  color: '#c9a96e'
                }}>You Do.</em>
              </h1>

              {/* Mobile-only gold horizontal line */}
              <div className="lg:hidden w-12 h-[1px] bg-[#c9a96e] my-4" />

              <p style={{
                fontSize: 'clamp(14px, 2vw, 1.125rem)',
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.8)',
                maxWidth: '450px',
                marginTop: '1rem',
                fontWeight: 300
              }}>
                Original skincare products trusted <br className="hidden lg:block" />
                by over 40,000 Nigerians. <br className="hidden lg:block" />
                Expert-curated routines, fairly priced, <br className="hidden lg:block" />
                delivered to your door.
              </p>

              <div style={{ marginTop: '2.5rem' }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#d4b77f',
                    color: '#000',
                    padding: '0.85rem 1.25rem',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  SHOP ON WHATSAPP
                </a>
              </div>

            </div>

            {/* Background / Right – Image */}
            <div ref={imageRef} className="absolute inset-0 md:inset-auto md:right-0 md:bottom-0 md:w-1/2 flex justify-center items-center md:items-end md:justify-end pointer-events-none z-0 overflow-hidden md:overflow-visible">

              <div className="relative w-[380%] sm:w-[220%] md:w-full max-w-[1500px] md:max-w-[700px] lg:max-w-[850px] mx-auto md:ml-auto translate-y-[5%] md:translate-y-0">
                <img
                  src="https://res.cloudinary.com/drpwe6wjp/image/upload/v1784056843/Untitled_design_12_l6174u.png"
                  alt="Hydrating Milk Moisturize & Protect"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}