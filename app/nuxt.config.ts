// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "node:path"
export default defineNuxtConfig({
  devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	modules: ['@hebilicious/authjs-nuxt'],    
	runtimeConfig: {
    authJs: {
      secret: process.env.NUXT_NEXTAUTH_SECRET,
    },
    github: {
      clientId: process.env.NUXT_GITHUB_CLIENT_ID,
      clientSecret: process.env.NUXT_GITHUB_CLIENT_SECRET
    },
    public: {
      authJs: {
        baseUrl: process.env.NUXT_NEXTAUTH_URL, // The URL of your deployed app (used for origin Check in production)
        verifyClientOnEveryRequest: true, // whether to hit the /auth/session endpoint on every client request
				guestRedirectTo: '/login'
      }
    },
  },
	alias: {
    cookie: resolve(__dirname, "node_modules/cookie")
  }
})
