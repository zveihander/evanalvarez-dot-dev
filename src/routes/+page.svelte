<script lang="ts">
	import { resolve } from '$app/paths';
	import { SITE_URL, SITE_NAME } from '$lib/site';

	const fingerprint = 'D894 D8F3 FCD0 4622 F05E AD16 D461 E3C3';
	const description = 'Evan Alvarez is a systems programmer studying engineering at Texas A&M.';
</script>

<svelte:head>
	<title>evan alvarez</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={SITE_URL + '/'} />
	<link rel="pgp-key" href="/pgp-key.asc" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:title" content="evan alvarez" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={SITE_URL + '/'} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="evan alvarez" />
	<meta name="twitter:description" content={description} />
</svelte:head>

<div class="wrapper">
	<header>
		<h1>evan alvarez</h1>
		<p>
			systems programmer, open source enthusiast, and GNU shill. studying engineering at <a
				href="https://www.tamu.edu/"
				target="_blank"
				rel="noopener noreferrer">Texas A&M</a
			>. mostly uses languages like C, Zig, and Rust.
		</p>
		<p style="color: var(--fg-muted)">
			<a href="mailto:evanalvarez@tutamail.com" rel="me">email</a>
			<span class="sep">/</span>
			<a href="https://github.com/zveihander" target="_blank" rel="me noopener noreferrer">github</a>
			<span class="sep">/</span>
			<a
				href="https://www.instagram.com/evan.alvarizz"
				target="_blank"
				rel="me noopener noreferrer">instagram</a
			>
		</p>
		<p class="pgp-fprint">
			<a href="/pgp-key.asc" rel="external"><span class="label">PGP</span></a>
			<button id="fprint-btn" class="fprint-btn">
				<code id="fprint-code">{fingerprint}</code>
				<span
					class="label"
					id="copied-label"
					role="status"
					aria-live="polite"
					style="color: var(--accent-green); display: none;">(copied!)</span
				>
			</button>

			<script>
				const btn = document.getElementById('fprint-btn');
				const codeEl = document.getElementById('fprint-code');
				const label = document.getElementById('copied-label');
				let timeout;

				btn.addEventListener('click', () => {
					navigator.clipboard
						.writeText(codeEl.textContent.replace(/\s/g, ''))
						.then(() => {
							label.style.display = 'inline';
							clearTimeout(timeout);
							timeout = setTimeout(() => {
								label.style.display = 'none';
							}, 1200);
						})
						.catch(() => {});
				});
			</script>
		</p>
	</header>
	<main>
		<hr />
		<section>
			<h2>projects</h2>
			<ul class="plist">
				<li class="plist-item">
					<span class="plist-name">evanalvarez.dev</span>
					<span class="plist-desc">my website written in sveltekit</span>
					<a
						href="https://github.com/zveihander/evanalvarez-dot-dev"
						target="_blank"
						rel="noopener noreferrer">code ↗</a
					>
				</li>
				<li class="plist-item">
					<span class="plist-name">void-supplements</span>
					<span class="plist-desc">a package repository for void linux</span>
					<a
						href="https://github.com/zveihander/void-supplements"
						target="_blank"
						rel="noopener noreferrer">code ↗</a
					>
				</li>
			</ul>
		</section>
		<hr />
		<section>
			<h2>writings</h2>
		</section>
	</main>
	<footer>
		<hr />
		<p style="color: var(--fg-muted); font-size: 0.95rem;">
			&copy; {new Date().getFullYear()} evan alvarez
			<span class="sep">/</span>
			<a href={resolve('/colophon')}>colophon</a>
		</p>
	</footer>
</div>
