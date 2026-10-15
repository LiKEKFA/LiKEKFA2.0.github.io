---
title: FastBoot命令
createTime: 2026/10/15 11:50:26
permalink: /工具资料/gkb1suxt/
---

显示fastboot设备:
```
fastboot devices
```

获取手机相关信息:
```
fastboot getvar all
```

重启手机:
```
fastboot reboot
```

重启到bootloader:
```
fastboot reboot-bootloader
```

擦除分区:
```
fastboot erase 分区名
```
::: tip
清除system分区:<br>fastboot erase system
:::

刷入分区:
```
fastboot flash 分区名 分区镜像
```
::: tip
将boot镜像 "boot.img" 刷入boot分区:<br>fastboot flash boot boot.img
:::

引导启动镜像:
```
fastboot boot 分区镜像
```
::: tip
启动到recovery分区:<br>fastboot boot recovery.img
:::

刷入ROM:
```
fastboot update 刷机包
```

解锁Bootloader:
```
fastboot oem unlock
```
::: tip
命令视手机品牌而定
:::