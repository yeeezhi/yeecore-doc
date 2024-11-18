# 玩家保护 - SpawnProtect
#### 适用版本
- 1.12.2
#### 依赖插件
必要:
- SimpleLib
#### 出生点范围保护：
- 在保护范围内的所有实体均无法对玩家造成伤害。
- 在保护范围内自动恢复玩家饱和度
#### 重生后无敌时间：
- 在玩家重生后的一段时间内，使其暂时无敌。
### 配置文件
```yaml
config:
  # 出生点保护的半径
  spawn-protect-radius: 5
  # 重生后无敌时间，单位：秒
  respawn-protect-time: 3
message:
  reload: "§a配置文件重载成功"
  param_false: "§a参数不完整"
  spawn-protect-level: "§c你已离开出生点保护区"
  spawn-protect-join: "§a你已进入出生点保护区"
```
