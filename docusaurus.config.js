/**
 * Copyright (c) Flashbots Ltd. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
require('dotenv').config();
const { themes } = require('prism-react-renderer');

const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @returns {Promise<import('@docusaurus/types').Config>} */
module.exports = async function createConfigAsync() {
  return {
    title: 'BuilderNet Blog',
    tagline: 'Illuminate Dmocrtz Dstrib Prtct',
    baseUrl: process.env.BASE_URL,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'BuilderNet',
    projectName: 'blog',
    url: process.env.TARGET_URL,
    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
    ],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        colorMode: {
          defaultMode: 'light',
        },
        prism: {
          theme: lightTheme,
          darkTheme,
          additionalLanguages: ['solidity', 'typescript', 'bash', 'json', 'javascript', 'yaml', 'toml'], // https://docusaurus.io/docs/markdown-features/code-blocks#supported-languages
        },
        navbar: {
          title: 'BuilderNet',
          logo: {
            alt: 'Flashbots Logo',
            src: 'img/logo.png',
          },
          items: [
            { to: '/docs', label: 'Docs', position: 'left' }, // or position: 'right'
            { to: '/blog', label: 'Blog', position: 'left' }, // or position: 'right'
            {
              href: 'https://github.com/orgs/buildernet/repositories',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        image: 'assets/social-preview-3.jpg',
      }),
    presets: [
      [
        '@docusaurus/preset-classic',
        {
          docs: {
            /* docs plugin options */
            routeBasePath: 'docs',
            id: 'docs',
          },
          blog: {
            path: 'blog',
            // Simple use-case: string editUrl
            // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
            // Advanced use-case: functional editUrl
            editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
              `https://github.com/buildernet/blog/edit/main/website/${blogDirPath}/${blogPath}`,
            editLocalizedFiles: false,
            blogTitle: 'BuilderNet Blog',
            blogDescription: 'Blog',
            blogSidebarCount: 5,
            blogSidebarTitle: 'All our posts',
            routeBasePath: 'blog',
            include: ['**/*.{md,mdx}'],
            exclude: [
              '**/_*.{js,jsx,ts,tsx,md,mdx}',
              '**/_*/**',
              '**/*.test.{js,jsx,ts,tsx}',
              '**/__tests__/**',
            ],
            postsPerPage: 'ALL',
            blogListComponent: '@theme/BlogListPage',
            blogPostComponent: '@theme/BlogPostPage',
            blogTagsListComponent: '@theme/BlogTagsListPage',
            blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
            remarkPlugins: [(await import('remark-math')).default],
            rehypePlugins: [],
            beforeDefaultRemarkPlugins: [],
            beforeDefaultRehypePlugins: [],
            truncateMarker: /<!--\s*(truncate)\s*-->/,
            showReadingTime: true,
          },
        }
      ],
    ],
    plugins: [
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      '@docusaurus/plugin-ideal-image',
    ],
  };
};
