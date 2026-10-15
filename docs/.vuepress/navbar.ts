/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/', icon: "BXS：Home-Alt-2" },
  { text: '博客', link: '/blog/' },
  { text: '工具资料', icon: '', link: '/工具资料/' },
  
  // {
  //   text: '笔记',
  //   items: [
  //     { text: '示例', link: '/demo/README.md' }
  //   ]
  // },

  {
    text: '我的知识',
    items: [
      { text: '电脑基础', link: '/电脑基础/' },
      { text: '学学唱歌', link: '/学学唱歌/' },
    ]
  },

  {
    text: '分类',
    items: [
      { text: '标签', link: '/blog/tags/' },
      { text: '归档', link: '/blog/archives/' }
    ]
  },

  { text: '友链', icon: 'lucide:users', link: '/friends/' },
])
