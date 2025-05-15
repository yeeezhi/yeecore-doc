---
outline: [ 2, 2 ]
---

# 监听器

施工中...

## 玩家事件

- 支持 `org.bukkit.event.player`
  包下的[玩家事件](https://bukkit.windit.net/javadoc/org/bukkit/event/player/package-summary.html)
- 使用指令 `/trxt listen` 可查看支持的事件列表
- 物品目标：玩家手持物品，实体目标: null，路径目标：玩家所在位置

### 示例

```yaml
监听示例:
  # 监听事件，支持简写（省略包名）或使用完整类路径
  listen: PlayerDropItemEvent
  # 监听优先级
  # 默认 normal。顺序如下：
  # lowest → low → normal → high → highest → monitor
  priority: normal
  # 前置条件
  condition:
    - ""
  # 执行动作
  action:
    - 消息('禁止丢弃')
  # 事件取消,支持多行文本和列表
  cancel: true
```

## 其它事件

### 触发器目标

触发器可通过事件中的方法或字段，获取目标 **玩家** 或 **实体** 对象。配置格式如下：

**玩家目标**

| 类型   | 配置示例                       | 对应 Java 成员                  |
|------|----------------------------|-----------------------------|
| 方法获取 | `player-method: getPlayer` | `public Player getPlayer()` |
| 字段获取 | `player-property: player`  | `private Player player;`    |

- 未配置玩家目标时，默认以全服在线玩家为触发目标

**实体目标**

| 类型   | 配置示例                       | 对应 Java 成员                  |
|------|----------------------------|-----------------------------|
| 方法获取 | `entity-method: getEntity` | `public Entity getEntity()` |
| 字段获取 | `entity-property: entity`  | `private Entity entity;`    |

### 示例

```yaml
监听示例:
  # 监听事件
  listen: me.yeezhi.example.event.ExampleEvent
  # 监听优先级
  priority: normal
  # 目标玩家获取方法
  player-method: getPlayer
  # 前置条件
  condition:
    - ""
  # 执行动作
  action:
    - 消息('禁止丢弃')
  # 事件取消,支持多行文本和列表
  cancel: true
```
