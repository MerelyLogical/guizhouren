import Hero from "@/components/Hero"
import FullWidthCarousel from "@/components/FullWidthCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 py-16">
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">A Taste of Guizhou</h2>
          <p className="text-gray-600 text-lg">
            Experience the bold and unique flavors of Guizhou cuisine, crafted
            with care and tradition. Every dish tells a story of our heritage.
          </p>
        </div>

        <div>
          <img
            src="/guizhouren.jpg"
            alt="Guizhou dish"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/guizhouren.jpg"
            alt="Guizhou dish"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6">A Taste of Guizhou</h2>
          <p className="text-gray-600 text-lg">
            Experience the bold and unique flavors of Guizhou cuisine, crafted
            with care and tradition. Every dish tells a story of our heritage.
          </p>
        </div>
      </section>


      <section className="mx-auto max-w-6xl px-4 py-24 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Item 1 */}
        <div className="relative">
          <span className="absolute -top-6 -left-2 text-gray-200 text-7xl font-bold select-none">
            1
          </span>
          <div className="relative">
            <h3 className="text-xl font-semibold mb-2">Authentic Recipes</h3>
            <p className="text-gray-600">
              Passed down through generations, our dishes bring the true flavors of
              Guizhou to your table.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="relative">
          <span className="absolute -top-6 -left-2 text-gray-200 text-7xl font-bold select-none">
            2
          </span>
          <div className="relative">
            <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
            <p className="text-gray-600">
              We source only the freshest, seasonal produce to ensure vibrant and
              flavorful meals.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="relative">
          <span className="absolute -top-6 -left-2 text-gray-200 text-7xl font-bold select-none">
            3
          </span>
          <div className="relative">
            <h3 className="text-xl font-semibold mb-2">Warm Hospitality</h3>
            <p className="text-gray-600">
              Every guest is family. We serve with care to create a welcoming
              experience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to taste Guizhou?
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Explore our menu and discover the authentic flavors we bring to your table.
        </p>
        <a
          href="/menu"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition"
        >
          View Menu
        </a>
      </section>

      <FullWidthCarousel
        images={[
          { src: "/logo.jpg", alt: "Spicy beef noodles" },
          { src: "/guizhouren.jpg", alt: "Pickled chili fish" },
          { src: "/logo.jpg", alt: "Street-side skewers" },
          { src: "/guizhouren.jpg", alt: "Tofu with chilis" },
          { src: "/logo.jpg", alt: "Guizhou peppers" },
        ]}
      />

    </>
  )
}
