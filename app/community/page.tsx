"use client"

import { motion } from 'framer-motion'
import { PricePanel } from '@/components/price/price-panel'
import { CrossCoinLogo } from '@/components/ui/cross-coin-logo'

export default function CommunityPage() {
  const staticTweets = [
    'Cross Coin community: United in faith, growing in purpose.',
    "Faith, community, and divine guidance - that's our foundation.",
    'Every believer strengthens our Cross Coin community.',
  ]

  return (
    <main className="min-h-screen grid place-items-center p-6 bg-gradient-to-br from-cross-light via-cross-heavenly to-cross-sky">
      <section className="text-center max-w-4xl">
        <h1 className="sr-only">Cross Coin Community</h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex justify-center mb-6"
        >
          <CrossCoinLogo size="md" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-black"
        >
          Faith in motion.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
          className="mt-4 text-lg sm:text-xl text-black/80 max-w-md mx-auto leading-relaxed"
        >
          As more believers join our Cross Coin community, we grow stronger in faith and purpose together.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-6 max-w-3xl mx-auto">
          {staticTweets.map((text, i) => (
            <motion.article 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-heavenly border border-cross-sky/20"
            >
              <p className="text-black text-xl sm:text-2xl leading-relaxed">{text}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-5 justify-center">
          <SocialButton href="https://x.com/placeholder" label="X" className="bg-gradient-to-r from-cross-gold to-white text-black shadow-cross" />
          <SocialButton href="https://x.com/i/communities/placeholder" label="X Community" className="bg-gradient-to-r from-white to-cross-gold text-black shadow-heavenly" />
        </div>
      </section>

      <div className="w-full mt-20">
        <PricePanel />
      </div>
    </main>
  )
}

function SocialButton({ href, label, className }: { href: string; label: string; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
      <a
        href={href}
        aria-label={`Open ${label}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block rounded-pill px-8 py-4 text-xl font-medium shadow-soft hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all duration-300 hover:scale-[1.02] ${className}`}
      >
        {label}
      </a>
    </motion.div>
  )
}


