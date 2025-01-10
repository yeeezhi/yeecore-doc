# API

## YeeGemAPI

```kotlin
interface IYeeGemAPI {

    /**
     * 添加玩家宝石源
     * @param player 玩家
     * @param source 源
     * @param items 物品
     */
    fun addGemSource(player: Player, source: String, items: List<ItemStack?>)

    /**
     * 获取宝石源
     * @param player 玩家
     * @return 宝石源<源,物品列表>
     */
    fun getAllGemSource(player: Player): Map<String, List<ItemStack?>>

    /**
     * 更新宝石属性
     * @param player 玩家
     */
    fun updateAttribute(player: Player)

    /**
     * 获取玩家宝石套装信息
     * @param player 玩家
     * @param extraItems 额外宝石源
     * @return 套装信息
     */

    fun getSuitInfo(player: Player, extraItems: List<ItemStack?>): MutableList<String>

    /**
     * 获取物品上的宝石列表
     * @param itemStack 物品
     */
    fun getGems(itemStack: ItemStack): MutableList<GemTag>

    /**
     * 设置物品上的宝石信息
     * @param itemStack 物品
     * @param gems 宝石列表
     */
    fun setGems(itemStack: ItemStack, gems: List<GemTag>)

    /**
     * 获取宝石孔
     * @param itemStack 物品
     */
    fun getGemConfig(player: Player, itemStack: ItemStack?): GemConfig?

    /**
     * 获取物品宝石孔列表
     * @param itemStack 物品
     * @return GemSlot(宝石槽)和GemTag(宝石标签)列表
     */
    fun getGemSlots(itemStack: ItemStack?): LinkedList<GemSlot>

    /**
     * 镶嵌宝石
     * @param itemStack 物品
     * @param gemTag 宝石信息
     * @param index 宝石顺序
     * @param editNBT 是否将本次镶嵌信息写入nbt
     */
    fun inlayGem(itemStack: ItemStack, gemTag: GemTag, index: Int = 0, editNBT: Boolean = true): Boolean

    /**
     * 拆卸物品中的宝石
     * @param itemStack 装备
     * @param gemTag 宝石
     * @return 拆卸结果
     */
    fun takeGem(itemStack: ItemStack, gemTag: GemTag): Boolean

    /**
     * 获取宝石道具
     * @param itemStack 物品
     * @return 道具配置
     */
    fun getGemProp(player: Player, itemStack: ItemStack?): GemProp?
}
```

## 宝石标签

```kotlin 
/**
 * 宝石标签
 */
class GemTag {
    // 标签Id
    var id: String = ""

    // 镶嵌识别Lore
    var inlay: String = ""

    // 宝石新增Lore
    var lore: MutableList<String> = mutableListOf()

    // 宝石Id
    var gemId: String = ""

    // 槽位Id
    var slotId: String = ""

    // 原槽位lore
    var rawLore: String = ""

    // 原宝石 Base64
    var rawGem: String = ""

    // 镶嵌者
    var owner: String = ""

    // 宝石新增的附魔效果
    var enchantment: Map<String, Int> = mapOf()
}


```
