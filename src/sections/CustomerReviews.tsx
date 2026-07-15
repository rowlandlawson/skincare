import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TestimonialsCard } from '@/components/ui/TestimonialsCard'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    id: 1,
    title: 'Chinaza O.',
    description: "I used to have rough, dull skin, but the products I got from O4 Beauty completely changed my complexion. My skin is now so smooth and bright. I get compliments all the time!",
    image: '/assets/avatar-chinaza.jpg',
  },
  {
    id: 2,
    title: 'Adewale B.',
    description: "I didn't believe in skincare before, but the routine O4 Beauty recommended worked so well for me. My dark spots are fading and my skin has never looked better.",
    image: '/assets/avatar-adewale.jpg',
  },
  {
    id: 3,
    title: 'Fatima S.',
    description: "The sunscreen is amazing — no white cast, blends perfectly into my skin, and it's so affordable. I order all my skincare from O4 Beauty now. Truly authentic products!",
    image: '/assets/avatar-fatima.jpg',
  },
]

export default function CustomerReviews() {
  const headRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (headRef.current) {
      gsap.set(headRef.current, { opacity: 0, y: 24 })
      ScrollTrigger.create({
        trigger: headRef.current, start: 'top 85%', once: true,
        onEnter: () => gsap.to(headRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }),
      })
    }

    if (cardRef.current) {
      gsap.set(cardRef.current, { opacity: 0, scale: 0.95 })
      ScrollTrigger.create({
        trigger: cardRef.current, start: 'top 85%', once: true,
        onEnter: () => gsap.to(cardRef.current, { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }),
      })
    }
  }, [])

  return (
    <section id="reviews" style={{ background: 'var(--color-charcoal)', paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="container-main">
        {/* Header */}
        <div ref={headRef} style={{ textAlign: 'center', marginBottom: '4rem', opacity: 0 }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(38px, 4.5vw, 60px)',
            fontWeight: 300,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: 'var(--color-white)',
            marginTop: '0.5rem',
          }}>
            Real Results,{' '}
            <em style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #c9a96e, #e8d5a3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Real Reviews
            </em>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div ref={cardRef} style={{ opacity: 0 }} className="flex justify-center w-full">
          <TestimonialsCard
            items={testimonials}
            width={700}
            autoPlay={false}
            autoPlayInterval={5000}
            className="w-full max-w-4xl"
          />
        </div>
      </div>
    </section>
  )
}
