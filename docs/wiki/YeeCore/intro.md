# 前言

## 简介

**YeeCore** 是一款基于 **TabooLib** 开发的插件核心。
<br>
旨在为 **Bukkit** 插件提供统一的功能实现方式，简化开发流程并增强扩展性。其主要特色是内置的**表达式引擎**
，能够帮助开发者轻松构建功能强大的插件，并为玩家带来更多元化的游戏体验。

## 快速上手

::: tip 说明
已经安装 或者 熟练了，可以不用看此步骤
:::

:::: details 安装插件

如果安装插件都需要教，那建议先关闭后台的原神

::::

## 调试

### 调试表达式

指令：
/yeecore run <玩家> <表达式>

例如：
/yeecore run Yeezhi permission("vip.vip1") else "{prefix}§7权限不满足"

### 调试运算结果

指令：
/yeecore eval <玩家> <语句>

例如：
/yeecore eval Yeezhi 四则运算等计算
