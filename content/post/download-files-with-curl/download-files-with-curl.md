---
layout: post
title:  "Download files with curl"
date:   2021-12-26 20:48:00 +0400
categories: [curl, cli]
---
You can download files with curl, just like with wget, using the flag `-O`

The capital `-O` outputs the file name to be as the same name as the one on the server, but you can also use `-o` (small o), to name the files as you want, like `curl -o filename link-to-file`

These flags are important, because otherwise, curl will dump the output to stdout.