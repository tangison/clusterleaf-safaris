import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // Brand Colors for Cluster Leaf Safaris
        savanna: {
          DEFAULT: "#4A5D4E",
          light: "#5A6D5E",
          dark: "#3A4D3E",
        },
        desert: {
          DEFAULT: "#E3D5C1",
          light: "#F3E5D1",
          dark: "#D3C5B1",
        },
        sunset: {
          DEFAULT: "#D97757",
          light: "#E98767",
          dark: "#B0502F",
        },
        gold: "#D4AF37",
        charcoal: "#333333",
        "off-white": "#F9F9F9",
        "warm-white": "#F9F9F7",
        sage: {
          DEFAULT: "#7A8A7D",
          light: "#8A9A8D",
          dark: "#6A7A6D",
        },
        // Additional brand colors
        deep: {
          forest: "#2C3E2D",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      spacing: {
        "section": "80px",
        "section-sm": "48px",
      },
      boxShadow: {
        // Neumorphic shadows
        "neu-light": "20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff",
        "neu-dark": "20px 20px 60px #1a1a1a, -20px -20px 60px #2d2d2d",
        "neu-soft": "8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff",
        "neu-card": "20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff",
        // Glass shadows
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
        "float": "0 20px 60px rgba(0, 0, 0, 0.15)",
        // Button shadows
        "button": "0 10px 30px rgba(74, 93, 78, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
        "button-hover": "0 15px 40px rgba(74, 93, 78, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
        "sunset-button": "0 10px 30px rgba(217, 119, 87, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
        "sunset-button-hover": "0 15px 40px rgba(217, 119, 87, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "zoom-in": "zoomIn 0.3s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "scroll-indicator": "scrollIndicator 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        zoomIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scrollIndicator: {
          "0%, 100%": { opacity: "1", transform: "translateY(0)" },
          "50%": { opacity: "0.5", transform: "translateY(8px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "neu-bg": "linear-gradient(145deg, #ffffff, #e6e6e6)",
        "savanna-gradient": "linear-gradient(to right, #4A5D4E, #5A6D5E)",
        "sunset-gradient": "linear-gradient(to right, #D97757, #E98767)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
