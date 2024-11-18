# 菜单 - YeeMenu

#### 功能介绍：

此功能内置于 YeeCore，无需额外下载，配置文件位于插件目录 plugins/YeeCore/menu 下。该功能让自定义页面能够调用 YeeCore
的表达式，具备高度扩展性，可实现功能不限于菜单、商店、兑换等多种场景。

#### 插件指令

| 功能   | 指令                      |
|------|-------------------------|
| 打开菜单 | /yeemenu open <菜单> <玩家> |
| 重载配置 | /yeemenu reload         |

#### 动作表达式

打开 YeeCore 内置菜单

- 语法：menu('菜单名')

```yaml
action:
  - menu('默认菜单')
```
