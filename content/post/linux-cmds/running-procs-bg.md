---
title:  "Running oneoff process in the background over ssh"
date:   2023-10-02 18:30:00 +0400
description:    "Sometimes we need to run a longer running process from a remote and logout. nohup provides a way to do this."
categories: [linux, ssh]
---

Imagine a situation where you need to download a large file from the internet to a remote server.

You run `curl https://download.com -o download` and logout of the ssh server. **Big mistake!** you come back hours later just to see that the download ended as soon as you logged out.

The `nohup` command helps here. `nohup` stands for no hold up, and will run the command without any external interruptions. you can further run the command in the background using `&`.

Here's the example:

``` bash
$ nohup curl https://download.com -o download &
```