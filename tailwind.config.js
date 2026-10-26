/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bm: {
                    magenta: '#E6007E',
                    darkBlue: '#152452',
                    navy: '#0D2744',
                    deepNavy: '#071826',
                    cream: '#F6F1E8',
                    creamSoft: '#FAF7F2',
                    gold: '#CDB175',
                    lightGrey: '#F6F6F8',
                    ink: '#14202B',
                    soft: '#5C6670',
                }
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                heading: ['"Plus Jakarta Sans"', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #FF2D92 0%, #E6007E 100%)',
            },
            animation: {
                'marquee': 'marquee 18s linear infinite',
                'marquee-reverse': 'marquee-reverse 20s linear infinite',
                'blob': 'blob 7s infinite alternate',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-33.333%)' },
                },
                'marquee-reverse': {
                    '0%': { transform: 'translateX(-33.333%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                blob: {
                    '0%': { transform: 'translate(0, 0) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0, 0) scale(1)' },
                },
            },
        },
    },
    plugins: [],
}
