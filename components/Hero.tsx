export default function Hero() {
  return (
    <section
      className="relative h-[70vh] flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('/logo.jpg')", backgroundSize: "cover" }}
    >
      <div className="bg-black/50 absolute inset-0" />
      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="font-bold whitespace-nowrap text-[clamp(2rem,5vw,3.5rem)]">
          Welcome to Guizhouren
        </h1>
        <p className="mt-4 text-lg">Authentic Guizhou cuisine</p>
      </div>
    </section>
  )
}
