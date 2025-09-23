"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type ParallaxOverlayImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
};

export default function ParallaxOverlayImage({
  src,
  alt,
  className,
  imgClassName,
}: ParallaxOverlayImageProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50%", "-75%"]);

  return (
    <motion.div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={{ y }}
    >
      <img src={src} alt={alt} className={cn("rounded-xl shadow-2xl", imgClassName)} />
    </motion.div>
  );
}

