import Image from "next/image";
import Stars from "./Stars";
import generateStars from "@/utils/generateStats";

export default function HeroSection() {
  const stars = generateStars(50);

  return (
    <main className="relative flex items-center justify-center min-h-screen w-full overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 p-8 sm:p-20">
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <Stars
            key={star.id}
            delay={star.delay}
            size={star.size}
            opacity={star.opacity}
            top={star.top}
            left={star.left}
          />
        ))}
      </div>

      {/* Glow Effect */}
      <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(135,77,177,0.4),transparent_70%)] blur-3xl animate-pulse" />

      <section className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-12 w-full max-w-6xl">
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
            className="relative rounded-full object-cover border-4 border-purple/30 shadow-lg shadow-purple/20"
          />
        </div>

        {/* Profile Text */}
        <div className="text-center sm:text-left text-white max-w-2xl space-y-6">
          <h1 className="text-5xl sm:text-7xl font-bold leading-tight">
            Web Developer <br />{" "}
            <span className="text-purple">Security Analyst</span>
          </h1>
          <p className="text-lg text-purple-soft">
            I build secure, scalable, and elegant web applications with modern
            technologies. Experienced in full-stack web development for over 2
            years.
          </p>
          <div className="flex gap-4 justify-center sm:justify-start">
            <button className="px-6 py-3 bg-purple hover:bg-purple-light text-white font-semibold rounded-full shadow-lg shadow-purple/30 transition">
              Contact Me
            </button>
            <button className="px-6 py-3 border border-purple-soft hover:border-purple text-purple-soft hover:text-white rounded-full transition">
              View Projects
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
