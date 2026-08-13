<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageData } from './$types';
	import PostMeta from './PostMeta.svelte';

	let { data }: { data: PageData } = $props();
	let Content = $derived(data.Content);
	let meta = $derived(data.meta);
</script>

<svelte:head>
	<title>{meta.title} - evan alvarez</title>
	<meta name="description" content={meta.description} />
</svelte:head>

<article class="wrapper prose">
	<a class="back-link" href={resolve('/blog')}>← blog</a>

	<header>
		<h1>{meta.title}</h1>
	</header>

	<PostMeta {meta} />

	<div class="post-body">
		<Content />
	</div>
</article>

<style>
	.back-link {
		display: inline-block;
		color: var(--fg-muted);
		font-family: var(--font-mono);
		font-size: 0.85rem;
		text-decoration: none;
	}

	.back-link:hover {
		color: var(--accent-green);
	}

	header {
		margin-top: 1rem;
	}
</style>
