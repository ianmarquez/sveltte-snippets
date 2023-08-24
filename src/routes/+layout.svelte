<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppBar, AppShell, storeHighlightJs } from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	storeHighlightJs.set(hljs);
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<h3 class="text-left">Codeshare</h3>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
