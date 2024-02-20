---
title:  "Laggy SSH-Server connections on Laptops"
description: "The wireless powersaving feature could be the reason"
date:   2021-12-24 20:12:56 +0400
tags: ["ssh", "linux"]
type: post
---
When using a laptop as a server, if the SSH connection is laggy, it may be because of a wireless card’s power-saving feature.

You can turn this feature off by issuing the command

`iw <devname> set power_save off`

You can view the status of iw using the command

`iw <devname> get power_save`

and the device name `<devname>` using the command `ip a`

iw is used to show / manipulate wireless devices and their configuration