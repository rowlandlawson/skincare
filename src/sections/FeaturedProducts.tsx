import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const whatsappBase = 'https://wa.me/2348154080021?text='
const getOrderUrl = (name: string) => `${whatsappBase}${encodeURIComponent(`Hi O4 Beauty, I'm interested in ordering ${name}`)}`

const products = [
  {
    id: 1,
    title: "The Glow Essentials Set",
    description: 'Hydrate, brighten and protect for a healthy, radiant glow.',
    price: '₦45,000',
    badge: 'BESTSELLER',
    image: 'https://res.cloudinary.com/drpwe6wjp/image/upload/v1784056000/photo_2026-07-14_19-51-32_raszjq.jpg',
    orderUrl: getOrderUrl("The Glow Essentials Set"),
  },
  {
    id: 2,
    title: 'Radiance Serum',
    description: 'Brightens, evens skin tone and boosts your natural glow.',
    price: '₦18,000',
    badge: '',
    image: 'https://res.cloudinary.com/drpwe6wjp/image/upload/v1784055913/photo_2026-07-14_19-51-39_abtaid.jpg',
    orderUrl: getOrderUrl('Radiance Serum'),
  },
  {
    id: 3,
    title: 'Nourish Cream',
    description: 'Deeply hydrates and strengthens your skin barrier.',
    price: '₦15,000',
    badge: '',
    image: 'https://res.cloudinary.com/drpwe6wjp/image/upload/v1784055874/photo_2026-07-14_19-51-47_amwvct.jpg',
    orderUrl: getOrderUrl('Nourish Cream'),
  },
]

export default function FeaturedProducts() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    gsap.set(containerRef.current, { opacity: 0, y: 32 })
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(containerRef.current, {
          opacity: 1, y: 0, duration: 0.8,
          ease: 'power3.out',
        })
      },
    })

    return () => st.kill()
  }, [])

  return (
    <section id="products" className="bg-[#0a0a0b] py-20 md:py-32 overflow-hidden">
      <div className="container-main mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 relative z-10">
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            color: '#fff',
          }}>
            Products Your Skin <br className="md:hidden" />
            <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Will Love</em>
          </h2>

          <div className="w-8 h-[1px] bg-[#c9a96e] mt-6 mb-6" />


          <a href="#all-products"
            className="inline-flex items-center justify-center rounded-full border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black transition-all px-8 py-3 text-[11px] font-bold tracking-widest">
            BROWSE ALL PRODUCTS
          </a>
        </div>

        {/* Product Cards Container (Horizontal Scroll on Mobile, 3-Column Grid on Desktop) */}
        <div ref={containerRef} className="flex overflow-x-auto md:overflow-x-visible md:grid md:grid-cols-3 gap-5 md:gap-8 snap-x snap-mandatory pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

          {/* Custom style to hide scrollbar for webkit directly in JSX */}
          <style dangerouslySetInnerHTML={{
            __html: `
            .flex::-webkit-scrollbar { display: none; }
          `}} />

          {products.map(product => (
            <div key={product.id}
              className="min-w-[75vw] sm:min-w-[320px] md:min-w-0 md:w-full flex flex-col bg-[#131313] rounded-3xl border border-white/5 overflow-hidden snap-center flex-shrink-0">

              {/* Image Section */}
              <div className="w-full relative bg-[#1c1c1c]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-[250px] md:h-[300px] lg:h-[350px]"
                />
                {product.badge && (
                  <div className="absolute top-6 left-6 bg-[#e8d5a3] text-black px-3 py-1.5 rounded-sm text-[10px] font-bold tracking-widest z-10">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="w-full p-6 lg:p-8 flex flex-col justify-between flex-grow text-left">
                <div>
                  <h3 className="text-white text-xl lg:text-2xl font-light mb-3" style={{ letterSpacing: '-0.01em' }}>
                    {product.title}
                  </h3>
                  <p className="text-white/50 text-[13px] md:text-[15px] leading-relaxed mb-6 md:mb-8 max-w-sm">
                    {product.description}
                  </p>
                </div>
                <div>
                  <div className="w-12 h-[1px] bg-white/10 mb-6" />
                  <div className="text-[#c9a96e] text-lg lg:text-2xl font-light mb-5 md:mb-6">
                    {product.price}
                  </div>

                  <a
                    href={product.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-[#c9a96e]/40 text-[#c9a96e] hover:bg-[#c9a96e] hover:text-black transition-colors rounded-full px-6 py-3.5 w-max text-[10px] md:text-[11px] font-bold tracking-widest"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    SHOP ON WHATSAPP
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
