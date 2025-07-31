---
lang: zh-CN
title: 测试 NTP 可用性
---

在 Windows 系统中，可以使用 `w32tm` 命令来测试 `NTP` 服务器是否可用。

1. 打开命令提示符

按 `Win + R`，输入 `cmd`，然后按回车键。

1. 使用 `w32tm` 命令测试 `NTP` 服务器

输入以下命令来检测 `NTP` 服务器是否可用： `w32tm /stripchart /computer:ntp_server_address` 将 `ntp_server_address` 替换为实际的 `NTP` 服务器地址。

## NTP服务器不可用

```bash
C:\Documents and Settings\xws>w32tm /stripchart /computer:172.16.54.216
Tracking 172.16.54.216 [172.16.54.216]
The current time is 2013-10-9 10:41:02 (local time)
10:41:02 error: 0x80072746
10:41:04 error: 0x80072746
10:41:06 error: 0x80072746
10:41:08 error: 0x80072746
^C
C:\Documents and Settings\xws>
```

返回“10:41:02 error: 0x80072746”表示NTP服务器不可用。

## NTP服务器正常

```bash
C:\Documents and Settings\xws>w32tm /stripchart /computer:172.16.54.74
Tracking 172.16.54.74 [172.16.54.74]
The current time is 2013-10-9 10:39:55 (local time)
10:39:55 d:-00.0000433s o:-2220.7617382s [@ | ]
10:39:57 d:-00.0000399s o:-2220.7593686s [@ | ]
10:39:59 d:-00.0000427s o:-2220.7582192s [@ | ]
10:40:01 d:-00.0000442s o:-2220.7566366s [@ | ]
^C
C:\Documents and Settings\xws> 
```

返回“10:39:55 d:-00.0000433s o:-2220.7617382s [@ | ]”表示NTP服务器正常。