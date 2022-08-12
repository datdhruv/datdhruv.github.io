---
title: "./ in Linux"
date: 2021-11-1 12:00:00 +0400
description: "why does ./executable work in linux"
categories: linux
---

So, why exactly does `./executable` work in Linux and Unix (and `.\` in windows)?

The `./` translates to: **in the current directory** (dot(.) : this, slash(/) : directory)

Now recall that there is a variable called `$PATH` in all operating system shells.

The role of this variable is to store the path to all the places where system binaries are stored (for eg in `/bin` or `/usr/bin` or `/sbin`)

Also remember that shells can then take these binaries as inputs and directly run them like

```bash
ls
cd
python
chmod
```

When you have an executable that does not exist in this path, and you want to run, what  must you do then? 🧐

`./` ofc!

In this way, we specify the **complete path** to the executable, and hence can run it directly

`.executable` does not work because it is a valid directory name.

`/executable` does not work because it can mean the *root/executable* and hence we **need** `./`