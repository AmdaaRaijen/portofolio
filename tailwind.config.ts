import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        dark: "#020101",
        purple: {
          DEFAULT: "#874DB1", // Aksen utama
          light: "#B37CC6", // Hover / gradient
          soft: "#D7B6D6", // Secondary text
          deep: "#4F375B", // Card / section
        },
        shadow: "#1E1611",
      },
    },
  },
};

export default config;
