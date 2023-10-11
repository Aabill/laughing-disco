// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	}, 
	nitro: {
		routeRules: {
			'/proxy/dev/**': { proxy: 'http://localhost:3001/.netlify/functions/**' },
			'/proxy/prod/**': { proxy: '/.netlify/functions/**'}
		}
	}
})
