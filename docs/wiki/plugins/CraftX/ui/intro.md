# 龙核&萌芽

无尽工艺 为龙核与萌芽提供丰富的槽位与变量支持，便于创作者配置

## 龙核怎么使用？

槽位物品，参数 `identifier`

```yaml
洗炼材料1:
  x: "背景_texture.x+27"
  y: "背景_texture.y+169"
  # 按钮 `洗炼` 第一个需求物品
  identifier: "craftx_洗炼_demand_1"
商品奖励1:
  x: "背景_texture.x+27"
  y: "背景_texture.y+169"
  width: "16"
  height: "16"
  # 按钮 `商品奖励` 第一个奖励物品
  identifier: "craftx_商品奖励_reward_1"
```

变量信息，表达式 `方法.取变量()`

```js
// `商品1`为按钮编号
方法.取变量('craftx_商品1_demand_money') // 获取金币需求
方法.取变量('craftx_商品1_demand_craftx-战令币') // 获取其它货币需求
方法.取变量('craftx_商品1_demand_cshop-成就点') // 获取其它货币需求
方法.取变量('craftx_商品1_desc') // 获取商品介绍
```

```yaml
消耗金币_label:
  type: 'label'
  x: "背景_texture.x+52"
  y: "背景_texture.y+149"
  texts: 方法.取变量('craftx_洗炼_demand_money');
```

## 萌芽怎么使用？

槽位物品，参数 `identity`

```yaml
槽位示例:
  locationX: 0.337*w
  locationY: 0.213*h
  locationZ: '10'
  identity: craftx_商品奖励_reward_1
```

变量信息，可以在任何组件中使用，格式 `%craftx_xxx%`

```
# `商品1`为按钮编号
# 获取金币需求
%craftx_商品1_demand_money% 
# 获取其它货币需求
%craftx_商品1_demand_craftx-战令币% 
# 获取其它货币需求
%craftx_商品1_demand_cshop-成就点%
# 获取商品介绍
%craftx_商品1_desc% 
```

## 大全

#### 槽位

| 内容      | 标识符                   | 
|---------|-----------------------|
| display | `craftx_按钮_display`   | 
| 需求物品    | `craftx_按钮_demand_索引` | 
| 奖励物品    | `craftx_按钮_reward_索引` | 

#### 变量

| 内容     | 变量                               | 
|--------|----------------------------------|
| 所需货币   | `craftx_按钮_demand_索引`            | 
| 所需货币信息 | `craftx_按钮_demand_索引_desc`       | 
| 奖励货币   | `craftx_按钮_reward_索引`            | 
| 奖励货币信息 | `craftx_按钮_reward_索引_desc`       | 
| 按钮信息   | `craftx_按钮_desc`                 |
| 按钮状态   | `craftx_按钮_state`                |
| 是否满足需求 | `craftx_按钮_enough`               |
| 是否满足条件 | `craftx_按钮_condition`            |
| 成功率    | `craftx_按钮_probability`          | 
| 每日限购   | `craftx_按钮_purchase-limit-day`   | 
| 每周限购   | `craftx_按钮_purchase-limit-week`  |
| 每月限购   | `craftx_按钮_purchase-limit-month` |
| 累计限购   | `craftx_按钮_purchase-limit-total` | 
| NBT信息  | `craftx_按钮_nbt_节点`               |