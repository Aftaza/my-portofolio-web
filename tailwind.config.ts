import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        marquee: {
            '0%': { transform: 'translateX(0)' },
            '50%': { transform: 'translateX(50)' },
            '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        marque: 'marquee 10s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
