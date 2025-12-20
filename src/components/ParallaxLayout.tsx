"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import generateStars from "@/utils/generateStats";
import Stars from "./Stars";
import ContactSection from "./ContactSection";
import { useRef, useEffect, useState } from "react";

export default function ParallaxLayout() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parallaxRef = useRef<any>(null);

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stars = generateStars(25);

  const isMobile = windowSize.width < 768;

  const pages = isMobile ? 3 : 2.5;

  const heroOffset = 0;
  const projectOffset = isMobile ? 0.8 : 0.9;
  const contactOffset = isMobile ? 1.99 : 1;

  const marginOffset = isMobile ? "mt-80" : "mt-0";

  const scrollToProjects = () => {
    parallaxRef.current?.scrollTo(projectOffset);
  };

  const scrollToContact = () => {
    parallaxRef.current?.scrollTo(contactOffset);
  };

  if (!isMounted) return null;

  return (
    <Parallax pages={pages} className="no-scrollbar" ref={parallaxRef}>
      {/* --- BACKGROUND LAYER --- */}
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={pages}
        className="pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-shadow to-dark" />
        <div className="absolute inset-0 overflow-hidden h-full">
          {stars.map((star) => (
            <Stars key={star.id} {...star} />
          ))}
        </div>
      </ParallaxLayer>

      {/* --- MOON DECORATION --- */}
      <ParallaxLayer speed={0.5} offset={0}>
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
            drop-shadow-[0px_0px_200px_rgba(255,255,255,0.15)]"
        />
      </ParallaxLayer>

      {/* --- HERO SECTION --- */}
      <ParallaxLayer offset={heroOffset} speed={1}>
        <HeroSection
          onScrollToContact={scrollToContact}
          onScrollToProjects={scrollToProjects}
        />
      </ParallaxLayer>

      {/* --- PROJECT SECTION --- */}
      <ParallaxLayer
        offset={projectOffset}
        speed={1}
        factor={isMobile ? 1.5 : 1}
      >
        <div className="w-full flex justify-center items-center">
          <ProjectSection />
        </div>
      </ParallaxLayer>

      {/* --- CONTACT SECTION --- */}
      <ParallaxLayer
        offset={contactOffset}
        speed={1}
        className={`flex items-center justify-center ${marginOffset}`}
      >
        <ContactSection />
      </ParallaxLayer>
    </Parallax>
  );
}
