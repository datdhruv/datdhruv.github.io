---
title:  "Change the time zone data on Linux"
date:   2024-03-01 22:45:00 +0400
description: ""
tags: ["linux", "cli"]
type: post
---

The main step to do here is to configure the **`tzdata`** package

Then choose the appropriate timezone info

---

### Ubuntu

`sudo dpkg-reconfigure tzdata`

![On ubuntu](change-time-zone.png)

---