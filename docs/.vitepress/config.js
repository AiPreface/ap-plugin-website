import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
import nav from './configs/nav'
import sidebar from './configs/sidebar'

export default defineConfig({
  // lang: 'en-US',
  title: 'AP-PLUGIN',
  description: '使用 Vitepress 搭建组件库文档站点。',

  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  base: process.env.BASE || '/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],

  markdown: {
    headers: {
      level: [0, 0]
    },

    // options for markdown-it-anchor
    anchor: { permalink: false },

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: 'github-light', dark: 'github-dark' },

    config: (md) => {
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'less'
      })
    }
  },

  themeConfig: {
    outlineTitle: '本页目录',
    lastUpdatedText: '上次更新',
    logo: '/logo.svg',

    algolia: {
      appId: '56ZALUZDUK',
      apiKey: 'e09ab0c36e7f57cfba732ee4df3593ad',
      indexName: 'ap-plugin-website'
    },

    // nav
    nav,

    // sidebar
    sidebar,

    editLink: {
      pattern: 'https://github.com/ap-plugin/ap-plugin-website/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ap-plugin/ap-plugin-website' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 AP-Plugin开发组'
    }
  }
})
