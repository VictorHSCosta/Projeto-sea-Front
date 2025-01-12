import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: "#353535",
        secondary: "#3c6e71",
        buttons: "#d9d9d9",
        hover: "#999999",
        background: "#f5f5f5",
      },
    },
  },
  plugins: [],
} satisfies Config;
