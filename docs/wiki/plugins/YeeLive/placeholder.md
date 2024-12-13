# 插件变量

::: warning 注意

目前哔哩哔哩暂时无法准确获取直播间人气，因此相关变量不建议使用

:::

### Placeholder

| 内容           | 变量                                       |
|--------------|------------------------------------------|
| 直播时长排名       | `%yeelive_平台_info%`                      |
| 称号           | `%yeelive_平台_title%`                     |
| 房间号          | `%yeelive_平台_room-id%`                   |
| 主播名          | `%yeelive_平台_anchor-name%`               |
| 直播间状态        | `%yeelive_平台_live-room-status%`          |
| 今日最高人气       | `%yeelive_平台_popularity%`                |
| 今日直播时长       | `%yeelive_平台_today-duration%`            |
| 今日直播时长(单位分钟) | `%yeelive_平台_today-duration-min%`        |
| 累计直播时长       | `%yeelive_平台_total-duration%`            |
| 累计直播时长(单位分钟) | `%yeelive_平台_total-duration-min%`        |
| 玩家数据更新时间     | `%yeelive_平台_update-time%`               |
| 排名的玩家名       | `%yeelive_平台_rank_排名%`                   |
| 排名的直播时长      | `%yeelive_平台_rank-total-duration_排名%`    |
| 玩家的排名        | `%yeelive_平台_player_玩家名%`                |
| 玩家的累计直播时长    | `%yeelive_平台_player-total-duration_玩家名%` |
| 排行周期结束时间     | `%yeelive_平台_next-finish-time%`          |

例如：

虎牙 `%yeelive_huya_info%`、B站 `%yeelive_bilibili_info%`、抖音 `%yeelive_douyin_info%`

### GUI内部变量

| 内容           | 变量                     |
|--------------|------------------------|
| 玩家名          | `{name}`               |
| 排名           | `{rank}`               |
| 主播名          | `{anchor_name}`        |
| 房间号          | `{room_id}`            |
| 今日最高人气       | `{popularity}`         |
| 今日直播时长       | `{today_duration}`     |
| 今日直播时长(单位分钟) | `{today_duration_min}` |
| 累计直播时长       | `{total_duration}`     |
| 累计直播时长(单位分钟) | `{total_duration_min}` |
| 排行周期名        | `{period}`             |
| 称号           | `{title}`              |
| 更新时间         | `{update_time}`        |
| 排行周期结束时间     | `{finish_time}`        |
| 直播间状态        | `{live_room_status}`   |
