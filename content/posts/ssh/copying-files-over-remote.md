---
title: "Copying Files Over a Remote Connection"
date: 2022-09-09 11:25:00 +0400
description: "Using scp and rsync files over to and from a remote server"
tags: ["ssh", "scp", "rsync"]
type: post
showTableOfContents: true
---

# SCP

SCP, or Secure Copy uses SSH to copy files or directories that you select.

Since scp relies on ssh, it is available on the recent builds of windows (that pack ssh by default), mac and ofcourse linux.

You can even copy files over jump or intermediate connections by specifiying the `-o` flag, like this:

```shell
# To copy myfile.txt to /my/dir directory on your remote host
scp -o 'ProxyJump your.jump.host' myfile.txt remote.internal.host:/my/dir
```

Note that with `SSH version 9`, SCP now has a SFTP backend rather than the traditional rcp backend. More details can be found in the [release notes](https://www.openssh.com/txt/release-9.0)

# SFTP

sftp works like scp

# RSYNC

On first use, Rsync copies all files and directories and then it copies only the files and directories that you have changed. It does not copy all the files and directories again.

This command is not available on windows, so the not as cross platform as scp or sftp

This is extremely useful when you want to copy folder which change often, and can be used as a remote backup solution