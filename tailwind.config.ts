import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      center:true,
      padding:'16px',

    },
    extend: {
       colors:{
        primary : '#0f172a',
        secondary : '#94a3b8',
        dark : '#0a0a0a',
      },
    },
  },
  plugins: [],
};
export default config;
