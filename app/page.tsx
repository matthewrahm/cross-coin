"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CrossCoinLogo } from '@/components/ui/cross-coin-logo'
import { CloudCard } from '@/components/ui/cloud-card'

export default function HomePage() {
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
  return (
    <main className="min-h-screen p-4 sm:p-6 grid place-items-center bg-gradient-to-br from-cross-light via-cross-heavenly to-cross-sky">
      <section className="text-center max-w-4xl mx-auto px-2 sm:px-0">
        {/* Cross Coin Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <CrossCoinLogo size="lg" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black px-2"
        >
          Cross Coin
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
          className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-black px-4 sm:px-0"
        >
          A heavenly token of faith, community, and divine purpose.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.5, ease: 'easeOut' }}
          className="mt-6 sm:mt-8"
        >
          <div
            role="note"
            aria-label="Token contract address"
            className="mx-auto max-w-xl bg-white/95 px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-cross-cross shadow-[0_8px_32px_rgba(255,255,255,0.6),0_4px_16px_rgba(135,206,235,0.4)] backdrop-blur-md relative overflow-visible"
            style={{borderRadius: '50px 70px 60px 80px / 40px 50px 70px 60px'}}
          >
            {/* Cloud protrusions around the container */}
            <div className="absolute -top-2 left-1/4 w-8 h-8 bg-white/90 rounded-full blur-[1px]"></div>
            <div className="absolute -top-1 right-1/3 w-6 h-6 bg-white/85 rounded-full blur-[1px]"></div>
            <div className="absolute -left-2 top-1/3 w-9 h-9 bg-white/90 rounded-full blur-[1px]"></div>
            <div className="absolute -right-2 top-2/3 w-7 h-7 bg-white/85 rounded-full blur-[1px]"></div>
            <div className="absolute -bottom-1 left-1/3 w-8 h-8 bg-white/90 rounded-full blur-[1px]"></div>
            <div className="absolute -bottom-2 right-1/4 w-6 h-6 bg-white/85 rounded-full blur-[1px]"></div>
            
            {contractAddress ? (
              <code className="font-mono select-all text-black relative z-10">{contractAddress}</code>
            ) : (
              <span className="text-black/80 relative z-10">Cross Coin Contract Address (Coming Soon)</span>
            )}
          </div>
        </motion.div>

        {/* Cross Coin Features */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto justify-items-center px-2 sm:px-0">
          <CloudCard delay={0.3}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 rounded-full bg-black flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.4)] group-hover:shadow-[0_12px_28px_rgba(0,0,0,0.6)] transition-all duration-300 mx-auto">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-black mb-2 text-base sm:text-lg">Faith-Based</h3>
            <p className="text-black/80 text-xs sm:text-sm leading-relaxed">Built on the foundation of Christian values and community spirit</p>
          </CloudCard>
          
          <CloudCard delay={0.4}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 rounded-full bg-black flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.4)] group-hover:shadow-[0_12px_28px_rgba(0,0,0,0.6)] transition-all duration-300 mx-auto">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 className="font-semibold text-black mb-2 text-base sm:text-lg">Heavenly Purpose</h3>
            <p className="text-black/80 text-xs sm:text-sm leading-relaxed">A token that represents divine guidance and spiritual growth</p>
          </CloudCard>
          
          <CloudCard delay={0.5} className="sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 rounded-full bg-black flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.4)] group-hover:shadow-[0_12px_28px_rgba(0,0,0,0.6)] transition-all duration-300 mx-auto">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-black mb-2 text-base sm:text-lg">Community</h3>
            <p className="text-black/80 text-xs sm:text-sm leading-relaxed">Uniting believers in a shared mission of faith and fellowship</p>
          </CloudCard>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4, ease: 'easeOut' }}
          className="mt-8 sm:mt-10"
        >
          <a
            href="https://x.com/i/communities/1957861014999081048"
            aria-label="Join the Cross Coin Community on X"
            className="inline-block rounded-pill bg-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-medium text-white shadow-cross hover:bg-cross-gold hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cross-gold transition-all duration-300 hover:scale-[1.02]"
          >
            Join the Cross Coin Community
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 sm:mt-8 text-black/80 text-xs sm:text-sm max-w-2xl mx-auto px-4 sm:px-0"
        >
          Cross Coin represents more than just a cryptocurrency—it's a symbol of faith, 
          hope, and the power of community united under divine purpose.
        </motion.p>
      </section>
    </main>
  )
}


