import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		fontFamily: {}
	},

	plugins: [typography, forms, daisyui],
	daisyui: {
		themes: [
			{
				blau: {
					...require('daisyui/src/theming/themes')['light'],
					primary: '#a729f5'
				}
			},
			{
				lila: {
					...require('daisyui/src/theming/themes')['dark'],
					primary: '#a729f5'
				}
			},
			{
				weiß: {
					...require('daisyui/src/theming/themes')['dark'],
					primary: '#a729f5'
				}
			}
		]
	}
};
