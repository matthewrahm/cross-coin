"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CrossCoinLogo } from '@/components/ui/cross-coin-logo'

export default function HomePage() {
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
  return (
    <main className="min-h-screen p-6 grid place-items-center bg-gradient-to-br from-cross-light via-cross-heavenly to-cross-sky">
      <section className="text-center max-w-4xl mx-auto">
        {/* Cross Coin Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <CrossCoinLogo size="lg" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-cross-cross via-cross-gold to-cross-sky bg-clip-text text-transparent"
        >
          Cross Coin
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
          className="mt-4 text-lg sm:text-xl text-cross-cross/80"
        >
          A heavenly token of faith, community, and divine purpose.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.5, ease: 'easeOut' }}
          className="mt-8"
        >
          <div
            role="note"
            aria-label="Token contract address"
            className="mx-auto max-w-xl rounded-pill border-2 border-cross-gold/30 bg-white/80 px-6 py-4 text-sm text-cross-cross shadow-cross backdrop-blur-sm"
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
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-cross-sky/20 shadow-heavenly">
            <div className="text-3xl mb-3">✝️</div>
            <h3 className="font-semibold text-cross-cross mb-2">Faith-Based</h3>
            <p className="text-cross-cross/70 text-sm">Built on the foundation of Christian values and community spirit</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-cross-gold/20 shadow-cross">
            <div className="text-3xl mb-3">🌟</div>
            <h3 className="font-semibold text-cross-cross mb-2">Heavenly Purpose</h3>
            <p className="text-cross-cross/70 text-sm">A token that represents divine guidance and spiritual growth</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-cross-sky/20 shadow-heavenly">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-semibold text-cross-cross mb-2">Community</h3>
            <p className="text-cross-cross/70 text-sm">Uniting believers in a shared mission of faith and fellowship</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4, ease: 'easeOut' }}
          className="mt-10"
        >
          <a
            href="https://discord.gg/placeholder"
            aria-label="Join the Cross Coin Community on Discord"
            className="inline-block rounded-pill bg-gradient-to-r from-cross-gold to-cross-sky px-8 py-4 text-lg sm:text-xl font-medium text-white shadow-cross hover:shadow-heavenly focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cross-gold transition-all duration-300 hover:scale-[1.02] hover:from-cross-gold/90 hover:to-cross-sky/90"
          >
            Join the Cross Coin Community
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 text-cross-cross/60 text-sm max-w-2xl mx-auto"
        >
          Cross Coin represents more than just a cryptocurrency—it's a symbol of faith, 
          hope, and the power of community united under divine purpose.
        </motion.p>
      </section>
    </main>
  )
}


