/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "420px",
      sm: "690px",
      md: "992px",
      lg: "1240px",
      xlg: "1660px",
      xxlg: "2064px",
    },
    fontFamily: {
      sequel: ["Sequel"],
      array: ["Array"],
      satoshi: ["Satoshi-Regular"],
      satoshi700: ["Satoshi-Bold"],
      
    },
    extend: {
      backgroundImage: {
        grains: "url('/assets/backgrounds/Granular-bg.svg')",
        zigzag: "url('/assets/backgrounds/TracedBackground.png')",
        footer: "url('/assets/backgrounds/footer.png')",
        //animation: "url('src/pages/components/mainSection/dist/index.html')",
        /* Rectangle 543459 */


//background: radial-gradient(85.11% 97.09% at 114.12% -16.82%, #394145 0%, #0F1A20 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

        "custom1":
          "radial-gradient(85.11% 97.09% at 114.12% -16.82%, #394145 0%, #0F1A20 100%)",
      },
      colors: {
        background: {
          primaryDark: "#0F1A20",
        },
        primaryRed: "#fe394e",
        white: "#F0EFE4"
      }
    },
  },
  plugins: [],
}