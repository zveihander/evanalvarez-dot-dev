import { getAllPosts } from '$lib/posts';

export const prerender = true;
export const csr = false;

export function load() {
	return { posts: getAllPosts() };
}
