<script lang="ts">
	import type { PostMeta } from '$lib/posts';
	import { formatDate, formatReadingTime } from '$lib/markdown/format';

	let { meta }: { meta: PostMeta } = $props();
</script>

<dl class="meta-panel">
	<div class="meta-row">
		<dt>
			<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.6">
				<rect x="3" y="4.5" width="18" height="16" rx="2" />
				<line x1="3" y1="9.5" x2="21" y2="9.5" />
				<line x1="8" y1="2.5" x2="8" y2="6.5" />
				<line x1="16" y1="2.5" x2="16" y2="6.5" />
			</svg>
			created
		</dt>
		<dd>{formatDate(meta.date)}</dd>
	</div>

	{#if meta.updated}
		<div class="meta-row">
			<dt>
				<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.6">
					<path d="M21 12a9 9 0 1 1-3-6.7" />
					<polyline points="21 3 21 9 15 9" />
				</svg>
				updated
			</dt>
			<dd>{formatDate(meta.updated)}</dd>
		</div>
	{/if}

	<div class="meta-row">
		<dt>
			<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.6">
				<circle cx="12" cy="12" r="9" />
				<polyline points="12 7 12 12 15.5 14" />
			</svg>
			read time
		</dt>
		<dd>{formatReadingTime(meta.readingTime)}</dd>
	</div>

	{#if meta.tags?.length}
		<div class="meta-row">
			<dt>
				<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.6">
					<path
						d="M12.6 2H4a2 2 0 0 0-2 2v8.6a1 1 0 0 0 .3.7l9 9a2.4 2.4 0 0 0 3.4 0l6.6-6.6a2.4 2.4 0 0 0 0-3.4l-9-9A1 1 0 0 0 12.6 2z"
					/>
					<line x1="7" y1="7" x2="7.01" y2="7" />
				</svg>
				tags
			</dt>
			<dd class="meta-tags">
				{#each meta.tags as tag (tag)}
					<span class="meta-tag">{tag}</span>
				{/each}
			</dd>
		</div>
	{/if}
</dl>

<style>
	.meta-panel {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: baseline;
		column-gap: 1.25rem;
		row-gap: 0.55rem;
		margin: 1.1rem 0 2.25rem;
		padding: 0.95rem 1.15rem;
		border: 1px solid var(--bg-lighter);
		border-radius: 10px;
		background-color: var(--bg-light);
		font-size: 0.85rem;
	}

	.meta-row {
		display: contents;
	}

	dt {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin: 0;
		color: var(--fg-muted);
		font-family: var(--font-mono);
		white-space: nowrap;
	}

	dt svg {
		width: 0.95rem;
		height: 0.95rem;
		flex-shrink: 0;
		opacity: 0.75;
	}

	dd {
		margin: 0;
		color: var(--fg);
	}

	.meta-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.meta-tag {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		color: var(--accent-yellow);
		background-color: var(--bg);
		border: 1px solid var(--bg-lighter);
		border-radius: 999px;
		padding: 0.1rem 0.6rem;
	}
</style>
