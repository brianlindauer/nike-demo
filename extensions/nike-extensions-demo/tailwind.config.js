/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#2196f3", // blue-500
        accent: "#1976d2", // blue-700
        error: {
          light: "#E53935", // red-600
          dark: "#C62828", // red-800
          lightest: "#FCE7E7",
        },
        warn: {
          light: "#FFC107", // amber-500
          dark: "#FFA000", // amber-700
        },
        success: {
          light: "#00E676", // green-A400
          dark: "#00C853", // green-A700
        },

        black80: "#000000cc", // Black / High Emphasis                     | Default color
        black60: "#00000099", // Black / Medium Emphasis
        black54: "#0000008a", // Black / Inactive
        grey: "#9E9E9E", // Black / Disabled / Placeholder            // gray-500
        white70: "#ffffffb3", // White / Medium Emphasis
        white54: "#ffffff8a", // White / Inactive
        white50: "#ffffff80", // White / Disabled
        black24: "rgba(0, 0, 0, 0.24)", // gray dark Color   : #rgba(0, 0, 0, 0.24)
        black04: "rgba(0, 0, 0, 0.04)", // gray light Color  : #rgba(0, 0, 0, 0.04)
        // Divider Color     : #E5E5E5 : neutral-200 : eg / divide-neutral-200
        // bg light Color    : #FAFAFA : neutral-50  : eg / bg-neutral-50
        // bg dark Color     : #E8E8E8

        // --- OVERRIDE MATERIAL COLOR PALETTE --- // TODO: Override other popular colors in VibeIQ
        blue: {
          50: "#e3f2fd",
          100: "#bbdefb",
          200: "#90caf9",
          300: "#64b5f6",
          400: "#42a5f5",
          500: "#2196f3",
          600: "#1e88e5",
          700: "#1976d2",
          800: "#1565c0",
          900: "#0d47a1",
        },
        red: {
          50: "#ffebee",
          100: "#ffcdd2",
          200: "#ef9a9a",
          300: "#e57373",
          400: "#ef5350",
          500: "#f44336",
          600: "#e53935",
          700: "#d32f2f",
          800: "#c62828",
          900: "#b71c1c",
        },
        amber: {
          50: "#fff8e1",
          100: "#ffecb3",
          200: "#ffe082",
          300: "#ffd54f",
          400: "#ffca28",
          500: "#ffc107",
          600: "#ffb300",
          700: "#ffa000",
          800: "#ff8f00",
          900: "#ff6f00",
        },
        green: {
          50: "#e8f5e9",
          100: "#c8e6c9",
          200: "#a5d6a7",
          300: "#81c784",
          400: "#66bb6a",
          500: "#4caf50",
          600: "#43a047",
          700: "#388e3c",
          800: "#2e7d32",
          900: "#1b5e20",
          A100: "#b9f6ca",
          A200: "#69f0ae",
          A400: "#00e676",
          A700: "#00c853",
        },
        gray: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
      },

      fontSize: {
        sm: [".875rem", { lineHeight: "1.3125rem", letterSpacing: ".25px" }], // Body2
        base: ["1rem", { lineHeight: "1.5rem", letterSpacing: ".5px" }], // Body1
        caption: [".75rem", { lineHeight: ".9375rem", letterSpacing: ".4px" }], // caption
        // text-title-1, text-title-2, text-overline | defined as utilities in src/styles.scss
      },
    },
  },
  plugins: [],
  important: true,
};
