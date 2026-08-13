import adapter from '@sveltejs/adapter-static';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import { defineConfig } from 'vite';
import mdsvexConfig from './mdsvex.config.ts';

export default defineConfig({
  plugins: [
    enhancedImages(),
    sveltekit({
      extensions: ['.svelte', ...(mdsvexConfig.extensions ?? [])],
      preprocess: [mdsvex(mdsvexConfig)],
      compilerOptions: {
        // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
        runes: ({ filename }) =>
          filename.split(/[/\\]/).includes('node_modules') ? undefined : true
      },
      adapter: adapter(),
      inlineStyleThreshold: 4096,
      prerender: {
        handleUnseenRoutes: "warn"
      }
    })
  ]
});
