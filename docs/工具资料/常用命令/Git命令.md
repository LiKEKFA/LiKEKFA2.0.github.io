---
title: Git命令
createTime: 2026/10/15 11:49:01
permalink: /工具资料/1f3b5tk0/
---

## 在VSCode中的命令:
___

新项目一条龙:
```
git init
git add .
git commit -m "提交的信息"
git branch -M main
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```
::: details 点我查看解析
```
在当前项目目录初始化本地 Git 仓库，生成 .git 目录
把当前目录下所有文件加入暂存区，准备提交
把暂存区内容提交到本地仓库，并写上提交说明
把当前默认分支重命名为 main，与 GitHub 新仓库默认分支一致
给本地仓库添加一个远程地址，名字叫 origin
把本地 main 分支推到 GitHub，-u 会建立跟踪关系，之后可直接用 git push
```
:::

暂存:
```
<!-- 暂存全部修改 -->
git add .

<!-- 暂存某个文件 -->
git add 文件名
```

提交/将更改保存到本地仓库:
```
git commit -m "提交的信息"
```

分支:
```
<!-- 创建并直接切换到新分支 -->
git checkout -b feature-login

<!-- 仅创建分支,不切换 -->
git branch 新分支名

<!-- 查看本地所有分支 -->
git branch

<!-- 查看本地+远程所有分支 -->
git branch -a

<!-- 切换回主分支 -->
git checkout main

<!-- 切换到已有分支 -->
git checkout 分支名
```

推送:
```

<!-- 首次,main为分支 -->
git remote add origin 所GitHub仓库链接
git push -u origin main

<!-- 非首次 -->
git push
```

拉取:
```
<!-- 拉取当前分支的更新 -->
git pull

<!-- 拉取指定分支的更新到当前分支 -->
git pull origin 远程分支名
```

后悔操作:
```
<!-- 撤销更改 -->
git restore 文件名

<!-- 撤销暂存某个文件 -->
git restore --staged 文件名

<!-- 撤销提交 -->
git reset --soft HEAD^

<!-- 撤销所有提交(回滚到上一版本) -->
git reset --hard HEAD^

<!-- 强行用本地覆盖云端 -->
git push origin main -f
```

## 网络配置相关
___

配置全局用户名和邮箱:
```
git config --global user.name "你的英文昵称"
git config --global user.email "你的邮箱@example.com"
```

设置代理:
```
git config --global http.proxy http://127.0.0.1:7897
git config --global https.proxy http://127.0.0.1:7897
git config --global http.https://github.com.proxy http://127.0.0.1:7897
```

设置代理(SOCKS):
```
git config --global http.proxy socks5://127.0.0.1:7897
git config --global https.proxy socks5://127.0.0.1:7897
git config --global http.https://github.com.proxy socks5://127.0.0.1:7897
git config --global http.https://github.com.proxy socks5h://127.0.0.1:7897
```

取消代理:
```
git config --global --unset http.proxy
git config --global --unset https.proxy
git config --global --unset http.https://github.com.proxy
```

查看:
```
git config --global --get http.proxy
git config --global --get https.proxy
git config --global --get http.https://github.com.proxy

<!-- 查看所有当前生效的代理配置: -->
git config --global --get-regexp proxy

<!-- 查看全局 HTTP 代理 -->
git config --global http.proxy

<!-- 查看针对 GitHub 的代理 -->
git config --global http.https://github.com.proxy
```

测试网络拉取分支:
```
git ls-remote https://github.com/你的github名称/你的仓库
```
