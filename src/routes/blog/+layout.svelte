<script lang="ts">
	import 'katex/dist/katex.min.css';

	let { children } = $props();
</script>

{@render children()}

<style>
	:global {
		.postlist {
			list-style: none;
			padding: 0;
			margin: 0;
			display: flex;
			flex-direction: column;
		}

		.postlist li {
			padding: 1rem 0;
			border-bottom: 1px solid var(--bg-lighter);
		}

		.postlist li:first-child {
			padding-top: 0;
		}

		.postlist li:last-child {
			padding-bottom: 0;
			border-bottom: none;
		}

		.postlist-title {
			display: flex;
			align-items: baseline;
			justify-content: space-between;
			gap: 1rem;
		}

		.postlist-title a {
			font-family: var(--font-display);
			font-size: 1.15rem;
			text-decoration: underline;
			text-decoration-color: transparent;
			text-underline-offset: 3px;
			transition: text-decoration-color 0.15s ease;
		}

		.postlist-title a:hover {
			text-decoration-color: var(--accent-green);
		}

		.post-date {
			color: var(--fg-muted);
			font-family: var(--font-mono);
			font-size: 0.85rem;
			white-space: nowrap;
		}

		.post-desc {
			color: var(--fg-muted);
			margin: 0.35rem 0 0;
		}

		.prose {
			font-size: 1.05rem;
		}

		.prose h1 {
			line-height: 1.15;
		}

		.post-body {
			line-height: 1.7;
		}

		.post-body > * + * {
			margin-top: 1.35rem;
		}

		.post-body h2 {
			margin-top: 2.75rem;
			padding-bottom: 0.4rem;
			border-bottom: 1px solid var(--bg-lighter);
		}

		.post-body h3 {
			margin-top: 2rem;
			font-family: var(--font-display);
			font-weight: 500;
			font-size: 1.3rem;
		}

		.post-body a {
			text-decoration: underline;
			text-decoration-color: var(--bg-lighter);
			text-underline-offset: 3px;
			transition: text-decoration-color 0.15s ease;
		}

		.post-body a:hover {
			text-decoration-color: var(--accent-green);
		}

		.post-body h2 a,
		.post-body h3 a {
			color: inherit;
			text-decoration: none;
		}

		.post-body h2 a::before,
		.post-body h3 a::before {
			content: '#';
			display: inline-block;
			margin-right: 0.4rem;
			color: var(--fg-muted);
			opacity: 0;
			transition: opacity 0.15s ease;
		}

		.post-body h2:hover a::before,
		.post-body h3:hover a::before {
			opacity: 1;
		}

		.post-body strong {
			color: var(--fg);
			font-weight: 600;
		}

		.post-body ul,
		.post-body ol {
			padding-left: 1.4rem;
		}

		.post-body li + li {
			margin-top: 0.4rem;
		}

		.post-body li::marker {
			color: var(--fg-muted);
		}

		.post-body blockquote {
			margin: 0;
			padding-left: 1rem;
			border-left: 3px solid var(--accent-purple);
			color: var(--fg-muted);
			font-style: italic;
		}

		.post-body hr {
			margin: 2.5rem 0;
		}

		.post-body img {
			display: block;
			max-width: 100%;
			border-radius: 6px;
			border: 1px solid var(--bg-lighter);
		}

		.post-body table {
			width: 100%;
			border-collapse: collapse;
			font-size: 0.92rem;
		}

		.post-body th,
		.post-body td {
			padding: 0.5rem 0.75rem;
			border-bottom: 1px solid var(--bg-lighter);
			text-align: left;
		}

		.post-body th {
			color: var(--fg-muted);
			font-family: var(--font-mono);
			font-weight: 500;
			font-size: 0.8rem;
			text-transform: uppercase;
			letter-spacing: 0.03em;
		}

		.post-body pre {
			background-color: var(--bg-light);
			border: 1px solid var(--bg-lighter);
			border-radius: 6px;
			padding: 1rem;
			overflow-x: auto;
			font-size: 0.9rem;
			line-height: 1.55;
		}

		.post-body code {
			font-family: var(--font-mono);
		}

		.post-body pre.shiki span {
			color: var(--shiki-light);
		}

		@media (prefers-color-scheme: dark) {
			.post-body pre.shiki span {
				color: var(--shiki-dark);
			}
		}

		.post-body :not(pre) > code {
			background-color: var(--bg-light);
			padding: 0.1rem 0.35rem;
			border-radius: 4px;
			font-size: 0.9em;
		}
	}
</style>
