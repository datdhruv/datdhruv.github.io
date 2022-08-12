---
layout: post
title:  "Forget git history"
description: "Sometimes you just want to forget somethings and move forward, and life may not allow you to do that, but git does"
date:   2021-11-14 12:00:00 +0400
categories: git
---

# To remove the git history

```shell
git checkout --orphan tmp # create a temporary branch
git add -A  # Add all files and commit them
git commit -m 'Add files'
git branch -D main # Deletes the master branch
git branch -m main # Rename the current branch to master
git push -f origin main # Force push master branch to Git server
```