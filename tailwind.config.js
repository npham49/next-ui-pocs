/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
    themes: [
      {
        dracula: {
          ...require("daisyui/src/colors/themes")["[data-theme=dracula]"],
          "accent-content":"#FFFFFF",
          "accent": "#9048F4"
        },
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
        },
        cyberpunk: {
          ...require("daisyui/src/colors/themes")["[data-theme=cyberpunk]"],
          "accent-content":"#2B0047",
          "accent": "#FFEE00"
        },
      },
    ],
  },
}
