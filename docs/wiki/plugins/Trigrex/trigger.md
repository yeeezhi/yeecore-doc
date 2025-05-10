---
outline: [ 2, 3 ]
---

# 触发器

施工中...

## 配置

| 参数              | 说明     | 参数类型                    | 默认值   |
|-----------------|--------|-------------------------|-------|
| type            | 触发器类型  | string                  | -     |
| entry           | 变量库    | map                     | -     |
| condition       | 条件     | list                    | -     |
| action          | 动作     | list                    | -     |
| rules           | 动作规则   | map                     | -     |
| cooldown        | 冷却时间   | number                  | -     |
| cancel          | 取消事件   | boolean & string & list | -     |
| cooldown-action | 冷却执行动作 | list                    | -     |
| disable         | 禁用触发器  | boolean                 | false |

::: details 示例配置

```yaml
示例配置:
  # 触发器类型，使用逗号分隔多个类型
  type: right,left
  # 临时变量
  entry:
    "玩家名": "%player_name%"
  # 触发条件
  condition:
    - ""
  # 若条件结果为 true，则取消（拦截）对应事件
  cancel: true
  # 触发动作
  action:
    - 消息('右键')
  # 按条件执行动作
  rules:
    - condition:
        - ""
      action:
        - ""
  # 冷却时间（毫秒）
  cooldown: 500
  # 冷却执行动作
  cooldown-action:
    - 消息('{prefix}§e药水使用频繁')
  # 禁用触发器
  disable: false

```

:::

## 触发类型

以下仅列出与当前功能相关参数，更多详见上方配置参数

### 左键

```yaml
# 左键、左键+SHIFT
type: left,left-shift
```

### 右键

```yaml
# 右键、右键+SHIFT、右键实体、右键实体+SHIFT
type: right,right-shift,right-entity,right-entity-shift
```

方块交互

```yaml
type: right
# 格式: 世界名,x,y,z
# 范围: world,-24~-50,60~64,0~5
location: world,-24,64,-1
action:
  - 消息('触发成功,方块类型 {block-type}')
```

### 移动

```yaml
type: move
```

### 下蹲

```yaml
# 下蹲、下蹲结束
type: sneak,sneak-end
```

### 奔跑

```yaml
# 奔跑、奔跑结束
type: sprint,sprint-end
```

### 定时触发

```yaml
type: timer
```

### 战斗状态

```yaml
# 战斗状态,战斗脱离
type: combat,combat-end
```

### 玩家攻击

```yaml
type: attack
```

### 玩家受击

```yaml
type: defense
```

### 玩家死亡

```yaml
type: death
```

### 玩家重生

```yaml
type: respawn
```

### 击杀实体

```yaml
type: kill-entity
```

### 击杀玩家

```yaml
type: kill-player
```

### 方块破坏

```yaml
type: block-break
```

### 物品拾取

```yaml
type: pickup
```

### 物品丢弃

```yaml
type: drop
```

### 玩家聊天

```yaml
type: chat
```

### 执行指令

```yaml
type: command
```

### 龙核按键

```yaml
# 按下按键、释放按键
type: dragon-keyboard,dragon-keyboard-end
```

### 萌芽按键

```yaml
# 按下按键、释放按键
type: germ-keyboard,germ-keyboard-end
```
