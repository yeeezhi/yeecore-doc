import {defineConfig} from 'vitepress'

//命令集：pnpm add -D vitepress vue @mdit-vue/shared @types/node busuanzi.pure.js canvas-confetti less medium-zoom sass vitepress-plugin-comment-with-giscus xgplayer

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
            pattern: 'https://github.com/Yiov/vitepress-doc/edit/main/docs/:path', // 改成自己的仓库
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
            {text: '更新日志', link: '/changelog.md'},
        ],


        //侧边栏
        sidebar: [
            {
                //分组标题1
                text: '介绍',
                collapsed: false,
                items: [
                    {text: '前言', link: '/preface'},
                ],
            },
            {
                //分组标题2
                text: 'YeeCore',
                collapsed: false,
                items: [
                    {text: '快速上手', link: '/YeeCore/快速上手',},
                    {
                        text: '表达式',
                        collapsed: true,
                        items: [
                            {text: '条件', link: '/YeeCore/表达式/条件'},
                            {text: '玩家', link: '/YeeCore/表达式/玩家'},
                            {text: '物品', link: '/YeeCore/表达式/物品'},
                            {text: '货币', link: '/YeeCore/表达式/货币'},
                            {text: '数值', link: '/YeeCore/表达式/数值'},
                            {text: '其它', link: '/YeeCore/表达式/其它'},

                        ],
                    },
                    {text: 'Frontmatter', link: '/frontmatter'},
                ],
            },
            {
                //分组标题3
                text: '更多插件',
                collapsed: false,
                items: [
                    {text: 'YeeTask', link: '/YeeTask'},
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
