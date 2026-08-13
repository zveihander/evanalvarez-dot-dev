import { codeToHtml, type ShikiTransformer } from 'shiki';

const THEMES = { dark: 'gruvbox-dark-medium', light: 'gruvbox-light-medium' };

const stripTabIndex: ShikiTransformer = {
	pre(node) {
		delete node.properties.tabindex;
	}
};

export async function highlightCode(code: string, lang: string) {
	const options = { themes: THEMES, defaultColor: false as const, transformers: [stripTabIndex] };
	try {
		return await codeToHtml(code, { lang, ...options });
	} catch {
		return await codeToHtml(code, { lang: 'text', ...options });
	}
}
