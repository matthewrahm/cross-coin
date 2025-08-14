"use client"

import { motion } from 'framer-motion'
// Using plain anchor styled as a button to avoid asChild warnings

type PricePanelProps = {
  title?: string
}

export function PricePanel({ title = 'Live Price & Market Cap' }: PricePanelProps) {
  const dexscreenerPath = process.env.NEXT_PUBLIC_DEXSCREENER_PATH
  const hasEmbed = Boolean(dexscreenerPath)
  const embedUrl = hasEmbed
    ? `https://dexscreener.com/${dexscreenerPath}?embed=1&theme=light`
    : null

  return (
    <section aria-label={title} className="mt-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto w-full max-w-[1400px] rounded-3xl bg-white/80 shadow-soft p-6 sm:p-12 border-2 border-dashed border-accent3"
      >
        <header className="text-center">
          <h2 className="text-3xl sm:text-5xl font-bold">{title}</h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-accent1/70" />
        </header>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <MetricCard label="Price (USD)" value="—" icon="$" />
          <MetricCard label="Market Cap" value="—" icon="◎" />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <Pill label="24h Change" value="—" />
          <Pill label="24h Volume" value="—" />
          <Pill label="Liquidity" value="—" />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={hasEmbed ? `https://dexscreener.com/${dexscreenerPath}` : '#'}
            aria-disabled={!hasEmbed}
            onClick={(e) => {
              if (!hasEmbed) e.preventDefault()
            }}
            target={hasEmbed ? '_blank' : undefined}
            rel={hasEmbed ? 'noopener noreferrer' : undefined}
            className="inline-block rounded-pill bg-accent1 px-8 py-4 text-lg font-medium shadow-soft hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent1 transition-transform hover:scale-[1.02]"
          >
            View on Dexscreener
          </a>
        </div>

        {hasEmbed && (
          <div className="mt-10 relative w-full overflow-hidden rounded-2xl" style={{ height: 600 }}>
            <iframe
              title="Dexscreener embed"
              src={embedUrl ?? ''}
              className="absolute inset-0 h-full w-full"
              allow="clipboard-write; encrypted-media"
              loading="lazy"
            />
          </div>
        )}
      </motion.div>
    </section>
  )
}

function MetricCard({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="rounded-2xl bg-white/70 p-6 shadow-soft">
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-accent3 text-neutral-900 text-xl font-bold">
          {icon}
        </div>
        <div>
          <p className="text-sm text-neutral-500 uppercase tracking-wide">{label}</p>
          <p className="text-2xl sm:text-3xl font-bold mt-1">{value}</p>
        </div>
      </div>
    </div>
  )
}

function Pill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-pill bg-white/70 px-5 py-3 shadow-soft text-center">
      <span className="text-neutral-500 text-sm mr-2">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  )
}


