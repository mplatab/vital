/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  fontFamily: {
			'milks': ['"TT Milks Script"', 'serif'],
		  },
		  colors: {
			primary: {
			  DEFAULT: '#FF6100',  // Naranja principal
			  hover: '#E65600',    // Naranja hover
			  light: '#FFB380',    // Naranja suave
			},
			complementary: {
			  DEFAULT: '#004EFF',  // Azul intenso
			  dark: '#00307D',     // Azul oscuro
			},
			neutral: {
			  light: '#FFF5F0',    // Blanco cálido
			  dark: '#1A0F00',     // Marrón muy oscuro
			}
		  },
		  backgroundImage: {
			'header': "url('/images/bg-header.webp')",
		  },
		},
	},
	plugins: [],
}
