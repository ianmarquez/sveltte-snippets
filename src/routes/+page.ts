import type { PageLoad } from './$types';

export const load = (() => {
	return {
		snippets: [
			{
				title: 'Ian Codes Snippets',
				language: 'HTML',
				code: '<div>this is a test div</div>',
				favorite: false
			}
		]
	};
}) satisfies PageLoad;
