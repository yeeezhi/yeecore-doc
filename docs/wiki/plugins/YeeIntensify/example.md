# 扩展示例

## 装备名上添加强化等级
现有两种配置方案
```yaml
# GUI触发不同事件时执行的动作
action:
  # 开始强化
  intensify:
    - ""
  # 强化成功
  success:
    - msg("{prefix}§7强化成功")
    - sound("BLOCK_ANVIL_LAND")
    # 判断物品名,然后读取强化等级数值重新设置Name
    - string.contains('{weapon-name}','测试武器A') && item.setName('测试武器A +${match.number('强化等级')}')
    - string.contains('{weapon-name}','测试武器B') && item.setName('测试武器B +${match.number('强化等级')}')
```

```yaml
2:
  match:
    - "match('lore','§3普通强化: §f1')"
  content:
    - "§3普通强化: §f2"
    - "§8「§6※§8」§7伤害加成: §a2%"
    - "§8「§6※§8」§7暴击伤害: §a2%"
  action:
    # 判断物品名,然后读取强化等级数值重新设置Name
    - string.contains('{weapon-name}','测试武器A') && item.setName('测试武器A +${match.number('强化等级')}')
    - string.contains('{weapon-name}','测试武器B') && item.setName('测试武器B +${match.number('强化等级')}')
```
:::
## 保底次数增加成功率
同理可通过其它变量或表达式计算强化属性，成功率等
```yaml
2:
  match:
    - "match('lore','§3普通强化: §f1')"
  content:
    - "§3普通强化: §f2"
    - "§8「§6※§8」§7伤害加成: §a2%"
    - "§8「§6※§8」§7暴击伤害: §a2%"
  guarantees: 10
  # 基础概率10%,每累计一次保底统计就增加5%概率
  probability: ${0.1+{current-guarantees}*0.05}
```
## 满足权限权限生效成功率
同理可以使用其它条件来生效不同的成功率
```yaml
2:
  match:
    - "match('lore','§3普通强化: §f1')"
  content:
    - "§3普通强化: §f2"
    - "§8「§6※§8」§7伤害加成: §a2%"
    - "§8「§6※§8」§7暴击伤害: §a2%"
  # 满足权限返回20%成功率，不满足返回10%
  probability: ${permission('vip.vip1')?0.2:0.1}
```
