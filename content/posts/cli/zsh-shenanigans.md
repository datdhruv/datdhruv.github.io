---
title: "ZSH Shenanigans"
description: "Customizations and notes about z-shell"
date: 2022-01-05 12:00:00 +0400
tags: [zsh, cli]
type: post
---

## Aliases

#### Python Aliases
```sh
alias pip='python3 -m pip'
alias python='python3'
alias py='python3'
```

#### ls Alias
Because ls does not automagically add color
```sh
alias ls='ls --color'
```

## Prompt customization
checkout the [sourcefile](https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html#Prompt-Expansion) for more, here I am going to detail the customization that I add.

```sh
export PROMPT=$'%F{green}%B%n%b%f %F{111}%3~%f %(?.%F{green}\U279c%f.%F{009}\U279c%f) '
```

- $ : Required for unicode parsing
- %F....%f is for setting Foreground colors,
- colors specified in {color/color_code} format
- %B....%b for bold text
- %n for username
- %m for machine name (condensed)
- %~ for pwd, but with $HOME prefix,
- 3 for the number of parent dirs to show
- alternatively use %d or %/ for full paths
- \U0000 for unicode
- %(?.if_reu\turn_code_istrue.if_reuturn_code_isfalse)
- Next we have colorized the output for each case (true/false)
- 009 is a brighter, non panicy version of red

## You can invoke the new user install again by running 

```sh
autoload zsh-newuser-install && zsh-newuser-install -f
```

This will add some autocomplete magic and let you set options for history file etc.