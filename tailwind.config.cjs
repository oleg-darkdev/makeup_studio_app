/** @type {import('tailwindcss').Config}*/
const plugin = require('tailwindcss/plugin');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#ffb800',
				secondary: '#fffedb',
				dark: '#111111',
				gray: {
					100: '#1e293b',
					200: '#334155',
					300: '#2b2b2b',
					400: '#4b5563'
				},
				light: {
					100: '#f0f5fa',
					200: '#d1d5db'
				}
			},
			fontFamily: {
				roboto: ['Poppins', 'sans-serif']
			},
			keyframes: {
				'pulse-heart': {
					'0%, 100%': { transform: 'scale(1)', opacity: '1' },
					'25%': { transform: 'scale(1.1)', opacity: '0.9' },
					'50%': { transform: 'scale(0.95)', opacity: '1' },
					'75%': { transform: 'scale(1.05)', opacity: '0.95' }
				},
				reverseSpin: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(-360deg)' }
				}
			},
			animation: {
				'pulse-heart': 'pulse-heart 1.2s ease-in-out infinite',
				'reverse-spin': 'reverseSpin 2s linear infinite'
			}
		}
	},
	plugins: [
		// plugin(function ({ addBase }) {
		// 	addBase({
		// 		html: { fontSize: '10px' }
		// 	});
		// })
		require('daisyui')
	]
};

module.exports = config;
