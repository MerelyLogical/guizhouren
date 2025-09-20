export default function Footer() {
  return (
    <footer className="bg-brand/30 text-sm">
      <div className="mx-auto max-w-6xl px-4 py-6 flex justify-between">
        <p>&copy; {new Date().getFullYear()} Guizhouren</p>
        <p>123, London</p>
      </div>
    </footer>
  )
}
