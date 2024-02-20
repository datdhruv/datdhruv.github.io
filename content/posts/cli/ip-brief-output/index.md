---
title: "Get a Brief of Ip command (with Color)"
date: 2022-12-25 11:25:00 +0400
# description: ""
tags: [cli, linux]
type: post
---

The default `ip addr` command, which gives you ip address of your device, is cluttered with alot of values, which may not be useful to you. To quickly get the output, you can pass the `-br` or `--brief` argument, which outputs a brief of the network statistic.

Additionally you can get color output by passing the `-c` or `--color` argument.

![](ip-brief-output.png)