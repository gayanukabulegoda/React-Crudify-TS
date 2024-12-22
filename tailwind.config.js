/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1D4ED8',
                'primary-dark': '#1E40AF',
                secondary: '#9333EA',
                accent: '#F59E0B',
                danger: '#EF4444',
                success: '#10B981',
                warning: '#FBBF24',
                info: '#3B82F6',
                light: '#F3F4F6',
                dark: '#1F2937',
            },
        },
    },
    plugins: [],
}
