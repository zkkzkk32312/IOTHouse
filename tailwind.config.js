/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", 
    "./public/**/*.{html,js}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          1: "rgb(var(--color-accent1), <alpha-value>)",
          2: "rgb(var(--color-accent2), <alpha-value>)",
        },
        bkg: "rgb(var(--color-bkg), <alpha-value>)",
        bkg2: "rgb(var(--color-bkg2), <alpha-value>)",
        content: "rgb(var(--color-content), <alpha-value>)",
      },
    },
  },
  plugins: [],
}

//module.exports = {
//  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
//  theme: {
//    extend: {
//      colors: {
//        accent: {
//           1: "hsl(var(--color-accent1) / <alpha-value>)",
//           2: "hsl(var(--color-accent2) / <alpha-value>)",
//         },
//         bkg: "hsl(var(--color-bkg) / <alpha-value>)",
//         content: "hsl(var(--color-content) / <alpha-value>)",
//       },
//     },
//   },
//   plugins: [],
// }