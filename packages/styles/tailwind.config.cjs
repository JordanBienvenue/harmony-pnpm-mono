/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                "custom": "#f6d860",
                "primary": "#ff0000",
            }
        },
    },
    plugins: [
        function ({ addComponents, theme }) {
            addComponents({
                '.title': {
                    fontSize: theme('fontSize.4xl'),
                    fontWeight: theme('fontWeight.bold'),
                },
            })
        }
    ],
}
