import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '01',
    title: 'Choose Products',
    description: "Browse our curated collection and pick the products that match your skin's needs.",
    icon: '◈',
  },
  {
    number: '02',
    title: 'Message on WhatsApp',
    description: "Tap any Order button to open WhatsApp. Tell us what you'd like and your delivery location.",
    icon: '✉',
  },
  {
    number: '03',
    title: 'Confirm Your Order',
    description: "We'll confirm availability, total cost, and delivery timeline. Payment is simple and secure.",
    icon: '✓',
  },
  {
    number: '04',
    title: 'Receive Delivery',
    description: 'Sit back and relax. Your authentic skincare products are delivered to your doorstep nationwide.',
    icon: '◎',
  },
]

export default function HowItWorks() {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])
  const headRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (headRef.current) {
      gsap.set(headRef.current, { opacity: 0, y: 24 })
      ScrollTrigger.create({
        trigger: headRef.current, start: 'top 85%', once: true,
        onEnter: () => gsap.to(headRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }),
      })
    }

    if (lineRef.current) {
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: 'left center' })
      ScrollTrigger.create({
        trigger: lineRef.current, start: 'top 85%', once: true,
        onEnter: () => gsap.to(lineRef.current, { scaleX: 1, duration: 1.2, ease: 'power3.out' }),
      })
    }

    const triggers: ScrollTrigger[] = []
    stepsRef.current.filter(Boolean).forEach((step, i) => {
      if (!step) return
      gsap.set(step, { opacity: 0, y: 24 })
      const st = ScrollTrigger.create({
        trigger: step, start: 'top 88%', once: true,
        onEnter: () => gsap.to(step, { opacity: 1, y: 0, duration: 0.7, delay: i * 0.15, ease: 'power3.out' }),
      })
      triggers.push(st)
    })

    return () => { triggers.forEach(t => t.kill()) }
  }, [])

  return (
    <section
      id="how-it-works"
      style={{ background: 'var(--color-charcoal)', paddingTop: '8rem', paddingBottom: '8rem' }}
    >
      <div className="container-main">
        {/* Header */}
        <div ref={headRef} style={{ textAlign: 'center', marginBottom: '5rem', opacity: 0 }}>
          <span className="section-tag">How to Order</span>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(38px, 4.5vw, 60px)',
            fontWeight: 300,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: 'var(--color-white)',
            marginTop: '0.5rem',
          }}>
            Get Your Skincare in{' '}
            <em style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #c9a96e, #e8d5a3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              4 Simple Steps
            </em>
          </h2>
          <p className="text-body-l" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '400px', margin: '1rem auto 0' }}>
            No complicated checkout. No payment hassles. Just message us and we handle the rest.
          </p>
        </div>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          {/* Connecting line desktop */}
          <div
            ref={lineRef}
            className="hidden lg:block"
            style={{
              position: 'absolute',
              top: '1.5rem',
              left: '12.5%',
              right: '12.5%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.4), var(--color-gold), rgba(201,169,110,0.4), transparent)',
              zIndex: 0,
            }}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '2.5rem', position: 'relative', zIndex: 1 }} className="sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.number}
                ref={el => { stepsRef.current[i] = el }}
                style={{ textAlign: 'center', opacity: 0 }}
              >
                {/* Number circle */}
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #c9a96e 0%, #e8d5a3 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  boxShadow: '0 8px 24px rgba(201,169,110,0.3)',
                }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-black)', letterSpacing: '0.05em' }}>
                    {step.number}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.35rem',
                  fontWeight: 400,
                  color: 'var(--color-white)',
                  marginBottom: '0.6rem',
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: '220px', margin: '0 auto' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
