import AnimatedSection from "@/components/AnimatedSection";
import CurtainRevealSection from "@/components/CurtainRevealSection";
import ParallaxOverlayImage from "@/components/ParallaxOverlayImage";
import PeekCarousel from "@/components/PeekCarousel";

export default function Home() {
  return (
    <>
      {/* === Hero Section === */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center text-brand-1"
        //style={{ backgroundImage: "url('/logo.jpg')", backgroundSize: "cover" }}
      >
        <div className="bg-brand absolute inset-0" />
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="text-white font-bold whitespace-nowrap text-[clamp(2rem,5vw,3.5rem)]">
            Welcome to Guizhouren
          </h1>
          <p className="text-white mt-4 text-lg">Authentic Guizhou cuisine</p>
          <br></br>
          <a
            href="/contact"
            className="inline-block bg-light hover:bg-green1 text-brand hover:text-brand
            font-semibold px-8 py-4 rounded-2xl shadow-lg transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* === Signature Story Section === */}
      <CurtainRevealSection
        className=""
        contentClassName="mx-auto max-w-6xl px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        curtainColor="rgba(29 28 94/1)"
        minHeightVh={230}
      >
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
      </CurtainRevealSection>

      {/* === Alternating Feature Section === */}
      <section className="bg-brand/15">
        <AnimatedSection as="div" className="mx-auto max-w-6xl px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center" delay={0.5}>
          <div className="relative">
            <img
              src="/guizhouren.jpg"
              alt="Guizhou dish"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />

            <ParallaxOverlayImage
              src="/logo.jpg"
              alt="Sizzling Guizhou peppers"
              className="absolute bottom-0 right-0 translate-x-[15%] translate-y-[35%] w-[35%] min-w-[120px] max-w-[180px]"
              imgClassName="object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">Another Taste of Guizhou</h2>
            <p className="text-gray-600 text-lg">
              Experience the bold and unique flavors of Guizhou cuisine, crafted
              with care and tradition. Every dish tells a story of our heritage.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* === Three-Pillar Highlights === */}
      <section className="">
        <div className="mx-auto max-w-6xl px-4 py-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          <AnimatedSection as="div" delay={0.3}>
            <div className="relative">
              <span className="absolute -top-6 -left-2 text-brand/25 text-7xl font-bold select-none">
                1
              </span>
              <div className="relative">
                <h3 className="text-xl font-semibold mb-2">Authentic Recipes</h3>
                <br></br>
                <p className="text-gray-600">
                  Passed down through generations, our dishes bring the true flavors of
                  Guizhou to your table.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection as="div" delay={0.5}>
            <div className="relative">
              <span className="absolute -top-6 -left-2 text-brand/25 text-7xl font-bold select-none">
                2
              </span>
              <div className="relative">
                <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
                <br></br>
                <p className="text-gray-600">
                  We source only the freshest, seasonal produce to ensure vibrant and
                  flavorful meals.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection as="div" delay={0.7}>
            <div className="relative">
              <span className="absolute -top-6 -left-2 text-brand/25 text-7xl font-bold select-none">
                3
              </span>
              <div className="relative">
                <h3 className="text-xl font-semibold mb-2">Warm Hospitality</h3>
                <br></br>
                <p className="text-gray-600">
                  Every guest is family. We serve with care to create a welcoming
                  experience.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* === CTA & Gallery Section === */}
      <section className="bg-brand/15">
        {/* CTA Banner */}
        <AnimatedSection className="py-24 text-center text-brand/90" delay={0.5}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to taste Guizhou?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Explore our menu and discover the authentic flavors we bring to your table.
          </p>
          <a
            href="/menu"
            className="inline-block bg-brand hover:bg-pink1 text-green1 hover:text-brand
            font-semibold px-8 py-4 rounded-2xl shadow-lg transition"
          >
            View Menu
          </a>
        </AnimatedSection>

        {/* Image Carousel */}
          <PeekCarousel
            images={[
              { src: "/IMG_6269.PNG", alt: "Spicy beef noodles" },
              { src: "/guizhouren.jpg", alt: "Pickled chili fish" },
              { src: "/logo.jpg", alt: "Street-side skewers" },
              { src: "/guizhouren.jpg", alt: "Tofu with chilis" },
              { src: "/logo.jpg", alt: "Guizhou peppers" },
            ]}
          />
      </section>
    </>
  )
}
