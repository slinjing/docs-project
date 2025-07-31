---
lang: zh-CN
title: Windows 服务制作
---
记录 exe 程序做成 Windows 服务过程。


在`Windows`系统中，将一个`exe`程序作为服务运行，可以确保程序在系统启动时自动运行，并且在后台运行而不需要用户干预。以下是两种常见的方法来实现这一目标：使用`Windows`自带的`sc`命令和使用`instsrv + srvany`工具。

## 使用sc命令

打开命令提示符：以管理员身份运行cmd命令行窗口。

创建服务：输入以下命令，其中`myService`为服务名称，`binpath`为`exe`程序的绝对路径。

```bash
sc create myService binpath= "C:\\path\\to\\your\\program.exe"

```

设置服务启动类型：打开系统服务，找到刚创建的服务，右键单击选择“属性”，将启动类型改为“自动”。

启动服务：在命令行中输入以下命令启动服务：

```bash
sc start myService

```

删除服务：如果需要删除服务，可以使用以下命令：

```bash
sc delete myService

```

## 使用instsrv + srvany工具

下载工具：从网上下载`instsrv.exe`和`srvany.exe`工具，并将它们拷贝到`C:\\Windows\\SysWOW64`目录下（如果是32位系统则拷贝到`C:\\Windows\\system32`目录下）。

创建服务：以管理员身份打开cmd，进入到工具所在目录，输入以下命令创建服务：

```bash
instsrv myService C:\\Windows\\SysWOW64\\srvany.exe

```

配置服务： 打开注册表编辑器（在cmd或Windows搜索中输入regedit）。 找到`HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\myService`，右键单击创建一个名为`Parameters`的新项。 在`Parameters`项中创建以下字符串值： `Application：exe`程序的绝对路径。 `AppDirectory：exe`程序所在的文件夹路径。 `AppParameters：`无需设置值。

设置服务启动类型：打开系统服务，找到创建的myService服务，将启动类型设置为“自动”。

通过以上两种方法，可以将任意exe程序作为`Windows`服务运行，确保程序在系统启动时自动运行，并在后台运行而不需要用户干预。