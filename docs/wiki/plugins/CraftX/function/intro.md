# 功能模块

用于插件的 GUI 界面配置，支持自定义布局、物品显示、购买需求与奖励、按钮交互和限制条件等，能够为玩家提供互动式的GUI体验

#### 配置

::: details **完整配置.yml**

<<< @/wiki/plugins/CraftX/function/config/完整配置.yml{yaml}


:::

#### 指令：

```
/cx open <页面> <玩家>              # 功能页面
/cx function <功能> <玩家>          # 执行功能
```


#### 表达式：

```javascript
// 功能执行
function('配置名-功能名')                      
// 跳过部分功能,使用,分割
// condition(条件) demand(需求) reward(奖励)，
function('配置名-功能名','condition,demand,reward')
```