---
title:  "Find Patterns in a directory with grep"
description: "recursive grep-ing"
date:   2023-05-26 22:30:00 +0400
categories: [cli, regex]
weight: 20
---
Recently I had to lookup a usage for function in a project I was working on.

This is relatively an easy task with vscode. You just open the search in files menu, type what you are looking for, and off you go.

This made me wonder, how would you achieve this task in the command line with something like grep?

There is an amazing tool which specializes in this activity: `ripgrep`, however I was determined to complete this task with just grep.

Here's what you do:

``` bash
grep --color -r pattern_to_search
```

This will recursively search for the given pattern in all files in the directory (and the subdiretory)

You can even exclude a directly (like `.git`)

``` bash
grep --color -r --exclude-dir=.git pattern_to_search
```