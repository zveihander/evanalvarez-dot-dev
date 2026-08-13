<script>
	import { resolve } from '$app/paths';
	import { SITE_URL, SITE_NAME } from '$lib/site';
	import lainStill from '$lib/assets/colophon.jpg?enhanced';

	const description = "How evan alvarez's website was built.";
</script>

<svelte:head>
	<title>evan alvarez - colophon</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={SITE_URL + '/colophon'} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:title" content="evan alvarez - colophon" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={SITE_URL + '/colophon'} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="evan alvarez - colophon" />
	<meta name="twitter:description" content={description} />
</svelte:head>

<div class="wrapper">
	<header>
		<h1>colophon</h1>
		<p>how the site you&apos;re on was built.</p>
	</header>

	<main>
		<hr style="margin-top: 1.2rem;" />
		<section>
			<h2 class="label">tech</h2>
			<dl class="facts">
				<div class="fact">
					<dt>framework</dt>
					<dd>sveltekit</dd>
				</div>
				<div class="fact">
					<dt>language</dt>
					<dd>just html and css with a tiny bit of javascript for the copying functionality.</dd>
				</div>
				<div class="fact">
					<dt>hosting</dt>
					<dd>github pages</dd>
				</div>
			</dl>
		</section>

		<hr style="margin-top: 1.2rem;" />
		<section>
			<h2 class="label">style</h2>
			<dl class="facts">
				<div class="fact">
					<dt>header</dt>
					<dd>Fraunces</dd>
				</div>
				<div class="fact">
					<dt>body</dt>
					<dd>Newsreader</dd>
				</div>
				<div class="fact">
					<dt>mono</dt>
					<dd>IBM Plex Mono</dd>
				</div>
			</dl>
			<dl class="facts">
				<div class="fact">
					<dt>colors</dt>
					<dd>gruvbox</dd>
				</div>
			</dl>
		</section>

		<hr style="margin-top: 1.2rem;" />
		<section>
			<h2 class="label">notes</h2>
			<div class="notes-row">
				<dl class="facts">
					<div class="fact">
						<dt>analytics</dt>
						<dd>never.</dd>
					</div>
					<div class="fact">
						<dt>source</dt>
						<dd>
							<a
								href="https://github.com/zveihander/evanalvarez-dot-dev"
								target="_blank"
								rel="noopener noreferrer">github ↗</a
							>
						</dd>
					</div>
				</dl>
				<enhanced:img
					class="media-frame lain-still"
					src={lainStill}
					sizes="(max-width: 480px) 76px, 108px"
					alt=""
				/>
			</div>
		</section>
		<hr style="margin-top: 1.2rem;" />
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

<style>
	.facts {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		margin: 0;
	}

	.fact {
		display: flex;
		gap: 0.75rem;
		font-size: 0.9rem;
	}

	.fact dt {
		color: var(--fg-muted);
		font-family: var(--font-mono);
		min-width: 90px;
	}

	.fact dd {
		margin: 0;
		color: var(--fg);
	}

	.notes-row {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1.2rem;
	}

	.notes-row .facts {
		flex: 1;
	}

	.lain-still {
		width: 108px;
		height: 108px;
		object-fit: cover;
		flex-shrink: 0;
	}

	@media (max-width: 480px) {
		.lain-still {
			width: 76px;
			height: 76px;
		}
	}

	h2.label {
		font-family: var(--font-mono);
		font-size: 1rem;
		font-weight: 400;
		color: var(--accent-blue);
		margin: 0 0 0.8rem 0;
		text-transform: none;
	}
</style>
