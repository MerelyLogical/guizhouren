import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-6xl px-4 py-3 flex justify-between items-center">
        <Link href="/" className="font-semibold text-lg">Guizhouren</Link>
        <div className="flex gap-4 text-sm">
          <Link href="/about">About</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
