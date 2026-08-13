<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageData } from './$types';
	import { formatDate } from '$lib/markdown/format';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>blog - evan alvarez</title>
</svelte:head>

<div class="wrapper">
	<header>
		<h1>writings</h1>
	</header>

	<main>
		<hr style="margin-top: 1.2rem;" />
		<ul class="postlist">
			{#each data.posts as post (post.slug)}
				<li>
					<div class="postlist-title">
						<a href={resolve('/blog/[slug]', { slug: post.slug })}>{post.title}</a>
						<span class="post-date">{formatDate(post.date)}</span>
					</div>
					<p class="post-desc">{post.description}</p>
				</li>
			{/each}
		</ul>
	</main>

	<footer>
		<hr />
		<p style="color: var(--fg-muted); font-size: 0.95rem;">
			&copy; {new Date().getFullYear()} evan alvarez
			<span class="sep">/</span>
			<a href={resolve('/')}>home</a>
		</p>
	</footer>
</div>
