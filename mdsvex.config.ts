import { defineMDSveXConfig as defineConfig, escapeSvelte } from 'mdsvex';
import type { MdsvexOptions } from 'mdsvex';
import remarkMath from 'remark-math';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { highlightCode } from './src/lib/markdown/highlight.ts';
import remarkReadingTime from './src/lib/markdown/remark-reading-time.ts';

const config = defineConfig({
	extensions: ['.md'],
	smartypants: true,
	highlight: {
		highlighter: async (code, lang) => escapeSvelte(await highlightCode(code, lang ?? 'text'))
	},
	remarkPlugins: [remarkMath, remarkReadingTime] as MdsvexOptions['remarkPlugins'],
	rehypePlugins: [
		rehypeKatexSvelte,
		rehypeSlug,
		[rehypeAutolinkHeadings, { behavior: 'wrap' }]
	] as MdsvexOptions['rehypePlugins']
});

export default config;
