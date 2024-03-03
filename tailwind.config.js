/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      },
    },
  },
  // important: 'html',
  plugins: [
    // Set a default value on the `:root` element
    ({ addBase }) => addBase({ ":root": { "--color-primary": "0 119 255" } }),
    ({ addBase }) =>
      addBase({ ":root": { "--color-secondary": "227 229 229" } }),
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
