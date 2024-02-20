---
title: "Git Credential Manager"
date: 2021-11-26 12:00:00 +0400
description: "Github removed the https login with username password to push/pull code, This is now the official way if you dont want to use ssh-key"
tags: ["git"]
type: post
---

Github removed the https login with username password to push/pull code.

Now you have to generate a personal access token and use that token instead of the password for those operations.

This brings us to git credential manger, you can save the username and password (or the personal access token) with git for https logins, so that you dont have to input it again and again.

 You can do this with

```bash
git config credential.helper store

# or

git config --global credential.helper store

git pull
```

The credentials are then stored in the `.git-crendentials` file in either the home directory or the repo directory.