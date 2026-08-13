<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>evan alvarez - {page.status}</title>
</svelte:head>

<div class="wrapper">
	<header>
		<h1>{page.status}</h1>
		<p>{page.status === 404 ? "this page doesn't exist." : (page.error?.message ?? 'something went wrong.')}</p>
		<p style="color: var(--fg-muted)">
			<a href={resolve('/')}>home</a>
			<span class="sep">/</span>
			<a href={resolve('/colophon')}>colophon</a>
		</p>
	</header>
	<footer>
		<hr />
		<p style="color: var(--fg-muted); font-size: 0.95rem;">
			&copy; {new Date().getFullYear()} evan alvarez
		</p>
	</footer>
</div>
