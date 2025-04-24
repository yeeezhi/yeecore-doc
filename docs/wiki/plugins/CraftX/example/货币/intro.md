# 货币

## 绑定货币

CraftX 变量支持绑定 Vault、PlayerPoints 或其他变量。优先使用绑定货币，若余额不足，则使用金币或点券补足。

变量配置

```yaml
绑定点券:
  default: 0
  # 允许转账
  pay-condition: true
  # 绑定 PlayerPoints
  bind: "points"
绑定金币:
  default: 0
  # 允许转账
  pay-condition: true
  # 绑定 Vault
  bind: "money"
绑定摩拉:
  default: 0
  pay-condition: true
  # 绑定其它变量
  bind: "摩拉"
```

错误示例

```yaml
condition:
  - variable.get('绑定点券')>2000
action:
  - variable.take('绑定点券',2000)
```

正确示例

```yaml
condition:
  - variable.has('绑定点券',2000)
action:
  - variable.take('绑定点券',2000)
```

## 经济桥

CraftX 变量支持桥接 Vault、PlayerPoints 或其他货币变量。实现同步操作或读取指定货币。

变量配置

```yaml
绑定点券:
  default: 0
  # 允许转账
  pay-condition: true
  # 绑定 PlayerPoints
  bind: "points"
绑定金币:
  default: 0
  # 允许转账
  pay-condition: true
  # 绑定 Vault
  bind: "money"
绑定摩拉:
  default: 0
  pay-condition: true
  # 绑定其它变量
  bind: "摩拉"
```

## 配置文件

::: code-group

<<< config/变量配置.yml{yaml}

:::

