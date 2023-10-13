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
			verifyClientOnEveryRequest: true,
			guestRedirectTo: "/login", // where to redirect if the user is not authenticated
			authenticatedRedirectTo: "/", // where to redirect if the user is authenticated
			baseUrl: "https://aabill-nuxt.netlify.app" // should be something like https://www.my-app.com
		},
    authJs: {
      secret: process.env.NUXT_NEXTAUTH_SECRET,
			baseUrl: 'https://aabill-nuxt.netlify.app/' // You can generate one with `openssl rand -base64 32`
    },
    github: {
      clientId: process.env.NUXT_GITHUB_CLIENT_ID,
      clientSecret: process.env.NUXT_GITHUB_CLIENT_SECRET
    },
    public: {
      authJs: {
        baseUrl: 'https://aabill-nuxt.netlify.app/', // The URL of your deployed app (used for origin Check in production)
        verifyClientOnEveryRequest: true, // whether to hit the /auth/session endpoint on every client request
				guestRedirectTo: '/login'
      }
    },
  },
	alias: {
    cookie: resolve(__dirname, "node_modules/cookie")
  }
	// modules: ["@hebilicious/authjs-nuxt"],
	// runtimeConfig: {
	// 	authJs: {
	// 		secret: 'testing123'
	// 	},
	// 	github: {
	// 		clientId: 'e22dbcf3cf1010832860',
	// 		clientSecret: '8666cda04af34dc4ab4bec03afb70f198221411b'
	// 	},
	// 	public: {
	// 		authJs: {
	// 			baseUrl: 'http://localhost:3001',
	// 			verifyClientOnEveryRequest: true
	// 		}
	// 	}
	// }
})
