# 云端插件

::: warning 注意

支持云端加载的插件请尽快迁移，旧版授权验证接口将停用，未来将不再提供维护和支持

:::

### 插件下载

| 插件名               | 获取    |
|-------------------|-------|
| YeeCore (前置)      | 售后群下载 |
| YeePlugins (云端插件) | 售后群下载 |

### 迁移须知

- 旧插件的本体会影响云端加载，请将其删除。
- 原插件配置文件中的 `code` 参数不再有效，请将其删除。
- 云端加载仅更改了插件的加载方式，原插件的配置文件和数据不受影响。

### 使用步骤

1. 将 YeePlugins 和 YeeCore 安装至服务器的 plugins 目录
2. 通过售后群机器人指令 `我的授权` 获取全插件通用授权码，使用指令 `我的插件` 获取插件名
3. 在 YeePlugins 配置文件中，填写您的授权码和需要加载的插件名
4. 配置完成后，直接重载配置文件并执行指令 `yeeplugins load` 加载插件
5. 插件载入无报错即加载正常，或执行指令 `yeeplugins  list` 查看插件状态

```yaml
# 全局授权码
code: ""

# 云端插件
# 默认根据上方的 code 加载插件，或独立配置授权码（格式："插件名#授权码"）
cloud-plugins:
  - YeeForge
  - YeeIntensify
```

### 插件试用

- 配置文件中填写插件名称和授权码
- 首次使用将自动激活 7天试用期，无需额外操作。

### 插件列表

适配版本: 1.9-1.21
以下插件已支持云端加载：

| 插件名           | 状态   |
|---------------|------|
| YeeIntensify  | 正常   |
| YeeForge      | 正常   |
| YeeTalent     | `内测` |
| YeeJewelry    | 正常   |
| YeeRank       | 正常   |
| YeeHuya       | 正常   |
| YeeGuide      | `内测` |
| YeeCrate      | `内测` |
| YeeTask       | `内测` |
| YeeBattlePass | `内测` |
| ScratchCard   | `内测` |
| SpaceRingPlus | 正常   |
| SpaceRingItem | 正常   |
| SpaceRingShop | 正常   |
| SpaceGoldmine | `内测` |

如果您在迁移或使用过程中遇到问题，请及时联系售后群获取帮助。
