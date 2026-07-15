import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const whatsappUrl =
  "https://wa.me/2348154080021?text=Hi%20O4%20Beauty%2C%20I'm%20interested%20in%20your%20skincare%20products"

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const supportRef = useRef<HTMLDivElement>(null)
  const orb1Ref = useRef<HTMLDivElement>(null)
  const orb2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
      },
    })

    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll('.word')
      gsap.set(words, { opacity: 0, y: 30, rotateX: 15 })
      tl.to(words, {
        opacity: 1, y: 0, rotateX: 0,
        duration: 0.6, stagger: 0.06, ease: 'power3.out',
      })
    }

    tl.fromTo(subRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.3')
    tl.fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, '-=0.2')
    tl.fromTo(supportRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, '-=0.1')

    // Orb float
    gsap.to(orb1Ref.current, { y: -20, x: 10, duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    gsap.to(orb2Ref.current, { y: 15, x: -15, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2 })

    return () => { tl.kill() }
  }, [])

  const headlineWords = ['Ready', 'for', 'Healthier,', 'Brighter', 'Skin?']

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'linear-gradient(180deg, #12100e 0%, #0a0a0b 50%, #0d0b10 100%)',
        paddingTop: '8rem',
        paddingBottom: '8rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative orbs */}
      <div ref={orb1Ref} className="orb" style={{
        width: '500px', height: '500px',
        top: '-150px', right: '-200px',
        background: 'radial-gradient(circle, rgba(201,169,110,0.1) 0%, transparent 70%)',
      }} />
      <div ref={orb2Ref} className="orb" style={{
        width: '400px', height: '400px',
        bottom: '-100px', left: '-150px',
        background: 'radial-gradient(circle, rgba(196,134,122,0.08) 0%, transparent 70%)',
      }} />

      {/* Horizontal gold line */}
      <div style={{
        position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.2), transparent)',
      }} />

      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Decorative star */}
        <div style={{
          width: '3.5rem', height: '3.5rem', margin: '0 auto 2rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: '50%',
          background: 'linear-gradient(145deg, rgba(201,169,110,0.12) 0%, rgba(201,169,110,0.04) 100%)',
          border: '1px solid rgba(201,169,110,0.2)',
        }}>
          <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>✦</span>
        </div>

        <h2
          ref={headlineRef}
          style={{ perspective: '800px' }}
        >
          {headlineWords.map((word, i) => (
            <span
              key={i}
              className="word"
              style={{
                display: 'inline-block',
                marginRight: '0.2em',
                opacity: 0,
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(40px, 5vw, 64px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: (word === 'Healthier,' || word === 'Brighter') ? undefined : 'var(--color-white)',
                background: (word === 'Healthier,' || word === 'Brighter') ? 'linear-gradient(135deg, #c9a96e, #e8d5a3)' : undefined,
                WebkitBackgroundClip: (word === 'Healthier,' || word === 'Brighter') ? 'text' : undefined,
                WebkitTextFillColor: (word === 'Healthier,' || word === 'Brighter') ? 'transparent' : undefined,
                backgroundClip: (word === 'Healthier,' || word === 'Brighter') ? 'text' : undefined,
                fontStyle: (word === 'Healthier,' || word === 'Brighter') ? 'italic' : 'normal',
              }}
            >
              {word}
            </span>
          ))}
        </h2>

        <p
          ref={subRef}
          className="text-body-l"
          style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '440px', margin: '1.5rem auto 0', opacity: 0 }}
        >
          Join 40,000+ happy customers who trust O4 Beauty for their skincare.
          Message us on WhatsApp and let's get your skin glowing.
        </p>

        <div ref={ctaRef} style={{ marginTop: '2.5rem', opacity: 0 }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '1rem 2.5rem', fontSize: '14px' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Shop on WhatsApp
          </a>
        </div>

        <div ref={supportRef} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem', opacity: 0 }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: '#25D366',
            boxShadow: '0 0 8px rgba(37,211,102,0.5)',
            animation: 'pulse-dot 2s ease-in-out infinite',
          }} />
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em' }}>
            Usually responds within minutes
          </span>
        </div>
      </div>
    </section>
  )
}
