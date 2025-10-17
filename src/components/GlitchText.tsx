import React from "react";

export const GlitchText = ({ children }: { children: string }) => {
  return (
    <span className="relative inline-block">
      {/* Teks utama */}
      <span className="relative z-10">{children}</span>

      {/* Layer glitch 1 */}
      <span
        className="absolute top-0 left-0 text-purple-500 animate-glitch-1 blur-[1px] "
        aria-hidden="true"
        style={{
          animationDelay: `${0.55 + Math.random()}s`,
        }}
      >
        {children}
      </span>

      {/* Layer glitch 2 */}
      <span
        className="absolute top-0 left-0 text-cyan-400 animate-glitch-2 blur-[1px]"
        aria-hidden="true"
        style={{
          animationDelay: `${0.51 + Math.random()}s`,
        }}
      >
        {children}
      </span>
    </span>
  );
};

export default GlitchText;
