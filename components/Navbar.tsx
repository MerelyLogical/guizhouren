import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-6xl px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Logo" className="h-8 w-auto" />
          <span className="font-semibold text-lg">Guizhouren</span>
        </Link>

        <div className="flex gap-6 text-sm">
          <Link href="/about">About</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
