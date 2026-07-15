import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GlowCard } from '@/components/ui/GlowCard'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: '🛡',
    title: 'Authentic Products',
    description: 'Every product is carefully sourced directly from trusted brands and verified suppliers. No fakes, no compromises — only 100% original skincare you can trust.',
  },
  {
    icon: '✦',
    title: 'Visible Results',
    description: 'We select products known for real, consistent improvement. Our customers see changes they can notice — clearer skin, brighter tone, lasting hydration.',
  },
  {
    icon: '◈',
    title: 'Fast Delivery',
    description: "Nationwide shipping with quick processing. Whether you're in Lagos, Abuja, Port Harcourt, or anywhere in Nigeria — your order arrives promptly.",
  },
  {
    icon: '♡',
    title: 'Personal Support',
    description: "Friendly, knowledgeable assistance before and after your purchase. Need product recommendations? Having issues? We're here on WhatsApp, always.",
  },
]

export default function WhyChoose() {
  const blocksRef = useRef<(HTMLDivElement | null)[]>([])
  const headRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (headRef.current) {
      gsap.set(headRef.current, { opacity: 0, y: 24 })
      ScrollTrigger.create({
        trigger: headRef.current, start: 'top 85%', once: true,
        onEnter: () => gsap.to(headRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }),
      })
    }

    const triggers: ScrollTrigger[] = []
    blocksRef.current.filter(Boolean).forEach((block, i) => {
      if (!block) return
      gsap.set(block, { opacity: 0, y: 24 })
      const st = ScrollTrigger.create({
        trigger: block, start: 'top 88%', once: true,
        onEnter: () => gsap.to(block, { opacity: 1, y: 0, duration: 0.7, delay: i * 0.12, ease: 'power3.out' }),
      })
      triggers.push(st)
    })

    return () => { triggers.forEach(t => t.kill()) }
  }, [])

  return (
    <section style={{ background: '#0d0d10', paddingTop: '8rem', paddingBottom: '8rem', position: 'relative', overflow: 'hidden' }}>
      {/* Background texture */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5rem', alignItems: 'start' }} className="lg:grid-cols-[380px_1fr]">

          {/* Left header */}
          <div ref={headRef} style={{ opacity: 0 }}>
            <span className="section-tag">Why O4 Beauty</span>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(38px, 4.5vw, 58px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: 'var(--color-white)',
              marginTop: '0.75rem',
            }}>
              The O4 Beauty<br />
              <em style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #c9a96e, #e8d5a3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Difference
              </em>
            </h2>
            <p className="text-body-l" style={{ color: 'rgba(255,255,255,0.45)', marginTop: '1.25rem', maxWidth: '320px' }}>
              We don't just sell products. We deliver real results backed by expert knowledge.
            </p>

            {/* Decorative line */}
            <div style={{ width: '3rem', height: '1px', background: 'linear-gradient(90deg, #c9a96e, transparent)', marginTop: '2rem' }} />
          </div>

          {/* Right features grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '2rem' }} className="sm:grid-cols-2">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                ref={el => { blocksRef.current[i] = el }}
                style={{ opacity: 0 }}
              >
                <GlowCard className="h-full" glowColor="rgba(201, 169, 110, 0.25)">
                  <div className="glass-card" style={{ padding: '2rem', cursor: 'default', height: '100%', border: 'none' }}>
                    <div className="feature-icon">
                      <span style={{ fontSize: '1.4rem' }}>{feature.icon}</span>
                    </div>
                    <h3 style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.4rem',
                      fontWeight: 400,
                      color: 'var(--color-white)',
                      marginTop: '1.1rem',
                      marginBottom: '0.6rem',
                      letterSpacing: '-0.01em',
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>
                      {feature.description}
                    </p>
                  </div>
                </GlowCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
