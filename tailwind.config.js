/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				custom: {
					'57838e': '#57838e',
				},
			},
			fontFamily: {
				'gt-america': ['GTAmerica', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
