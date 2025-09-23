"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type CarouselImage = {
  src: string;
  alt: string;
};

type PeekCarouselProps = {
  images: CarouselImage[];
  autoAdvanceMs?: number;
  transitionMs?: number;
};

const DEFAULT_AUTO_MS = 5000;
const DEFAULT_TRANSITION_MS = 650;
const PEEK_SHIFT_PERCENT = 85;
const OFFSCREEN_SHIFT_PERCENT = 195;
const INACTIVE_SCALE = 0.65;
const HIDDEN_SCALE = 0;

export default function PeekCarousel({
  images,
  autoAdvanceMs = DEFAULT_AUTO_MS,
  transitionMs = DEFAULT_TRANSITION_MS,
}: PeekCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [targetIndex, setTargetIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const imageCount = images.length;
  const canCycle = imageCount > 1;

  const handleAdvance = useCallback(() => {
    if (!canCycle || isAnimating) return;
    const next = (currentIndex + 1) % imageCount;
    setTargetIndex(next);
    setIsAnimating(true);
  }, [canCycle, currentIndex, imageCount, isAnimating]);

  useEffect(() => {
    if (!isAnimating || targetIndex === null) return;

    const timer = setTimeout(() => {
      setCurrentIndex(targetIndex);
      setTargetIndex(null);
      setIsAnimating(false);
    }, transitionMs);

    return () => clearTimeout(timer);
  }, [isAnimating, targetIndex, transitionMs]);

  useEffect(() => {
    if (!canCycle || isAnimating) return;

    const timer = setTimeout(() => {
      handleAdvance();
    }, autoAdvanceMs);

    return () => clearTimeout(timer);
  }, [autoAdvanceMs, canCycle, currentIndex, handleAdvance, isAnimating]);

  type Position = "center" | "leftPeek" | "rightPeek" | "offLeft" | "offRight";

  const getPositionForIndex = useCallback(
    (index: number): Position => {
      if (!canCycle) {
        return index === currentIndex ? "center" : "offRight";
      }

      const prevIndex = (currentIndex - 1 + imageCount) % imageCount;
      const nextIndex = (currentIndex + 1) % imageCount;

      if (!isAnimating || targetIndex === null) {
        if (index === currentIndex) return "center";
        if (imageCount > 2 && index === prevIndex) return "leftPeek";
        if (index === nextIndex) return "rightPeek";
        return "offRight";
      }

      const incomingIndex = targetIndex;
      const futureNextIndex = (incomingIndex + 1) % imageCount;

      if (index === currentIndex) return "leftPeek";
      if (imageCount > 2 && index === prevIndex && prevIndex !== incomingIndex) return "offLeft";
      if (index === incomingIndex) return "center";
      if (index === futureNextIndex && futureNextIndex !== currentIndex) return "rightPeek";
      return "offRight";
    },
    [canCycle, currentIndex, imageCount, isAnimating, targetIndex]
  );

  const positionStyles: Record<Position, { transform: string; opacity: number }> = {
    center: {
      transform: "translate(-50%, -50%) scale(1)",
      opacity: 1,
    },
    leftPeek: {
      transform: `translate(calc(-50% - ${PEEK_SHIFT_PERCENT}%), -50%) scale(${INACTIVE_SCALE})`,
      opacity: 1,
    },
    rightPeek: {
      transform: `translate(calc(-50% + ${PEEK_SHIFT_PERCENT}%), -50%) scale(${INACTIVE_SCALE})`,
      opacity: 1,
    },
    offLeft: {
      transform: `translate(calc(-50% - ${OFFSCREEN_SHIFT_PERCENT}%), -50%) scale(${HIDDEN_SCALE})`,
      opacity: 0,
    },
    offRight: {
      transform: `translate(calc(-50% + ${OFFSCREEN_SHIFT_PERCENT}%), -50%) scale(${HIDDEN_SCALE})`,
      opacity: 0,
    },
  };

  return (
    <div className="relative mx-auto w-full max-w-none py-16">
      <div className="relative h-[340px] w-full overflow-visible md:h-[520px] lg:h-[600px] xl:h-[800px]">
        {images.map((image, index) => {
          const position = getPositionForIndex(index);
          const style = positionStyles[position];
          const isInteractiveRightPeek = position === "rightPeek" && !isAnimating;
          const showRightEdgeCue = position === "rightPeek";

          return (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={isInteractiveRightPeek ? handleAdvance : undefined}
              className={`absolute top-1/3 left-1/2 h-[100%] w-[70%] overflow-hidden rounded-[32px] shadow-2xl transition-all ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-4 ${
                isInteractiveRightPeek ? "cursor-pointer" : "cursor-default"
              }`}
              tabIndex={isInteractiveRightPeek ? 0 : -1}
              style={{
                transform: style.transform,
                opacity: style.opacity,
                pointerEvents: isInteractiveRightPeek ? "auto" : "none",
                transitionDuration: `${transitionMs}ms`,
              }}
              aria-label={isInteractiveRightPeek ? "View next image" : undefined}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                // sizes="(max-width: 768px) 90vw, 640px"
                priority={index === 0}
              />

              {showRightEdgeCue && (
                <span className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/45" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
