const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'Products', href: '/#all-products' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

const socialLinks = [
  { label: 'TikTok', href: 'https://www.tiktok.com/@o4beautyloungeskincare' },
  { label: 'Instagram', href: 'https://www.instagram.com/o4beautyloungeskincare/' },
  { label: 'WhatsApp', href: 'https://wa.me/2348154080021' },
]

const scrollTo = (href: string) => {
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

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--color-black)',
      borderTop: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div className="container-main" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        {/* Flex row on desktop, column on mobile */}
        <div className="flex flex-col md:flex-row gap-12">

          {/* Brand – takes 2x the space of other columns on desktop */}
          <div className="md:flex-[2]">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{
                width: '2rem', height: '2rem', borderRadius: '50%',
                background: 'linear-gradient(135deg, #c9a96e, #e8d5a3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#0a0a0b' }}>O4</span>
              </div>
              <span style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--color-white)',
                letterSpacing: '-0.01em',
              }}>
                O4 Beauty
              </span>
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.75, maxWidth: '320px' }}>
              Authentic skincare products for every skin type. Trusted by 40,000+
              customers across Nigeria. SPA Treatment, Training & Skincare Products.
            </p>
            <div style={{ width: '2.5rem', height: '1px', background: 'linear-gradient(90deg, var(--color-gold), transparent)', marginTop: '1.5rem', marginBottom: '1.5rem' }} />
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.06em' }}>
              &copy; 2026 O4 Beauty Skincare · Abule Egba, Lagos. All rights reserved.
            </p>
          </div>

          {/* Quick Links – equal flex share on desktop */}
          <div className="md:flex-1">
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1.25rem' }}>
              Quick Links
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                    fontSize: '14px', color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s',
                    padding: 0,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-white)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect – equal flex share on desktop */}
          <div className="md:flex-1">
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1.25rem' }}>
              Connect
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '14px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-white)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1.25rem', marginTop: '1.5rem' }}>
              <span
                style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', cursor: 'pointer', transition: 'color 0.2s', letterSpacing: '0.04em' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}
              >
                Privacy Policy
              </span>
              <span
                style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', cursor: 'pointer', transition: 'color 0.2s', letterSpacing: '0.04em' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}
              >
                Terms
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.04)',
        padding: '1.25rem 0',
        textAlign: 'center',
      }}>
        <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.1em' }}>
          SKINCARE · FACIALS · EXFOLIATION · SKIN POLISH · SPA TREATMENT
        </span>
      </div>
    </footer>
  )
}