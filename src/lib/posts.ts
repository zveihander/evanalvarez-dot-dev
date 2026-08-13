export type PostMeta = {
	title: string;
	date: string;
	description: string;
	updated?: string;
	tags?: string[];
	readingTime: number;
};

export type PostSummary = PostMeta & { slug: string };

const metadataModules = import.meta.glob<{ metadata: PostMeta }>('/src/lib/posts/*.md', {
	eager: true
});

function slugFromPath(path: string) {
	return path.split('/').pop()!.replace('.md', '');
}

export function getAllPosts(): PostSummary[] {
	return Object.entries(metadataModules)
		.map(([path, mod]) => ({ slug: slugFromPath(path), ...mod.metadata }))
		.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
