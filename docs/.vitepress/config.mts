import {defineConfig} from 'vitepress'

//命令集：pnpm add -D vitepress vue @mdit-vue/shared @types/node busuanzi.pure.js canvas-confetti less medium-zoom sass vitepress-wiki-comment-with-giscus xgplayer

// 版本获取 pnpm add -D @types/node
import {createRequire} from 'module'
// @ts-ignore
const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')


export default defineConfig({
    lang: 'zh-CN',
    title: "清守插件",
    description: "清守系列插件文档",

    // #region fav
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}],
    ],
    // #endregion fav

    base: '/', //网站部署到github的vitepress这个仓库里

    //cleanUrls:true, //开启纯净链接无html

    //启用深色模式
    appearance: 'force-auto',

    //多语言
    locales: {
        root: {
            label: '简体中文',
            lang: 'Zh_CN',
        },
    },

    //markdown配置
    markdown: {
        //行号显示
        lineNumbers: true,

        // 使用 `!!code` 防止转换
        codeTransformers: [
            {
                postprocess(code) {
                    return code.replace(/\[\!\!code/g, '[!code')
                }
            }
        ],

        // 开启图片懒加载
        image: {
            lazyLoading: true
        },

        // 组件插入h1标题下
        config: (md) => {
            md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
                let htmlResult = slf.renderToken(tokens, idx, options);
                if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`;
                return htmlResult;
            }
        }

    },

    lastUpdated: true, //此配置不会立即生效，需git提交后爬取时间戳，没有安装git本地报错可以先注释

    //主题配置
    themeConfig: {
        //左上角logo
        //logo: '/logo.png',
        //logo: 'https://vitejs.cn/vite3-cn/logo-with-shadow.png', //远程引用
        //siteTitle: false, //标题隐藏

        //设置站点标题 会覆盖title
        //siteTitle: 'Hello World',

        //编辑本页
        editLink: {
            pattern: 'https://github.com/ye0130/yeecore-doc/edit/master/docs/:path', // 改成自己的仓库
            text: '在GitHub编辑本页'
        },

        //上次更新时间
        lastUpdated: {
            text: '上次更新时间',
            formatOptions: {
                dateStyle: 'short', // 可选值full、long、medium、short
                timeStyle: 'medium' // 可选值full、long、medium、short
            },
        },

        //导航栏
        nav: [
            {text: '首页', link: '/'},
            {text: '更新日志', link: '/wiki/YeeCore/更新日志.md'},
        ],


        //侧边栏
        sidebar: [
            {
                //分组标题1
                text: 'YeeCore',
                collapsed: false,
                items: [
                    {text: '前言', link: '/wiki/YeeCore/前言'},
                    {text: '快速上手', link: '/wiki/YeeCore/快速上手',},
                    {
                        text: '表达式',
                        collapsed: false,
                        items: [
                            {text: '条件', link: '/wiki/YeeCore/表达式/条件'},
                            {text: '玩家', link: '/wiki/YeeCore/表达式/玩家'},
                            {text: '物品', link: '/wiki/YeeCore/表达式/物品'},
                            {text: '货币', link: '/wiki/YeeCore/表达式/货币'},
                            {text: '数值', link: '/wiki/YeeCore/表达式/数值'},
                            {text: '其它', link: '/wiki/YeeCore/表达式/其它'},
                            {text: '字符串', link: '/wiki/YeeCore/表达式/字符串'},
                        ],
                    },
                ],
            },
            {
                //分组标题2
                text: '更多插件',
                collapsed: false,
                items: [
                    {
                        text: 'YeeRank',
                        collapsed: true,
                        items: [
                            {text: 'Placeholder', link: '/wiki/YeeRank/Placeholder'},
                        ],
                    },
                    {
                        text: 'YeeHuya',
                        collapsed: true,
                        items: [
                            {text: 'Placeholder', link: '/wiki/YeeHuya/Placeholder'},
                        ],
                    },
                    {
                        text: 'YeeTask',
                        collapsed: true,
                        items: [
                            {text: 'Placeholder', link: '/wiki/YeeTask/Placeholder'},
                        ],
                    },
                    {
                        text: 'YeeBattlePass',
                        collapsed: true,
                        items: [
                            {text: 'Placeholder', link: '/wiki/YeeBattlePass/Placeholder'},
                        ],
                    },
                    {
                        text: 'SpaceRingPlus',
                        collapsed: true,
                        items: [
                            {text: 'Placeholder', link: '/wiki/SpaceRingPlus/Placeholder'},

                            {text: '快捷分解', link: '/wiki/SpaceRingPlus/Decompose'},
                            {text: '掉落物配置', link: '/wiki/SpaceRingPlus/Drop'},
                            {text: '迁移KLRing数据', link: '/wiki/SpaceRingPlus/KLRing'},
                        ],
                    },
                ],
            },
            {
                //分组标题3
                text: '其他站点',
                collapsed: false,
                items: [
                    {text: '插件官网', link: 'https://www.goodmc.cn/'},
                    {text: '授权后台', link: 'https://admin.goodmc.cn/'},
                ],
            },
        ],


        //本地搜索
        search: {
            provider: 'local',
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                },
                            },
                        },
                    },
                },
            },
        },


        //社交链接
        socialLinks: [
            {
                icon: {
                    svg: '<svg t="1707404275090" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4218" width="32" height="32"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="4219"></path></svg>'
                },
                link: 'https://qm.qq.com/q/ZtZxlAyYYU'
            },
            {icon: 'github', link: 'https://github.com/ye0130'},
        ],

        //手机端深浅模式文字修改
        darkModeSwitchLabel: '深浅模式',


        //页脚
        footer: {
            message: 'Released under the MIT License.',
            copyright: `Copyright ©${new Date().getFullYear()} <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备2023002896号-1</a>`,
        },


        //侧边栏文字更改(移动端)
        sidebarMenuLabel: '目录',

        //返回顶部文字修改(移动端)
        returnToTopLabel: '返回顶部',


        //大纲显示2-3级标题
        outline: {
            level: [2, 3],
            label: '当前页大纲'
        },


        //自定义上下页名
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },

    },


})
