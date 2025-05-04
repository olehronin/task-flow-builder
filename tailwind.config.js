/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#2e4184",
                    hover: "#364d9d",
                    border: "#6e83c9",
                },
                background: {
                    dark: "#0d1120",
                    node: "#131b37",
                },
                accent: {
                    border: "#415397",
                    blue: "#3b82f6",
                },
                text: {
                    primary: "#f2f2f3",
                    secondary: "#d4d4d8",
                },
            },
        },
    },
    plugins: [],
}
