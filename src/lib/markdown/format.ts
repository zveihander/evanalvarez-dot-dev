export function formatDate(iso: string) {
	return new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(
		new Date(iso)
	);
}

export function formatReadingTime(minutes: number) {
	return `${minutes} min read`;
}
