/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Brand Colors - Updated to match Brand Guidelines v2.1
        mocha: {
          DEFAULT: "#7D5A3B",
          50: "#F5F1ED",
          100: "#E8DDD1",
          200: "#D1BBA3",
          300: "#BA9975",
          400: "#A37747",
          500: "#7D5A3B",
          600: "#64482F",
          700: "#4B3623",
          800: "#322417",
          900: "#19120B"
        },
        'golden-amber': {
          DEFAULT: "#FFD000",
          50: "#FFFBCC",
          100: "#FFF899",
          200: "#FFF466",
          300: "#FFF033",
          400: "#FFEC00",
          500: "#FFD000",
          600: "#CCA600",
          700: "#997D00",
          800: "#665300",
          900: "#332A00"
        },
        'bright-lime': {
          DEFAULT: "#AFD135",
          50: "#F7FCE8",
          100: "#EDF8CC",
          200: "#DBF199",
          300: "#C9EA66",
          400: "#B7E333",
          500: "#AFD135",
          600: "#8CA72A",
          700: "#697D20",
          800: "#465415",
          900: "#232A0B"
        },
        'energetic-red': {
          DEFAULT: "#DC542A",
          50: "#FDF2EE",
          100: "#FAE2D8",
          200: "#F5C5B1",
          300: "#F0A88A",
          400: "#EB8B63",
          500: "#DC542A",
          600: "#B04322",
          700: "#843219",
          800: "#582211",
          900: "#2C1108"
        },
        // Legacy color aliases for backward compatibility
        amber: {
          DEFAULT: "#FFD000",
          50: "#FFFBCC",
          100: "#FFF899",
          200: "#FFF466",
          300: "#FFF033",
          400: "#FFEC00",
          500: "#FFD000",
          600: "#CCA600",
          700: "#997D00",
          800: "#665300",
          900: "#332A00"
        },
        lime: {
          DEFAULT: "#AFD135",
          50: "#F7FCE8",
          100: "#EDF8CC",
          200: "#DBF199",
          300: "#C9EA66",
          400: "#B7E333",
          500: "#AFD135",
          600: "#8CA72A",
          700: "#697D20",
          800: "#465415",
          900: "#232A0B"
        },
        energetic: {
          DEFAULT: "#DC542A",
          50: "#FDF2EE",
          100: "#FAE2D8",
          200: "#F5C5B1",
          300: "#F0A88A",
          400: "#EB8B63",
          500: "#DC542A",
          600: "#B04322",
          700: "#843219",
          800: "#582211",
          900: "#2C1108"
        },
        // System Colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#7D5A3B", // Mocha
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FFD000", // Golden Amber
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#AFD135", // Bright Lime for growth/energy
          foreground: "#000000",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
      },
      spacing: {
        'micro': '4px',   // Brand spacing system
        'small': '8px',   // Brand spacing system
        'base': '16px',   // Brand spacing system
        'medium': '24px', // Brand spacing system
        'large': '32px',  // Brand spacing system
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
