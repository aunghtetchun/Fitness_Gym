import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      backgroundImage: {
        hero: "url('/img/hero-bg.png')",
        'hero-bmi': "url('/img/hero-bmi.png')",
        'bmi-section-2': "url('/img/bmi-section-2.png')",
        'personal-program-header': "url('/img/personal-program-header.png')",
        'class-info': "url('/img/bg-class-info.jpg')",
        dialog: "url('/img/bg-dialog.jpg')",
        register: "url('/img/bg-register.jpg')",
        impressions:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%), url('/img/impressions-bg.jpg')",
      },
      colors: {
        primary: '#FFE718',
        'primary-light': '#FCD948',
        gray: {
          100: '#F2F4F7',
          400: '#9C9C9C',
        },
      },
      maxWidth: {
        '8xl': '90rem',
      },
      boxShadow: {
        custom: '0px 0px 10px 0px rgba(0, 0, 0, 0.10)',
      },
      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
export default config
