---
outline: [ 2, 3 ]
---

# 触发器

施工中...

## 配置

| 参数              | 说明            | 参数类型                    | 默认值    |
|-----------------|---------------|-------------------------|--------|
| type            | 触发器类型         | string                  | -      |
| priority        | 优先级           | string                  | normal |
| condition       | 前置条件          | list                    | -      |
| location        | 位置需求          | string                  | -      |
| action          | 动作            | list                    | -      |
| rules           | 动作规则          | map                     | -      |
| skill           | MythicMobs 技能 | list                    | -      |
| entry           | 变量库           | map                     | -      |
| cooldown        | 冷却时间          | number                  | -      |
| cooldown-action | 冷却执行动作        | list                    | -      |
| cancel          | 取消事件          | boolean & string & list | false  |
| async           | 异步执行          | boolean                 | false  |
| disable         | 禁用触发器         | boolean                 | false  |

::: details 示例配置

```yaml
示例配置:
  # 触发器类型，使用逗号分隔多个类型
  type: right,left
  # 处理优先级
  # 默认 normal，用于控制处理顺序，非 Bukkit 事件优先级。顺序如下：
  # lowest → low → normal → high → highest → monitor
  priority: normal
  # 临时变量
  entry:
    "玩家名": "%player_name%"
  # 触发条件
  condition:
    - ""
  # 位置需求
  # 若有实体或方块目标，则取其位置；否则使用玩家位置
  location: world,9,61,5
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
  # MythicMobs 技能
  skill:
    - 万千骰子
  # 冷却时间（毫秒）
  cooldown: 500
  # 冷却执行动作
  cooldown-action:
    - 消息('{prefix}§e药水使用频繁')
  # 禁用触发器
  disable: false
  # 异步处理，开启后将不处理事件拦截
  async: false

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

### 区域

```yaml
进入区域:
  type: region
  region: world,3~10,59~65,-20~-2
  action:
    - 消息('&a已进入区域')
离开区域:
  type: region-end
  region: world,3~10,59~65,-20~-2
  action:
    - 消息('&a已离开区域')
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

### Cron

- [Cron表达式在线生成](https://cron.ciding.cc/)

```yaml
type: cron
# 每五分钟执行示例
cron: "0 0/5 * * * ?"
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
