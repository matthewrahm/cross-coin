"use client"

import { motion } from 'framer-motion'
import { PricePanel } from '@/components/price/price-panel'

export default function CommunityPage() {
  const staticTweets = [
    'Just a Community. Show up, say hi, keep it kind.',
    "Show up. Be Kind. That's the alpha.",
    'Every $100k jump is a win for the community',
  ]

  return (
    <main className="min-h-screen grid place-items-center p-6">
      <section className="text-center max-w-3xl">
        <h1 className="sr-only">Community</h1>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight"
        >
          Community in motion.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
          className="mt-4 text-lg sm:text-xl text-neutral-600 max-w-md mx-auto leading-relaxed"
        >
          As more of us gather and the market cap climbs, this space evolves to celebrate our momentum.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-6 max-w-3xl mx-auto">
          {staticTweets.map((text, i) => (
            <article key={i} className="rounded-3xl bg-white/90 p-8 shadow-soft">
              <p className="text-neutral-800 text-xl sm:text-2xl leading-relaxed">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-5 justify-center">
          <SocialButton href="https://x.com/placeholder" label="X" className="bg-accent2" />
          <SocialButton href="https://x.com/i/communities/placeholder" label="X Community" className="bg-accent3" />
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
        className={`inline-block rounded-pill px-8 py-4 text-xl font-medium shadow-soft hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-transform hover:scale-[1.02] ${className}`}
      >
        {label}
      </a>
    </motion.div>
  )
}


