"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import generateStars from "@/utils/generateStats";
import Stars from "./Stars";
import ContactSection from "./ContactSection";
import { useRef } from "react";

export default function ParallaxLayout() {
  const parallaxRef = useRef<any>(null);

  const stars = generateStars(25);

  const isMobile = typeof window !== "undefined" && window.innerHeight < 790;

  const isMiniMobile =
    typeof window !== "undefined" && window.innerHeight < 720;

  if (typeof window !== "undefined") {
    console.log(
      "isMobile:",
      isMobile,
      "isMiniMobile:",
      isMiniMobile,
      window.innerHeight
    );
  }

  const pages = isMiniMobile ? 3.2 : isMobile ? 3 : 2;

  const projectSectionOffset = 0.9;

  const contactSectionOffset = isMiniMobile || isMobile ? 1.9 : 1;

  const scrollToProjects = () => {
    parallaxRef.current?.scrollTo(projectSectionOffset);
  };

  const scrollToContact = () => {
    parallaxRef.current?.scrollTo(contactSectionOffset);
  };

  return (
    <Parallax pages={pages} className="no-scrollbar" ref={parallaxRef}>
      <ParallaxLayer speed={0.05} factor={2.1} className="pointer-events-none">
        {isMobile && <p className="text-white text-4xl blur-sm">MOBILE</p>}
        {isMiniMobile && <p className="text-white text-4xl blur-sm">MINI</p>}
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
        <HeroSection
          onScrollToContact={scrollToContact}
          onScrollToProjects={scrollToProjects}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={projectSectionOffset} speed={1}>
        <ProjectSection />
      </ParallaxLayer>

      <ParallaxLayer
        offset={contactSectionOffset}
        speed={1}
        style={{
          marginTop: isMiniMobile ? "18rem" : "0rem",
        }}
      >
        <ContactSection />
      </ParallaxLayer>
    </Parallax>
  );
}
