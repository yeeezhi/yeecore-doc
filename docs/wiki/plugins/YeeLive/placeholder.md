# 插件变量

::: warning 注意

目前哔哩哔哩暂不支持获取直播间人气，因此相关变量将无法使用

:::

### Placeholder

虎牙相关变量前缀 `yeehuya` 例如：`%yeehuya_info%`

B站相关变量前缀 `yeebilibili` 例如：`%yeebilibili_info%`

| 内容           | 变量                                    |
|--------------|---------------------------------------|
| 直播时长排名       | `%yeehuya_info%`                      |
| 称号           | `%yeehuya_title%`                     |
| 房间号          | `%yeehuya_room-id%`                   |
| 主播名          | `%yeehuya_anchor-name%`               |
| 直播间状态        | `%yeehuya_live-room-status%`          |
| 今日最高人气       | `%yeehuya_popularity%`                |
| 今日直播时长       | `%yeehuya_today-duration%`            |
| 今日直播时长(单位分钟) | `%yeehuya_today-duration-min%`        |
| 累计直播时长       | `%yeehuya_total-duration%`            |
| 累计直播时长(单位分钟) | `%yeehuya_total-duration-min%`        |
| 玩家数据更新时间     | `%yeehuya_update-time%`               |
| 排名的玩家名       | `%yeehuya_rank_排名%`                   |
| 排名的直播时长      | `%yeehuya_rank-total-duration_排名%`    |
| 玩家的排名        | `%yeehuya_player_玩家名%`                |
| 玩家的累计直播时长    | `%yeehuya_player-total-duration_玩家名%` |
| 排行周期结束时间     | `%yeehuya_next-finish-time%`          |

### 内部变量

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
