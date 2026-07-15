import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'Are your products authentic and original?',
    answer: 'Yes, absolutely. Every single product we sell is 100% authentic and sourced directly from trusted brands and verified suppliers. We never sell fakes, expired products, or imitations. Your skin deserves only the best.',
  },
  {
    question: 'How do I place an order?',
    answer: "Simply tap any 'Order on WhatsApp' button on this page, or send us a message directly on WhatsApp. Let us know which products you'd like and your delivery address. We'll confirm your order, share the total cost including delivery, and guide you through payment.",
  },
  {
    question: 'Do you deliver nationwide?',
    answer: 'Yes, we deliver to all states in Nigeria. Delivery times vary by location — typically 1–3 days within Lagos and 3–7 days to other states. We work with reliable courier partners to ensure your products arrive safely.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: "We accept bank transfers, mobile transfers, and other convenient payment methods. Once you confirm your order on WhatsApp, we'll share our payment details. Your order is processed and shipped immediately after payment confirmation.",
  },
  {
    question: 'Can you recommend products for my skin type?',
    answer: "Of course! That's exactly what we're here for. Message us on WhatsApp and tell us about your skin concerns, type, and goals. Our team will recommend a personalized routine tailored specifically for you — no guesswork needed.",
  },
  {
    question: 'How long does delivery take?',
    answer: 'Within Lagos: 1–3 business days. To other states: 3–7 business days. We process orders quickly and provide tracking information so you can follow your delivery every step of the way.',
  },
]

function AccordionItem({ item, isOpen, onToggle, index }: { item: FAQItem; isOpen: boolean; onToggle: () => void; index: number }) {
  const answerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!answerRef.current || !contentRef.current) return
    if (isOpen) {
      const height = contentRef.current.offsetHeight
      gsap.set(answerRef.current, { height: 0, opacity: 0, overflow: 'hidden' })
      gsap.to(answerRef.current, { height, opacity: 1, duration: 0.4, ease: 'power3.out' })
    } else {
      gsap.to(answerRef.current, { height: 0, opacity: 0, duration: 0.3, ease: 'power3.inOut' })
    }
  }, [isOpen])

  return (
    <div
      className="accordion-item"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', transition: 'border-color 0.2s' }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderBottomColor = 'rgba(201,169,110,0.2)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderBottomColor = 'rgba(255,255,255,0.07)' }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.5rem 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1rem',
            fontWeight: 400,
            color: isOpen ? 'var(--color-gold)' : 'rgba(255,255,255,0.35)',
            width: '1.5rem',
            flexShrink: 0,
            transition: 'color 0.2s',
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span style={{
            fontSize: '15px',
            fontWeight: 400,
            color: isOpen ? 'var(--color-white)' : 'rgba(255,255,255,0.75)',
            letterSpacing: '0.01em',
            transition: 'color 0.2s',
          }}>
            {item.question}
          </span>
        </div>
        <div style={{
          width: '1.75rem',
          height: '1.75rem',
          borderRadius: '50%',
          border: `1px solid ${isOpen ? 'rgba(201,169,110,0.5)' : 'rgba(255,255,255,0.12)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'all 0.3s',
          background: isOpen ? 'rgba(201,169,110,0.1)' : 'transparent',
        }}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            style={{ transition: 'transform 0.3s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
          >
            <path d="M5 1v8M1 5h8" stroke={isOpen ? '#c9a96e' : 'rgba(255,255,255,0.5)'} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </button>
      <div ref={answerRef} style={{ overflow: 'hidden', height: 0, opacity: 0 }}>
        <div ref={contentRef} style={{ paddingBottom: '1.5rem', paddingLeft: '2.5rem' }}>
          <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, fontWeight: 300 }}>
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const accordionRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (headRef.current) {
      gsap.set(headRef.current, { opacity: 0, y: 24 })
      ScrollTrigger.create({
        trigger: headRef.current, start: 'top 85%', once: true,
        onEnter: () => gsap.to(headRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }),
      })
    }
    if (accordionRef.current) {
      gsap.set(accordionRef.current, { opacity: 0, y: 24 })
      ScrollTrigger.create({
        trigger: accordionRef.current, start: 'top 85%', once: true,
        onEnter: () => gsap.to(accordionRef.current, { opacity: 1, y: 0, duration: 0.7, delay: 0.1, ease: 'power3.out' }),
      })
    }
  }, [])

  return (
    <section id="faq" style={{ background: 'var(--color-dark)', paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="container-main">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'start' }} className="lg:grid-cols-[360px_1fr]">

          {/* Left header */}
          <div ref={headRef} style={{ opacity: 0 }}>
            <span className="section-tag">FAQ</span>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(38px, 4vw, 54px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: 'var(--color-white)',
              marginTop: '0.75rem',
            }}>
              Questions?<br />
              <em style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #c9a96e, #e8d5a3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                We've Got Answers.
              </em>
            </h2>
            <p className="text-body-l" style={{ color: 'rgba(255,255,255,0.4)', marginTop: '1.25rem', maxWidth: '280px' }}>
              Everything you need to know about ordering from O4 Beauty.
            </p>

            <a
              href="https://wa.me/2348154080021?text=Hi%20O4%20Beauty%2C%20I%20have%20a%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ display: 'inline-flex', marginTop: '2rem' }}
            >
              Ask a Question
            </a>
          </div>

          {/* Right accordion */}
          <div ref={accordionRef} style={{ opacity: 0 }}>
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
