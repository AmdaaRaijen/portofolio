"use client";

import AnimatedCursor from "react-animated-cursor";

export default function CustomCursor() {
  return (
    <AnimatedCursor
      innerSize={0}
      outerSize={60}
      color="255, 0, 150"
      outerAlpha={0.4}
      outerScale={2}
      trailingSpeed={6}
      outerStyle={{
        mixBlendMode: "difference",
      }}
    />
  );
}
