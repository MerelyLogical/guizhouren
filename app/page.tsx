import Hero from "@/components/Hero"

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold mb-4">Discover our story</h2>
        <p className="text-gray-600">We bring authentic Guizhou flavors made with seasonal ingredients</p>
      </section>
    </>
  )
}
