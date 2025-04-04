# 物品处理

提供对各物品库的物品处理、变量库支持，以及 PlaceholderAPI 占位符功能。

::: tip 💡提示
以下示例均基于 MythicMobs 物品库，[其它物品库](/wiki/YeeCore/物品库)使用方式相同
:::

## 指令

**格式**

```
/cxi give <玩家> <物品库> <物品> <变量库> <数量>   # 给予物品
/cxi whs <玩家> <物品库> <物品> <变量库> <数量>    # 给予物品(仓库)
```

**示例**

```
/cxi give Yeezhi mm 鉴定示例 鉴定 1
```

📌 参数说明

- mm：物品库缩写（支持的物品库：[点击查看](/wiki/YeeCore/物品库)）
- 鉴定示例：物品库中的物品名
- 鉴定：变量库，对应 `plugins/CraftX/entry/鉴定.yml`

✅ 适配仓库

- SpaceRingPlus
- LyWarehouse

## 使用变量库

变量配置

```yaml
 entry:
   玩家名: "%player_name%"
   鉴定: "${random()}"
   鉴定评分: "${取整(100+{物品鉴定} *100)}"
```

物品配置

```yaml
鉴定示例:
  Id: DIAMOND_SWORD
  Display: "§6鉴定示例"
  Lore:
    - '§b攻击力: §c${125*{鉴定评分}}'
    - '§6鉴定者 §8[§a{玩家名}§8]'
    - '§b鉴定评分: §c{鉴定评分}'
```

## 使用表达式

格式：`${}`

```yaml
鉴定示例:
  Id: DIAMOND_SWORD
  Display: "§6鉴定示例"
  Lore:
    - '§b攻击力: §c${random(100,200)}'
    - '§6鉴定者 §8[§a%player_name%§8]'
```

## 使用PlaceholderAPI

可直接在物品 Name 和 Lore 中使用 PlaceholderAPI 占位符

```yaml
鉴定示例:
  Id: DIAMOND_SWORD
  Display: "§6湮灭魂主长剑"
  Lore:
    - '§b攻击力: §c100'
    - '§6鉴定者 §8[§a%player_name%§8]'
```
