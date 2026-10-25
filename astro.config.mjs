import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import rehypeChapters from './src/lib/rehype-chapters.mjs';

export default defineConfig({
  // Switch to https://www.skosarabe.com once the domain points at GitHub Pages.
  site: 'https://skosarabem-netizen.github.io',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [mdx()],
  markdown: { processor: unified({ rehypePlugins: [rehypeChapters] }) },
});
