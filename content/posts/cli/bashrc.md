---
title:  "Bashrc customizations"
date:   2023-03-01 12:00:00 +0400
description: "Make bash look and behave better"
tags: ["ssh"]
type: post
weight: 15
showTableOfContents: true
---

## Bash Prompt

```bash
PS1=$'\[\e[0;1;38;5;111m\]\w \[\e[$(($?==0?92:91))m\]$ \[\e[0m\]'
```

or with a right arrow for supported nerd fonts:

```bash
PS1=$'\[\e[0;1;38;5;111m\]\w \[\e[$(($?==0?92:91))m\]\u279c \[\e[0m\]'
```

- Directory from `home`
- uses a if-else ternary expression $(($?==0?92:91)) that makes the color code 0;91m (red, see color codes) if the last command exits with non-zero, or 0;92m green otherwise.
- `$` prompt

## Case insensitive autocompletion
In order to make bash case-insensitive for to current user:

Run the following shell script in a terminal:

```bash
# If ~/.inputrc doesn't exist yet: First include the original /etc/inputrc
# so it won't get overriden
if [ ! -a ~/.inputrc ]; then echo '$include /etc/inputrc' > ~/.inputrc; fi

# Add shell-option to ~/.inputrc to enable case-insensitive tab completion
echo 'set completion-ignore-case On' >> ~/.inputrc
```

Start a new shell (reopen the terminal).

To Make the changes systemwide:

```bash
# add option to /etc/inputrc to enable case-insensitive tab completion for all users
echo 'set completion-ignore-case On' >> /etc/inputrc
# you may have to use this instead if you are not a superuser:
echo 'set completion-ignore-case On' | sudo tee -a /etc/inputrc
```
