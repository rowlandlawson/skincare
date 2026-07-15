"use client";

import React, { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useOutsideClick } from '@/hooks/use-outside-click'
import { X } from 'lucide-react'

export interface BentoGridProps {
    items: {
        id: string | number
        title: string
        subtitle?: string
        description?: string
        content: React.ReactNode
        icon?: React.ReactNode
        image?: string
        price?: string
        orderUrl?: string
        badge?: string
        className?: string
    }[]
}

export default function ExpandableBentoGrid({ items }: BentoGridProps) {
    const [active, setActive] = useState<(typeof items)[number] | boolean | null>(null)
    const ref = useRef<HTMLDivElement>(null)
    const id = useId()

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setActive(false)
            }
        }

        if (active && typeof active === 'object') {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [active])

    useOutsideClick(ref, () => setActive(null))

    return (
        <>
            <AnimatePresence>
                {active && typeof active === 'object' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm h-full w-full z-[10000]"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === 'object' ? (
                    <div className="fixed inset-0 grid place-items-center z-[10001]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.05 } }}
                            className="flex absolute top-4 right-4 md:right-10 lg:hidden items-center justify-center bg-neutral-800 rounded-full h-8 w-8 z-50 border border-neutral-700"
                            onClick={() => setActive(null)}
                        >
                            <X className="h-5 w-5 text-white" />
                        </motion.button>
                        
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900 md:rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl"
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <div className="w-full h-64 md:h-72 bg-neutral-800 flex items-center justify-center relative overflow-hidden">
                                    {active.image ? (
                                        <img 
                                            src={active.image} 
                                            alt={active.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : active.icon ? (
                                        <div className="scale-[2] text-yellow-600">{active.icon}</div>
                                    ) : (
                                        <div className="w-full h-full bg-neutral-800" />
                                    )}
                                </div>
                            </motion.div>

                            <div className="flex flex-col flex-grow bg-neutral-900">
                                <div className="flex justify-between p-6 items-start gap-4">
                                    <div>
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-white text-lg md:text-xl font-serif"
                                            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 500 }}
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.title}-${id}`}
                                            className="text-neutral-400 text-sm mt-2"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    {active.price && (
                                        <motion.span
                                            layoutId={`price-${active.title}-${id}`}
                                            className="text-yellow-600 font-serif whitespace-nowrap"
                                            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem' }}
                                        >
                                            {active.price}
                                        </motion.span>
                                    )}
                                </div>

                                <div className="px-6 pb-6 flex flex-col gap-4 overflow-auto">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-300 text-sm h-full flex flex-col items-start gap-4"
                                    >
                                        {active.content}
                                    </motion.div>
                                    
                                    {active.orderUrl && (
                                        <motion.a
                                            layoutId={`button-${active.title}-${id}`}
                                            href={active.orderUrl}
                                            target="_blank"
                                            className="mt-4 w-full text-center px-4 py-3 text-sm rounded-xl font-medium bg-[#c9a96e] text-black hover:bg-[#b88a44] transition-colors"
                                        >
                                            Order Now
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            
            <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                {items.map((item) => (
                    <motion.div
                        layoutId={`card-${item.title}-${id}`}
                        key={item.id}
                        onClick={() => setActive(item)}
                        className="flex flex-col hover:bg-neutral-800 rounded-2xl cursor-pointer bg-neutral-900 border border-neutral-800 transition-all overflow-hidden group hover:border-[#c9a96e]/30 shadow-lg"
                    >
                        <motion.div layoutId={`image-${item.title}-${id}`} className="relative h-48 sm:h-56 w-full overflow-hidden">
                            {item.image ? (
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            ) : item.icon ? (
                                <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-yellow-600 p-4">
                                    {item.icon}
                                </div>
                            ) : null}
                            
                            {item.badge && (
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    left: '1rem',
                                    background: 'linear-gradient(135deg, #c9a96e, #e8d5a3)',
                                    color: '#000',
                                    fontSize: '9px',
                                    fontWeight: 700,
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    padding: '0.28rem 0.65rem',
                                    borderRadius: '100px',
                                }}>
                                    {item.badge}
                                </div>
                            )}
                        </motion.div>
                        
                        <div className="p-5 flex flex-col flex-grow justify-between">
                            <div>
                                <motion.h3
                                    layoutId={`title-${item.title}-${id}`}
                                    className="font-medium text-white text-left text-[15px] mb-2"
                                >
                                    {item.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${item.title}-${id}`}
                                    className="text-neutral-400 text-left text-[13px] line-clamp-2 leading-relaxed"
                                >
                                    {item.description || item.subtitle}
                                </motion.p>
                            </div>
                            
                            <div className="mt-4 flex justify-between items-center">
                                {item.price && (
                                    <motion.span
                                        layoutId={`price-${item.title}-${id}`}
                                        className="text-[#c9a96e] font-serif"
                                        style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem' }}
                                    >
                                        {item.price}
                                    </motion.span>
                                )}
                                <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest group-hover:text-[#c9a96e] transition-colors">
                                    View
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    )
}
