/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        s_dark_navy: {
          DEFAULT: "rgba(var(--color-s_dark_navy), <alpha-value>)",
          100: "rgb(0, 11, 21)",
          75: "rgb(1, 17, 32)",
        },
        s_dark: {
          DEFAULT: "rgba(var(--color-s_dark), <alpha-value>)",
          100: "rgb(0, 0, 0)",
          75: "rgb(22, 23, 25)",
          50: "rgb(33, 35, 37)",
          25: "rgb(41, 43, 45)",
          "100op": "rgba(0, 0, 0, 0.16)",
        },
        s_light: {
          DEFAULT: "rgba(var(--color-s_light), <alpha-value>)",
          100: "rgb(255 255 255)",
          80: "rgb(252 252 252)",
          60: "rgb(247 249 250)",
          40: "rgb(242 244 245)",
          20: "rgb(145 145 159)",
        },
        s_blue: {
          DEFAULT: "rgba(var(--color-s_blue), <alpha-value>)",
          100: "rgb(0, 119, 255)",
          80: "rgb(36, 138, 255)",
          60: "rgb(87, 165, 255)",
          40: "rgb(138, 192, 255)",
          20: "rgb(189, 220, 255)",
          dark: "rgb(0, 18, 38)",
        },
        s_green: {
          DEFAULT: "rgba(var(--color-s_green), <alpha-value>)",
          100: "rgb(0, 168, 107)",
          80: "rgb(42, 183, 132)",
          60: "rgb(101, 209, 170)",
          40: "rgb(147, 234, 202)",
          20: "rgb(207, 250, 234)",
          dark: "rgb(1, 26, 11)",
        },
        s_red: {
          DEFAULT: "rgba(var(--color-s_red), <alpha-value>)",
          100: "rgb(253, 60, 74)",
          80: "rgb(253, 86, 98)",
          60: "rgb(253, 111, 122)",
          40: "rgb(253, 162, 169)",
          20: "rgb(253, 213, 215)",
          dark: "rgb(38, 10, 13)",
        },
        s_violet: {
          DEFAULT: "rgba(var(--color-s_violet), <alpha-value>)",
          100: "rgb(127, 61, 255)",
          80: "rgb(143, 87, 255)",
          60: "rgb(177, 138, 255)",
          40: "rgb(211, 189, 255)",
          20: "rgb(238, 229, 255)",
          dark: "rgb(19, 10, 30)",
        },
        s_yellow: {
          DEFAULT: "rgba(var(--color-s_yellow), <alpha-value>)",
          100: "rgb(238, 165, 25)",
          80: "rgb(252, 187, 60)",
          60: "rgb(252, 204, 111)",
          40: "rgb(252, 221, 161)",
          20: "rgb(252, 238, 212)",
          dark: "rgb(36, 25, 7)",
        },
      },
    },
  },
  // important: 'html',
  plugins: [
    // Set a default value on the `:root` element
    ({ addBase }) => addBase({ ":root": { "--color-primary": "0, 119, 255" } }),
    ({ addBase }) => addBase({ ":root": { "--color-secondary": "227, 229, 229" } }),
    ({ addBase }) => addBase({ ":root": { "--color-s_dark": "0, 0, 0" } }),
    ({ addBase }) => addBase({ ":root": { "--color-s_light": "255,255255" } }),
    ({ addBase }) => addBase({ ":root": { "--color-s_blue": "0, 119, 255" } }),
    ({ addBase }) => addBase({ ":root": { "--color-s_green": "0, 168, 107" } }),
    ({ addBase }) => addBase({ ":root": { "--color-s_red": "253, 60, 74" } }),
    ({ addBase }) => addBase({ ":root": { "--color-s_violet": "127, 61, 255" } }),
    ({ addBase }) => addBase({ ":root": { "--color-s_yellow": "238, 165, 25" } }),
  ],
  safelist: [
    {
      pattern: /(bg|text|border)-(primary|secondary)/,
    },
    {
      pattern: /(mt|mb|mr|ml|my|mx|px|py|pt|pb|pl|pr)-[0-9]+/,
    },
    {
      pattern: /flex-.*/,
    },
    {
      pattern: /(bottom|right|top|left)-[0-9]+/,
    },
    {
      pattern: /(w|h)-[0-9]+/,
    },
  ],
};
