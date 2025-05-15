# 插件配置

施工中...

## 配置

| 参数                 | 说明            | 参数类型                    | 默认值    |
|--------------------|---------------|-------------------------|--------|
| type               | 触发器类型         | string                  | -      |
| priority           | 优先级           | string                  | normal |
| condition          | 前置条件          | list                    | -      |
| location           | 位置条件          | string                  | -      |
| action             | 动作            | list                    | -      |
| rules              | 动作规则          | map                     | -      |
| skill              | MythicMobs 技能 | list                    | -      |
| entry              | 变量库           | map                     | -      |
| drop               | 掉落物           | list                    | -      |
| drop-rules         | 掉落物规则         | map                     | -      |
| drop-owner         | 掉落物所有者限制      | boolean                 | false  |
| drop-owner-timeout | 掉落物所有者限制时效    | number                  | -      |
| auto-pickup        | 自动拾取          | boolean                 | false  |
| cooldown           | 冷却时间          | number                  | -      |
| cooldown-action    | 冷却执行动作        | list                    | -      |
| cancel             | 取消事件          | boolean & string & list | false  |
| async              | 异步执行          | boolean                 | false  |
| disable            | 禁用触发器         | boolean                 | false  |

::: details 示例配置

<<< config/示例配置.yml{yaml}

:::

## 变量

| 变量                          | 说明      |
|-----------------------------|---------|
| `{id}`                      | 处理器ID   | 
| `{type}`                    | 触发器类型   | 
| `{world}`,`{x}`,`{y}`,`{z}` | 目标位置    | 
| `{entity-name}`             | 目标实体名   | 
| `{entity-type}`             | 目标实体类型  | 
| `{cooldown}`                | 冷却时间(秒) | 
