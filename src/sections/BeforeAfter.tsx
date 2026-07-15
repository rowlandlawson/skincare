import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const comparisons = [
  {
    id: 1,
    title: 'Brightening Transformation',
    type: 'image',
    media: 'https://res.cloudinary.com/drpwe6wjp/image/upload/v1784055681/Untitled_design_11_ymohpt.png',
  },
  {
    id: 2,
    title: 'Acne Clearing Journey',
    type: 'video',
    media: 'https://res.cloudinary.com/drpwe6wjp/video/upload/v1784055713/video_2026-07-14_19-55-33_taadxa.mp4',
  },
]

export default function BeforeAfter() {
  const [selectedMedia, setSelectedMedia] = useState<{ type: string; media: string; title: string } | null>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
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
    cardsRef.current.filter(Boolean).forEach((card, i) => {
      if (!card) return
      gsap.set(card, { opacity: 0, y: 28, scale: 0.98 })
      const st = ScrollTrigger.create({
        trigger: card, start: 'top 88%', once: true,
        onEnter: () => gsap.to(card, { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: i * 0.15, ease: 'power3.out' }),
      })
      triggers.push(st)
    })

    return () => { triggers.forEach(t => t.kill()) }
  }, [])

  return (
    <section style={{
      background: 'linear-gradient(180deg, #0a0a0b 0%, #12100e 100%)',
      paddingTop: '8rem',
      paddingBottom: '8rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Gold orb */}
      <div className="orb" style={{
        width: '500px', height: '500px',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)',
      }} />

      <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
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
            Real Skin,{' '}
            <em style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #c9a96e, #e8d5a3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Real Results
            </em>
          </h2>
          <p className="text-body-l" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '420px', margin: '1rem auto 0' }}>
            Actual results from our customers using authentic O4 Beauty products.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {comparisons.map((comp, i) => (
            <div
              key={comp.id}
              ref={el => { cardsRef.current[i] = el }}
              className="glass-card w-full cursor-pointer hover:border-white/20 transition-colors"
              style={{ opacity: 0, overflow: 'hidden' }}
              onClick={() => setSelectedMedia(comp)}
            >
              {/* Media area */}
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[450px] overflow-hidden bg-[#1c1c1c]">
                {comp.type === 'video' ? (
                  <video
                    src={comp.media}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={comp.media}
                    alt={comp.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}

                {/* Before/After overlay labels - only for images as videos typically have their own transitions or split */}
                {comp.type === 'image' && (
                  <div style={{ position: 'absolute', inset: 0, display: 'flex' }}>
                    <div style={{
                      width: '50%', display: 'flex', alignItems: 'flex-end', padding: '1rem',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)',
                    }}>
                      <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase' }}>Before</span>
                    </div>
                    <div style={{
                      width: '1px',
                      background: 'rgba(255,255,255,0.3)',
                      position: 'absolute',
                      top: 0, bottom: 0, left: '50%',
                    }} />
                    <div style={{
                      width: '50%', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', padding: '1rem',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)',
                    }}>
                      <span style={{
                        fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em',
                        color: 'var(--color-gold)', textTransform: 'uppercase',
                      }}>After</span>
                    </div>
                  </div>
                )}
                {/* Weeks badge */}
                <div style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  background: 'var(--grad-gold)',
                  color: 'var(--color-black)',
                  fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '0.3rem 0.75rem', borderRadius: '100px',
                }}>

                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 400, color: 'var(--color-white)', marginBottom: '0.4rem' }}>
                  {comp.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Media Viewer Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors z-10 bg-black/50 p-2 rounded-full"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-5xl w-full flex flex-col items-center justify-center"
            >
              {selectedMedia.type === 'video' ? (
                <video
                  src={selectedMedia.media}
                  controls
                  autoPlay
                  className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
                />
              ) : (
                <img
                  src={selectedMedia.media}
                  alt={selectedMedia.title}
                  className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain"
                />
              )}
              
              <h3 className="text-white text-xl mt-6 font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {selectedMedia.title}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
