# 功能模块

由需求、 奖励、表达式等多组件构成功能模块 

## 自定义变量

- 配置：`plugins\CraftX\variable`
- 特点：可配置默认值、范围及定时任务。
- 适用场景：货币系统、玩家数据记录、称号管理等需要规范化管理的变量场景。

#### 配置

::: details **完整配置.yml**

<<< @/wiki/plugins/CraftX/function/config/完整配置.yml{yaml}


:::

#### 指令：

```
/cx open <页面> <玩家>              # 功能页面
/cx function <功能> <玩家>          # 执行功能
```