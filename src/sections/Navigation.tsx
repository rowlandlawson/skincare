import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'HOME', href: '#' },
  { label: 'SHOP', href: '/#all-products' },
  { label: 'RESULTS', href: '#reviews' },
  { label: 'CONTACT', href: '#faq' },
]

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (href: string) => {
    setMenuOpen(false)

    // Defer execution to avoid React compiler complaints about mutating globals in handlers
    setTimeout(() => {
      if (href === '#' || href === '/') {
        window.history.pushState(null, '', window.location.pathname)
        window.dispatchEvent(new Event('hashchange'))
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      if (href === '/#all-products' || href === '#all-products') {
        window.history.pushState(null, '', '#all-products')
        window.dispatchEvent(new Event('hashchange'))
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      if (window.location.hash === '#all-products') {
        // Transition back to home page first, then scroll
        window.history.pushState(null, '', href)
        window.dispatchEvent(new Event('hashchange'))
        setTimeout(() => {
          const el = document.querySelector(href)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        const el = document.querySelector(href)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
          window.history.pushState(null, '', href)
        }
      }
    }, 0)
  }

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: '6rem',
          display: 'flex',
          alignItems: 'center',
          background: '#0a0a0b',
        }}
      >
        <div className="container-main w-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setTimeout(() => {
                window.history.pushState(null, '', window.location.pathname)
                window.dispatchEvent(new Event('hashchange'))
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }, 0)
            }}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          >
            <div style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              border: '1px solid #c9a96e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ fontSize: '11px', fontWeight: 500, color: '#c9a96e', letterSpacing: '0.05em' }}>O4</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                color: 'var(--color-white)',
                textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif',
                lineHeight: 1.2
              }}>
                O4 Beauty
              </span>
              <span style={{
                fontSize: '9px',
                fontWeight: 400,
                letterSpacing: '0.2em',
                color: 'rgba(255,255,255,0.6)',
                textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif',
              }}>
                Skincare
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-10" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-white)',
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  padding: '0.5rem',
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Menu */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="hidden md:inline-block" style={{
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              color: 'var(--color-white)',
              textTransform: 'uppercase'
            }}>
              MENU
            </span>
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem', color: 'var(--color-white)' }}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={26} strokeWidth={1} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 60,
          background: 'rgba(10,10,11,0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '6rem', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              border: '1px solid #c9a96e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ fontSize: '11px', fontWeight: 500, color: '#c9a96e', letterSpacing: '0.05em' }}>O4</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                color: 'var(--color-white)',
                textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif',
                lineHeight: 1.2
              }}>
                O4 Beauty
              </span>
              <span style={{
                fontSize: '9px',
                fontWeight: 400,
                letterSpacing: '0.2em',
                color: 'rgba(255,255,255,0.6)',
                textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif',
              }}>
                Skincare
              </span>
            </div>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-white)', padding: '0.5rem' }}
            aria-label="Close menu"
          >
            <X size={26} strokeWidth={1} />
          </button>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', paddingTop: '3rem' }}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2.5rem',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.85)',
                letterSpacing: '-0.01em',
                padding: '0.5rem 2rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#c9a96e')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
