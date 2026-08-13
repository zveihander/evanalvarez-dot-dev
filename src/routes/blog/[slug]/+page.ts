import { error } from '@sveltejs/kit';
import type { Component } from 'svelte';
import type { PostMeta } from '$lib/posts';

export const prerender = true;
export const csr = false;

const modules = import.meta.glob<{ default: Component; metadata: PostMeta }>('/src/lib/posts/*.md');

export const entries = () => {
	return Object.keys(modules).map((path) => ({
		slug: path.split('/').pop()!.replace('.md', '')
	}));
};

export async function load({ params }) {
	const path = `/src/lib/posts/${params.slug}.md`;
	const resolver = modules[path];

	if (!resolver) error(404, 'Post not found');

	const post = await resolver();
	return { Content: post.default, meta: post.metadata };
}
