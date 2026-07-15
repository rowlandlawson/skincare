import { useEffect, useState } from 'react'
import { ShieldCheck, Leaf, Truck, Headset, SlidersHorizontal, ChevronDown, ChevronRight } from 'lucide-react'

const baseProducts = [
  {
    id: 1,
    title: 'Hydrating Milk',
    description: 'Daily moisturizer that hydrates, softens and protects.',
    price: '₦22,000',
    badge: 'BESTSELLER',
    image: 'https://res.cloudinary.com/drpwe6wjp/image/upload/v1784056000/photo_2026-07-14_19-51-32_raszjq.jpg',
  },
  {
    id: 2,
    title: 'Radiance Serum',
    description: 'Brightens skin tone and boosts your natural glow.',
    price: '₦18,000',
    badge: '',
    image: 'https://res.cloudinary.com/drpwe6wjp/image/upload/v1784055913/photo_2026-07-14_19-51-39_abtaid.jpg',
  },
  {
    id: 3,
    title: 'Nourish Cream',
    description: 'Deeply hydrates and strengthens your skin barrier.',
    price: '₦15,000',
    badge: '',
    image: 'https://res.cloudinary.com/drpwe6wjp/image/upload/v1784055874/photo_2026-07-14_19-51-47_amwvct.jpg',
  },
  {
    id: 4,
    title: 'Gentle Cleanser',
    description: 'Removes dirt and impurities without drying your skin.',
    price: '₦10,000',
    badge: '',
    image: 'https://res.cloudinary.com/drpwe6wjp/image/upload/v1784055853/photo_2026-07-14_19-51-51_xgfbqe.jpg',
  },
  {
    id: 5,
    title: 'Glow Essence Toner',
    description: 'Balances skin pH and preps it for maximum absorption.',
    price: '₦12,500',
    badge: 'NEW',
    image: 'https://res.cloudinary.com/drpwe6wjp/image/upload/v1784055852/photo_2026-07-14_19-51-58_zrtbca.jpg',
  },
  {
    id: 6,
    title: 'Vitamin C Elixir',
    description: 'Powerful antioxidant protection and deep skin brightening.',
    price: '₦25,000',
    badge: '',
    image: 'https://res.cloudinary.com/drpwe6wjp/image/upload/v1784055833/photo_2026-07-14_19-52-06_ze3kgn.jpg',
  },
  {
    id: 7,
    title: 'Exfoliating Scrub',
    description: 'Gently buffs away dead skin cells for a smoother texture.',
    price: '₦14,000',
    badge: '',
    image: 'https://res.cloudinary.com/drpwe6wjp/image/upload/v1784055833/photo_2026-07-14_19-52-10_o3iz1e.jpg',
  },
  {
    id: 8,
    title: 'Purifying Clay Mask',
    description: 'Draws out impurities and minimizes the appearance of pores.',
    price: '₦16,000',
    badge: 'POPULAR',
    image: 'https://res.cloudinary.com/drpwe6wjp/image/upload/v1784055833/photo_2026-07-14_19-52-02_m3emeq.jpg',
  },
  {
    id: 9,
    title: 'Rosewater Facial Mist',
    description: 'Instantly refreshes and soothes irritated or tired skin.',
    price: '₦8,500',
    badge: '',
    image: 'https://res.cloudinary.com/drpwe6wjp/image/upload/v1784055833/photo_2026-07-14_19-52-16_uxeeb6.jpg',
  },
  {
    id: 10,
    title: 'Night Repair Cream',
    description: 'Intensive overnight treatment for deep skin recovery.',
    price: '₦28,000',
    badge: '',
    image: 'https://res.cloudinary.com/drpwe6wjp/image/upload/v1784055832/photo_2026-07-14_19-52-20_w8wgc5.jpg',
  },
  {
    id: 11,
    title: 'Eye Contour Gel',
    description: 'Reduces puffiness, dark circles, and fine lines.',
    price: '₦13,500',
    badge: '',
    image: 'https://res.cloudinary.com/drpwe6wjp/image/upload/v1784055831/photo_2026-07-14_19-52-27_ksvzn5.jpg',
  }
]

export default function AllProducts() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProduct, setSelectedProduct] = useState<typeof baseProducts[0] | null>(null)

  const productsPerPage = 4
  const totalPages = Math.ceil(baseProducts.length / productsPerPage)
  
  const currentProducts = baseProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ background: '#f5f3ed', minHeight: '100vh', color: '#1a1a1a', paddingTop: '100px', paddingBottom: '0' }}>
      <div className="container-main mx-auto px-4 md:px-8 max-w-[1200px] pt-8 md:pt-16 pb-20">
        
        {/* Header */}
        <div className="mb-10">
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(3rem, 6vw, 4.5rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: '#1a1a1a',
            marginBottom: '0.5rem'
          }}>
            All Products
          </h1>
          <div className="w-10 h-[1px] bg-[#c9a96e] mb-6" />
          <p className="text-[#1a1a1a]/70 text-[15px] md:text-base max-w-md leading-relaxed">
            Discover our handpicked skincare products.<br className="hidden md:block" />
            100% authentic, effective, and loved by thousands.
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex justify-between items-center gap-3 md:gap-4 mb-8">
          <button className="flex-1 md:flex-none flex justify-center items-center gap-2 border border-black/10 rounded-2xl px-4 py-3 md:py-3.5 text-[10px] md:text-xs font-semibold tracking-wider hover:bg-black/5 transition-colors bg-transparent">
            <SlidersHorizontal size={14} strokeWidth={2} />
            FILTER
            <ChevronDown size={14} className="ml-1" />
          </button>
          <button className="flex-1 md:flex-none flex justify-center items-center gap-2 border border-black/10 rounded-2xl px-4 py-3 md:py-3.5 text-[10px] md:text-xs font-semibold tracking-wider hover:bg-black/5 transition-colors bg-transparent">
            SORT BY: FEATURED
            <ChevronDown size={14} className="ml-1" />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-16">
          {currentProducts.map(product => (
            <div 
              key={product.id} 
              onClick={() => setSelectedProduct(product)}
              className="bg-[#fcfbf9] rounded-2xl overflow-hidden flex flex-col border border-black/5 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="relative bg-[#ebe8e0] w-full h-[180px] sm:h-[220px] md:h-[350px] lg:h-[400px]">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-[#e8d5a3] text-black px-2 md:px-3 py-1 md:py-1.5 rounded-sm text-[8px] md:text-[10px] font-bold tracking-widest z-10">
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="p-3 md:p-6 lg:p-8 flex flex-col flex-grow">
                <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-medium text-[#1a1a1a] mb-1 md:mb-2">{product.title}</h3>
                <p className="text-[#1a1a1a]/60 text-[11px] sm:text-xs md:text-[15px] mb-3 md:mb-4 flex-grow line-clamp-2 md:line-clamp-none">{product.description}</p>
                <div className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-[#1a1a1a] mb-4 md:mb-6">{product.price}</div>
                <a 
                  href={`https://wa.me/2348154080021?text=${encodeURIComponent(`Hi O4 Beauty, I'm interested in ordering ${product.title}`)}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={(e) => e.stopPropagation()}
                  className="w-full bg-[#111] hover:bg-black text-white rounded-[14px] md:rounded-2xl py-3 flex items-center justify-center gap-2 transition-colors mt-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[8px] md:text-[10px] font-bold tracking-widest leading-[1.2]">SHOP ON</span>
                    <span className="text-[8px] md:text-[10px] font-bold tracking-widest leading-[1.2]">WHATSAPP</span>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination - Only show if there's more than 1 page */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mb-20">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button 
                key={page}
                onClick={() => {
                  setCurrentPage(page)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                  currentPage === page 
                    ? 'bg-black text-white' 
                    : 'bg-transparent text-black hover:bg-black/5'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button 
              onClick={() => {
                if (currentPage < totalPages) {
                  setCurrentPage(currentPage + 1)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              disabled={currentPage === totalPages}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors ${
                currentPage === totalPages
                  ? 'text-black/30 cursor-not-allowed'
                  : 'bg-transparent text-black hover:bg-black/5'
              }`}
            >
              <ChevronRight size={16} strokeWidth={2.5} />
            </button>
          </div>
        )}
      </div>

      {/* Features Strip (Light Theme) */}
      <div className="bg-[#e8e4db] py-12">
        <div className="container-main mx-auto px-4 md:px-8 max-w-[1200px]">
          <div className="grid grid-cols-4 gap-y-12 gap-x-2 relative">
            <div className="flex flex-col items-center text-center px-1 md:px-4 relative">
              <div className="mb-3 md:mb-4 text-black">
                <ShieldCheck strokeWidth={1.5} className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="text-black text-[10px] md:text-[13px] font-medium leading-tight md:leading-relaxed">
                100%<br/>Authentic
              </div>
              {/* Divider */}
              <div className="absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-black/10" />
            </div>
            
            <div className="flex flex-col items-center text-center px-1 md:px-4 relative">
              <div className="mb-3 md:mb-4 text-black">
                <Leaf strokeWidth={1.5} className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="text-black text-[10px] md:text-[13px] font-medium leading-tight md:leading-relaxed">
                Safe & Effective<br/><span className="text-black/60">For All Skin Types</span>
              </div>
              {/* Divider */}
              <div className="absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-black/10" />
            </div>

            <div className="flex flex-col items-center text-center px-1 md:px-4 relative">
              <div className="mb-3 md:mb-4 text-black">
                <Truck strokeWidth={1.5} className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="text-black text-[10px] md:text-[13px] font-medium leading-tight md:leading-relaxed">
                Fast<br/><span className="text-black/60">Nationwide Delivery</span>
              </div>
              {/* Divider */}
              <div className="absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-black/10" />
            </div>

            <div className="flex flex-col items-center text-center px-1 md:px-4 relative">
              <div className="mb-3 md:mb-4 text-black">
                <Headset strokeWidth={1.5} className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="text-black text-[10px] md:text-[13px] font-medium leading-tight md:leading-relaxed">
                Dedicated<br/><span className="text-black/60">Customer Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          />
          
          {/* Modal Content */}
          <div className="bg-[#fcfbf9] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl relative z-10 flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Left Image */}
            <div className="w-full md:w-1/2 bg-[#ebe8e0] min-h-[300px] md:min-h-[500px] relative">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {selectedProduct.badge && (
                <div className="absolute top-6 left-6 bg-[#e8d5a3] text-black px-4 py-2 rounded-sm text-xs font-bold tracking-widest z-10">
                  {selectedProduct.badge}
                </div>
              )}
            </div>

            {/* Right Info */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-4">
                {selectedProduct.title}
              </h2>
              <div className="w-12 h-[1px] bg-black/10 mb-6" />
              <p className="text-[#1a1a1a]/70 text-base md:text-lg leading-relaxed mb-8">
                {selectedProduct.description}
                <br/><br/>
                Perfectly crafted for everyday use to enhance your natural beauty and provide long-lasting hydration.
              </p>
              
              <div className="font-semibold text-2xl md:text-3xl text-[#1a1a1a] mb-8">
                {selectedProduct.price}
              </div>

              <a 
                href={`https://wa.me/2348154080021?text=${encodeURIComponent(`Hi O4 Beauty, I'm interested in ordering ${selectedProduct.title}`)}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-[#111] hover:bg-black text-white rounded-2xl py-4 flex items-center justify-center gap-3 transition-colors shadow-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] md:text-xs font-bold tracking-widest leading-[1.2]">SHOP ON</span>
                  <span className="text-[11px] md:text-xs font-bold tracking-widest leading-[1.2]">WHATSAPP</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
