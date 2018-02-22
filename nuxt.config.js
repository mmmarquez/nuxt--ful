module.exports = {
	/*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
	head: {
		title: 'AA',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'AA' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href: 'https://cloud.typography.com/7720232/762626/css/fonts.css'
			}
		]
		// script: [{ src: '//d3js.org/d3.v4.min.js' }]
	},
	css: [
		'~/assets/css/tailwind.css',
		{ src: '~/assets/scss/style.scss', lang: 'scss' }
	],
	mode: 'spa',
	plugins: [
		// { src: '~/plugins/ga', ssr: false },
		{ src: '~/plugins/vue-viewport', ssr: false },
		{ src: '~/plugins/vue-filters', ssr: false }
	],
	env: {
		CTF_SPACE_ID: 'qy0s1hk98tjw',
		CTF_CDA_ACCESS_TOKEN:
			'83f8a2fda8df83e1d332da4b24a85459aca22025d68f136a9dd8df8e6007547e',
		CTF_BLOG_POST_TYPE_ID: 'title'
	},
	build: {
		extractCSS: true,
		analyze: true,
		extend(config, ctx) {
			config.module.rules.forEach(rule => {
				if (rule.test.toString() === '/\\.vue$/') {
					rule.options.loaders.scss[2].options.data =
						'@import "./assets/scss/constants";';
				}
			});
		}
	}
};
