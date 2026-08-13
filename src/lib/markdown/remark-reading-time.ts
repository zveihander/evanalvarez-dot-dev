import { visit } from 'unist-util-visit';
import type { Plugin } from 'unified';
import type { Root, Text } from 'mdast';
import type { VFile } from 'vfile';

const WORDS_PER_MINUTE = 200;

const remarkReadingTime: Plugin<[], Root> = () => (tree, file: VFile) => {
	let words = 0;

	visit(tree, 'text', (node: Text) => {
		words += node.value.split(/\s+/).filter(Boolean).length;
	});

	const data = file.data as { fm?: Record<string, unknown> };
	data.fm ??= {};
	data.fm.readingTime = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
};

export default remarkReadingTime;
