import {defineConfig} from 'vitepress'

//命令集：pnpm add -D vitepress vue @mdit-vue/shared @types/node busuanzi.pure.js canvas-confetti less medium-zoom sass vitepress-wiki-comment-with-giscus xgplayer
// 版本获取 pnpm add -D @types/node
import {createRequire} from 'module'
// @ts-ignore
const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')


export default defineConfig({
    lang: 'zh-CN',
    title: "椰の插件",
    description: "椰の系列插件文档",

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
                //if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`;
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
        //editLink: {
        //    pattern: 'https://github.com/ye0130/yeecore-doc/edit/master/docs/:path', // 改成自己的仓库
        //    text: '在GitHub编辑本页'
        //},

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
            {text: '插件购买', link: 'https://qm.qq.com/q/BmwKs6EYI8'},
        ],


        //侧边栏
        sidebar: [
            {
                text: '快速上手',
                collapsed: false,
                link: '/wiki/YeePlugins',
                items: [
                    // {text: '新年贺礼🎆', link: '/wiki/新年贺礼'},
                    // {text: '春节活动🎆', link: '/wiki/春节活动'},
                    {text: '云端插件', link: '/wiki/YeePlugins'},
                    {text: '推广激励', link: '/wiki/popularize'},
                ],
            },
            {
                //分组标题1
                text: 'YeeCore',
                collapsed: false,
                items: [
                    {text: '简介', link: '/wiki/YeeCore/intro'},
                    {
                        text: '表达式',
                        collapsed: true,
                        items: [
                            {text: '条件', link: '/wiki/YeeCore/expression/condition'},
                            {text: '玩家', link: '/wiki/YeeCore/expression/玩家'},
                            {text: '货币', link: '/wiki/YeeCore/expression/货币'},
                            {text: '数值', link: '/wiki/YeeCore/expression/数值'},
                            {text: '文本', link: '/wiki/YeeCore/expression/文本'},
                            {text: '其它', link: '/wiki/YeeCore/expression/其它'},
                            {text: '物品', link: '/wiki/YeeCore/expression/物品'},
                            {text: '操作器', link: '/wiki/YeeCore/expression/操作器'},
                        ],
                    },
                    {text: '物品库', link: '/wiki/YeeCore/物品库'},
                    {text: '插件变量', link: '/wiki/YeeCore/插件变量'},
                ],
            },
            {
                text: '无尽工艺🎉',
                collapsed: false,
                link: '/wiki/plugins/CraftX/intro',
                items: [
                    {
                        text: '插件功能',
                        link: '/wiki/plugins/CraftX/intro',
                        collapsed: true,
                        items: [
                            {text: '功能模块', link: '/wiki/plugins/CraftX/function/intro'},
                            {text: '变量模块', link: '/wiki/plugins/CraftX/variable/intro'},
                        ],
                    },
                    {
                        text: '优秀示例',
                        collapsed: true,
                        items: [
                            {text: '货币', link: '/wiki/plugins/CraftX/example/货币/intro'},
                            {text: '洗炼', link: '/wiki/plugins/CraftX/example/洗炼/intro'},
                            {text: '强化', link: '/wiki/plugins/CraftX/example/强化/intro'},
                            {text: '黑市', link: '/wiki/plugins/CraftX/example/黑市/intro'},
                            {text: '月卡', link: '/wiki/plugins/CraftX/example/月卡/intro'},
                            {text: '许愿树', link: '/wiki/plugins/CraftX/example/许愿树/intro'},
                            {text: '刮刮乐', link: '/wiki/plugins/CraftX/example/刮刮乐/intro'},
                            {text: '玩家面板', link: '/wiki/plugins/CraftX/example/玩家面板/intro'},
                            {text: '在线奖励', link: '/wiki/plugins/CraftX/example/在线奖励/intro'},
                            {text: '在线奖励', link: '/wiki/plugins/CraftX/example/在线奖励/intro'},
                            {text: '累充奖励', link: '/wiki/plugins/CraftX/example/累充奖励/intro'},
                            {text: '点券商店', link: '/wiki/plugins/CraftX/example/点券商店/intro'},
                            {text: '药剂合成', link: '/wiki/plugins/CraftX/example/药剂合成/intro'},
                            {text: '萌新豪礼', link: '/wiki/plugins/CraftX/example/萌新豪礼/intro'},
                        ],
                    },
                ],
            },

            {
                text: '百宝阁',
                collapsed: false,
                items: [

                    {
                        text: '椰の宝石🔥',
                        link: '/wiki/plugins/YeeGem/intro',
                        collapsed: true,
                        items: [
                            {text: '插件配置', link: '/wiki/plugins/YeeGem/config'},
                            {
                                text: '符文迁移',
                                collapsed: true,
                                items: [
                                    {text: 'ZF-Runes迁移', link: '/wiki/plugins/YeeGem/ZFRunes'},
                                    {text: 'ItemLoreOrigin迁移', link: '/wiki/plugins/YeeGem/ItemLoreOrigin'},
                                ],
                            },
                            {text: '插件API', link: '/wiki/plugins/YeeGem/API'},
                        ],
                    },
                    {
                        text: '椰の强化🔥',
                        link: '/wiki/plugins/YeeIntensify/intro',
                        collapsed: true,
                        items: [
                            {text: '配置文件', link: '/wiki/plugins/YeeIntensify/config'},
                            {text: '扩展示例', link: '/wiki/plugins/YeeIntensify/example'},
                            {text: '插件变量', link: '/wiki/plugins/YeeIntensify/placeholder'},
                        ],
                    },
                    {
                        text: '椰の锻造🔥',
                        link: '/wiki/plugins/YeeForge/intro',
                        collapsed: true,
                        items: [
                            {text: '锻造奖励', link: '/wiki/plugins/YeeForge/reward'},
                            {text: '插件变量', link: '/wiki/plugins/YeeForge/placeholder'},
                        ],
                    },
                    {
                        text: '椰の战令',
                        collapsed: true,
                        link: '/wiki/plugins/YeeBattlePass/intro',
                        items: [
                            {text: '插件变量', link: '/wiki/plugins/YeeBattlePass/placeholder'},
                        ],
                    },
                    {
                        text: '椰の任务',
                        collapsed: true,
                        link: '/wiki/plugins/YeeTask/intro',
                        items: [
                            {text: '插件变量', link: '/wiki/plugins/YeeTask/placeholder'},
                        ],
                    },
                    {
                        text: '椰の天赋',
                        link: '/wiki/plugins/YeeTalent/intro',
                        collapsed: true,
                        items: [
                            {text: '插件变量', link: '/wiki/plugins/YeeTalent/placeholder'},
                        ],
                    },
                    {
                        text: '椰の饰品',
                        link: '/wiki/plugins/YeeJewelry/intro',
                        collapsed: true,
                        items: [
                            {text: '插件变量', link: '/wiki/plugins/YeeJewelry/placeholder'},
                        ],
                    },
                    {
                        text: '椰の排行',
                        link: '/wiki/plugins/YeeRank/intro',
                        collapsed: true,
                        items: [
                            {text: '插件变量', link: '/wiki/plugins/YeeRank/placeholder'},
                        ],
                    },
                    {
                        text: '椰の直播🔥',
                        collapsed: true,
                        link: '/wiki/plugins/YeeLive/intro',
                        items: [
                            {text: '插件变量', link: '/wiki/plugins/YeeLive/placeholder'},
                        ],
                    },

                    {
                        text: '椰の图鉴',
                        collapsed: true,
                        link: '/wiki/plugins/YeeGuide/intro',
                        items: [
                            {text: '插件变量', link: '/wiki/plugins/YeeGuide/placeholder'},
                        ],
                    },
                    {
                        text: '灵魂空间🔥',
                        collapsed: true,
                        link: '/wiki/plugins/SpaceRingPlus/intro',
                        items: [
                            {text: '插件变量', link: '/wiki/plugins/SpaceRingPlus/placeholder'},

                            {text: '快捷分解', link: '/wiki/plugins/SpaceRingPlus/decompose'},
                            {text: '掉落物配置', link: '/wiki/plugins/SpaceRingPlus/drop'},
                            {text: '迁移KLRing数据', link: '/wiki/plugins/SpaceRingPlus/KLRing'},
                        ],
                    },

                    {
                        text: '灵魂兑换',
                        collapsed: true,
                        link: '/wiki/plugins/SpaceRingExchange/intro'
                    },
                    {
                        text: '限时倍率',
                        collapsed: true,
                        link: '/wiki/plugins/SpaceRingItem/intro'
                    },
                    {
                        text: '灵魂商店',
                        collapsed: true,
                        link: '/wiki/plugins/SpaceRingShop/intro'
                    },
                    {
                        text: '灵魂聚宝盆',
                        collapsed: true,
                        link: '/wiki/plugins/SpaceGoldmine/intro'
                    },

                ],
            },
            {
                //分组标题2
                text: '其它付费',
                collapsed:
                    true,
                items:
                    [
                        {
                            text: '交易限制',
                            collapsed: true,
                            link: '/wiki/plugins/NoTrade/intro',
                        },
                        {
                            text: '椰の虎牙',
                            collapsed: true,
                            link: '/wiki/plugins/YeeHuya/intro',
                            items: [
                                {text: '插件变量', link: '/wiki/plugins/YeeHuya/placeholder'},
                            ],
                        },
                        {
                            text: '椰の抽奖',
                            collapsed: true,
                            link: '/wiki/plugins/YeeCrate/intro',
                        },
                        {
                            text: '椰の礼包',
                            collapsed: true,
                            link: '/wiki/plugins/YeeGift/intro',
                        },
                        {
                            text: '椰の刮刮乐',
                            collapsed: true,
                            link: '/wiki/plugins/ScratchCard/intro',
                        },
                    ],
            }
            ,

            {
                text: '福利插件',
                collapsed:
                    true,
                items:
                    [
                        {text: '椰の菜单🔥', link: '/wiki/free/YeeMenu/intro'},
                        {text: '椰の动作🔥', link: '/wiki/free/YeeAction/intro'},
                        {text: '椰の变量🔥', link: '/wiki/free/YeeValue/intro'},
                        {text: '椰の集字', link: '/wiki/free/YeeCollect/intro',},
                        {text: '椰の聚宝盆', link: '/wiki/free/YeeCornucopia/intro'},

                        {text: '魂珠空间', link: '/wiki/free/HZRing/intro',},
                        {text: '怪物卡牌', link: '/wiki/free/MonsterCard/intro',},
                        {text: '属性映射', link: '/wiki/free/AttributeMap/intro',},
                        {text: '玩家保护', link: '/wiki/free/SpawnProtect/intro'},
                        {text: '怪物保护', link: '/wiki/free/MobProtect/intro'},
                        {text: '变量格式化', link: '/wiki/free/NumberFormat/intro'},
                        {text: '刷新点倒计时', link: '/wiki/free/MMShow/intro',},
                    ],
            }
            ,
        ],


//本地搜索
        search: {
            provider: 'local',
            options:
                {
                    locales: {
                        zh: {
                            translations: {
                                button: {
                                    buttonText: '搜索文档',
                                    buttonAriaLabel:
                                        '搜索文档'
                                }
                                ,
                                modal: {
                                    noResultsText: '无法找到相关结果',
                                    resetButtonTitle:
                                        '清除查询条件',
                                    footer:
                                        {
                                            selectText: '选择',
                                            navigateText:
                                                '切换'
                                        }
                                    ,
                                }
                                ,
                            }
                            ,
                        }
                        ,
                    }
                    ,
                }
            ,
        }
        ,


//社交链接
        socialLinks: [
            {
                icon: {
                    svg: '<svg t="1707404275090" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4218" width="32" height="32"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="4219"></path></svg>'
                },
                link: 'https://qm.qq.com/q/BmwKs6EYI8'
            },
            {icon: 'github', link: 'https://github.com/yeeezhi'},
        ],

        //手机端深浅模式文字修改
        darkModeSwitchLabel:
            '深浅模式',


        //页脚
        footer:
            {
                // message: '',
                copyright: `Copyright ©${new Date().getFullYear()} <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备2023002896号-1</a>`,
            }
        ,


//侧边栏文字更改(移动端)
        sidebarMenuLabel: '目录',

        //返回顶部文字修改(移动端)
        returnToTopLabel:
            '返回顶部',


        //大纲显示2-3级标题
        outline:
            {
                level: [2, 3],
                label:
                    '当前页大纲'
            }
        ,


//自定义上下页名
        docFooter: {
            prev: '上一页',
            next:
                '下一页',
        }
        ,

    },


})
