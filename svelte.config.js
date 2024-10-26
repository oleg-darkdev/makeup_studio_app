import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	vitePlugin: {
		// inspector: { toggleKeyCombo: 'control' }
	},
	preprocess: [vitePreprocess()],

	kit: {
		adapter: adapter(),
		csrf: {
			checkOrigin: false
		},
		files: {
			appTemplate: 'src/app/app.html',
			errorTemplate: 'src/app/error.html'
		},
		alias: {
			$i18n: 'src/i18n',
			$components: 'src/components'
		}
	},
	compilerOptions: {
		runes: true
	}
};

export default config;
