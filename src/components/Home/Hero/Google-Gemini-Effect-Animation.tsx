"use client";

import * as React from "react";
import GoogleGeminiEffect from "@/components/ui/google-gemini-effect";

export default function GoogleGeminiEffectAnimation() {
  return (
    <section className="w-full h-[226px] md:h-[425px]">
      <GoogleGeminiEffect
        className="w-full"
        duration={1.4}
        stagger={0.22}
        once
        rootMargin=""
      />
    </section>
  );
}
