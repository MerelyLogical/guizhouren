"use client";

import { ReactNode, useId, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { cn } from "@/lib/utils";

type OffsetTuple = [string, string];

type CurtainRevealSectionProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  curtainColor?: string;
  offset?: OffsetTuple;
  minHeightVh?: number;
  startOffset?: number;
};

export default function CurtainRevealSection({
  children,
  className,
  contentClassName,
  curtainColor,
  offset = ["start end", "end start"],
  minHeightVh = 220,
  startOffset = 0.18,
}: CurtainRevealSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const maskId = useId().replace(/:/g, "_");
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset,
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  const clampedStart = Math.min(Math.max(startOffset, 0), 0.95);
  const normalized = useTransform(progress, (value) => {
    if (value <= clampedStart) {
      return 0;
    }

    return (value - clampedStart) / (1 - clampedStart);
  });

  const topSpread = useTransform(normalized, [0, 1], [0, 62]);
  const bottomSpread = useTransform(normalized, [0, 1], [0, 72]);
  const topArc = useTransform(normalized, [0, 1], [0, -32]);
  const bottomArc = useTransform(normalized, [0, 1], [100, 136]);
  const sideBulge = useTransform(normalized, [0, 1], [0, 18]);

  const leftTopX = useTransform(topSpread, (value) => 50 - value);
  const rightTopX = useTransform(topSpread, (value) => 50 + value);
  const leftBottomX = useTransform(bottomSpread, (value) => 50 - value);
  const rightBottomX = useTransform(bottomSpread, (value) => 50 + value);

  const rightMidX = useTransform([bottomSpread, sideBulge], ([spread, bulge]) => 50 + 0.75 * spread + bulge);
  const leftMidX = useTransform([bottomSpread, sideBulge], ([spread, bulge]) => 50 - 0.75 * spread - bulge);

  // Mask path expands from a narrow door to a wide arch as the user scrolls.
  const openingPath = useMotionTemplate`
    M ${leftTopX} 0
    Q 50 ${topArc} ${rightTopX} 0
    Q ${rightMidX} 50 ${rightBottomX} 100
    Q 50 ${bottomArc} ${leftBottomX} 100
    Q ${leftMidX} 50 ${leftTopX} 0
    Z
  `;

  return (
    <section
      ref={sectionRef as any}
      className={cn("relative", className)}
    >
      <div
        className="relative"
        style={{ minHeight: `${minHeightVh}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="relative h-full">
            {!reduceMotion && (
              <div className="absolute inset-0 z-20 pointer-events-none" aria-hidden="true">
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <mask id={maskId} maskUnits="userSpaceOnUse">
                      <rect width="100" height="100" fill="white" />
                      <motion.path d={openingPath} fill="black" />
                    </mask>
                  </defs>
                  <rect width="100" height="100" fill={curtainColor} mask={`url(#${maskId})`} />
                </svg>
              </div>
            )}

            <div className="relative z-10 flex h-full items-center justify-center px-4">
              <div className={cn("w-full", contentClassName)}>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
