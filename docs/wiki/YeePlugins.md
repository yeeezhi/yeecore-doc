# 云端插件

::: tip
云端插件目前正处于小范围稳定性测试阶段，如果您感兴趣，欢迎联系 QQ 15568820 参与测试！
:::

### 插件下载

| 插件名               | 获取    |
|-------------------|-------|
| YeeCore (前置)      | 售后群下载 |
| YeePlugins (云端插件) | 售后群下载 |

### 使用步骤

- 将插件安装至服务器的 plugins 目录。
- 通过售后群机器人指令 我的授权 获取全插件通用授权码，使用指令 我的插件 获取插件名。
- 在 YeePlugins 配置文件中，添加需要加载的插件名称及其对应的授权码：

```yaml
# 云端插件授权码
cloud-plugin-code:
  # 插件名
  YeeForge: "授权码"
  SpaceRingPlus: "授权码"
```

### 插件试用

- 配置文件中填写需要使用的插件名称和您的通用授权码，首次使用将自动激活7天试用期。

### 注意事项

1. 原插件配置文件中的 code 参数不再有效，请将其删除。
2. 从旧版授权验证迁移至云端插件时，原插件的配置文件和数据将不受影响，仅更改了插件的加载方式。

### 插件列表

适配版本: 1.9-1.21
以下插件已支持云端加载：

| 插件名           | 状态 |
|---------------|----|
| YeeIntensify  | 内测 |
| YeeForge      | 内测 |
| YeeTalent     | 内测 |
| YeeJewelry    | 内测 |
| YeeRank       | 内测 |
| YeeHuya       | 内测 |
| YeeGuide      | 内测 |
| YeeCrate      | 内测 |
| YeeTask       | 内测 |
| YeeBattlePass | 内测 |
| ScratchCard   | 内测 |
| SpaceRingPlus | 内测 |
| SpaceRingItem | 内测 |
| SpaceRingShop | 内测 |
| SpaceGoldmine | 内测 |
