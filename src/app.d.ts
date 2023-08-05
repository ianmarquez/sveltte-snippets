// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

declare class CodeSnippetInput {
	title: string;
	language: 'typescript' | 'css' | 'html';
	code: string;
}

declare class CodeSnippet extends CodeSnippetInput {
	favorite: boolean;
}
