# YeeCore


## 简介

**YeeCore** 是一款基于 **Kotlin / TabooLib** 开发的插件核心。
<br>
旨在为 **Bukkit** 插件提供统一的功能实现方式，简化开发流程并增强扩展性。其主要特色是内置的**表达式引擎**
，能够帮助开发者轻松构建功能强大的插件，并为服主提供多元化的配置体验。


## 调试

#### 调试表达式

指令：
/yeecore run <玩家> <表达式>

例如：
/yeecore run Yeezhi permission("vip.vip1") else "{prefix}§7权限不满足"

#### 调试运算结果

指令：
/yeecore eval <玩家> <语句>

例如：
/yeecore eval Yeezhi 四则运算等计算
