---
outline: [ 2, 3 ]
---

# 监听器

## 玩家事件

- 支持 `org.bukkit.event.player`
  包下的[玩家事件](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/player/package-summary.html)
- 使用指令 `/trxt listen` 可查看支持的事件列表
- 物品目标：玩家手持物品，路径目标：玩家所在位置

### 示例

```yaml
事件监听示例:
  listen: PlayerDropItemEvent
  # 监听器匹配条件
  condition:
    - ""
  # 执行动作
  action:
    - 消息('禁止丢弃')
  # 事件取消,支持多行文本和列表
  cancel: true
```
