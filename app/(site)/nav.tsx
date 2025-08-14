"use client"

import Link from 'next/link'

export function Nav() {
  return (
    <nav aria-label="Primary" className="w-full py-4 px-6 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">JAC</Link>
      <div className="flex gap-4 text-sm">
        <Link href="/community" className="underline-offset-4 hover:underline">About</Link>
        <Link href="/about" className="underline-offset-4 hover:underline">Community</Link>
      </div>
    </nav>
  )
}


