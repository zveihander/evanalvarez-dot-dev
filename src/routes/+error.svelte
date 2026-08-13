<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>evan alvarez - {page.status}</title>
</svelte:head>

<div class="wrapper">
	<div class="error-row">
		<header>
			<h1>{page.status}</h1>
			<p>
				{page.status === 404
					? "this page doesn't exist."
					: (page.error?.message ?? 'something went wrong.')}
			</p>
			<p style="color: var(--fg-muted)">
				<a href={resolve('/')}>home</a>
				<span class="sep">/</span>
				<a href={resolve('/colophon')}>colophon</a>
			</p>
		</header>
		{#if page.status === 404}
			<video
				class="media-frame error-gif"
				src="/lain/404.webm"
				autoplay
				loop
				muted
				playsinline
				aria-hidden="true"
			>
				<source src="/lain/404.webm" type="video/webm" />
				<source src="/lain/404.mp4" type="video/mp4" />
			</video>
		{/if}
	</div>
	<footer>
		<hr />
		<p style="color: var(--fg-muted); font-size: 0.95rem;">
			&copy; {new Date().getFullYear()} evan alvarez
		</p>
	</footer>
</div>

<style>
	.error-row {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.error-row header {
		flex: 1;
		min-width: 200px;
	}

	.error-gif {
		width: 160px;
		height: 160px;
		object-fit: cover;
		flex-shrink: 0;
	}

	@media (max-width: 480px) {
		.error-gif {
			width: 110px;
			height: 110px;
		}
	}
</style>
