"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomePage() {
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
  return (
    <main className="min-h-screen p-6 grid place-items-center">
      <section className="text-center max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight"
        >
          Just a Community.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
          className="mt-4 text-lg sm:text-xl text-neutral-600"
        >
          But we have each other.
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
            className="mx-auto max-w-xl rounded-pill border border-neutral-200 bg-white/60 px-4 py-3 text-sm text-neutral-700 shadow-soft"
          >
            {contractAddress ? (
              <code className="font-mono select-all">{contractAddress}</code>
            ) : (
              <span className="text-neutral-400">Contract address (TBA)</span>
            )}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
          className="mt-10"
        >
          <a
            href="https://discord.gg/placeholder"
            aria-label="Join the Community on Discord"
            className="inline-block rounded-pill bg-accent1 px-8 py-4 text-lg sm:text-xl font-medium shadow-soft hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent1 transition-transform hover:scale-[1.02]"
          >
            Join the Community
          </a>
        </motion.div>
      </section>
    </main>
  )
}


