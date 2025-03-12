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

使用 /cx function 指令来执行（或购买）特定的功能模块。例如，若要购买 点券商店-观楼剑，可使用以下指令：

::: code-group

```
/cx function 点券商店-观楼剑 <玩家>
# 执行次数
/cx function 点券商店-观楼剑-10 <玩家>
# 跳过部分功能,使用,分割
/cx function 点券商店-观楼剑 <玩家> condition,demand,reward
```


#### 表达式：

```
// 功能执行
function('配置名-功能名')
// 跳过部分功能,使用,分割
// condition(条件) demand(需求) reward(奖励)，
function('配置名-功能名', 'condition,demand,reward')
```

#### 内部变量

配置参数或表达式中使用

| 内容                                                                                           | 变量                       |
|----------------------------------------------------------------------------------------------|--------------------------|
| 每日限购                                                                                         | `{purchase-limit-day}`   |
| 每周限购                                                                                         | `{purchase-limit-week}`  |
| 每月限购                                                                                         | `{purchase-limit-month}` |
| 累计限购                                                                                         | `{purchase-limit-total}` |
| 执行(购买)成功率                                                                                    | `{probability}`          |
| 成功执行(购买)数量                                                                                   | `{amount}`               |
| 是否右键点击                                                                                       | `{right-click}`          |
| 是否左键点击                                                                                       | `{left-click}`           |
| 是否Shift点击                                                                                    | `{shift-click}`          |
| [物品栏点击动作](https://bukkit.windit.net/javadoc/org/bukkit/event/inventory/InventoryAction.html) | `{inventory-action}`     |
