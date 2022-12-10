/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ['Poppins', 'Work Sans']
        },
        extend: {
            colors: {
                primary: '#563270',
                secondary: '#9e78b6',
                tertiary: '#1f1228'
            }
        },
    },
    plugins: [],
}
