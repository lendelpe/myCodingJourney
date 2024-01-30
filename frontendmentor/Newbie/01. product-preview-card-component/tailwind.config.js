/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./build/*.html"],
	theme: {
		extend: {
			fontFamily: {
				montserrat: "'Montserrat', serif",
				fraunces: "'Fraunces', serif",
			},
			colors: {
				"clr-primary-400": "hsl(158, 36%, 37%)",
				"clr-primary-500": "hsl(158, 36%, 20%)",
				"clr-secondary-200": "hsl(30, 38%, 92%)",
				"clr-neutral-900": "hsl(212, 21%, 14%)",
				"clr-neutral-400": "hsl(228, 12%, 48%)",
				"clr-neutral-100": "hsl(0, 0%, 100%)",
			},
		},
	},
	plugins: [],
};
