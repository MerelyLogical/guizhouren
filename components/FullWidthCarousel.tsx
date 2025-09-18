"use client";

import * as React from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FullWidthCarousel({
  images,
  autoPlay = true,
  loop = true,
  interval = 8888,
}: {
  images: { src: string; alt?: string }[];
  autoPlay?: boolean;
  loop?: boolean;
  interval?: number; // ms
}) {
  const plugin = React.useRef(
    Autoplay({ delay: interval, stopOnInteraction: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop, align: "start" },
    autoPlay ? [plugin.current] : []
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onSelect = React.useCallback((embla: UseEmblaCarouselType[1]) => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = React.useCallback((idx: number) => emblaApi?.scrollTo(idx), [emblaApi]);

  return (
    <section className="w-full">
      <div className="relative">
        {/* Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          {/* Container */}
          <div className="flex touch-pan-y">
            {images.map((img, i) => (
              <div
                key={i}
                className="basis-full md:basis-1/3 shrink-0 px-2 md:px-3"
                aria-roledescription="slide"
              >
                <Card className="overflow-hidden rounded-2xl shadow-md">
                  <CardContent className="p-0">
                    <img
                      src={img.src}
                      alt={img.alt ?? `Slide ${i + 1}`}
                      className="block h-64 md:h-80 w-full object-cover"
                      loading="lazy"
                    />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 md:px-4">
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="pointer-events-auto rounded-full shadow-md bg-white/80 hover:bg-white"
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="pointer-events-auto rounded-full shadow-md bg-white/80 hover:bg-white"
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={
                "h-2.5 w-2.5 rounded-full transition " +
                (i === selectedIndex ? "bg-gray-900" : "bg-gray-300 hover:bg-gray-400")
              }
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === selectedIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
