<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<title>evan alvarez</title>
	<link rel="icon" href="/favicon.ico" sizes="32x32" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</svelte:head>

{@render children()}

<style>
	:global {
		*,
		*::before,
		*::after {
			box-sizing: border-box;
		}

		/* FONTS */
		@font-face {
			font-family: 'Fraunces';
			src: url('/fonts/fraunces-latin-regular.woff2') format('woff2');
			font-weight: 400;
			font-style: normal;
			font-display: swap;
		}

		@font-face {
			font-family: 'Fraunces';
			src: url('/fonts/fraunces-latin-italic.woff2') format('woff2');
			font-weight: 400;
			font-style: italic;
			font-display: swap;
		}

		@font-face {
			font-family: 'Fraunces';
			src: url('/fonts/fraunces-latin-500.woff2') format('woff2');
			font-weight: 500;
			font-style: normal;
			font-display: swap;
		}

		@font-face {
			font-family: 'Fraunces';
			src: url('/fonts/fraunces-latin-500italic.woff2') format('woff2');
			font-weight: 500;
			font-style: italic;
			font-display: swap;
		}

		@font-face {
			font-family: 'Newsreader';
			src: url('/fonts/newsreader-latin_latinext-regular.woff2') format('woff2');
			font-weight: 400;
			font-style: normal;
			font-display: swap;
		}

		@font-face {
			font-family: 'Newsreader';
			src: url('/fonts/newsreader-latin_latinext-italic.woff2') format('woff2');
			font-weight: 400;
			font-style: italic;
			font-display: swap;
		}

		@font-face {
			font-family: 'IBM Plex Mono';
			src: url('/fonts/ibm-plex-mono-latin-regular.woff2') format('woff2');
			font-weight: 400;
			font-style: normal;
			font-display: swap;
		}

		:root {
			--bg: #282828;
			--bg-light: #32302f;
			--bg-lighter: #504945;
			--fg: #ebdbb2;
			--fg-muted: #a89984;
			--accent-yellow: #fabd2f;
			--accent-green: #8ec07c;
			--accent-blue: #83a598;
			--accent-purple: #d3869b;
			--font-display: 'Fraunces', Georgia, serif;
			--font-body: 'Newsreader', Georgia, serif;
			--font-mono: 'IBM Plex Mono', 'Courier New', monospace;
		}

		@media (prefers-color-scheme: light) {
			:root {
				--bg: #fbf1c7;
				--bg-light: #f2e5bc;
				--bg-lighter: #d5c4a1;
				--fg: #3c3836;
				--fg-muted: #7c6f64;
				--accent-yellow: #b57614;
				--accent-green: #427b58;
				--accent-blue: #076678;
				--accent-purple: #8f3f71;
			}
		}

		html {
			color-scheme: light dark;
			background-color: var(--bg);
			color: var(--fg);
		}

		body {
			margin: 0;
		}

		h1,
		h2 {
			font-family: var(--font-display);
			font-weight: 500;
		}
		h1 {
			font-size: 2.8rem;
		}
		h2 {
			font-size: 1.2rem;
		}
		body {
			font-family: var(--font-body);
			font-size: 1.1rem;
		}
		.label,
		code {
			font-family: var(--font-mono);
		}

		p {
			line-height: 1.15;
		}

		a {
			color: var(--accent-green);
			text-decoration: none;
		}

		a:focus {
			color: var(--accent-purple);
		}

		.wrapper {
			display: flex;
			flex-direction: column;
			gap: 0.8rem;
			max-width: 720px;
			margin: 0 auto;
			padding: 1.5rem 1.4rem;
		}

		.sep {
			margin: 0 0.25rem;
		}

		hr {
			border: none;
			border-top: 1px solid var(--bg-lighter);
			margin: 0.3rem 0 1.3rem 0;
		}

		section h2 {
			margin: 0;
		}

		section {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		.pgp-fprint {
			display: flex;
			align-items: baseline;
			gap: 0.6rem;
			font-family: var(--font-mono);
			font-size: 0.85rem;
			color: var(--fg-muted);
		}

		.pgp-fprint .label {
			color: var(--accent-yellow);
		}

		.pgp-fprint code {
			color: var(--fg-muted);
			letter-spacing: 0.02em;
		}

		.fprint-btn {
			display: inline-flex;
			align-items: baseline;
			gap: 0.4rem;
			background-color: var(--bg-light);
			border: none;
			border-radius: 8px;
			padding: 0.2rem 0.5rem;
			font: inherit;
			color: inherit;
			cursor: pointer;
		}

		.fprint-btn:focus-visible {
			outline: 2px solid var(--accent-purple);
			outline-offset: 2px;
		}

		ul.plist {
			counter-reset: project;
			list-style: none;
			padding: 0;
			display: flex;
			flex-direction: column;
			gap: 0.4rem;
		}

		.plist-item {
			counter-increment: project;
			display: flex;
			align-items: baseline;
			gap: 0.75rem;
			font-size: 0.9rem;
			font-family: var(--font-mono);
		}

		.plist-item::before {
			content: counter(project, decimal-leading-zero);
			color: var(--fg-muted);
			font-family: var(--font-mono);
			font-size: 0.9rem;
		}

		.plist-item a {
			margin-left: auto;
			flex-shrink: 0;
		}

		.plist-name {
			color: var(--accent-yellow);
		}

		.plist-desc {
			color: var(--fg-muted);
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			flex-shrink: 1;
			min-width: 0;
		}

		.viewall {
			align-self: flex-end;
			color: var(--fg-muted);
			font-family: var(--font-mono);
			font-size: 0.85rem;
		}

		footer {
			margin-top: 4em;
		}

		.media-frame {
			display: block;
			border-radius: 6px;
			border: 1px solid var(--bg-lighter);
			box-shadow: 0 6px 20px -8px rgba(0, 0, 0, 0.45);
			filter: grayscale(0.25) contrast(1.03);
		}
	}
</style>
