import { writable, get } from 'svelte/store';
import type { CodeSnippet, CodeSnippetInput } from './app';

export const snippetStore = writable<CodeSnippet[]>([]);

export function addSnippet(input: CodeSnippetInput) {
	const snippets = get(snippetStore);
	snippetStore.update(() => {
		return [{ ...input, favorite: false }, ...snippets];
	});
}

export function deleteSnippet(index: number) {
	const snippets = get(snippetStore);
	snippets.splice(index, 1);
	snippetStore.update(() => snippets);
}

export function toggleFavorite(index: number) {
	const snippets = get(snippetStore);
	snippetStore.update(() =>
		snippets.map((snippet, snippetIndex) => {
			if (index === snippetIndex) {
				return { ...snippet, favorite: !snippet.favorite };
			}
			return snippet;
		})
	);
}
