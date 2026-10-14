/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改不会重启 vuepress 服务，而是通过热更新的方式生效
 * 但同时部分配置项不支持热更新，请查看文档说明
 * 对于不支持热更新的配置项，请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会覆盖 `.vuepress/config.ts` 文件中的配置
 */

import { defineThemeConfig } from 'vuepress-theme-plume'
import collections from './collections'
import navbar from './navbar'

/**
 * @see https://theme-plume.vuejs.press/config/theme/
 */
export default defineThemeConfig({
  logo: 'LiKe.VerMi.png',
  appearance: true,
  transition: true, 
  social: [
    { icon: 'github', link: 'https://github.com/LiKEKFA' },
  ],


  /**
   * @see https://theme-plume.vuejs.press/config/theme/#profile
   */

  
  footer: {
    message: "这里没有什么了",
    copyright: "Copyright © 2025 - 2026 present LiKEKFA. All rights reserved.",
  },

  navbar,
  profile:{ },

  collections: [ 
    { type: 'post', 
      dir: 'blog', 
      title: '博客',
      exclude:['/blog/catalog-1/*.md'],

      profile: {
          avatar: '/xsphoto2.png', // 头像路径
          name: '黎可KFA', // 显示名称
          description: '个人简介', // 简介文本
          circle: true, // 圆形头像
          location: '青岛', // 所在地
          organization: '个人', // 所属组织
          layout: 'right', // 布局位置 left|right
        },

      social: [
        { icon: 'github', link: 'https://github.com/LiKEKFA' },
        { icon: 'bilibili', link: 'https://space.bilibili.com/266086224?spm_id_from=333.1007.0.0' },
        { icon: 'qq', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=FLmOKqmjg91J9omL83SxdGgbrnZPqvRj&s=1' },
      ],
    },


    { type: 'doc', 
      dir: '电脑基础', 
      title: '电脑基础',
      sidebar: 'auto',
      linkPrefix: "/电脑基础/"
    } ,

    { type: 'doc', 
      dir: '工具资料', 
      title: '工具资料',
      sidebar: 'auto',
      linkPrefix: "/工具资料/"
    } ,

    { type: 'doc', 
      dir: '学学唱歌', 
      title: '学学唱歌',
      sidebar: 'auto',
      linkPrefix: "/学学唱歌/"
    } ,
  ],

})
