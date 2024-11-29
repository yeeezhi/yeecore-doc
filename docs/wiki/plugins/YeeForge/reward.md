# 配方奖励

::: warning 注意

锻造预览默认获取第一个配方奖励，请将锻造成品配置在首位，以确保正确显示。

:::


#### 锻造成品

格式：eval 物品库 物品Id entry 数量
entry对应的是plugins\YeeForge\entry下的临时变量配置

```yaml
reward:
  # MythicMobs
  - 'eval mm 暗月之剑 锻造 1'
```

##### 示例说明

在物品信息中，使用 ${} 可以进行数值计算。例如，在以下示例中，${0.05*{锻造评分}} 通过基础值 0.05 与锻造评分进行运算，来生成属性数值。
你还可以使用 {} 来调用临时变量，比如以下示例中的 {品质名}，用于动态展示物品的品质名称。

```yaml
暗月之剑:
  Id: DIAMOND_SWORD
  Data: 0
  Display: "§8暗月之剑"
  Lore:
    - "§7类型: §a主手"
    - "§7途径: §a锻造            §7品质: {品质名}"
    - '§8§m-----------§8「§d 锻造 §8」§8§m-----------'
    - '§a攻击力: §d${1*{锻造评分}}'
    - '§a暴击伤害: §d${0.05*{锻造评分}}%'
    - '§a吸血倍率: §d${0.01*{锻造评分}}%'
```

#### 物品库

格式：物品库 物品Id 数量
支持物品库MythicMobs，SX-Attribute，NeigeItems，OriginAttribute

```yaml
reward:
  # MythicMobs
  - 'mm 测试材料 5'
  # 10%几率产出奖励
  - 'mm 测试材料 5 0.1'
  # 数量支持配置范围
  - 'mm 测试材料 5-10'
  # SX-Attribute
  - 'sx 测试材料 5'
  # NeigeItems
  - 'ni 测试材料 5'
  # OriginAttribute
  - 'oa 测试材料 5'
```

#### 锻造经验

格式：forge-exp 数值
示例：

```yaml
reward:
  - 'forge-exp 3'
```
