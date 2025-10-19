import { writable } from 'svelte/store';

const savedLang = (typeof localStorage !== 'undefined' && localStorage.getItem('lang')) || 'en';

let uiAppLang = writable(savedLang);

uiAppLang.subscribe((value) => {
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('lang', value);
	}
});

export default uiAppLang;
