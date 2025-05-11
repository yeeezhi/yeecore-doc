---
outline: [ 2, 3 ]
---

# 监听器

施工中...

## 事件监听

- 支持 `org.bukkit.event.player`
  包下的[玩家事件](https://bukkit.windit.net/javadoc/org/bukkit/event/player/package-summary.html)
- 使用指令 `/trxt listen` 可查看支持的事件列表
- 物品目标：玩家手持物品，路径目标：玩家所在位置

## 监听优先级

默认 `normal`，优先顺序如下：

- `lowest` → `low` → `normal` → `high` → `highest` → `monitor`

### 示例

```yaml
事件监听示例:
  # 监听事件
  listen: PlayerDropItemEvent
  # 监听优先级
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
