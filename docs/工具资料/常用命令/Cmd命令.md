---
title: Cmd命令
createTime: 2026/10/15 11:49:15
permalink: /工具资料/frg4vxfu/
---
## 常用
___
CD命令:
```
跳转到硬盘的根目录
cd \

跳转到当前硬盘的其他文件
cd C:\Program Files\Adobe

跳转到其他硬盘
D:

跳转到其他硬盘的文件夹
cd /d d:\Program Files\Adobe

跳转到上一层目录
cd..
```

扫描修复系统文件:
```
sfc /scannow
```
::: details 点我查看解析
sfc /scannow命令是 Windows 系统文件检查器 的一个组件，它用于扫描所有受保护的系统文件，并替换损坏的文件。
:::

查看目录文件:
```
dir
```
::: tip
更多操作:<br>
dir /?
:::

查看本机ip:
```
ipconfig
```

复制文件:
```
copy 路径\文件名 路径\文件名
```

移动文件:
```
move 路径\文件名 路径\文件名
```

删除文件:
```
del 文件名
```
::: tip
不可以删除文件夹
:::

查看网络连接状态:
```
netstat -ano
```
::: tip
帮助信息:<br>
netstat -help
:::

## 辅助符号或命令
___
**"|" 代表 前一个的输出 被 用于后一个的输入**
```
<!-- 示例: 查找特定ip的网络连接及进程号 -->
netstat -ano|find "192.168.5.1"
```

**">" 重定向输出符号 将输出到cmd的内容,转存到文件中**
```
<!-- 示例: 1.txt的文件内容先被清空，再hello -->
echo hello >c:\1.txt
```

**">>" 重定向输出追加到文件末尾**
```
<!-- 示例: 在1.txt文件末尾加上hello -->
echo hello >>c:\1.txt
```

**"<" 重定向输入符号**
```
<!-- 示例: cmd命令从file读入 -->
cmd < file
```

**"<<" 从命令行读取输入，直到一个与text相同的行结束**
```
cmd << text
```
::: tip
如果使用 <<- 会忽略接下来输入行首的tab
:::

**"<<<" 把word(单词)和后面的换行作为输入提供给cmd**
```
cmd <<< word
```