---
title: Mc命令
createTime: 2026/10/15 11:50:50
permalink: /工具资料/mg04fyn2/
---

目标选择器：
| 全部玩家 | 最近玩家 | 自己 | 随机玩家 | 全部实体 |
| -------- | -------- | -------- | -------- | -------- |
| @a | @p | @s | @r | @e |

模式修改:
```
/gamemode survival
/gamemode creative
/gamemode adventure
/gamemode spectator
```

传送:
```
/tp
/tp A B
```

死亡不掉落:
```
/gamerule keepInventory true
```

给予 / 清除药水状态效果:
```
<!-- 给自己施加 2 级速度，持续 180 秒，不显示粒子 -->
/effect give @s speed 180 2 true
<!-- 给自己施加 1 级速度，持续 999999 秒，不显示粒子 -->
/effect give @s night_vision 999999 0 true
<!-- 清除 -->
/effect clear @s speed
/effect clear @s night_vision
```
| 英文 ID | 中文 |
| -------- | -------- |
| speed | 速度 |
| jump_boost | 跳跃提升 |
| strength | 力量 |
| haste | 急迫 |
| regeneration | 生命恢复 |
| health_boost | 生命提升 |
| absorption | 伤害吸收 |
| resistance | 抗性提升 |
| fire_resistance | 抗火 |
| water_breathing | 水下呼吸 |
| invisibility | 隐身 |
| night_vision | 夜视 |
| saturation | 饱和 |
| slow_falling | 缓降 |
| conduit_power | 潮涌能量 |
| dolphins_grace | 海豚的优雅 |
| luck | 幸运 |
| hero_of_the_village | 村庄英雄 |
| -------- | -------- |
| instant_health | 瞬间治疗 |
| glowing | 发光 |
| darkness | 黑暗 |
| clear | 清除所有效果 |





死亡榜:
```
<!-- 创建计分板目标 -->
/scoreboard objectives add deaths deathCount "死亡榜"
<!-- 设置显示位置 -->
/scoreboard objectives setdisplay sidebar deaths
```

给予自己16个火把:
```
/give @s torch 16
```

设置玩家个人重生点:
```
/spawnpoint @s ~ ~ ~
```

设置世界出生点坐标:
```
/setworldspawn 0 64 0
```

停止昼夜更替:
```
/gamerule advance_time false
```

禁止破坏性生物行为(炸毁方块):
```
/gamerule mob_griefing false
```

禁止TNT爆炸:
```
/gamerule tnt_explodes false
```

禁止玩家互相攻击:
```
/gamerule pvp false
```

定格时间:
```
/gamerule doDaylightCycle false
```

关火焰蔓延:
```
/gamerule doFireTick false
```

冻结所有实体运动:
```
/tick freeze
<!-- 恢复 -->
/tick unfreeze
```