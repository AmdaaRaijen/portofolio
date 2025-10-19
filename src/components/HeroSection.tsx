import Image from "next/image";
import Stars from "./Stars";
import generateStars from "@/utils/generateStats";
import GlitchText from "./GlitchText";
import Button from "./Button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <main className="relative flex items-center justify-center min-h-screen w-full overflow-hidden sm:p-20 pt-5 md:pt-0">
      {/* Glow Effect */}
      <div className="absolute bottom-1/2 md:left-1/4 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(135,77,177,0.4),transparent_70%)] blur-3xl animate-pulse" />

      <section className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-8 w-full max-w-6xl">
        <div className="absolute -top-40 right-96 hidden md:block">
          <p className="text-white">
            hello! I'm <span className="text-purple">Bintang Triadmaja</span>
          </p>
        </div>

        <div className="absolute -top-36 left-80 animate-spin-slow hidden md:block">
          <Image src="/arrow.svg" width={225} height={225} alt="arrow" />
        </div>

        {/* Profile Picture */}
        <div className="relative">
          <div className="absolute inset-0 bg-purple/40 blur-3xl rounded-full animate-pulse" />
          <Image
            src="/me.jpg"
            alt="My Photo"
            width={320}
            height={320}
            className="relative rounded-full object-cover border-4 border-purple/30 shadow-lg shadow-purple/20 w-52 h-52 md:w-80 md:h-80"
          />
        </div>

        <div className="block md:hidden">
          <p className="text-white text-center ">
            hello! I'm <span className="text-purple">Bintang Triadmaja</span>
          </p>
        </div>

        {/* Profile Text */}
        <div className="text-center sm:text-left text-white max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Web Developer <br /> <GlitchText>Security Analyst</GlitchText>
          </h1>
          <p className="text-lg text-white text-center md:text-left">
            I build secure, scalable, and elegant web applications with modern
            technologies. Experienced in full-stack web development for over 2
            years.
          </p>
          <div className="flex gap-4 justify-center sm:justify-start">
            <Button>Contact Me</Button>

            <Link href="#projects">
              <Button isOutlined>View Projects</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
