# 功能模块

由需求、 奖励、表达式等多组件构成功能模块 

## 自定义变量

- 配置：`plugins\CraftX\variable`
- 特点：可配置默认值、范围及定时任务。
- 适用场景：货币系统、玩家数据记录、称号管理等需要规范化管理的变量场景。

#### 配置

::: code-group

<<< @/wiki/plugins/CraftX/variable/config/货币.yml{yaml}
<<< @/wiki/plugins/CraftX/variable/config/体力.yml{yaml}
<<< @/wiki/plugins/CraftX/variable/config/称号.yml{yaml}
<<< @/wiki/plugins/CraftX/variable/config/统计.yml{yaml}

:::

#### 指令：

```
/variable pay <玩家> <变量名> <数值>              # 数值转账
/variable add <玩家> <变量名> <数值>              # 增加变量值
/variable take <玩家> <变量名> <数值>             # 扣除变量值
/variable remove <玩家> <变量名>                 # 删除变量值
/variable set <玩家> <变量名> <数据>              # 设置变量值
/variable info <玩家>                           # 变量详情
/variable lead <变量> <页数>                     # 变量排行
/variable reset <player/variable> <玩家名/变量名> # 重置数据
/variable backup                                # 备份数据
/variable import <文件名> <玩家名(可选)>           # 导入备份
```

#### 变量

```
%variable_info_变量名%         #玩家变量数据
%variable_count_变量名%        #变量全服总数
```景。