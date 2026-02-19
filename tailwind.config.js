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
                    darkBlue: '#263069',
                    lightGrey: '#F6F6F8',
                }
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                heading: ['Plus Jakarta Sans', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #FF2D92 0%, #E6007E 100%)',
            },
            animation: {
                'marquee': 'marquee 30s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-33.33%)' },
                },
            },
        },
    },
    plugins: [],
}
