"use client";

import GoogleGeminiEffect from "@/components/ui/google-gemini-effect";
import React from "react";
import { useScroll, useTransform } from "motion/react";

export default function GoogleGeminiEffectAnimation() {
  const ref = React.useRef(null);

  // 1. Scroll progress based on this ref
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // 2. Map scroll progress to path lengths
  const pathLengths = [
    useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]),
    useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]),
    useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]),
    useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]),
    useTransform(scrollYProgress, [0, 0.8], [0, 1.2]),
  ];

  return (
    <div className="w-full h-full relative md:bottom-[350px]">
      <div
        ref={ref}
        className="md:h-[300vh] h-[100vh] w-full overflow-clip"
      >
        <GoogleGeminiEffect
          pathLengths={pathLengths}
        />
      </div>
    </div>
  );
}
