# 条件

## 条件判断

可使用比较运算符及逻辑运算符: &&(与)  ||(或) !(非)

```yaml
condition:
  - 条件语句A
  - 条件语句B
```

应用示例

```yaml
condition:
  - %player_level% >= 100
  - match.name('恶魔士兵主手')
```

## Then & Else 语句

    1.语法逻辑与传统的if-else语法互不冲突，独立存在。
    2.在then和else后面的部分，若填写带双引号或单引号的字符串，则表示发送玩家提示；若填写的是表达式，则会直接执行该表达式。

#### Then  单分支结构*

若条件的返回值为 true 的时候，则会执行 then 后面的动作表达式语句，反之则跳过

```yaml
条件 then 动作
```

应用示例

```yaml
action:
  - permission('vip.vip1') then '{prefix}您是尊贵的VIP'
```

#### Else 单分支结构*

若条件的返回值为 false 的时候，则会执行 else 后面的动作语句，反之则跳过

```yaml
条件 else 动作
```

应用示例

```yaml
condition:
  - money()>=1000 else '{prefix}§7所需金币不足'
  - permission('vip.vip1') else '{prefix}§7权限不满足'
  - %player_level% >= 100 else '{prefix}§7等级不满足需求'
  - countItem.item('mm','聚宝盆解锁')>=10 else '{prefix}§7所需物品不满足'
```

#### Then & Else 双分支结构

若条件满足，则执行 then 后面的 动作A 语句，反之执行 else 后面的 动作B 语句

```yaml
条件 then 动作A else 动作B
```

应用示例

```yaml
condition:
  - permission('vip.vip1') then '权限满足' else '权限不满足'
```
