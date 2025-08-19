"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CrossCoinLogo } from '@/components/ui/cross-coin-logo'

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
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-cross-cross via-cross-gold to-cross-sky bg-clip-text text-transparent px-2"
        >
          Cross Coin
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
          className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-cross-cross/80 px-4 sm:px-0"
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
            className="mx-auto max-w-xl rounded-[2rem] border-2 border-white/40 bg-white/90 px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-cross-cross shadow-[0_8px_32px_rgba(255,255,255,0.4),0_4px_16px_rgba(135,206,235,0.3)] backdrop-blur-md relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-cross-sky/10 before:rounded-[2rem]"
          >
            {contractAddress ? (
              <code className="font-mono select-all text-cross-cross">{contractAddress}</code>
            ) : (
              <span className="text-cross-cross/60">Cross Coin Contract Address (Coming Soon)</span>
            )}
          </div>
        </motion.div>

        {/* Cross Coin Features */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
          className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto justify-items-center px-2 sm:px-0"
        >
          <div className="bg-white/85 backdrop-blur-md rounded-[2.5rem] p-4 sm:p-6 border-2 border-white/50 shadow-[0_12px_40px_rgba(255,255,255,0.6),0_8px_24px_rgba(135,206,235,0.4)] hover:shadow-[0_16px_48px_rgba(255,255,255,0.8),0_12px_32px_rgba(255,215,0,0.3)] transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 group w-full max-w-sm relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/30 before:via-transparent before:to-cross-sky/15 before:rounded-[2.5rem] after:absolute after:top-2 after:left-4 after:w-8 after:h-4 after:bg-white/60 after:rounded-full after:blur-sm">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-cross-gold via-cross-sky/80 to-white/40 flex items-center justify-center shadow-[0_8px_20px_rgba(255,215,0,0.4)] group-hover:shadow-[0_12px_28px_rgba(255,215,0,0.6)] transition-all duration-300 mx-auto relative before:absolute before:inset-1 before:bg-gradient-to-br before:from-white/40 before:to-transparent before:rounded-full">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-cross-cross mb-2 text-base sm:text-lg relative z-10">Faith-Based</h3>
            <p className="text-cross-cross/70 text-xs sm:text-sm leading-relaxed relative z-10">Built on the foundation of Christian values and community spirit</p>
          </div>
          
          <div className="bg-white/85 backdrop-blur-md rounded-[2.5rem] p-4 sm:p-6 border-2 border-white/50 shadow-[0_12px_40px_rgba(255,255,255,0.6),0_8px_24px_rgba(135,206,235,0.4)] hover:shadow-[0_16px_48px_rgba(255,255,255,0.8),0_12px_32px_rgba(135,206,235,0.4)] transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 group w-full max-w-sm relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/30 before:via-transparent before:to-cross-heavenly/20 before:rounded-[2.5rem] after:absolute after:top-3 after:right-3 after:w-6 after:h-3 after:bg-white/50 after:rounded-full after:blur-sm">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-cross-sky via-cross-heavenly to-white/50 flex items-center justify-center shadow-[0_8px_20px_rgba(135,206,235,0.5)] group-hover:shadow-[0_12px_28px_rgba(135,206,235,0.7)] transition-all duration-300 mx-auto relative before:absolute before:inset-1 before:bg-gradient-to-br before:from-white/40 before:to-transparent before:rounded-full">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cross-cross flex-shrink-0 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 className="font-semibold text-cross-cross mb-2 text-base sm:text-lg relative z-10">Heavenly Purpose</h3>
            <p className="text-cross-cross/70 text-xs sm:text-sm leading-relaxed relative z-10">A token that represents divine guidance and spiritual growth</p>
          </div>
          
          <div className="bg-white/85 backdrop-blur-md rounded-[2.5rem] p-4 sm:p-6 border-2 border-white/50 shadow-[0_12px_40px_rgba(255,255,255,0.6),0_8px_24px_rgba(135,206,235,0.4)] hover:shadow-[0_16px_48px_rgba(255,255,255,0.8),0_12px_32px_rgba(255,215,0,0.3)] transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 group w-full max-w-sm sm:col-span-2 lg:col-span-1 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/30 before:via-transparent before:to-cross-gold/10 before:rounded-[2.5rem] after:absolute after:top-4 after:left-1/2 after:w-4 after:h-2 after:bg-white/40 after:rounded-full after:blur-sm after:-translate-x-1/2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-cross-gold/80 via-cross-sky to-white/40 flex items-center justify-center shadow-[0_8px_20px_rgba(255,215,0,0.4)] group-hover:shadow-[0_12px_28px_rgba(255,215,0,0.6)] transition-all duration-300 mx-auto relative before:absolute before:inset-1 before:bg-gradient-to-br before:from-white/40 before:to-transparent before:rounded-full">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-cross-cross mb-2 text-base sm:text-lg relative z-10">Community</h3>
            <p className="text-cross-cross/70 text-xs sm:text-sm leading-relaxed relative z-10">Uniting believers in a shared mission of faith and fellowship</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4, ease: 'easeOut' }}
          className="mt-8 sm:mt-10"
        >
          <a
            href="https://discord.gg/placeholder"
            aria-label="Join the Cross Coin Community on Discord"
            className="inline-block rounded-pill bg-gradient-to-r from-cross-gold to-cross-sky px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-medium text-white shadow-cross hover:shadow-heavenly focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cross-gold transition-all duration-300 hover:scale-[1.02] hover:from-cross-gold/90 hover:to-cross-sky/90"
          >
            Join the Cross Coin Community
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 sm:mt-8 text-cross-cross/60 text-xs sm:text-sm max-w-2xl mx-auto px-4 sm:px-0"
        >
          Cross Coin represents more than just a cryptocurrency—it's a symbol of faith, 
          hope, and the power of community united under divine purpose.
        </motion.p>
      </section>
    </main>
  )
}


