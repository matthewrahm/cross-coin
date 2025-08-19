"use client"

import { motion } from 'framer-motion'
import { CrossCoinLogo } from '@/components/ui/cross-coin-logo'

const MEMBERS_SEED = 4321

export default function AboutPage() {
  const formatter = new Intl.NumberFormat('en-US')
  const members = formatter.format(0)

  return (
    <main className="min-h-screen p-6 grid grid-rows-[1fr_auto] bg-gradient-to-br from-cross-light via-cross-heavenly to-cross-sky">
      <section className="text-center max-w-4xl mx-auto self-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-cross-cross via-cross-gold to-cross-sky bg-clip-text text-transparent">
            Faith & Community
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-cross-cross/80 leading-relaxed max-w-md mx-auto">
            Cross Coin represents the strength of believers united in faith, growing together in spiritual purpose and divine guidance.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mx-auto my-8"
        >
          <CrossCoinLogo size="lg" />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl text-cross-cross/90"
        >
          Built on the foundation of Christian values and community spirit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-cross-gold/20 shadow-cross">
            <h3 className="font-semibold text-cross-cross mb-3 text-lg">Our Mission</h3>
            <p className="text-cross-cross/70">To unite believers in a shared mission of faith, hope, and divine purpose through the power of community and technology.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-cross-sky/20 shadow-heavenly">
            <h3 className="font-semibold text-cross-cross mb-3 text-lg">Our Values</h3>
            <p className="text-cross-cross/70">Faith, integrity, community, service, and the belief that together we can create something greater than ourselves.</p>
          </div>
        </motion.div>
      </section>
    </main>
  )
}


