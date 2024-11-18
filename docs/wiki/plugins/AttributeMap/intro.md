# 属性映射 - AttributeMap - 28R

#### 适用版本

- 1.12.2

#### 依赖插件

必要:

- SimpleLib
- SX-Attribute

#### 属性映射：

- 定义的属性可以映射到多个SX-Attribute属性。例如，定义“体质”属性后，可以将其映射到生命值和防御力上。

#### 支持小数点：

- 属性值支持小数点，允许更精确的属性调整和映射。

#### 插件变量：

| 内容  | 变量         |
|-----|------------|
| 属性值 | %sx_自定义属性% |

### 配置文件

```yaml
Config:
# 使用必看
# 请在SX的Config.yml的AttributePriority下添加参数 AttributeMap: 数值(自己按规律填数值)

# 您的授权码
Code: "IKUN-JNTM-SZ666-SUSHAN"
# 属性映射列表,可自行按照格式添加
AttributeList:
  # 变量 %sx_Test%
  Test:
    # 武器带有 测试属性: 100 这样的格式即可生效属性
    Name: "测试属性"
    # 映射的属性
    Attribute:
      生命上限: 150.0
      攻击力: 100.0
  # 变量 %sx_Test2%
  Test2:
    # 武器带有 属性测试: 100 这样的格式即可生效属性
    Name: "属性测试"
    # 映射的属性
    Attribute:
      生命上限: 200.0
      攻击力: 200.0
Message:
  reload: "§a配置文件重载成功"
  permission_false: "§a您的权限不够"
```
