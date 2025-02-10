import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lamaSky:"#C3EBFA",
        lamaSkyLight:"#EDF9FD",
        lamaPurple:"#9290FE",
        lamaPurpleLight:"#F5F5FF",
        lamaYellow:"#F9D949",
        lamaYellowLight:"#FEFCE8",
        lamaRed:"#EA5455",
        lamaRedLight:"#FEF2F2",
        lamaGreen:"#43C7A0",
        lamaGreenLight:"#E6F9F7",
        lamaBlue:"#007BFF",
        lamaBlueLight:"#E6F9F7",
        lamaGray:"#F5F5F5",
        lamaGrayLight:"#F5F5F5",
        lamaGrayDark:"#333333",
        lamaGrayDarkLight:"#4F4F4F",
        lamaGrayDarker:"#828282",
        lamaGrayDarkerLight:"#E0E0E0",
        lamaGrayDarkest:"#111111",
        lamaGrayDarkestLight:"#1F1F1F",
        lamaGrayLightest:"#F9F9F9",
        lamaGrayLightestLight:"#F5F5F5",
        lamaOrange:"#FFA500",
        lamaOrangeLight:"#FFE5B4",
        lamaPink:"#FFC0CB",
        lamaPinkLight:"#FFE5E5",
        lamaBrown:"#A52A2A",
        lamaBrownLight:"#F5E6E0",
      },
    },
  },
  plugins: [],

};
export default config;
