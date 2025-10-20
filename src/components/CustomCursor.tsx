"use client";

import { use, useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function CustomCursor() {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const isMouseDevice = window.matchMedia("(pointer: fine)").matches;
    setShowCursor(isMouseDevice);
  }, []);

  if (!showCursor) return null;

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
