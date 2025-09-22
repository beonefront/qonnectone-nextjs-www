import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Dark mode disabled; light theme only
  darkMode: false,
  theme: {
    extend: {
      // ringColor: {
      //   primary: 'var(--primary)',
      //   accent: 'var(--accent)'
      // },
      // boxShadow: {
      //   'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      // },
      // fontFamily: {
      //   'sans': ['var(--font-geist-sans)', 'Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      //   'inter': ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      //   'montserrat': ['var(--font-montserrat)', 'Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      //   'geist-sans': ['var(--font-geist-sans)', 'Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      //   'geist-mono': ['var(--font-geist-mono)', 'Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      // },
      // fontSize: {
      //   'xs': ['0.75rem', { lineHeight: '1rem' }],
      //   'sm': ['0.875rem', { lineHeight: '1.25rem' }],
      //   'base': ['1rem', { lineHeight: '1.7' }],
      //   'lg': ['1.125rem', { lineHeight: '1.75rem' }],
      //   'xl': ['1.25rem', { lineHeight: '1.75rem' }],
      //   '2xl': ['1.5rem', { lineHeight: '2rem' }],
      //   '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      //   '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      //   '5xl': ['3rem', { lineHeight: '1.3' }],
      //   '6xl': ['3.75rem', { lineHeight: '1' }],
      //   '7xl': ['4.5rem', { lineHeight: '1' }],
      //   '8xl': ['6rem', { lineHeight: '1' }],
      //   '9xl': ['8rem', { lineHeight: '1' }],
      // },
      // letterSpacing: {
      //   'tighter': '-0.05em',
      //   'tight': '-0.025em',
      //   'normal': '0',
      //   'wide': '0.025em',
      //   'wider': '0.05em',
      //   'widest': '0.1em',
      // },
    },
  },
  plugins: [],
} satisfies Config;
