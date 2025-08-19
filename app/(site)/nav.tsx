"use client"

import Link from 'next/link'
import { CrossCoinLogo } from '@/components/ui/cross-coin-logo'

export function Nav() {
  return (
    <nav aria-label="Primary" className="w-full py-4 px-6 flex items-center justify-between bg-white/80 backdrop-blur-sm border-b border-cross-sky/20">
      <Link href="/" className="flex items-center gap-3 text-xl font-bold text-black hover:text-black/80 transition-colors">
        <CrossCoinLogo size="sm" />
        <span>Cross Coin</span>
      </Link>
      <div className="flex gap-6 text-sm">
        <Link href="/about" className="text-black/80 hover:text-black underline-offset-4 hover:underline transition-colors">About</Link>
        <Link href="/community" className="text-black/80 hover:text-black underline-offset-4 hover:underline transition-colors">Community</Link>
        <a href="https://x.com/i/communities/1957861014999081048" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black underline-offset-4 hover:underline transition-colors">Join X Community</a>
      </div>
    </nav>
  )
}


