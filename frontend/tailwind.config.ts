import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryDefault:"#F58A07",
        primaryLigth:"#FCCF97",
        gray200:"#E9ECEF",
        gray600: "#6C757D",
        gray700:"#495057",
        gray800:"#343a40",
        gray900: "#212529"
      },
      borderRadius: {
        'custom1': '10px 0px 0px 10px',
        'custom2': '0px 10px 10px 0px'
      },
      borderWidth: {
        '1.5': '1.5px',
      },
      fontSize: {
        '28': '28px',
      },
      width: {
        'custom': '328px',
      },
      height: {
        'custom': '85px',
      },
      
    },
  },
  plugins: [],
};
export default config;
