import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-full grid place-items-center p-6">
      <section className="text-center">
        <h1 className="text-2xl font-bold">Not found.</h1>
        <p className="mt-2 text-neutral-600">But the community is still here.</p>
        <div className="mt-6">
          <Link href="/" className="underline underline-offset-4">Go home</Link>
        </div>
      </section>
    </main>
  )
}


