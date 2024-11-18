# 自定义值 - YeeValue

#### 功能介绍：

此功能内置于 YeeCore，无需额外下载，配置文件位于 plugins/YeeCore/value.yml
下。该功能可用于创建多种自定义货币和自定义变量，并与天赋插件搭配作为天赋点，还能创建定时刷新的体力值和称号等

#### 插件指令

| 功能   | 指令                             |
|------|--------------------------------|
| 添加数值 | /yeevalue add <玩家> <值Id> <数值>  |
| 扣除数值 | /yeevalue take <玩家> <值Id> <数值> |
| 设置值  | /yeevalue set <玩家> <值Id> <数值>  |
| 查询信息 | /yeevalue info <玩家>            |
| 重载配置 | /yeeaction reload              |

## Placeholder

| 内容     | 变量                  |
|--------|---------------------|
| 自定义值内容 | %yeevalue_info_值Id% |

#### YeeCore表达式

YeeValue 数值操作

- 语法：value()
- 返回：String or Double
  判断货币数量

```yaml
condition:
  - check(value('look','数值Id') >= 1000,'{prefix}§7货币数量不满足')
```

添加数值，数值类型必须为number

```yaml
action:
  - value('add','数值Id',100000)
```

扣除数值，数值类型必须为number

```yaml
action:
  - value('take','数值Id',100000)
```

设置数值

```yaml
action:
  - value('set','数值Id',100000)
```

```yaml
action:
  - value('set','数值Id','')
```
