import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
		preload: ({ type, path }) => {
			if (type !== 'font') return false;
			return (
				path.includes('fraunces-latin-500.woff2') ||
				path.includes('newsreader-latin_latinext-regular.woff2') ||
				path.includes('ibm-plex-mono-latin-regular.woff2')
			);
		}
	});
	response.headers.set('X-Clacks-Overhead', 'GNU Terry Pratchett');
	return response;
};
