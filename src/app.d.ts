// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

interface CodeSnippetInput {
	title: string;
	language: 'typescript' | 'css' | 'html';
	code: string;
}

export interface CodeSnippet extends CodeSnippetInput {
	favorite: boolean;
}
