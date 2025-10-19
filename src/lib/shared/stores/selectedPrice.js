import { writable } from 'svelte/store';

// Пытаемся восстановить выбранный тариф из localStorage
const savedPriceId =
	typeof localStorage !== 'undefined' && localStorage.getItem('selectedPriceId')
		? localStorage.getItem('selectedPriceId')
		: null;

// Создаём writable store
const selectedPriceId = writable(savedPriceId);

// Сохраняем в localStorage при каждом изменении
selectedPriceId.subscribe((value) => {
	if (typeof localStorage !== 'undefined') {
		if (value) {
			localStorage.setItem('selectedPriceId', value);
		} else {
			localStorage.removeItem('selectedPriceId');
		}
	}
});

export default selectedPriceId;
