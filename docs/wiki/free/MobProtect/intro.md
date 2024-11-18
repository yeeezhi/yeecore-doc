# 怪物出生保护 - MobProtect

#### 适用版本

- 1.12.2

#### 依赖插件

必要:

- SimpleLib
- MythicMobs

#### 怪物保护：

- 为了解决玩家秒杀MythicMobs怪物引发的问题，所以可以为怪物出生后增加一个短暂的无敌时间来解决。

### 配置文件

```yaml
config:
  # 怪物出生无敌时间，单位秒
  time: 1
message:
  reload: "§a配置文件重载成功"
  online_false: "§a玩家 §e{0} §a不在线"
  param_false: "§a参数不完整"
```
