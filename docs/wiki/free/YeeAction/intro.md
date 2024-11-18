# 动作组 - YeeAction

#### 功能介绍：

此功能内置于 YeeCore，无需额外下载，配置文件位于插件目录 plugins/YeeCore/action 下。该功能支持条件判断与动作执行，还可以设置冷却时间。通过将
YeeCore 提供的丰富表达式组合使用，能够实现各种复杂功能。

#### 插件指令

| 功能    | 指令                        |
|-------|---------------------------|
| 执行动作组 | /yeeaction run <玩家> <动作组> |
| 重载配置  | /yeeaction reload         |

#### 动作表达式

执行 YeeAction 动作组

- 语法：action('默认动作组')

```yaml
action:
  - action('默认动作组')
```
