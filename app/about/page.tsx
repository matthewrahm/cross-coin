"use client"

import { motion } from 'framer-motion'

const MEMBERS_SEED = 4321

export default function AboutPage() {
  const formatter = new Intl.NumberFormat('en-US')
  const members = formatter.format(0)

  return (
    <main className="min-h-screen p-6 grid grid-rows-[1fr_auto]">
      <section className="text-center max-w-3xl mx-auto self-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
            Community strength
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-md mx-auto">
            Every $100k increase in market cap, the site will subtly evolve to reflect the growing strength of the community.
          </p>
        </motion.div>
        <motion.svg
          aria-hidden="true"
          width="180"
          height="180"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto my-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <path fill="#fde2e4" d="M36,-61.5C48.6,-51.9,62.9,-45.8,69.7,-35.3C76.6,-24.8,76,-9.9,72.5,4.3C69,18.5,62.7,31.9,53.5,42.1C44.3,52.4,32.2,59.4,19.3,65.6C6.4,71.8,-7.4,77.1,-21.6,77.8C-35.8,78.5,-50.5,74.7,-60.8,64.7C-71.1,54.7,-77,38.6,-79.7,22.3C-82.4,6.1,-81.9,-10.2,-77.1,-25.2C-72.3,-40.1,-63.3,-53.7,-50.4,-63.3C-37.5,-72.9,-18.7,-78.5,-4.1,-72.9C10.6,-67.3,21.2,-50.7,36,-61.5Z" transform="translate(100 100)" />
        </motion.svg>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl text-neutral-700"
        >
          There’s no roadmap. No utility. No promises. Just people.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mt-2"
        >
          <p className="text-lg sm:text-xl">
            Members who believe in the community: <span className="font-bold">{members}</span>
          </p>
        </motion.div>
      </section>
    </main>
  )
}


