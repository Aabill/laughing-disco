export default defineNitroConfig({
  // options
	routeRules: {
		'/proxy/**': { proxy: '/.netlify/functions/**' },
	}
});
