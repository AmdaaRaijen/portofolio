"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import generateStars from "@/utils/generateStats";
import Stars from "./Stars";
import ContactSection from "./ContactSection";

export default function ParallaxLayout() {
  const stars = generateStars(25);

  const isMobile = typeof window !== "undefined" && window.innerHeight < 790;

  return (
    <Parallax pages={isMobile ? 3 : 2} className="no-scrollbar">
      <ParallaxLayer speed={0.05} factor={2.1} className="pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-shadow to-dark" />
        <div className="absolute inset-0 overflow-hidden">
          {stars.map((star) => (
            <Stars key={star.id} {...star} />
          ))}
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={0.5}>
        <Image
          src="/moon.webp"
          alt="Moon Background"
          width={1280}
          height={1280}
          className="
      absolute pointer-events-none select-none 
      rotate-90 -left-5/12
      blur-[0.5px]
      brightness-[0.4]
      contrast-[1.2]
      drop-shadow-[0px_0px_200px_rgba(255,255,255,0.15)]    "
        />
      </ParallaxLayer>

      <ParallaxLayer speed={1}>
        <HeroSection />
      </ParallaxLayer>

      <ParallaxLayer offset={0.9} speed={1}>
        <ProjectSection />
      </ParallaxLayer>

      <ParallaxLayer offset={isMobile ? 1.99999 : 1} speed={1}>
        <ContactSection />
      </ParallaxLayer>
    </Parallax>
  );
}
