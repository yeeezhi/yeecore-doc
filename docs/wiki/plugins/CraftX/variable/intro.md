# 变量模块

通过以下两种变量，**CraftX** 为用户提供了完善的变量管理能力，满足不同场景下的使用需求

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

| 内容     | 变量                     |
|--------|------------------------|
| 变量名    | `%variable_name_变量名%`  |
| 变量数据   | `%variable_info_变量名% ` |
| 变量最大值  | `%variable_max_变量名%`   |
| 变量最小值  | `%variable_min_变量名%`   |
| 变量全服总数 | `%variable_count_变量名%` |

#### 表达式：

```javascript
variable.get('摩拉')        // 获取变量值
variable.add('摩拉', 50)     // 增加变量值
variable.take('摩拉', 50)     // 扣除变量值
variable.set('摩拉', 50)     // 设置变量值
variable.remove('摩拉')     // 删除变量值
variable.has('摩拉', 1000)     // 是否拥有指定数量
```

## 临时变量

- 特点：无需预设参数等创建工作，直接通过指令或表达式动态操作，支持数据过期时间。
-
- 适用场景：快速处理临时数据，灵活应对动态需求。

#### 指令：

```
/tempvar get <玩家> <变量名>         # 获取变量值
/tempvar add <玩家> <变量名> <数值>   # 增加变量值
/tempvar take <玩家> <变量名> <数值>  # 扣除变量值
/tempvar set <玩家> <变量名> <数据>   # 设置变量值
/tempvar remove <玩家> <变量名> <数据># 删除变量值
/tempvar info <玩家>                # 变量详情
/tempvar lead <变量> <页数>          # 变量排行
```

#### 变量

| 内容     | 变量                    |
|--------|-----------------------|
| 玩家变量数据 | `%tempvar_info_变量名% ` |
| 全服变量总数 | `%tempvar_count_变量名%` |

#### 表达式：

```javascript
tempvar.get('摩拉')        // 获取变量值
tempvar.add('摩拉', 50)     // 增加变量值
tempvar.take('摩拉', 50)     // 扣除变量值
tempvar.set('摩拉', 50)     // 设置变量值
tempvar.remove('摩拉')     // 删除变量值
```